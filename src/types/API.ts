import { SortOrder, SortParams } from '../enums';
import { IMovie } from './IMovie';
import { ITV } from './ITV';

export interface IGuestSessionResponse {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

export interface IFetchContent {
    category: string | undefined;
    page?: number;
    searchValue?: string;
    sortBy?: `${SortParams}.${SortOrder}`;
    withGenres?: number[];
}

export interface IContentResponse {
    page: number;
    results: IMovie[] | ITV[];
    total_pages: number;
    total_results: number;
}

export interface IFetchDetails {
    category: string | undefined;
    id: string | number | undefined;
}

export interface IFetchRated {
    category: string | number | undefined;
    sortBy?: `${SortParams}.${SortOrder}`;
    page?: number;
}

export interface IRateResponse {
    success: boolean;
    status_code: number;
    status_message: string;
}

export interface IRateContent {
    movieId: number;
    value: number;
    category: string | undefined;
}

export interface IRemoveRated {
    movieId: number;
    category: string | undefined;
}
