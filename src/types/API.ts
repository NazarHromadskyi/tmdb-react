import { SortOrder, SortParamsEnum } from '../enums';

export interface IGuestSessionResponse {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

export interface IFetchContentQuery {
    category: string | undefined,
    page?: number,
    searchValue?: string,
    sortBy?: `${SortParamsEnum}.${SortOrder}`,
    withGenres?: number[];
}

export interface IFetchDetailsQuery {
    category: string | undefined,
    id: string | number | undefined,
}

export interface IFetchRated {
    category: string | number | undefined;
    sortBy?: `${SortParamsEnum}.${SortOrder}`;
    page?: number;
}

export interface IRateResponse {
    success: boolean;
    status_code: number;
    status_message: string;
}
