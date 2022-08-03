import { useCallback, useRef } from 'react';

// @ts-ignore todo
export default function useDebounce(callback, delay) {
    const timerRef = useRef();

    // @ts-ignore
    const debouncedCallback = useCallback((...args) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // @ts-ignore
        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
}
