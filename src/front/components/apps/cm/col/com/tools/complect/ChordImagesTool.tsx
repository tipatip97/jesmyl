import { useAtomSet } from '../../../../../../../complect/atoms';
import { IconImageCompositionOvalStrokeRounded } from '../../../../../../../complect/the-icon/icons/image-composition-oval';
import { isOpenChordImagesAtom } from '../../../../molecules';
import { ComTool } from '../ComTool';

export const ChordImagesTool = () => {
  const setIsOpen = useAtomSet(isOpenChordImagesAtom);

  return (
    <ComTool
      title="Изображения аккордов"
      Icon={IconImageCompositionOvalStrokeRounded}
      onClick={() => setIsOpen(true)}
    />
  );
};
