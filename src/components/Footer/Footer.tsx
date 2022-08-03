import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.content__left}>
                <div className={styles.logo}>
                    <span>TMDB</span>
                    <div className={styles.delimiter} />
                </div>
                <div className={styles.links}>
                    <span>Home</span>
                    <span>Movies</span>
                    <span>TV Series</span>
                </div>
            </div>
            <div className={styles.content__right}>
                <span>logo 1</span>
                <span>logo 2</span>
            </div>
        </div>
    </footer>
);
