import { Molecule, useAtom, useAtomSet, useAtomValue } from '../../../../complect/atoms';
import { ScreenTranslationConfig } from './model';
import { TranslationViewApp } from './Translations.model';

type Model = {
  screenTranslationConfigs: ScreenTranslationConfig[];
  currentTranslationTextApp: TranslationViewApp;
};

export const defaultComplectConfig: ScreenTranslationConfig = {
  title: 'Трансляция',
  proportion: 1,
};

export const complectMolecule = new Molecule<Model>(
  {
    screenTranslationConfigs: [defaultComplectConfig],
    currentTranslationTextApp: 'cm',
  },
  'complect',
);

const screenTranslationConfigsAtom = complectMolecule.select(s => s.screenTranslationConfigs);

export const useScreenTranslationConfigs = () => useAtom(screenTranslationConfigsAtom);
export const useScreenTranslationConfigsSet = () => useAtomSet(screenTranslationConfigsAtom);
export const useScreenTranslationConfigsValue = () => useAtomValue(screenTranslationConfigsAtom);
