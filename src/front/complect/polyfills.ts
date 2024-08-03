import { setServerPolyfills } from '../../back/complect/polyfills';

export const setPolyfills = () => {
  setServerPolyfills();

  const clearTimeouts = (param: TimeOut) => clearTimeout(param);
  const remListens = (param: any[]) => {
    const [element, ...otherProps] = param;
    element.removeEventListener(...otherProps);
  };

  const invokeEach = (cb: () => void) => cb();

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

      effect: (...onUnmounts: (() => void)[]) => {
        return () => {
          onUnmounts.forEach(invokeEach);
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
  effect: (...onUnmounts: (() => void)[]) => () => void;
};

declare global {
  function setTimeoutEffect<Args extends any[]>(
    handler: (...args: Args) => void,
    timeout?: number,
    ...args: Args
  ): () => void;
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
