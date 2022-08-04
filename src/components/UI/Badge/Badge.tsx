import React from 'react';

import { contentCategory } from '../../../enums';
import { useFetchGenresQuery } from '../../../services';
import { IGenre } from '../../../types';
import styles from './Badge.module.scss';
import { IBadge } from './Badge.types';

export const Badge: React.FC<IBadge> = ({
    children,
    isMatchNeeded = true,
}) => {
    const { data } = useFetchGenresQuery(contentCategory.MOVIE);
    const genres = data?.genres;

    if (isMatchNeeded) {
        const results = genres?.filter((genre: IGenre) => genre.id === children);

        if (results) {
            return (
                <div className={styles.badge}>
                    {results[0]?.name}
                </div>
            );
        }

        return (<div className={styles.badge}>Error 😢</div>);
    }

    if (typeof children !== 'number') {
        return (
            <div className={styles.badge}>
                {children.name}
            </div>
        );
    }

    return (
        <div className={styles.badge}>
            Error 😢
        </div>
    );
};
