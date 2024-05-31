import { setServerPolyfills } from '../../back/complect/polyfills';

export const setPolyfills = () => {
  setServerPolyfills();

  (globalThis as any).hookEffectLine = () => {
    const set = new Set<
      | number
      | {
          element: HTMLElement;
          eventName: string;
          cb: () => void;
          options?: boolean | AddEventListenerOptions;
        }
    >();

    const setter = {
      addEventListener: (
        element: HTMLElement,
        eventName: string,
        cb: () => void,
        options?: boolean | AddEventListenerOptions,
      ) => {
        set.add({ element, eventName, cb, options });
        element.addEventListener(eventName, cb, options);

        return setter;
      },

      setTimeout: (cb: () => {}, time?: number, ...args: any[]) => {
        set.add(setTimeout(cb, time, ...args));

        return setter;
      },

      effect: () => {
        return () => {
          set.forEach(param => {
            if (typeof param === 'number') {
              clearTimeout(param);
              return;
            }

            param.element.removeEventListener(param.eventName, param.cb, param.options);
          });

          set.clear();
        };
      },
    };

    return setter;
  };
};

type HookEffectLineReturn = {
  addEventListener: <EventName extends keyof HTMLElementEventMap, Event extends HTMLElementEventMap[EventName]>(
    elem: HTMLElement | typeof globalThis,
    eventName: EventName,
    callback: (event: Event) => void,
    turn?: boolean,
  ) => HookEffectLineReturn;
  setTimeout: (cb: () => void, time?: number, ...args: any[]) => HookEffectLineReturn;
  effect: () => () => void;
};

declare global {
  function setTimeoutEffect<const T>(handler: (f: T) => void, timeout: number, f: T): () => void;
  function setTimeoutEffect<const T1, const T2>(
    handler: (f: T1, s: T2) => void,
    timeout: number,
    f: T1,
    s: T2,
  ): () => void;
  function setTimeoutEffect<const T1, const T2, const T3>(
    handler: (v1: T1, v2: T2, v3: T3) => void,
    timeout: number,
    v1: T1,
    v2: T2,
    v3: T3,
  ): () => void;
  function setTimeoutEffect<const T1, const T2, const T3, const T4>(
    handler: (v1: T1, v2: T2, v3: T3, v4: T4) => void,
    timeout: number,
    v1: T1,
    v2: T2,
    v3: T3,
    v4: T4,
  ): () => void;
  function setTimeoutEffect<const T1, const T2, const T3, const T4, const T5>(
    handler: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void,
    timeout: number,
    v1: T1,
    v2: T2,
    v3: T3,
    v4: T4,
    v5: T5,
  ): () => void;
  function setTimeoutEffect(handler: (...args: any[]) => void, timeout?: number, ...args: any[]): () => void;
  function inspectComponentProps(curr: Record<string, any>, print?: boolean): void;

  function hookEffectLine(): HookEffectLineReturn;

  interface Array<T> {
    toSorted: (compareFn?: (a: T, b: T) => number) => T[];
    merge: (array: T[] | und) => T[];
  }

  interface String {
    reverse: () => string;
  }
}

export {};
