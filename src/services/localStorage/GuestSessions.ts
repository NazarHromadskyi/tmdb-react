import { Storage } from './Storage';

enum Locals {
    GUEST_SESSION_ID = 'guest_session_id',
    LAST_ACTIVITY = 'last_activity',
}

export class GuestSession extends Storage<Locals> {
    // eslint-disable-next-line no-use-before-define
    private static instance?: GuestSession;

    private constructor() {
        super();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new GuestSession();
        }

        return this.instance;
    }

    public getId() {
        return this.get(Locals.GUEST_SESSION_ID);
    }

    public setId(guest_session_id: string) {
        this.set(Locals.GUEST_SESSION_ID, guest_session_id);
    }

    public getLastActivity() {
        return this.get(Locals.LAST_ACTIVITY);
    }

    public setLastActivity(lastActivity: string) {
        this.set(Locals.LAST_ACTIVITY, lastActivity);
    }

    public clear() {
        this.clearItems([Locals.LAST_ACTIVITY, Locals.GUEST_SESSION_ID]);
    }
}
