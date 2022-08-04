import React from 'react';

import styles from '../../../pages/ContentDetails/ContentDetails.module.scss';
import { IInfoField } from './InfoField.types';

export const InfoField: React.FC<IInfoField> = ({
    title,
    value,
    arr,
    field,
}) => {
    const UNKNOWN = 'unknown';

    if (value === 0 || !value) {
        value = UNKNOWN;
    }

    value = value.toLocaleString('uk');

    if (arr && arr.length > 0) {
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

    if (arr && arr.length === 0) {
        return (
            <p>
                <span className={styles.fieldTitle}>{title}: </span>
                <span>{UNKNOWN}</span>
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
