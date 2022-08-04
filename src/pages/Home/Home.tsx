import React, { useEffect } from 'react';

import { Loader, MovieCarousel, Slider } from '../../components';
import {
    contentCategory,
    SortParams,
    SortOrder,
} from '../../enums';
import { useFetchContentQuery } from '../../services';
import { scrollToTop } from '../../utils';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    const { data, isFetching } = useFetchContentQuery({
        category: contentCategory.MOVIE,
        sortBy: `${SortParams.POPULARITY}.${SortOrder.DESC}`,
    });

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            {isFetching ? <Loader /> : (
                <>
                    {data && <Slider items={data.results.slice(0, 5)} />}
                    <div className={styles.content}>
                        <MovieCarousel
                            sortBy={`${SortParams.POPULARITY}.${SortOrder.DESC}`}
                            header="Popular movies"
                            category={contentCategory.MOVIE}
                        />
                        <MovieCarousel
                            sortBy={`${SortParams.POPULARITY}.${SortOrder.DESC}`}
                            header="Top rated TV Series"
                            category={contentCategory.TV}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
