import { useCallback } from 'react';
import { useBibleTranslatesContext } from '../../translates/TranslatesContext';
import { useBibleShowTranslatesValue } from '../../translates/hooks';
import { useBibleChapteri, useBibleSingleAddressSetter } from '../../translations/lists/atoms';
import { useBibleAddressBooki } from './books';

export const useBibleAddressChapteri = () => {
  const [chapteri] = useBibleChapteri();
  const currentBooki = useBibleAddressBooki();
  const showTranslates = useBibleShowTranslatesValue();
  const chapter = useBibleTranslatesContext()[showTranslates[0]]?.chapters?.[currentBooki];

  return chapteri < 0 ? 0 : chapter != null && chapteri > chapter.length - 1 ? chapter.length - 1 : chapteri;
};

export const usePutBibleChapteriSetter = () => {
  const setAddress = useBibleSingleAddressSetter();

  return useCallback((chapteri: number) => () => setAddress(undefined, chapteri, 0), [setAddress]);
};
