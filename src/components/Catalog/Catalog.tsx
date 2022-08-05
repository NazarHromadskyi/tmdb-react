import React, { memo } from 'react';

import { ContentCard } from '../MovieCard/ContentCard';
import styles from './Catalog.module.scss';
import { ICatalog } from './Catalog.types';

export const Catalog: React.FC<ICatalog> = memo(({
    content,
    category,
    isCardRemove,
}) => (
    <div className={`${styles.catalog}`}>
        <div className={styles.items}>
            {
                content?.map((movie) => (
                    <ContentCard
                        key={movie.id}
                        category={category}
                        isRemove={isCardRemove}
                        content={{ ...movie }}
                    />
                ))
            }
        </div>
    </div>
));
