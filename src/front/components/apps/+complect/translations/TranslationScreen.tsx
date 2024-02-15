import { BibleTranslationCurrentScreen } from '../../bible/translations/screen/BibleTranslationCurrentScreen';
import { CmTranslationCurrentScreen } from '../../cm/translation/complect/controlled/screen/CmTranslationCurrentScreen';
import { TranslationScreenProps } from './Translations.model';
import { useCurrentTranslationTextApp } from './hooks/current-app';

export const TranslationScreen = (props: TranslationScreenProps) => {
  return useCurrentTranslationTextApp() === 'cm' ? (
    <CmTranslationCurrentScreen {...props} />
  ) : (
    <BibleTranslationCurrentScreen {...props} />
  );
};
