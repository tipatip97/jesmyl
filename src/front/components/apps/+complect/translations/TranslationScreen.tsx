import { BibleTranslationScreenTextsContext } from '../../bible/texts/AddressContentContext';
import BibleTranslatesContextProvider from '../../bible/translates/TranslatesContext';
import BibleTranslationCurrentScreen from '../../bible/translations/screen/BibleTranslationCurrentScreen';
import { CmTranslationCurrentScreen } from '../../cm/translation/complect/controlled/screen/CmTranslationCurrentScreen';
import { useCurrentForceViweAppContext } from './Translation.contexts';
import { TranslationTextScreen } from './TranslationTextScreen';
import { TranslationScreenProps } from './Translations.model';
import { useCurrentTranslationTextAppValue } from './hooks/current-app';

export const TranslationScreen = (props: TranslationScreenProps) => {
  const app = useCurrentTranslationTextAppValue();
  const forceViewApp = useCurrentForceViweAppContext();

  return (
    <TranslationTextScreen>
      {(forceViewApp ?? props.forceViewApp ?? app) === 'cm' ? (
        <CmTranslationCurrentScreen {...props} />
      ) : (
        <BibleTranslatesContextProvider>
          <BibleTranslationScreenTextsContext isPreview={props.isPreview}>
            <BibleTranslationCurrentScreen {...props} />
          </BibleTranslationScreenTextsContext>
        </BibleTranslatesContextProvider>
      )}
    </TranslationTextScreen>
  );
};
