import {
    contentCategoryEnum,
    movieListHeaderEnum,
    SortOrder,
    SortParamsEnum,
} from '../../enums';

export interface IMovieCarousel {
    header: movieListHeaderEnum,
    category: contentCategoryEnum,
    sortBy: `${SortParamsEnum}.${SortOrder}`,
}
