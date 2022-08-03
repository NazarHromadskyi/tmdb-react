import { TSortType } from '../../../redux';

export interface ISort {
    sortType: TSortType;
    isAllow?: boolean;
    category: string | undefined;
}
