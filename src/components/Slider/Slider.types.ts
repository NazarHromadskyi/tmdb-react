import { IMovie, ITV } from '../../types';

export interface ISlider {
    items: IMovie[] | ITV[];
}

export interface ISliderItem {
    item: IMovie | ITV;
    className: string;
}
