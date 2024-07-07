import { setServerPolyfills } from '../../back/complect/polyfills';

export const setPolyfills = () => {
  setServerPolyfills();

  const clearTimeouts = (param: TimeOut) => clearTimeout(param);
  const remListens = (param: any[]) => {
    const [element, ...otherProps] = param;
    element.removeEventListener(...otherProps);
  };

  (globalThis as any).hookEffectLine = () => {
    const timeoutsSet = new Set<TimeOut>();
    const eventListeners = new Set<Parameters<EffectListener>>();
    const debounceTimers: TimeOut[] = [];
    let debounceTimersRegistered = 0;

    const setter = {
      addEventListener: (...args: Parameters<EffectListener>) => {
        eventListeners.add(args);
        const [element, ...otherArgs] = args;
        element.addEventListener(...otherArgs);

        return setter;
      },
      addEventDebouncedListener: (...args: Parameters<DebouncedEffectListener>) => {
        const timeri = debounceTimersRegistered++;
        const [timerMs, element, eventName, callback] = args;
        const debounceCallback = (event: Parameters<typeof callback>[0]) => {
          clearTimeout(debounceTimers[timeri]);
          debounceTimers[timeri] = setTimeout(callback, timerMs, event);
        };

        eventListeners.add([element, eventName, debounceCallback]);

        element.addEventListener(eventName, debounceCallback);

        return setter;
      },

      setTimeout: (cb: () => {}, time?: number, ...args: any[]) => {
        timeoutsSet.add(setTimeout(cb, time, ...args));

        return setter;
      },

      clearTimeout: (timeout: TimeOut) => {
        timeoutsSet.add(timeout);

        return setter;
      },

      effect: (onUnmount?: () => void) => {
        return () => {
          onUnmount?.();
          timeoutsSet.forEach(clearTimeouts);
          debounceTimers.forEach(clearTimeouts);

          eventListeners.forEach(remListens);

          eventListeners.clear();
          timeoutsSet.clear();
        };
      },
    };

    return setter;
  };
};

type EffectListener = <EventName extends keyof HTMLElementEventMap, Event extends HTMLElementEventMap[EventName]>(
  elem: HTMLElement | typeof globalThis | Window,
  eventName: EventName,
  callback: (event: Event) => void,
  turn?: boolean,
) => HookEffectLineReturn;

type DebouncedEffectListener = <
  EventName extends keyof HTMLElementEventMap,
  Event extends HTMLElementEventMap[EventName],
>(
  timerMs: number,
  elem: HTMLElement | typeof globalThis | Window,
  eventName: EventName,
  callback: (event: Event) => void,
  turn?: boolean,
) => HookEffectLineReturn;

type HookEffectLineReturn = {
  addEventListener: EffectListener;
  addEventDebouncedListener: DebouncedEffectListener;
  setTimeout: <Args extends any[]>(cb: (...args: Args) => void, time?: number, ...args: Args) => HookEffectLineReturn;
  clearTimeout: (timeout: TimeOut) => HookEffectLineReturn;
  effect: (onUnmount?: () => void) => () => void;
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
