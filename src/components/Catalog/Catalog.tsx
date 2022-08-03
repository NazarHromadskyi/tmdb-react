import React from 'react';

import { MovieCard } from '../MovieCard/MovieCard';
import styles from './Catalog.module.scss';
import { ICatalog } from './Catalog.types';

export const Catalog: React.FC<ICatalog> = ({
    content,
    category,
    isCardRemove,
}) => (
    <div className={`${styles.catalog}`}>
        <div className={styles.items}>
            {
                content?.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        category={category}
                        isRemove={isCardRemove}
                        content={{ ...movie }}
                    />
                ))
            }
        </div>
    </div>
);
