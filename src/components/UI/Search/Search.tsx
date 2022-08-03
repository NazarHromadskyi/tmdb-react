import React, { useEffect, useRef, useState } from 'react';

import clearIcon from '../../../assets/icons/cross_icon.svg';
import searchIcon from '../../../assets/icons/search_icon.svg';
import useDebounce from '../../../hooks/useDebounce';
import {
    filterSelector,
    setSearchValue,
    useAppSelector,
    useAppDispatch,
} from '../../../redux';
import styles from './Search.module.scss';

export const Search: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const { searchValue } = useAppSelector(filterSelector);
    const isMounted = useRef(false);

    const dispatchSearchValue = (value: string) => dispatch(setSearchValue(value));
    const debouncedValue = useDebounce(dispatchSearchValue, 500);

    const onChangeInput = (value: string) => {
        setValue(value);
        debouncedValue(value);
    };
    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    useEffect(() => {
        if (!isMounted.current) {
            setValue(searchValue);
        }

        isMounted.current = true;
    }, []);

    return (
        <div className={styles.search}>
            <img className={styles.searchIcon} src={searchIcon} alt="search" />
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => onChangeInput(e.target.value)}
                className={styles.input}
                placeholder="Search..."
            />
            {value && (
                <img
                    className={styles.clearIcon}
                    src={clearIcon}
                    alt="clear"
                    onClick={() => onClickClear()}
                />
            )}
        </div>
    );
};
