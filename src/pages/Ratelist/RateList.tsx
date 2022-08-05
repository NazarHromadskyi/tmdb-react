import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import {
    Banner,
    Catalog,
    Loader,
    NoContent,
    Pagination,
    Sort,
} from '../../components';
import { filterSelector, useAppSelector } from '../../redux';
import { useFetchRatedQuery } from '../../services';
import { scrollToTop } from '../../utils';
import styles from './RateList.module.scss';

const RateList: React.FC = () => {
    const isCardRemove = true;
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const { sortType } = useAppSelector(filterSelector);
    const { data, isFetching } = useFetchRatedQuery({
        category,
        page: currentPage,
        sortBy: sortType.param,
    });

    const onChangePage = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    const isData = data && data.results.length > 0;
    const content = isData
        ? (
            <Catalog isCardRemove={isCardRemove} category={category} content={data?.results} />
        ) : (
            <NoContent />
        );

    return (
        <div className={styles.watchlist}>
            <Banner />
            <div className={styles.items}>
                <div className={styles.panel}>
                    <div className={styles.links}>
                        <Link to="/rated/movies">
                            <span
                                className={category === 'movies' ? `${styles.active}` : ''}
                            >
                                Movies
                            </span>
                        </Link>
                        <div className={styles.delimiter} />
                        <Link to="/rated/tv">
                            <span
                                className={category === 'tv' ? `${styles.active}` : ''}
                            >
                                TV Series
                            </span>
                        </Link>
                    </div>
                    <Sort sortType={sortType} category="rateList" />
                </div>
                {isFetching ? <Loader /> : content}
                <div className={styles.pagination}>
                    {isData && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={data?.total_pages}
                            onChangePage={(page: number) => onChangePage(page)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RateList;
