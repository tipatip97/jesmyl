import { useCallback } from 'react';
import mylib from '../../../../../complect/my-lib/MyLib';
import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { BibleTranslationJoinAddress } from '../../model';
import { useBibleTranslationSlideSyncContentSetter } from '../slide-sync';
import { justBibleStorageSet } from '../storage';
import { chapterBooks } from '../texts';
import { useBibleTranslationJoinAddress, useBibleTranslationJoinAddressSetter } from './address';
import { useBibleAddressBooki } from './books';
import { useBibleAddressChapteri } from './chapters';

const useBibleAddressCurrentVersei = () => useStorageValueGetter(bibleStorage, 'translationVersei', 0);

export const useBibleAddressIsCurrentVersei = (versei: number) => {
  const joinAddress = useBibleTranslationJoinAddress();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  return joinAddress === null
    ? currentVersei === versei
    : joinAddress?.[currentBooki]?.[currentChapteri].includes(versei) ?? false;
};

export const useBibleAddressVersei = () => {
  const currentChapteri = useBibleAddressChapteri();
  const currentBooki = useBibleAddressBooki();
  const currentVersei = useBibleAddressCurrentVersei();

  return currentVersei < 0
    ? 0
    : currentVersei > chapterBooks[currentBooki][currentChapteri].length - 1
      ? chapterBooks[currentBooki][currentChapteri].length - 1
      : currentVersei;
};

export const usePutBibleAddressVerseiSetter = () => {
  const syncSlide = useBibleTranslationSlideSyncContentSetter();
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (versei: number, isRiseUpUpdats: boolean) => {
      return () => {
        setJoin(null);
        justBibleStorageSet('translationVersei', versei);
        if (isRiseUpUpdats) syncSlide();
      };
    },
    [setJoin, syncSlide],
  );
};

export const usePutBibleJoinAddressSetter = () => {
  const currentChapteri = useBibleAddressChapteri();
  const currentBooki = useBibleAddressBooki();
  const currentVersei = useBibleAddressVersei();
  const currentJoinAddress = useBibleTranslationJoinAddress();
  const syncSlide = useBibleTranslationSlideSyncContentSetter();
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (versei: number, isRiseUpUpdats: boolean) => {
      return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let newJoin: BibleTranslationJoinAddress | null = { ...currentJoinAddress };
        justBibleStorageSet('translationVersei', versei);

        if (currentJoinAddress === null) {
          const verses = ((newJoin[currentBooki] = {} as BibleTranslationJoinAddress[number])[currentChapteri] =
            [] as number[]);

          if (event.ctrlKey) {
            if (currentVersei === versei) verses.push(versei);
            else verses.push(currentVersei, versei);
          } else if (event.shiftKey) {
            if (currentVersei === versei) verses.push(versei);
            else {
              const min = Math.min(currentVersei, versei);
              const max = Math.max(currentVersei, versei);

              for (let i = min; i <= max; i++) verses.push(i);
            }
          }
        } else {
          const verses = currentJoinAddress[currentBooki]?.[currentChapteri] ?? [];
          const versesSet = new Set(verses);

          if (event.ctrlKey) {
            if (versesSet.has(versei)) versesSet.delete(versei);
            else versesSet.add(versei);
          }

          if (event.shiftKey) {
            const min = Math.min(verses[verses.length - 1] ?? currentVersei, versei);
            const max = Math.max(verses[verses.length - 1] ?? currentVersei, versei);

            for (let i = min; i <= max; i++) versesSet.add(i);
          }
          const chapter = Array.from(versesSet);

          newJoin[currentBooki] = {
            ...currentJoinAddress[currentBooki],
            [currentChapteri]: chapter,
          };

          if (chapter.length === 0) {
            delete newJoin[currentBooki][currentChapteri];
            if (mylib.keys(newJoin[currentBooki]).length === 0) {
              delete newJoin[currentBooki];
              if (mylib.keys(newJoin).length === 0) newJoin = null;
            }
          }
        }

        setJoin(newJoin);
        if (isRiseUpUpdats) syncSlide();
      };
    },
    [currentJoinAddress, setJoin, syncSlide, currentBooki, currentChapteri, currentVersei],
  );
};
