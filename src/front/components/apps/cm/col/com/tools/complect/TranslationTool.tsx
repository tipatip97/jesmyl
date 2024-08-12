import { IconComputerStrokeRounded } from '../../../../../../../complect/the-icon/icons/computer';
import { useCcom } from '../../useCcom';
import { ComTool } from '../ComTool';

export const TranslationTool = () => {
  const ccom = useCcom();

  return (
    ccom && (
      <ComTool
        title="Слайды"
        Icon={IconComputerStrokeRounded}
        path={`../@tran?comw=${ccom.wid}`}
      />
    )
  );
};
