import { contentCategoryEnum } from '../../enums';
import { IMovie, ITV } from '../../types';

export interface IContentCardProps {
    content: IMovie | ITV;
    category: contentCategoryEnum | string | undefined;
    isRemove?: boolean;
}
