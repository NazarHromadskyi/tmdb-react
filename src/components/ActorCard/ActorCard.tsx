import React from 'react';

import { ICast } from '../../types';
import { Image } from '../UI';
import styles from './ActorCard.module.scss';

export const ActorCard: React.FC<ICast> = ({
    name,
    character,
    profile_path,
}) => (
    <div className={styles.card}>
        <Image path={profile_path} alt={name} />
        <div className={styles.card__text}>
            <p className={styles.card__text__name}>{name}</p>
            <p className={styles.card__text__character}>{character}</p>
        </div>
    </div>
);
