import { useCallback } from 'react';
import { atom, useAtomInkrement, useAtomValue } from '../../../../../complect/atoms';
import { useScreenTranslationCurrentConfigi } from './configs';

const windows: { readonly wins: readonly (Window | nil)[] } = { wins: [] };

const numAtom = atom(0);

export const useScreenTranslationWindows = () => {
  useAtomValue(numAtom);
  return windows.wins;
};

export const useUpdateScreenTranslationWindows = () => {
  const setUp = useAtomInkrement(numAtom);

  return useCallback(
    (wins: (Window | nil)[]) => {
      (windows as any).wins = wins;
      setUp(1);
    },
    [setUp],
  );
};

export const useScreenTranslationCurrentWindow = () => windows.wins[useScreenTranslationCurrentConfigi()];
