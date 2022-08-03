import { IMovie, ITV } from '../../types';

export interface ISlider {
    movies: IMovie[] | ITV[];
}

export interface ISliderItem {
    content: IMovie | ITV;
    className: string;
}
