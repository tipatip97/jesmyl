import { useEffect, useState } from 'react';
import { Atom } from './AnAtom';

export const useAtomValue = <Value, Key extends string>(atom: Atom<Value, Key>) => {
  const state = useState(atom.get());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => atom.subscribe(state[1]), [atom]);

  return atom.get();
};

export const useAtomSet = <Value, Key extends string>(atom: Atom<Value, Key>) => atom.set;
export const useAtomToggle = <Key extends string>(atom: Atom<boolean, Key>) => atom.toggle;
export const useAtomInkrement = <Key extends string>(atom: Atom<number, Key>) => atom.inkrement;

export const useAtom = <Value, Key extends string>(atom: Atom<Value, Key>) =>
  [useAtomValue(atom), useAtomSet(atom)] as const;

export const atom = <Value, Key extends string = string>(
  value: Value,
  storageName?: string,
  key?: Key,
): Atom<Value, Key> => new Atom(value, storageName, key);

export const getAtomValue = async <Value, Key extends string>(atom: Atom<Value, Key>) => await atom.getStorageValue();
export const atomValueSetter =
  <Value, Key extends string = string>(atom: Atom<Value, Key>) =>
  (value: Value | ((prev: Value) => Value)) =>
    atom.set(value);
