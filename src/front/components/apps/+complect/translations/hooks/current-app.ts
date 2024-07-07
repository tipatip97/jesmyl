import { useCallback } from 'react';
import { useAtom, useAtomValue } from '../../../../../complect/atoms';
import { complectMolecule } from '../molecules';
import { TranslationViewApp } from '../Translations.model';

export const useCurrentTranslationTextApp = () => useAtom(complectMolecule.take('currentTranslationTextApp'));
export const useCurrentTranslationTextAppValue = () => useAtomValue(complectMolecule.take('currentTranslationTextApp'));

export const useSwitchCurrentTranslationTextApp = () => {
  const [app, set] = useCurrentTranslationTextApp();

  return useCallback((setApp?: TranslationViewApp) => set(setApp ?? (app === 'cm' ? 'bible' : 'cm')), [app, set]);
};
