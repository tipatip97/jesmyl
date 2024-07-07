import { Molecule, useAtom, useAtomSet, useAtomValue } from '../../../../complect/atoms';
import { ScreenTranslationConfig } from './model';
import { TranslationViewApp } from './Translations.model';

type Model = {
  screenTranslationConfigs: ScreenTranslationConfig[];
  currentTranslationTextApp: TranslationViewApp;
};

export const complectMolecule = new Molecule<Model>(
  {
    screenTranslationConfigs: [],
    currentTranslationTextApp: 'cm',
  },
  'complect',
);

const screenTranslationConfigsAtom = complectMolecule.take('screenTranslationConfigs');

export const useScreenTranslationConfigs = () => useAtom(screenTranslationConfigsAtom);
export const useScreenTranslationConfigsSet = () => useAtomSet(screenTranslationConfigsAtom);
export const useScreenTranslationConfigsValue = () => useAtomValue(screenTranslationConfigsAtom);
