import React from 'react';

import styles from './Button.module.scss';
import { IButton } from './Button.types';

export const Button: React.FC<IButton> = ({ children }) => (
    <button
        type="button"
        className={styles.button}
        style={{ '--clr': '#FF4155' } as React.CSSProperties}
    >
        <span>{children}</span>
        <i />
    </button>
);
