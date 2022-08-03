import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import {
    Banner,
    Catalog, GenresList,
    Loader,
    NoContent,
    Pagination,
    Search,
    Sort,
} from '../../components';
import {
    filterSelector,
    resetGenreIDs,
    useAppDispatch,
    useAppSelector,
} from '../../redux';
import { useFetchContentQuery } from '../../services';
import { scrollToTop } from '../../utils';
import styles from './ContentList.module.scss';

export const ContentList = () => {
    const dispatch = useAppDispatch();
    const { category } = useParams();
    const { searchValue, sortType, genreIDs } = useAppSelector(filterSelector);
    const isFiltersAllow = !searchValue;
    const [currentPage, setCurrentPage] = useState(1);

    const onChangePage = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    const { data, isFetching } = useFetchContentQuery({
        category,
        searchValue,
        page: currentPage,
        sortBy: sortType.param,
        withGenres: genreIDs,
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [searchValue]);

    useEffect(() => {
        dispatch(resetGenreIDs());
    }, [category]);

    const isContent = data && data.results.length > 0;
    const content = isContent ? <Catalog category={category} content={data?.results} /> : <NoContent />;

    return (
        <div className={styles.contentList}>
            <Banner />
            <div className={styles.content}>
                <div className={styles.panel}>
                    <GenresList category={category as string} isAllow={isFiltersAllow} />
                    <div className={styles.right}>
                        <Search />
                        <Sort
                            category={category}
                            isAllow={isFiltersAllow}
                            sortType={sortType}
                        />
                    </div>
                </div>
                {isFetching ? <Loader /> : content}
                <div className={styles.pagination}>
                    {isContent && (
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
