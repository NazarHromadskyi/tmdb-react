import React from 'react';

import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetchContentQuery } from '../../services';
import { scrollToTop } from '../../utils';
import { MovieCard } from '../MovieCard/MovieCard';
import { Button } from '../UI';
import styles from './MovieCarousel.module.scss';
import '../../scss/swiper/_swiper.scss';
import { IMovieCarousel } from './MovieCarousel.types';

export const MovieCarousel: React.FC<IMovieCarousel> = ({
    header,
    category,
    sortBy,
}) => {
    const { data } = useFetchContentQuery({
        category,
        sortBy,
    });

    return (
        <div className={`${styles.carousel}`}>
            <div className={styles.carousel__header}>
                <h2>{header}</h2>
                <Link to={`/content/${category}`} onClick={() => scrollToTop()}>
                    <Button>Show more</Button>
                </Link>
            </div>
            <Swiper
                spaceBetween={60}
                slidesPerView={6}
                scrollbar={{ draggable: true }}
                modules={[Scrollbar]}
            >
                {
                    data?.results.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard category={category} content={{ ...movie }} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
