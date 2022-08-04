import {
    contentCategory,
    SortOrder,
    SortParams,
} from '../../enums';

export interface IMovieCarousel {
    header: string,
    category: contentCategory,
    sortBy: `${SortParams}.${SortOrder}`,
}
