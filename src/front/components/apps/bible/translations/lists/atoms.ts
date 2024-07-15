import { useCallback } from 'react';
import { atom, useAtom, useAtomSet } from '../../../../../complect/atoms';

const bibleBookiAtom = atom(0, 'bible', 'booki');
const bibleChapteriAtom = atom(0, 'bible', 'chapteri');
export const bibleVerseiAtom = atom(0, 'bible', 'versei');

export const useBibleBooki = () => useAtom(bibleBookiAtom);
export const useBibleChapteri = () => useAtom(bibleChapteriAtom);
export const useBibleVersei = () => useAtom(bibleVerseiAtom);

export const useBibleSingleAddressSetter = () => {
  const setBooki = useAtomSet(bibleBookiAtom);
  const setChapteri = useAtomSet(bibleChapteriAtom);
  const setVersei = useAtomSet(bibleVerseiAtom);

  return useCallback(
    (booki?: number, chapteri?: number, versei?: number) => {
      if (booki !== undefined) setBooki(booki);
      if (chapteri !== undefined) setChapteri(chapteri);
      if (versei !== undefined) setVersei(versei);
    },
    [setBooki, setChapteri, setVersei],
  );
};
