import { IMovie, ITV } from '../../types';

export interface IContentCardProps {
    content: IMovie | ITV;
    category: string | undefined;
    isRemove?: boolean;
}
