import {
    IContent,
    IContentRecommendations,
    IVideos,
    TProductionCompanies,
    TProductionCountries,
    TSpokenLanguages,
} from './IContent';
import { IGenre } from './IGenre';
import { ICast, ICrew } from './IPerson';

export interface ITV extends IContent {
    first_air_date: string;
    origin_country: string[];
    original_name: string;
}

export interface ITVRecommendations extends IContentRecommendations {
    results: ITV[],
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
