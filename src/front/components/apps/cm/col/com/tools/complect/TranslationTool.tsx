import { IconComputerStrokeRounded } from '../../../../../../../complect/the-icon/icons/computer';
import { useComTranslationBlock } from '../../../../atoms';
import { useCcom } from '../../useCcom';
import { ComTool } from '../ComTool';

export const TranslationTool = () => {
  const ccom = useCcom();
  const [, setCurrTexti] = useComTranslationBlock();

  return (
    ccom && (
      <ComTool
        title="Слайды"
        Icon={IconComputerStrokeRounded}
        path={`../@tran?comw=${ccom.wid}`}
        onClick={() => setCurrTexti(0)}
      />
    )
  );
};
