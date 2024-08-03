import { useAtom } from '../../../../../../../complect/atoms';
import {
  IconVynil03SolidRounded,
  IconVynil03StrokeRounded,
} from '../../../../../../../complect/the-icon/icons/vynil-03';
import { cmMolecule } from '../../../../molecules';
import { ComTool } from '../ComTool';

const playerHideModeAtom = cmMolecule.select(s => s.playerHideMode);

export const OpenPlayerTool = () => {
  const [playerHideMode, setPlayerHideMode] = useAtom(playerHideModeAtom);

  return (
    <ComTool
      title="Проигрыватель"
      Icon={playerHideMode ? IconVynil03SolidRounded : IconVynil03StrokeRounded}
      onClick={() => setPlayerHideMode(playerHideMode ? '' : 'min')}
    />
  );
};
