import styled from 'styled-components';
import { IconArrowLeft01StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-left-01';
import { IconArrowRight01StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-right-01';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconPlayStrokeRounded } from '../../../../../complect/the-icon/icons/play';
import { IconSquareStrokeRounded } from '../../../../../complect/the-icon/icons/square';
import { IconUpload04StrokeRounded } from '../../../../../complect/the-icon/icons/upload-04';
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
        <IconArrowLeft01StrokeRounded />
      </ControlButton>
      <ControlButton onClick={onNext}>
        <IconArrowRight01StrokeRounded />
      </ControlButton>
      <ControlButton
        title={currWin ? '' : 'Enter'}
        className="start-translation flex"
        disabled={!configs.length}
        onClick={watchTranslation}
      >
        {windows.length ? <IconComputerStrokeRounded /> : <IconPlayStrokeRounded />}
      </ControlButton>
      <ControlButton>
        <IconUpload04StrokeRounded />
      </ControlButton>
      <ControlButton
        title="esc"
        onClick={() => switchIsVisible()}
      >
        <IconSquareStrokeRounded />
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
