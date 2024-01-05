import styled from 'styled-components';
import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import { useControlledTranslation } from './hooks';
import { useCmTranslationConfigs } from './hooks/configs';

export const CmTranslationControlPanel = () => {
  const state = useControlledTranslation();
  const configs = useCmTranslationConfigs();

  return (
    <div className="flex flex-gap between">
      <ControlButton onClick={state.prevText}>
        <EvaIcon name="chevron-left-outline" />
      </ControlButton>
      <ControlButton onClick={state.nextText}>
        <EvaIcon name="chevron-right-outline" />
      </ControlButton>
      <ControlButton
        title={state.currWin ? '' : 'Enter'}
        className="start-translation flex"
        disabled={!configs.configs.length}
        onClick={() => {
          if (configs.windows.length) {
            configs.windows.forEach(win => win?.focus());
            return;
          }

          state.watchTranslation();
        }}
      >
        {configs.windows.length ? <EvaIcon name="monitor-outline" /> : <EvaIcon name="play-outline" />}
      </ControlButton>
      <ControlButton
        title="T"
        className={state.positionY === 'center' ? 'inactive' : ''}
        onClick={state.switchPosition}
      >
        <EvaIcon name="upload-outline" />
      </ControlButton>
      <ControlButton
        title="esc, V"
        onClick={() => state.switchVisible()}
      >
        <EvaIcon name="square-outline" />
      </ControlButton>
    </div>
  );
};

const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  background-color: var(--color--1);
  width: 100%;
  height: 30px;
  color: var(--color--4);

  &.start-translation {
    --icon-color: var(--color--5);

    background-color: var(--color--7);
    min-width: 40vw;
  }
`;
