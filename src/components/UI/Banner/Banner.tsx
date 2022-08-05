import React, { memo } from 'react';

import bannerPlaceholder from '../../../assets/images/banner-placeholder.jpg';
import { IMAGE_BASE_URL } from '../../../constants';
import styles from './Banner.module.scss';
import { IBanner } from './Banner.types';

export const Banner: React.FC<IBanner> = memo(({
    path,
    width = 'original',
}) => (
    path ? (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${IMAGE_BASE_URL}${width}${path})` }}
        />
    ) : (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${bannerPlaceholder})` }}
        />
    )
));
