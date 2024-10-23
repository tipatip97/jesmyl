import { atom, useAtomSet, useAtomValue } from '../../../../complect/atoms';

const isShowAtom = atom(true);
const initialSlideAtom = atom<React.ReactNode>(null);

export const useTranslationIsInitialSlideShowSet = () => useAtomSet(isShowAtom);
export const useTranslationIsInitialSlideShow = () => useAtomValue(isShowAtom);

export const useTranslationInitialSlideSet = () => useAtomSet(initialSlideAtom);

export const useTranslationInitialSlideValue = () => {
  const initialSlide = useAtomValue(initialSlideAtom);
  const isShow = useAtomValue(isShowAtom);

  if (isShow && initialSlide) return initialSlide;

  return null;
};
