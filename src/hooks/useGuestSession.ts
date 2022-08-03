import { useEffect } from 'react';

import { useLazyCreateGuestSessionQuery } from '../services';

export function useGuestSession() {
    const [trigger, { data }] = useLazyCreateGuestSessionQuery();

    useEffect(() => {
        trigger();
    }, []);

    return { data };
}
