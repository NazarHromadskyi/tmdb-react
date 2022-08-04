import React from 'react';

import { Link } from 'react-router-dom';

import basket from '../../assets/icons/basket_icon.svg';
import { useRemoveRatedContentMutation } from '../../services';
import { RatingNumber, Image } from '../UI';
import styles from './MovieCard.module.scss';
import { IContentCardProps } from './MovieCard.types';

export const MovieCard: React.FC<IContentCardProps> = ({
    content,
    category,
    isRemove,
}) => {
    const {
        id,
        title,
        name,
        poster_path,
        vote_average,
        rating,
    } = content;

    if (category === 'movies') category = 'movie';
    const [removeItem] = useRemoveRatedContentMutation();

    const handleClick = async () => {
        await removeItem({
            category,
            movieId: id,
        });
    };

    return (
        <div className={styles.root}>
            {isRemove && (
                <div className={styles.removeBtn}>
                    <button
                        type="button"
                        onClick={() => handleClick()}
                    >
                        <img src={basket} alt="basket button" />
                    </button>
                </div>
            )}
            <Link to={`/content/${category}/${id}`}>
                <Image path={poster_path} alt={title} />
                <div className={styles.title}>
                    <p>{title || name}</p>
                    <div>
                        <RatingNumber rating={vote_average} />
                        {rating && (
                            <span style={{ fontStyle: 'italic' }}>
                                (<RatingNumber rating={rating} />)
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};
