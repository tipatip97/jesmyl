import { useEffect } from 'react';
import { addEventListenerPipe, hookEffectPipe } from '../hookEffectPipe';
import { IconArrowShrink02StrokeRounded } from '../the-icon/icons/arrow-shrink-02';
import { useFullScreen } from '../useFullscreen';

export const useGlobalFullscreenChanger = () => {
  const [isFullscreen, switchFullscreen] = useFullScreen();

  useEffect(() => {
    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(window, 'keydown', event => {
          if (event.code === 'Escape') switchFullscreen(false);
        }),
      )
      .effect();
  }, [switchFullscreen]);

  return [
    isFullscreen,
    <IconArrowShrink02StrokeRounded
      className="collapse-fullscreen-button pointer"
      onClick={() => switchFullscreen(false)}
    />,
  ] as const;
};
