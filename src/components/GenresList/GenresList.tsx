import React, { useRef, useState } from 'react';

import { useHandleClickOutside } from '../../hooks';
import {
    filterSelector, resetGenreIDs,
    setGenreIDs,
    useAppDispatch,
    useAppSelector,
} from '../../redux';
import { useFetchGenresQuery } from '../../services';
import { addRemoveFromArray } from '../../utils';
import { IGenresList } from './GenreList.types';
import styles from './GenresList.module.scss';

export const GenresList: React.FC<IGenresList> = ({
    category,
    isAllow = true,
}) => {
    const dispatch = useAppDispatch();
    const genresRef = useRef<HTMLDivElement>(null);
    const { data } = useFetchGenresQuery(category);
    const { genreIDs } = useAppSelector(filterSelector);

    const genresIDsCount = genreIDs.length;
    const [isVisible, setIsVisible] = useState(false);

    const onClickGenre = (id: number) => {
        dispatch(setGenreIDs(addRemoveFromArray(id, [...genreIDs])));
    };

    const onClickReset = () => {
        dispatch(resetGenreIDs());
        setIsVisible(false);
    };

    useHandleClickOutside(genresRef, setIsVisible);

    return (
        <div className={styles.wrapper} ref={genresRef}>
            <div className={isAllow ? `${styles.genres}` : `${styles.notAllow} ${styles.genres}`}>
                <div
                    className={styles.label}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <span
                        className={isVisible || genresIDsCount > 0 ? styles.active : ''}
                    >Choose genres ({genresIDsCount})
                    </span>
                </div>
                {genresIDsCount > 0 && (
                    <div
                        className={styles.reset}
                        onClick={() => onClickReset()}
                    >
                        <span>Reset</span>
                    </div>
                )}
                {isVisible && (
                    <div className={styles.dropdown}>
                        <ul>
                            {
                                data?.genres.map((obj) => (
                                    <li
                                        key={obj.id}
                                        onClick={() => onClickGenre(obj.id)}
                                        className={genreIDs.find((el) => el === obj.id) ? styles.active : ''}
                                    >
                                        {obj.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
