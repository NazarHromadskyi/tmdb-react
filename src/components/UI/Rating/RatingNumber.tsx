import React from 'react';

import { IRating } from './Rating.types';
import styles from './RatingNumber.module.scss';

export const RatingNumber: React.FC<IRating> = ({ rating }) => {
    let ratingColor = '';

    if (rating) {
        // eslint-disable-next-line default-case
        switch (true) {
        case (rating >= 7):
            ratingColor = styles.green;
            break;
        case (rating < 7 && rating >= 4):
            ratingColor = styles.yellow;
            break;
        case (rating < 4):
            ratingColor = styles.red;
            break;
        case (rating === 0):
            ratingColor = styles.default;
        }
    }

    return (
        <span className={ratingColor}>
            {rating ? rating.toFixed(1) : 'N/A'}
        </span>
    );
};
