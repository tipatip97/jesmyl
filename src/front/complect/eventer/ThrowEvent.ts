import Eventer, { EventerCallback, eventerAlt } from "./Eventer";

type ThrowEventKeyDownKey = 'Escape' | 'Enter';

class ThrowEventClass {
    private keyDownListens: Record<ThrowEventKeyDownKey, EventerCallback<KeyboardEvent>[]> = {
        Escape: [],
        Enter: [],
    };

    private windowEvents: Record<'is' | 'focus', EventerCallback<boolean>[]> = {
        is: [],
        focus: [],
    };

    constructor() {
        window.addEventListener('keydown', (event) => {
            Eventer.invoke(this.keyDownListens, event.code as never, event);
        });

        window.addEventListener('focus', () => {
            Eventer.invoke(this.windowEvents, 'focus', true);
        });
        window.addEventListener('blur', () => {
            Eventer.invoke(this.windowEvents, 'focus', false);
        });

        window.addEventListener('online', () => {
            Eventer.invoke(this.windowEvents, 'is', true);
        });
        window.addEventListener('offline', () => {
            Eventer.invoke(this.windowEvents, 'is', false);
        });
    }

    listenKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
        return Eventer.listen(this.keyDownListens, key, cb as never);
    };

    muteKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
        Eventer.mute(this.keyDownListens, key, cb as never);
    };

    listenIsOnline = (cb: EventerCallback<boolean>) => {
        cb(window.navigator?.onLine, eventerAlt);
        return Eventer.listen(this.windowEvents, 'is', cb);
    };

    muteIsOnline = (cb: EventerCallback<boolean>) => {
        Eventer.mute(this.windowEvents, 'is', cb);
    };

    listenIsWinFocused = (cb: EventerCallback<boolean>) => {
        return Eventer.listen(this.windowEvents, 'focus', cb);
    };

    muteIsWinFocused = (cb: EventerCallback<boolean>) => {
        Eventer.mute(this.windowEvents, 'focus', cb);
    };

}

export const ThrowEvent = new ThrowEventClass();
