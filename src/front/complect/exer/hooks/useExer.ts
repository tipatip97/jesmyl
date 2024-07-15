import { useCallback } from 'react';
import { atom, useAtomInkrement, useAtomValue } from '../../atoms';
import '../Exec.scss';

const numAtom = atom(0);

export const useExerListener = () => useAtomValue(numAtom);

export const useExerExec = () => {
  const set = useAtomInkrement(numAtom);
  useExerListener();

  return useCallback(
    <Value>(value?: Value) => {
      set(1);
      return value;
    },
    [set],
  );
};

export const useRiseUpExerUpdates = () => useAtomInkrement(numAtom);
