import React, { useState } from 'react';

import { useRateContentMutation } from '../../../services';
import { IRatingStar } from './Rating.types';
import styles from './RatingStarr.module.scss';

export const RatingStar: React.FC<IRatingStar> = ({
    movieId,
    category,
    vote_average,
    vote_count,
}) => {
    const [rating, setRating] = useState(vote_average || 0);
    const [hover, setHover] = useState(0);

    const [rateContent] = useRateContentMutation();

    const onClick = async (index: number) => {
        setRating(index);
        await rateContent({
            value: index,
            category,
            movieId,
        });
    };

    return (
        <div className={styles.ratingBar}>
            <div className={styles.stars}>
                {
                    [...Array(10)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                onClick={() => onClick(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span
                                    className={index <= (hover || rating) ? styles.on : styles.off}
                                >&#9733;
                                </span>
                            </button>
                        );
                    })
                }
            </div>
            <div className={styles.votes}>
                {vote_count}
            </div>
        </div>
    );
};
