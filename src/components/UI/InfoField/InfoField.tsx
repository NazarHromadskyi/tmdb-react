import React from 'react';

import styles from '../../../pages/MovieDetails/MovieDetails.module.scss';
import { IInfoField } from './InfoField.types';

export const InfoField: React.FC<IInfoField> = ({
    title,
    value,
    arr,
    field,
}) => {
    if (value === 0 || !value) {
        value = 'unknown';
    }

    value = value.toLocaleString('uk');

    if (arr) {
        return (
            <p>
                <span className={styles.fieldTitle}>{title}: </span>
                {arr.slice(0, 3)
                    .map((fieldValue, index) => (
                        <span key={index}>
                            {field && (fieldValue as any)[field]}
                            {index < arr?.slice(0, 3).length - 1 ? ', ' : ''}
                        </span>
                    ))}
            </p>
        );
    }

    return (
        <p>
            <span className={styles.fieldTitle}>{title}: </span>
            {value}
        </p>
    );
};
