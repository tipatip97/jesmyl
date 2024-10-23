import { useCallback } from 'react';
import { useAtom, useAtomSet } from '../../../../../complect/atoms';
import { BibleBooki, BibleChapteri, BibleVersei } from '../../model';
import { bibleMolecule } from '../../molecules';

const bibleBookiAtom = bibleMolecule.select(s => s.booki);
const bibleChapteriAtom = bibleMolecule.select(s => s.chapteri);
export const bibleVerseiAtom = bibleMolecule.select(s => s.versei);

export const useBibleBooki = () => useAtom(bibleBookiAtom);
export const useBibleChapteri = () => useAtom(bibleChapteriAtom);
export const useBibleVersei = () => useAtom(bibleVerseiAtom);

export const useBibleSingleAddressSetter = () => {
  const setBooki = useAtomSet(bibleBookiAtom);
  const setChapteri = useAtomSet(bibleChapteriAtom);
  const setVersei = useAtomSet(bibleVerseiAtom);

  return useCallback(
    (booki?: BibleBooki, chapteri?: BibleChapteri, versei?: BibleVersei) => {
      if (booki !== undefined) setBooki(booki);
      if (chapteri !== undefined) setChapteri(chapteri);
      if (versei !== undefined) setVersei(versei);
    },
    [setBooki, setChapteri, setVersei],
  );
};
