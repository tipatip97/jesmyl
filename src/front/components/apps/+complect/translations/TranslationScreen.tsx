import { BibleTranslationScreen } from '../../bible/complect/screen/BibleTranslationScreen';
import { CmTranslationScreen } from '../../cm/translation/complect/controlled/screen/CmTranslationScreen';
import { TranslationScreenProps } from './Translations.model';
import { useCurrentTranslationTextApp } from './hooks/current-app';

export const TranslationScreen = (props: TranslationScreenProps) => {
  return useCurrentTranslationTextApp() === 'cm' ? (
    <CmTranslationScreen {...props} />
  ) : (
    <BibleTranslationScreen {...props} />
  );
};
