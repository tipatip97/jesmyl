import { useCallback } from 'react';
import { useAtom, useAtomValue } from '../../../../../complect/atoms';
import { complectMolecule } from '../molecules';
import { TranslationViewApp } from '../Translations.model';

const cttaAtom = complectMolecule.select(s => s.currentTranslationTextApp);

export const useCurrentTranslationTextApp = () => useAtom(cttaAtom);
export const useCurrentTranslationTextAppValue = () => useAtomValue(cttaAtom);

export const useSwitchCurrentTranslationTextApp = () => {
  const [app, set] = useCurrentTranslationTextApp();

  return useCallback((setApp?: TranslationViewApp) => set(setApp ?? (app === 'cm' ? 'bible' : 'cm')), [app, set]);
};
