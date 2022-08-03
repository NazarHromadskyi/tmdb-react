import React from 'react';

import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { IPagination } from './Pagination.types';

export const Pagination: React.FC<IPagination> = ({
    currentPage,
    onChangePage,
    totalPages,
}) => {
    const normalizedCount = totalPages <= 500 ? totalPages : 500; // api requirement

    return (
        <ReactPaginate
            forcePage={currentPage - 1}
            className={styles.pagination}
            pageCount={normalizedCount}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={2}
            previousLabel="<"
            renderOnZeroPageCount={() => null}
        />
    );
};
