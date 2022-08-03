import { SortParamsEnum } from '../enums';

const {
    POPULARITY, REVENUE, RELEASE_DATE, VOTE_AVERAGE, CREATED_AT, FIRST_AIR_DATE,
} = SortParamsEnum;

const movieSortParams = [POPULARITY, VOTE_AVERAGE, RELEASE_DATE, REVENUE];
const tvSortParams = [POPULARITY, VOTE_AVERAGE, FIRST_AIR_DATE];
const rateListSortParams = [CREATED_AT];

export function getSortByCategory(category: string | undefined) {
    let sortParams = movieSortParams;

    switch (category) {
    case ('movie'):
        sortParams = movieSortParams;
        break;
    case ('tv'):
        sortParams = tvSortParams;
        break;
    case ('rateList'):
        sortParams = rateListSortParams;
        break;
    default:
        sortParams = rateListSortParams;
    }

    return sortParams;
}
