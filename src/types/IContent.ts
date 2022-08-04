export interface IContent {
    backdrop_path: string | undefined;
    genre_ids: number[];
    id: number;
    original_language: string;
    title: string;
    name: string;
    popularity: number;
    poster_path: string | undefined;
    overview: string;
    rating?: number;
    vote_average: number;
    vote_count: number;
}

export interface IContentRecommendations {
    page: number,
    total_pages: number,
    total_results: number,
}

type TVideo = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: string;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface IVideos {
    id: number;
    results: TVideo[];
}

export type TReviews = {
    author: string,
    author_details: {
        name: string,
        username: string,
        avatar_path: string | undefined,
        rating: number | undefined
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
}

export type TBelongsToCollection = {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}

export type TProductionCountries = { iso3166_1: string, name: string };

export type TSpokenLanguages = { iso_639_1: string, name: string };

export type TProductionCompanies = {
    name: string,
    id: number,
    logo_path: string | undefined,
    origin_country: string
}
