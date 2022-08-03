import React from 'react';

import { ActorCard } from '../ActorCard/ActorCard';
import styles from './CastList.module.scss';
import { ICastList } from './CastList.types';

export const CastList: React.FC<ICastList> = ({ cast }) => (
    <div className={styles.list}>
        <h2>Cast</h2>
        <div className={styles.list__items}>
            {
                cast.slice(0, 6).map((actor) => <ActorCard key={actor.id} {...actor} />)
            }
        </div>
    </div>
);
