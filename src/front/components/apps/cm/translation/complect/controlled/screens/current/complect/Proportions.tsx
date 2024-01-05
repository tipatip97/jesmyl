import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useDebounceAction } from '../../../../../../../../../complect/useDebounceAction';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TrnslationScreenConfig } from '../../../model';

export const CmTranslateCurrentScreenConfigurationProportions = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TrnslationScreenConfig;
}) => {
  const { updateConfig } = configsStateRef.current;
  const [paddingHPx, setPaddingHPx] = useState(currentConfig.paddingHPx);
  const [paddingVPx, setPaddingVPx] = useState(currentConfig.paddingVPx);
  const update = useDebounceAction(updateConfig);

  useEffect(() => {
    setPaddingHPx(currentConfig.paddingHPx);
    setPaddingVPx(currentConfig.paddingVPx);
  }, [currentConfig]);

  const rangePaddingVPx = (
    <input
      type="range"
      value={paddingVPx}
      onChange={event => {
        update({ paddingVPx: +event.target.value });
        setPaddingVPx(+event.target.value);
      }}
      step={1}
      min={1}
      max={500}
    />
  );

  return (
    <>
      <div className="flex">
        <div>
          <div>
            Вертикаль
            <>{rangePaddingVPx}</>
          </div>
          <div>
            Горизонталь
            {currentConfig.paddingFix ? (
              <>{rangePaddingVPx}</>
            ) : (
              <input
                type="range"
                value={paddingHPx}
                onChange={event => {
                  update({ paddingHPx: +event.target.value });
                  setPaddingHPx(+event.target.value);
                }}
                step={1}
                min={1}
                max={500}
              />
            )}
          </div>
        </div>
        <div className="flex flex-gap">
          <EvaButtonSt
            name="hash"
            $isActive={currentConfig.paddingShowLimits}
            onClick={() => updateConfig({ paddingShowLimits: !currentConfig.paddingShowLimits })}
          />
          <EvaButtonSt
            $isActive={currentConfig.paddingFix}
            name={currentConfig.paddingFix ? 'lock-outline' : 'unlock-outline'}
            onClick={() => updateConfig({ paddingFix: !currentConfig.paddingFix })}
          />
        </div>
      </div>
    </>
  );
};

const EvaButtonSt = styled(EvaButton)<{ $isActive: boolean }>`
  padding: 3px;
  cursor: pointer;
  border-radius: 3px;

  ${props => css`
    background-color: ${props.$isActive ? 'var(--color--7)' : 'var(--color--2)'};
  `}
`;
