import { TProductionCompanies, TProductionCountries, TSpokenLanguages } from '../../../types';

export interface IInfoField {
    title: string;
    value?: string | number;
    arr?: TProductionCountries[] | TSpokenLanguages[] | TProductionCompanies[] | number[];
    field?: string;
}
