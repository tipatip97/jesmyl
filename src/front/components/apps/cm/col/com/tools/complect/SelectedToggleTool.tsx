import {
  IconCheckmarkCircle02SolidRounded,
  IconCheckmarkCircle02StrokeRounded,
} from '../../../../../../../complect/the-icon/icons/checkmark-circle-02';
import useSelectedComs from '../../../../base/useSelectedComs';
import { ComTool } from '../ComTool';
import { useComToolsCcomContext } from '../useMigratableComTools';

export const SelectedToggleTool = () => {
  const ccom = useComToolsCcomContext();
  const { toggleSelectedCom, selectedComPosition: isSelected } = useSelectedComs();

  return (
    ccom && (
      <ComTool
        title={isSelected(ccom.wid) ? 'Убрать из выбранных' : 'Выбрать песню'}
        Icon={isSelected(ccom.wid) ? IconCheckmarkCircle02SolidRounded : IconCheckmarkCircle02StrokeRounded}
        onClick={() => toggleSelectedCom(ccom.wid)}
      />
    )
  );
};
