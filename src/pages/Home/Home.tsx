import React, { useEffect } from 'react';

import { Loader, MovieCarousel, Slider } from '../../components';
import {
    contentCategoryEnum,
    movieListHeaderEnum,
    SortParamsEnum,
    SortOrder,
} from '../../enums';
import { useFetchContentQuery } from '../../services';
import { scrollToTop } from '../../utils';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    const { data, isFetching } = useFetchContentQuery({
        category: contentCategoryEnum.MOVIE,
        sortBy: `${SortParamsEnum.POPULARITY}.${SortOrder.DESC}`,
    });

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            {isFetching ? <Loader /> : (
                <>
                    {data && <Slider movies={data.results.slice(0, 5)} />}
                    <div className={styles.content}>
                        <MovieCarousel
                            sortBy={`${SortParamsEnum.POPULARITY}.${SortOrder.DESC}`}
                            header={movieListHeaderEnum.POPULAR}
                            category={contentCategoryEnum.MOVIE}
                        />
                        <MovieCarousel
                            sortBy={`${SortParamsEnum.POPULARITY}.${SortOrder.DESC}`}
                            header={movieListHeaderEnum.TOP_RATED}
                            category={contentCategoryEnum.TV}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
