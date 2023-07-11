const passPropagation = ['passPropagation: ' + Date.now()] as const;
const invokeOnce = ['invokeOnce: ' + Date.now()] as const;
export type EventerCallback<Ev> = ((event: Ev, alt: typeof eventerAlt) => void | (typeof eventerAlt[keyof typeof eventerAlt])[]);
export type EventerListeners<Key extends string = string, Ev extends any = any> = Record<Key, EventerCallback<Ev>[]>;

export const eventerAlt = {
    passPropagation,
    invokeOnce,
};

export default class Eventer {
    static listen = <
        Lis extends EventerListeners,
        Key extends Lis extends EventerListeners<infer K> ? K : never,
        Ev extends Lis extends EventerListeners<Key, infer E> ? E : never
    >(listeners: Lis, key: Key, cb: EventerCallback<Ev>, invokeInitValue?: Ev) => {
        if (invokeInitValue !== undefined) cb(invokeInitValue, eventerAlt);
        listeners[key].push(cb);
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

        if (listeners !== undefined) {
            const splices: number[] = [];

            for (let i = listeners.length - 1; i > -1; i--) {
                const cb = listeners[i];
                const result = cb(event, eventerAlt);

                if (result === undefined) break;

                for (let j = 0; j < result.length; j++) {
                    if (result[j] === invokeOnce) splices.push(i);
                }

                if (!result.includes(passPropagation)) break;
            }

            for (let i = 0; i < splices.length; i++) {
                listeners.splice(splices[i], 1);
            }
        }
    };
}