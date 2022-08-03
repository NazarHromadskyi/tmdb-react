import { IMovie, ITV } from '../../types';

export interface ICatalog {
    content?: IMovie[] | ITV[] | undefined;
    category: string | undefined;
    isCardRemove?: boolean
}
