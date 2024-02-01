import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { chapterBooks } from '../texts';
import { useBibleAddressBooki } from './books';

export const useBibleAddressChapteri = () => {
  const justChapteri = useStorageValueGetter(bibleStorage, 'translationChapteri', 0);
  const currentBooki = useBibleAddressBooki();

  return justChapteri < 0
    ? 0
    : justChapteri > chapterBooks[currentBooki].length - 1
      ? chapterBooks[currentBooki].length - 1
      : justChapteri;
};
