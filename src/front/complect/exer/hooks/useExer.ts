import { useCallback } from 'react';
import { atom, useAtomInkrement } from '../../atoms';
import '../Exec.scss';

const numAtom = atom(0);

export const useExerExec = () => {
  const set = useAtomInkrement(numAtom);

  return useCallback(
    <Value>(value?: Value) => {
      set(1);
      return value;
    },
    [set],
  );
};

export const useRiseUpExerUpdates = () => useAtomInkrement(numAtom);
