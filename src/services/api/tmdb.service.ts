import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL } from '../../constants';
import {
    IContentResponse,
    IFetchContentQuery,
    IFetchDetailsQuery,
    IFetchRated,
    IGenre,
    IGuestSessionResponse,
    IMovieDetails,
    IRateResponse,
    ITVDetails,
} from '../../types';
import { isSessionExpired } from '../../utils';
import { getGuestSessionId, getLastActivity } from './createGuestSession';

const LANGUAGE = 'en';

const GUEST_SESSION_ID = getGuestSessionId();
const LAST_ACTIVITY = getLastActivity();

console.log(GUEST_SESSION_ID);
console.log(LAST_ACTIVITY, 'tmbs');
console.log(isSessionExpired(LAST_ACTIVITY as string));

const VOTE_COUNT_GTE = 'vote_count.gte';

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Movies'],
    endpoints: (build) => ({
        createGuestSession: build.query<IGuestSessionResponse, void>({
            query: () => ({
                url: '/authentication/guest_session/new',
                params: {
                    api_key: API_KEY,
                },
            }),
        }),
        fetchContent: build.query<IContentResponse, IFetchContentQuery>({
            query: ({
                category, page, searchValue, sortBy, withGenres,
            }) => ({
                url: searchValue ? `/search/${category}` : `/discover/${category}`,
                params: {
                    page,
                    api_key: API_KEY,
                    query: searchValue,
                    language: LANGUAGE,
                    sort_by: sortBy || 'vote_average.desc',
                    [VOTE_COUNT_GTE]: 1000,
                    with_genres: withGenres,
                },
            }),
            keepUnusedDataFor: 180,
        }),
        fetchContentDetails: build.query<IMovieDetails | ITVDetails, IFetchDetailsQuery>({
            query: ({ category, id }) => ({
                url: `/${category}/${id}`,
                params: {
                    api_key: API_KEY,
                    append_to_response: 'videos,credits,recommendations',
                    language: LANGUAGE,
                },
            }),
        }),
        fetchGenres: build.query<{ genres: IGenre[] }, string>({
            query: (category) => ({
                url: `/genre/${category}/list`,
                params: {
                    api_key: API_KEY,
                    language: LANGUAGE,
                },
            }),
            keepUnusedDataFor: 3600,
        }),
        fetchRated: build.query<IContentResponse, IFetchRated>({
            query: ({ page, sortBy, category }) => ({
                url: `/guest_session/${GUEST_SESSION_ID}/rated/${category}`,
                params: {
                    api_key: API_KEY,
                    page: page || 1,
                    sort_by: sortBy || 'created_at.asc',
                    language: LANGUAGE,
                },
            }),
            providesTags: (result) => (result
                ? [
                    ...result.results.map(({ id }) => ({ type: 'Movies', id } as const)),
                    { type: 'Movies', id: 'LIST' },
                ]
                : [{ type: 'Movies', id: 'LIST' }]),
        }),
        rateContent: build.mutation<IRateResponse,
            { movieId: number, value: number, category: string | undefined }>({
                query: ({ value, movieId, category }) => ({
                    url: `/${category}/${movieId}/rating`,
                    method: 'POST',
                    body: { value },
                    params: {
                        api_key: API_KEY,
                        guest_session_id: GUEST_SESSION_ID,
                    },
                }),
                invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
            }),
        removeRatedContent: build.mutation<IRateResponse, { movieId: number, category: string | undefined }>({
            query: ({ movieId, category }) => ({
                url: `/${category}/${movieId}/rating`,
                method: 'DELETE',
                params: {
                    api_key: API_KEY,
                    guest_session_id: GUEST_SESSION_ID,
                },
            }),
            invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
        }),
    }),
});

export const {
    useLazyCreateGuestSessionQuery,
    useFetchGenresQuery,
    useFetchContentQuery,
    useFetchContentDetailsQuery,
    useFetchRatedQuery,
    useRateContentMutation,
    useRemoveRatedContentMutation,
} = tmdbApi;
