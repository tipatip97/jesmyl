/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useEffect, useState } from 'react';
import { JStorage } from './JStorage';

const emptyArr: [] = [];

export const useStorageValueGetter = <
  Scope,
  State,
  Key extends keyof Scope,
  Value extends Scope[Key],
  InitialValue extends Value,
>(
  storage: JStorage<Scope, State>,
  key: Key,
  initialValue: InitialValue,
): Value => {
  const state = useState(storage.properties[key] === undefined ? initialValue : storage.properties[key]);

  useEffect(() => storage.on(key, state[1] as never, initialValue), emptyArr);

  return state[0];
};

export const useStorageMappedValueGetter = <
  Scope,
  State,
  Key extends keyof Scope,
  Value extends Scope[Key],
  Mapper extends (value: Value) => unknown,
  RetValue extends Mapper extends (value: Value) => infer Ret ? Ret : never,
>(
  storage: JStorage<Scope, State>,
  key: Key,
  initialValue: RetValue,
  mapper: Mapper,
): RetValue => {
  const state = useState(storage.properties[key] === undefined ? initialValue : storage.properties[key]);

  useEffect(() => storage.on<Key, Value, RetValue>(key, val => state[1](mapper(val)), initialValue), emptyArr);

  return state[0];
};

type Setter<Return> = <Scope, State>(
  storage: JStorage<Scope, State>,
) => <Key extends keyof Scope>(key: Key, value: Scope[Key] | ((prevValue: Scope[Key]) => Scope[Key])) => Return;

export const useStorageSet: Setter<void> = storage => useCallback((key, value) => storage.set(key, value), emptyArr);
export const justStorageSet: Setter<void> = storage => (key, value) => storage.set(key, value);

export const usePutStorageSetter: Setter<() => void> = storage =>
  useCallback((key, value) => () => storage.set(key, value), emptyArr);
