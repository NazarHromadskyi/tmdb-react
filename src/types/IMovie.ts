import { IGenre } from './IGenre';

interface IContent {
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

export interface IMovie extends IContent {
    adult: boolean;
    original_title: string;
    release_date: string;
    video: boolean;
}

export interface ITV extends IContent {
    first_air_date: string;
    origin_country: string[];
    original_name: string;
}

export interface IContentResponse {
    page: number;
    results: IMovie[] | ITV[];
    total_pages: number;
    total_results: number;
}

export type TProductionCountries = { iso3166_1: string, name: string };
export type TSpokenLanguages = { iso_639_1: string, name: string };
export type TProductionCompanies = {
    name: string,
    id: number,
    logo_path: string | undefined,
    origin_country: string
};
export type TBelongsToCollection = {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
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
};

interface IContentRecommendations {
    page: number,
    total_pages: number,
    total_results: number,
}

export interface IMovieRecommendations extends IContentRecommendations {
    results: IMovie[],
}

export interface ITVRecommendations extends IContentRecommendations {
    results: ITV[],
}

interface IPerson {
    adult: boolean;
    gender: number | undefined;
    id: number;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | undefined;
    known_for_department: string;
    credit_id: string;
}

export interface ICast extends IPerson {
    cast_id: number;
    character: string;
    order: number;
}

export interface ICrew extends IPerson {
    department: string;
    job: string;
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
};

interface IVideos {
    id: number;
    results: TVideo[];
}

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string | undefined;
    belongs_to_collection: undefined | TBelongsToCollection;
    budget: number;
    credits: { id: number, cast: ICast[], crew: ICrew[] };
    genres: IGenre[];
    homepage: string | undefined;
    id: number;
    imdb_id: string | undefined;
    name: string;
    original_language: string;
    original_title: string;
    overview: string | undefined;
    popularity: number;
    poster_path: string | undefined;
    production_companies: TProductionCompanies[];
    production_countries: TProductionCountries[];
    recommendations?: IMovieRecommendations;
    release_date: string;
    revenue: number;
    reviews?: TReviews;
    runtime: number | undefined;
    spoken_languages: TSpokenLanguages[];
    status: string;
    tagline: string | undefined;
    title: string;
    video: boolean;
    videos: IVideos;
    vote_average: number;
    vote_count: number;
}

export type TCreatedBy = {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | undefined;
}

export type TLastEpisodeToAir = {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | undefined;
    vote_average: number;
    vote_count: number;
}

export type TNetworks = {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
};

export type TSeasons = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
};

export interface ITVDetails {
    backdrop_path: string | undefined;
    created_by: TCreatedBy[];
    credits: { id: number, cast: ICast[], crew: ICrew[] };
    episode_run_time: number[];
    first_air_date: string;
    genres: IGenre[];
    homepage: string;
    id: number;
    in_production: string;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: TLastEpisodeToAir;
    name: string;
    next_episode_to_air: null;
    networks: TNetworks[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | undefined;
    production_companies: TProductionCompanies[];
    production_countries: TProductionCountries[];
    recommendations: ITVRecommendations;
    seasons: TSeasons[];
    spoken_languages: TSpokenLanguages[];
    status: string;
    tagline: string;
    title: string
    type: string;
    videos: IVideos;
    vote_average: number;
    vote_count: string;
}
