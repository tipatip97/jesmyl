import { IconStarSolidRounded, IconStarStrokeRounded } from '../../../../../../../complect/the-icon/icons/star';
import { useMarks } from '../../../../lists/marks/useMarks';
import { ComTool } from '../ComTool';
import { useComToolsCcomContext } from '../useMigratableComTools';

export const MarkedComTool = () => {
  const ccom = useComToolsCcomContext();
  const { isMarked, toggleMarked } = useMarks();

  return (
    ccom && (
      <ComTool
        title={isMarked(ccom.wid) ? 'Удалить избранное' : 'Добавить избранное'}
        Icon={isMarked(ccom.wid) ? IconStarSolidRounded : IconStarStrokeRounded}
        onClick={() => toggleMarked(ccom.wid)}
      />
    )
  );
};
