import styled, { css } from 'styled-components';
import TranslationScreen from './screen/TranslationScreen';
import { ControlledTranslationStateRef } from './hooks';
import { useCmTranslationConfigs } from './hooks/configs';

export const CmTranslationSlidePreview = ({ stateRef }: { stateRef: ControlledTranslationStateRef }) => {
  const { currentConfig } = useCmTranslationConfigs();

  return (
    <Wrapper onClick={() => stateRef.current.switchVisible()}>
      <Inner>
        {currentConfig == null || stateRef.current.currWin == null ? (
          <TranslationScreen />
        ) : (
          <div className="flex center full-width full-height bgcolor--2">
            <ScreenWithBackground $proportion={currentConfig.proportion}>
              <TranslationScreen proportion={currentConfig.proportion} />
            </ScreenWithBackground>
          </div>
        )}
        {stateRef.current.isVisible ? null : (
          <div
            title="esc, V"
            className="absolute pos-bottom full-width margin-gap-v text-center"
          >
            Нажми для показа
          </div>
        )}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: var(--size);
  min-width: var(--min-size);
  max-width: var(--max-size);
  height: var(--size);
  min-height: var(--min-size);
  max-height: var(--max-size);
`;

export const Inner = styled.div`
  cursor: pointer;
  border-radius: var(--radius);
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: var(--color-far);
  font-size: 14px;
  user-select: none;
  white-space: pre;
`;

const ScreenWithBackground = styled.div<{ $proportion: number }>`
  ${props => {
    return css`
      width: ${props.$proportion < 1 ? `calc(100% * ${props.$proportion})` : '100%'};
      height: ${props.$proportion < 1 ? '100%' : `calc(100% / ${props.$proportion})`};
    `;
  }}
`;
