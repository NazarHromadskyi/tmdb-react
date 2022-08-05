import React, { memo } from 'react';

import noImage from '../../../assets/icons/no_image.svg';
import { IMAGE_BASE_URL } from '../../../constants';
import styles from './Image.module.scss';
import { IImage } from './Image.types';

export const Image: React.FC<IImage> = memo(({
    path,
    alt,
    width = 'w500',
    baseUrl = IMAGE_BASE_URL,
    isSliderItem = false,
}) => {
    const imageUrl = `${baseUrl}${width}/${path}`;

    return (
        <div className={isSliderItem ? '' : styles.image}>
            {path ? (
                <img src={imageUrl} alt={alt} />
            ) : (
                <img className={styles.filterWhite} src={noImage} alt="Not found" />
            )}
        </div>
    );
});
