import {
    IContent,
    IContentRecommendations,
    IVideos,
    TBelongsToCollection,
    TProductionCompanies,
    TProductionCountries,
    TReviews,
    TSpokenLanguages,
} from './IContent';
import { IGenre } from './IGenre';
import { ICast, ICrew } from './IPerson';

export interface IMovie extends IContent {
    adult: boolean;
    original_title: string;
    release_date: string;
    video: boolean;
}

export interface IMovieRecommendations extends IContentRecommendations {
    results: IMovie[],
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
    tagline: string;
    title: string;
    video: boolean;
    videos: IVideos;
    vote_average: number;
    vote_count: number;
}
