import { useEffect, useState } from 'react';
import { Atom } from './model';

const emptyArr = [] as [];

export const useAtomValue = <Value, Key extends string>(atom: Atom<Value, Key>) => {
  const state = useState(atom.get());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => atom.subscribe(state[1]), emptyArr);

  return atom.get();
};

export const useAtomSet = <Value, Key extends string>(atom: Atom<Value, Key>) => atom.set;
export const useAtom = <Value, Key extends string>(atom: Atom<Value, Key>) =>
  [useAtomValue(atom), useAtomSet(atom)] as const;
