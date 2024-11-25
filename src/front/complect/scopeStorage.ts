import { mylib } from 'front/utils';
import { useEffect, useState } from 'react';
import { JStorage } from './JStorage';
import { NavigationStorage } from './nav-configurer/Navigation.model';

export const scopeStorage = <
  T,
  FuncsExclude = { [K in keyof T]: T[K] extends (...args: any[]) => any ? never : T[K] },
  SetterScalar = Partial<FuncsExclude> | ((state: T) => Partial<FuncsExclude>),
>(
  initializer: (set: (setterScalar: SetterScalar) => void, get: () => T) => T,
  storageName?: string,
) => {
  type States = { [Key in keyof T]: [T[Key], (item: T[Key] | ((it: T[Key]) => T[Key])) => void] };
  type TK = { [Key in keyof T]: T[Key] };
  type Subs = { [Key in keyof T]: Set<(val: T[Key]) => void> };

  type KeyValueFunc = <Key extends keyof T>(key: Key, val: T[Key]) => void;
  type KeyFunc = <Key extends keyof T>(key: Key) => void;
  type ValueFunc = <Key extends keyof T>(val: T[Key]) => void;

  const storage = storageName
    ? storages[storageName] ?? (storages[storageName] = new JStorage<NavigationStorage<T>>(storageName))
    : null;

  const topFuncs = {} as TK;
  const topValues = {} as TK;
  const topAll = {} as TK;
  const topSubs = {} as Subs;

  const setInStorage: KeyValueFunc = storage ? (key, value) => storage.set(key, value) : () => {};

  const setValue: KeyValueFunc = (key, value) => {
    topAll[key] = value;
    topValues[key] = value;
    selfVal.value = value;
  };

  const setValueAndInvoke: KeyValueFunc = (key, value) => {
    setValue(key, value);

    topSubs[key].forEach(invokeSubscribers, selfVal);
  };

  const extractStorageValue: KeyFunc = storage
    ? async key => {
        const value = await storage.get(key);

        if (value === undefined) return;

        setValueAndInvoke(key, value);
      }
    : () => {};

  const invokeSet: KeyValueFunc = (key, value) => {
    if (value === undefined) return;

    setValueAndInvoke(key, value);
    setInStorage(key, value);
  };

  let getter = defGetter;
  let setter = defSetter;

  const inits = initializer(
    (setterScalar: SetterScalar) => setter(setterScalar),
    () => getter(),
  );

  for (const key in inits) {
    const value = inits[key];

    if (mylib.isFunc(value)) {
      topFuncs[key] = value;
      topAll[key] = value;
      continue;
    }

    setValue(key, value);
    topSubs[key] = new Set();

    extractStorageValue(key);
  }

  getter = () => topAll;

  setter = (setterScalar: SetterScalar) => {
    const partial = mylib.isFunc(setterScalar) ? setterScalar(topAll) : setterScalar;

    for (const key in partial) invokeSet(key as never, partial[key] as never);
  };

  return <Keys extends (keyof T)[]>(...keys: Keys): { [K in Keys[number]]: T[K] } => {
    const values = {} as TK;
    const states: Partial<States> = {};

    for (const key of keys) {
      if (key in topFuncs) {
        values[key] = topFuncs[key];
        continue;
      }

      values[key] = topValues[key];
      states[key] = theUseState(values[key]);
    }

    useEffect(() => {
      const subs = new Map<keyof TK, ValueFunc>();

      for (const key of keys) {
        if (key in topFuncs) continue;

        const sub: ValueFunc = value => states[key]?.[1](value);

        topSubs[key].add(sub);
        subs.set(key, sub);
      }

      return () => {
        selfVal.value = topSubs;
        subs.forEach(deleteSubscribers, selfVal);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, emptyArr);

    return values;
  };
};

// #region utils

const theUseState = useState;

const storages: Record<string, JStorage<any>> = {};
const emptyArr = [] as [];

type SelfVal<Value> = { value: Value };
const selfVal: SelfVal<any> = { value: 0 };

const deleteSubscribers: <T>(
  this: SelfVal<Record<keyof T, Map<any, any>>>,
  cb: (val: any) => void,
  key: keyof T,
) => void = function (sub, key) {
  this.value[key]!.delete(sub);
};

const invokeSubscribers: (this: SelfVal<any>, cb: (val: any) => void) => void = function (cb) {
  if (this.value !== undefined) cb(this.value);
};
const defGetter = (): any => {
  throw new Error('Can`t invoke get() in initializer');
};

const defSetter = (_setterScalar: any): void => {
  throw new Error('Can`t invoke set() in initializer');
};
