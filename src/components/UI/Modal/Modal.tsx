import React, { useEffect } from 'react';

import { bodyOverflow } from '../../../utils';
import styles from './Modal.module.scss';
import { IModal } from './Modal.types';

export const Modal: React.FC<IModal> = ({
    isActive,
    setIsActive,
    children,
}) => {
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isActive ? bodyOverflow('hidden') : bodyOverflow('visible');

        return () => {
            bodyOverflow('visible');
        };
    }, [isActive]);

    return (
        <div
            className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}
            onClick={() => setIsActive(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
