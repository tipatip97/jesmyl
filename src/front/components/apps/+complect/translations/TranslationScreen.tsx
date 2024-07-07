import { useContext } from 'react';
import BibleTranslatesContextProvider from '../../bible/translates/TranslatesContext';
import BibleTranslationCurrentScreen from '../../bible/translations/screen/BibleTranslationCurrentScreen';
import { CmTranslationCurrentScreen } from '../../cm/translation/complect/controlled/screen/CmTranslationCurrentScreen';
import { CurrentForceViweAppContext } from './Translation.contexts';
import { TranslationTextScreen } from './TranslationTextScreen';
import { TranslationScreenProps } from './Translations.model';
import { useCurrentTranslationTextAppValue } from './hooks/current-app';

export const TranslationScreen = (props: TranslationScreenProps) => {
  const app = useCurrentTranslationTextAppValue();
  const forceViewApp = useContext(CurrentForceViweAppContext);

  return (
    <TranslationTextScreen>
      {(forceViewApp ?? props.forceViewApp ?? app) === 'cm' ? (
        <CmTranslationCurrentScreen {...props} />
      ) : (
        <BibleTranslatesContextProvider>
          <BibleTranslationCurrentScreen {...props} />
        </BibleTranslatesContextProvider>
      )}
    </TranslationTextScreen>
  );
};
