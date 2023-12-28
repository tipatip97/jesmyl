export interface EventerCallbackEvent<Value> {
  value: Value;
  stopPropagation: (stopValue?: any) => void;
  stoppedValue?: any;
  preventDefault: () => void;
  preventedDefault: boolean;
  mute: () => void;
  passValue?: any;
}

export type EventerCallback<Value, Return = void> = (event: EventerCallbackEvent<Value>) => Return;
export type EventerListeners<Value, Return = void> = EventerCallback<Value, Return>[];

export type EventerValueCallback<Value, Return = void> = (value: Value) => Return;
export type EventerValueListeners<Value, Return = void> = EventerValueCallback<Value, Return>[];

export default class Eventer {
  static listen = <
    Lis extends EventerListeners<any, Return>,
    Value extends Lis extends EventerListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    cb: EventerCallback<Value, Return>,
    invokeInitValue?: Value,
  ) => {
    if (invokeInitValue !== undefined)
      cb({
        value: invokeInitValue,
        mute: () => {},
        preventDefault: () => {},
        preventedDefault: false,
        stopPropagation: () => {},
      });

    listeners.push(cb);

    return () => this.mute(listeners, cb);
  };

  static mute = <
    Lis extends EventerListeners<any, Return>,
    Value extends Lis extends EventerListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    cb: EventerCallback<Value, Return>,
  ) => {
    const index = listeners.indexOf(cb);
    listeners.splice(index, 1);
  };

  static invoke = <
    Lis extends EventerListeners<any, Return>,
    Value extends Lis extends EventerListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    value: Value,
    onEachInvoke?: (ret: Return) => void,
  ): EventerCallbackEvent<Value> => {
    let i = listeners.length - 1;
    const event: EventerCallbackEvent<Value> = {
      value,
      mute: () => {
        listeners.splice(i, 1);
        i++;
      },
      preventDefault: () => (event.preventedDefault = true),
      preventedDefault: false,
      stopPropagation: stopValue => {
        event.stoppedValue = stopValue;
        i = -1;
      },
    };

    for (; i > -1; i--) {
      if (onEachInvoke === undefined) listeners[i](event);
      else onEachInvoke(listeners[i](event));
    }

    return event;
  };

  static listenValue = <
    Lis extends EventerValueListeners<any, Return>,
    Value extends Lis extends EventerValueListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    cb: (value: Value) => Return,
    invokeInitValue?: Value,
  ) => {
    if (invokeInitValue !== undefined) cb(invokeInitValue);

    listeners.push(cb);

    return () => this.muteValue(listeners, cb);
  };

  static muteValue = <
    Lis extends EventerValueListeners<any, Return>,
    Value extends Lis extends EventerValueListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    cb: (value: Value) => Return,
  ) => {
    listeners.splice(listeners.indexOf(cb), 1);
  };

  static invokeValue = <
    Lis extends EventerValueListeners<any, Return>,
    Value extends Lis extends EventerValueListeners<infer E, Return> ? E : never,
    Return,
  >(
    listeners: Lis,
    value: Value,
    onEachInvoke?: (ret: Return) => void,
  ): Value => {
    for (let i = listeners.length - 1; i > -1; i--) {
      if (onEachInvoke === undefined) listeners[i](value);
      else onEachInvoke(listeners[i](value));
    }

    return value;
  };
}
