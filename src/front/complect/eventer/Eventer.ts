export const theIdleMark = ['THE IDLE CALLBACK: ' + Date.now()] as const;
export type EventerCallback<Ev> = ((event: Ev, idleMark: typeof theIdleMark) => void | typeof theIdleMark);
export type EventerListeners<Key extends string = string, Ev extends any = any> = Record<Key, EventerCallback<Ev>[]>;

export default class Eventer {
    static listen = <
        Lis extends EventerListeners,
        Key extends Lis extends EventerListeners<infer K> ? K : never,
        Ev extends Lis extends EventerListeners<Key, infer E> ? E : never
    >(listeners: Lis, key: Key, cb: EventerCallback<Ev>) => {
        listeners[key].unshift(cb);
        return () => this.mute(listeners, key, cb);
    };

    static mute = <
        Lis extends EventerListeners,
        Key extends Lis extends EventerListeners<infer K> ? K : never,
        Ev extends Lis extends EventerListeners<Key, infer E> ? E : never
    >(listeners: Lis, key: Key, cb: EventerCallback<Ev>) => {
        const index = listeners[key].indexOf(cb);
        listeners[key].splice(index, 1);
    };

    static invoke = <
        Lis extends EventerListeners,
        Key extends Lis extends EventerListeners<infer K> ? K : never,
        Ev extends Lis extends EventerListeners<Key, infer E> ? E : never
    >(topListeners: Lis, key: Key, event: Ev) => {
        const listeners = topListeners[key];
        if (listeners) {
            for (let i = 0; i < listeners.length; i++) {
                const cb = listeners[i];
                const result = cb(event, theIdleMark);
                if (result !== theIdleMark) break;
            }
        }
    };
}