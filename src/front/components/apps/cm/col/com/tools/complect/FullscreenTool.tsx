import { IconArrowExpand01StrokeRounded } from '../../../../../../../complect/the-icon/icons/arrow-expand-01';
import { useFullScreen } from '../../../../../../../complect/useFullscreen';
import { ComTool } from '../ComTool';

export const FullscreenTool = () => {
  const [, switchFullscreen] = useFullScreen();

  return (
    <ComTool
      title="На весь экран"
      Icon={IconArrowExpand01StrokeRounded}
      onClick={() => switchFullscreen(true)}
    />
  );
};
