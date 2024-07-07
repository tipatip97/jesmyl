import { atom, useAtom } from '../../../complect/atoms';

const translationBlockAtom = atom(0);
export const useComTranslationBlock = () => useAtom(translationBlockAtom);

const numComUpdatesAtom = atom(0);
export const useNumComUpdates = () => useAtom(numComUpdatesAtom);
