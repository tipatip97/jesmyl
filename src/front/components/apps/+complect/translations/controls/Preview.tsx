import styled, { css } from 'styled-components';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { TranslationScreen } from '../TranslationScreen';
import { useScreenTranslationCurrentConfig } from '../hooks/configs';

export const TranslationSlidePreview = () => {
  const currentConfig = useScreenTranslationCurrentConfig();

  const [fullNode, openFull] = useFullContent(() => {
    return (
      <>
        {currentConfig && (
          <div className="flex center margin-big-gap-t">
            <FullContainer className="flex center bgcolor--3">
              <ScreenWithBackground $proportion={currentConfig.proportion}>
                <TranslationScreen isTech />
              </ScreenWithBackground>
            </FullContainer>
          </div>
        )}
      </>
    );
  });

  return (
    <Wrapper>
      {fullNode}
      {currentConfig === undefined ? (
        <TranslationScreen win={window} />
      ) : (
        <>
          <div className="flex center full-size bgcolor--2">
            <ScreenWithBackground $proportion={currentConfig.proportion}>
              <TranslationScreen win={window} />
            </ScreenWithBackground>
          </div>
          <FullButton
            name="crop-outline"
            onClick={() => openFull()}
          />
        </>
      )}
    </Wrapper>
  );
};

const size = '94.5vmin';

const FullContainer = styled.div`
  height: ${size};
  min-height: ${size};
  max-height: ${size};

  width: ${size};
  min-width: ${size};
  max-width: ${size};
`;

const FullButton = styled(EvaButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 101;
`;

const Wrapper = styled.div`
  --radius: 20px;

  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: var(--size);
  min-width: var(--min-size);
  max-width: var(--max-size);
  height: var(--size);
  min-height: var(--min-size);
  max-height: var(--max-size);

  overflow: hidden;
  color: var(--color-far);
  font-size: 14px;
  user-select: none;
  white-space: pre;

  cursor: pointer;
  border-radius: var(--radius);
`;

const ScreenWithBackground = styled.div<{ $proportion: number }>`
  ${props => {
    return css`
      width: ${props.$proportion < 1 ? `calc(100% * ${props.$proportion})` : '100%'};
      height: ${props.$proportion < 1 ? '100%' : `calc(100% / ${props.$proportion})`};
    `;
  }}
`;
