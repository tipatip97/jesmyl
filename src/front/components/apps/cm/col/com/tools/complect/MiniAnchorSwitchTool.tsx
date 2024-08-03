import { useAtom } from '../../../../../../../complect/atoms';
import { IconMenu01StrokeRounded } from '../../../../../../../complect/the-icon/icons/menu-01';
import { IconMinusSignStrokeRounded } from '../../../../../../../complect/the-icon/icons/minus-sign';
import { cmMolecule } from '../../../../molecules';
import { ComTool } from '../ComTool';

const isMiniAnchorAtom = cmMolecule.select(s => s.isMiniAnchor);

export const MiniAnchorSwitchTool = () => {
  const [isMiniAnchor, setIsMiniAnchor] = useAtom(isMiniAnchorAtom);

  return (
    <ComTool
      title={isMiniAnchor ? 'Раскрыть ссылки' : 'Свернуть ссылки'}
      Icon={isMiniAnchor ? IconMinusSignStrokeRounded : IconMenu01StrokeRounded}
      onClick={() => setIsMiniAnchor(!isMiniAnchor)}
    />
  );
};
