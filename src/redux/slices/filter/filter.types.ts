import { SortOrder, SortParams } from '../../../enums';

export type TSortType = { title: string, param: `${SortParams}.${SortOrder}` };

export interface IFilterSliceState {
    genreIDs: number[];
    searchValue: string;
    sortType: TSortType;
}
