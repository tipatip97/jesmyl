
type ThrowEventKey = 'Escape';

const theIdleMark = ['THE IDLE CALLBACK'] as const;

type ThrowEventCallback = ((event: KeyboardEvent, idleMark: typeof theIdleMark) => void | typeof theIdleMark);

class ThrowEventClass {
    keyDownListens: Record<ThrowEventKey, ThrowEventCallback[]> = {
        Escape: [],
    };

    constructor() {
        window.addEventListener('keydown', (event) => {
            const listeners: ThrowEventCallback[] = this.keyDownListens[event.code as never];
            if (listeners) {
                for (let i = 0; i < listeners.length; i++) {
                    const cb = listeners[i];
                    const result = cb(event, theIdleMark);
                    if (result !== theIdleMark) break;
                }
            }
        });
    }
    listenKeyDown = (key: ThrowEventKey, cb: ThrowEventCallback) => {
        this.keyDownListens[key].unshift(cb);
        return () => this.muteKeyDown(key, cb);
    };

    muteKeyDown = (key: ThrowEventKey, cb: ThrowEventCallback) => {
        const index = this.keyDownListens[key].indexOf(cb);
        this.keyDownListens[key].splice(index, 1);
    };
}

export const ThrowEvent = new ThrowEventClass();
