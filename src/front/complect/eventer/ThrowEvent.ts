import Eventer, { EventerCallback } from "./Eventer";

type ThrowEventKeyDownKey = 'Escape';

class ThrowEventClass {
    private keyDownListens: Record<ThrowEventKeyDownKey, EventerCallback<KeyboardEvent>[]> = {
        Escape: [],
    };

    private isOnlineListens: Record<'is', EventerCallback<boolean>[]> = {
        is: [],
    };

    constructor() {
        window.addEventListener('keydown', (event) => {
            Eventer.invoke(this.keyDownListens, event.code as never, event);
        });

        window.addEventListener('online', () => {
            Eventer.invoke(this.isOnlineListens, 'is', true);
        });
        window.addEventListener('offline', () => {
            Eventer.invoke(this.isOnlineListens, 'is', false);
        });
    }

    listenKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
        return Eventer.listen(this.keyDownListens, key, cb as never);
    };

    muteKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
        Eventer.mute(this.keyDownListens, key, cb as never);
    };

    listenIsOnline = (cb: EventerCallback<boolean>) => {
        return Eventer.listen(this.isOnlineListens, 'is', cb);
    };

    muteIsOnline = (cb: EventerCallback<boolean>) => {
        Eventer.mute(this.isOnlineListens, 'is', cb);
    };

}

export const ThrowEvent = new ThrowEventClass();
