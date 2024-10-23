import styled from 'styled-components';
import { BibleTranslationScreenTextsContext } from '../../bible/texts/AddressContentContext';
import BibleTranslatesContextProvider from '../../bible/translates/TranslatesContext';
import BibleTranslationCurrentScreen from '../../bible/translations/screen/BibleTranslationCurrentScreen';
import { CmTranslationCurrentScreen } from '../../cm/translation/complect/controlled/screen/CmTranslationCurrentScreen';
import { useCurrentForceViweAppContext } from './Translation.contexts';
import { TranslationTextScreen } from './TranslationTextScreen';
import { TranslationScreenProps } from './Translations.model';
import { useCurrentTranslationTextAppValue } from './hooks/current-app';
import { useTranslationInitialSlideValue } from './initial-slide-context';

export const TranslationScreen = (props: TranslationScreenProps) => {
  const app = useCurrentTranslationTextAppValue();
  const forceViewApp = useCurrentForceViweAppContext();
  const initialSlide = useTranslationInitialSlideValue();

  return (
    <>
      {initialSlide && (
        <>
          <StyledInitialSlide
            className="full-size"
            hidden={props.isPreview}
          >
            {initialSlide}
          </StyledInitialSlide>

          {props.isPreview && info}
        </>
      )}

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
    </>
  );
};

const StyledInitialSlide = styled.div`
  background-color: black;
`;

const StyledInfo = styled.div`
  + * {
    visibility: hidden;
  }
`;

const info = (
  <StyledInfo className="full-size flex center text-center">
    Начальный слайд закрывается
    <br />
    по клавише Backspace
  </StyledInfo>
);
