import React, { Dispatch, useEffect } from 'react';

export function useHandleClickOutside(
    ref: React.RefObject<HTMLDivElement>,
    visibleSetter: Dispatch<boolean>,
    messageSetter?: Dispatch<boolean>,
) {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !e.composedPath()
                .includes(ref.current)) {
                visibleSetter(false);
                if (messageSetter) messageSetter(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);
}
