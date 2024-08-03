import { useAtom } from '../../../../../../../complect/atoms';
import {
  IconDashboardSpeed01SolidRounded,
  IconDashboardSpeed01StrokeRounded,
} from '../../../../../../../complect/the-icon/icons/dashboard-speed-01';
import { cmMolecule } from '../../../../molecules';
import { ComTool } from '../ComTool';

const isMetronomeHideAtom = cmMolecule.select(s => s.isMetronomeHide);

export const HideMetronomeTool = () => {
  const [isMetronomeHide, setIsMetronomeHide] = useAtom(isMetronomeHideAtom);

  return (
    <ComTool
      title="Метроном"
      Icon={isMetronomeHide ? IconDashboardSpeed01StrokeRounded : IconDashboardSpeed01SolidRounded}
      onClick={() => setIsMetronomeHide(!isMetronomeHide)}
    />
  );
};
