import React from 'react';

import { Link } from 'react-router-dom';

import { IMAGE_BASE_URL } from '../../constants';
import { contentCategory } from '../../enums';
import { useFetchGenresQuery } from '../../services';
import {
    Badge,
    Button,
    Image,
} from '../UI';
import { ISliderItem } from './Slider.types';
import styles from './SliderItem.module.scss';

export const SliderItem: React.FC<ISliderItem> = ({
    className,
    item,
}) => {
    const {
        id,
        backdrop_path,
        title,
        overview,
        poster_path,
        genre_ids,
    } = item;
    const background = `${IMAGE_BASE_URL}original/${backdrop_path}`;
    const { data } = useFetchGenresQuery(contentCategory.MOVIE);
    const isGenres = data?.genres && data?.genres.length > 0;

    return (
        <div
            className={`${styles.sliderItem} ${className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.description}>
                        <div className={styles.overview}>
                            <div className={styles.top}>
                                {overview}
                                {isGenres && (
                                    <div className={styles.genres}>
                                        {
                                            genre_ids?.map((genreId) => (
                                                <Badge key={genreId}>{genreId}</Badge>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                            <div className={styles.bottom}>
                                <Link to={`/content/movie/${id}`}>
                                    <Button>More details</Button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.poster}>
                            <Image
                                path={poster_path}
                                alt={title}
                                width="w342"
                                isSliderItem
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
