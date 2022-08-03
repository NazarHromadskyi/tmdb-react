export interface IRating {
    rating: number;
}

export interface IRatingStar {
    movieId: number;
    category: string | undefined;
    vote_average: number;
    vote_count: number | string;
}
