import styled, { css } from 'styled-components';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
import { useActualRef } from '../../../../../../complect/useActualRef';
import { ControlledTranslationStateRef } from './hooks';
import { useCmTranslationConfigs } from './hooks/configs';
import TranslationScreen from './screen/TranslationScreen';
import { CmTranslateCurrentScreenPositionConfigurators } from './screens/current/complect/position/Position';

export const CmTranslationSlidePreview = ({ stateRef }: { stateRef: ControlledTranslationStateRef }) => {
  const configsState = useCmTranslationConfigs();
  const configsStateRef = useActualRef(configsState);

  const [fullNode, openFull] = useFullContent(() => {
    return (
      <>
        {configsState.currentConfig && (
          <div className="flex center margin-big-gap-t">
            <FullContainer className="flex center bgcolor--3">
              <ScreenWithBackground $proportion={configsState.currentConfig.proportion}>
                <TranslationScreen
                  proportion={configsState.currentConfig.proportion}
                  innerNode={
                    <CmTranslateCurrentScreenPositionConfigurators
                      currentConfig={configsState.currentConfig}
                      configsStateRef={configsStateRef}
                    />
                  }
                />
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
      {configsState.currentConfig == null || stateRef.current.currWin == null ? (
        <TranslationScreen />
      ) : (
        <>
          <div className="flex center full-width full-height bgcolor--2">
            <ScreenWithBackground $proportion={configsState.currentConfig.proportion}>
              <TranslationScreen
                proportion={configsState.currentConfig.proportion}
                innerNode={
                  configsState.currentConfig && (
                    <CmTranslateCurrentScreenPositionConfigurators
                      currentConfig={configsState.currentConfig}
                      configsStateRef={configsStateRef}
                    />
                  )
                }
              />
            </ScreenWithBackground>
          </div>
          <FullButton
            name="maximize-outline"
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
