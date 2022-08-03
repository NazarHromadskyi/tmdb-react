import { IGenre } from '../../../types';

export interface IBadge {
    isMatchNeeded?: boolean;
    children: IGenre | number,
}
