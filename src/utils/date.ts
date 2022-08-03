import { GUEST_SESSION_LIFETIME } from '../constants';

const milisecToHours = 36e5; // 60*60*1000

export const dateNow = () => new Date().toString();

export const isSessionExpired = (lastActivity: string) => {
    const normalizedDate = new Date(lastActivity).getTime();
    const now = new Date().getTime();
    const hours = Math.abs(normalizedDate - now) / milisecToHours;
    console.log(hours);
    return hours > GUEST_SESSION_LIFETIME;
};
