import {
  defaultScreenTranslationBackgroundConfig,
  defaultScreenTranslationPositionConfig,
  defaultScreenTranslationTextConfig,
} from '../../../../../+complect/translations/complect/defaults';
import { ScreenTranslationBackgroundConfigs } from '../../../../../+complect/translations/complect/model';
import { useScreenTranslationCurrentConfigi } from '../../../../../+complect/translations/hooks/configs';
import { useAtomValue } from '../../../../../../../complect/atoms';
import { cmMolecule } from '../../../../molecules';
import { CmTranslationScreenConfig } from '../model';

const defaultConfig: CmTranslationScreenConfig & ScreenTranslationBackgroundConfigs = {
  ...defaultScreenTranslationPositionConfig,
  ...defaultScreenTranslationTextConfig,
  ...defaultScreenTranslationBackgroundConfig,
  isWithBackground: false,
};

export const useCmScreenTranslationConfigs = () =>
  useAtomValue(cmMolecule.take('translationScreenConfigs')) ?? defaultConfig;

export const useCmScreenTranslationConfig = (configi: number | und): CmTranslationScreenConfig | und => {
  const configs = useCmScreenTranslationConfigs();
  return configi === undefined ? undefined : configs[configi];
};

export const useCmScreenTranslationCurrentConfig = (): CmTranslationScreenConfig | und =>
  useCmScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
