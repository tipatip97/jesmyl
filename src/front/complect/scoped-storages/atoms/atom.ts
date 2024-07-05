import { Atom } from './model';

export const atom = <Value, Key extends string = string>(
  value: Value,
  storageName?: string,
  key?: Key,
): Atom<Value, Key> => new Atom(value, storageName, key);
