import { atom, useAtom } from '../../../../complect/atoms';

const isCanShowTextTranslationAtom = atom(false);

export const useIsCanShowTextTranslation = () => useAtom(isCanShowTextTranslationAtom);
