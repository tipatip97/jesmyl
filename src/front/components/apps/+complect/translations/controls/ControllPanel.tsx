import styled from 'styled-components';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import { useScreenTranslationConfigs } from '../hooks/configs';
import { useSwitchIsScreenTranslationTextVisible } from '../hooks/is-visible';
import { useWatchScreenTranslations } from '../hooks/watch-translation';
import { useScreenTranslationCurrentWindow, useScreenTranslationWindows } from '../hooks/windows';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export const ScreenTranslationControlPanel = ({ onNext, onPrev }: Props) => {
  const configs = useScreenTranslationConfigs();
  const windows = useScreenTranslationWindows();
  const currWin = useScreenTranslationCurrentWindow();
  const watchTranslation = useWatchScreenTranslations();
  const switchIsVisible = useSwitchIsScreenTranslationTextVisible();

  return (
    <div className="flex flex-gap between margin-big-gap-t">
      <ControlButton onClick={onPrev}>
        <EvaIcon name="chevron-left-outline" />
      </ControlButton>
      <ControlButton onClick={onNext}>
        <EvaIcon name="chevron-right-outline" />
      </ControlButton>
      <ControlButton
        title={currWin ? '' : 'Enter'}
        className="start-translation flex"
        disabled={!configs.length}
        onClick={watchTranslation}
      >
        {windows.length ? <EvaIcon name="monitor-outline" /> : <EvaIcon name="play-outline" />}
      </ControlButton>
      <ControlButton>
        <EvaIcon name="upload-outline" />
      </ControlButton>
      <ControlButton
        title="esc, V"
        onClick={switchIsVisible}
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
