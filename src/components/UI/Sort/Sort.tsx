import React, { memo, useRef, useState } from 'react';

import { useHandleClickOutside } from '../../../hooks';
import { setSortType, TSortType, useAppDispatch } from '../../../redux';
import { getSortByCategory, getSortObj, scrollToTop } from '../../../utils';
import styles from './Sort.module.scss';
import { ISort } from './Sort.types';

export const Sort: React.FC<ISort> = memo(({
    category,
    sortType,
    isAllow = true,
}) => {
    const dispatch = useAppDispatch();
    const sortRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isShowMessage, setIsShowMessage] = useState(false);

    const sortParams = getSortByCategory(category);
    const sortTypes = getSortObj(sortParams) as TSortType[];

    const onClickSort = (obj: TSortType) => {
        dispatch(setSortType(obj));
        setIsVisible(false);
        scrollToTop();
    };

    useHandleClickOutside(sortRef, setIsVisible, setIsShowMessage);

    return (
        <div className={styles.wrapper} ref={sortRef}>
            <div className={isAllow ? styles.sort : `${styles.notAllow} ${styles.sort}`}>
                <div className={styles.label}>
                    <b>Sort by:</b>
                    <span onClick={() => setIsVisible(!isVisible)}>{sortType.title}</span>
                </div>
                {isVisible && (
                    <div className={styles.dropdown}>
                        <ul>
                            {
                                sortTypes.map((obj) => (
                                    <li
                                        key={obj.param}
                                        onClick={() => onClickSort(obj)}
                                        className={sortType.param === obj.param ? styles.active : ''}
                                    >
                                        {obj.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
            {!isAllow && (
                <div
                    className={isAllow ? styles.info : `${styles.info} ${styles.show}`}
                    onClick={() => setIsShowMessage(!isShowMessage)}
                >
                    <span>i</span>
                    {isShowMessage && (
                        <div className={styles.message}>
                            <a
                                target="_blank"
                                href="https://developers.themoviedb.org/3/discover/movie-discover"
                                rel="noreferrer"
                            >
                                <p>
                                    Unfortunately, the TMDB API <b>&apos;/discover&apos;</b> route
                                    doesn&apos;t allow searching by text value and sorting
                                    by params at the same time.
                                </p>
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
});
