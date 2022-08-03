import { useGuestSession } from '../../hooks';
import { dateNow, isSessionExpired } from '../../utils';
import { GuestSession } from '../localStorage';

const guestSession = GuestSession.getInstance();

export const getGuestSessionId = () => guestSession.getId();
export const getLastActivity = () => guestSession.getLastActivity();
export const setLastActivity = () => guestSession.setLastActivity(dateNow());

export const createGuestSession = () => {
    if (isSessionExpired(getLastActivity() as string)) {
        const { data } = useGuestSession();

        if (data) {
            guestSession.setId(data.guest_session_id);
            guestSession.setLastActivity(dateNow());
        }
    }
};
