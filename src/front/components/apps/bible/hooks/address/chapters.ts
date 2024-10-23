import { useCallback } from 'react';
import { BibleChapteri } from '../../model';
import { useBibleTranslatesContext } from '../../translates/TranslatesContext';
import { useBibleShowTranslatesValue } from '../../translates/hooks';
import { useBibleChapteri, useBibleSingleAddressSetter } from '../../translations/lists/atoms';
import { useBibleAddressBooki } from './books';

export const useBibleAddressChapteri = (): BibleChapteri => {
  const [chapteri] = useBibleChapteri();
  const currentBooki = useBibleAddressBooki();
  const showTranslates = useBibleShowTranslatesValue();
  const chapter = useBibleTranslatesContext()[showTranslates[0]]?.chapters?.[currentBooki];

  return chapteri < 0 ? 0 : chapter != null && chapteri > chapter.length - 1 ? chapter.length - 1 : chapteri;
};

export const usePutBibleChapteriSetter = () => {
  const setAddress = useBibleSingleAddressSetter();

  return useCallback((chapteri: BibleChapteri) => () => setAddress(undefined, chapteri, 0), [setAddress]);
};
