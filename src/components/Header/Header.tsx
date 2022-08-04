import React, { useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/icons/clapperboard.png';
import { scrollToTop } from '../../utils';
import styles from './Header.module.scss';
import { headerNavbar } from './Header.navbar';

export const Header: React.FC = () => {
    const { pathname } = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);

    const active = headerNavbar.findIndex((el) => el.path === pathname);

    const shrinkHeader = () => {
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            headerRef.current?.classList.add('shrink');
        } else {
            headerRef.current?.classList.remove('shrink');
        }
    };

    useEffect(() => {
        shrinkHeader();
        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.header__wrapper}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        TMDB
                    </Link>
                </div>
                <ul className={styles.header__nav}>
                    {
                        headerNavbar.map((el, index) => (
                            <li
                                className={`${index === active ? styles.active : ''}`}
                                key={index}
                                onClick={() => scrollToTop()}
                            >
                                <Link to={el.path}>
                                    {el.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    );
};
