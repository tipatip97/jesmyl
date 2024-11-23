import { makeRegExp } from 'shared/utils';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/cancel-01';
import { IconGridStrokeRounded } from '../../../../../../../../complect/the-icon/icons/grid';
import { IconScissor01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/scissor-01';
import { EditableCom } from '../../com/EditableCom';

interface Props {
  ccoln: 'texts' | 'chords';
  ccom: EditableCom;
  coli: number;
  colText: string;
}

export default function TextsChordsRedactorTextActions({ ccoln, ccom, coli, colText }: Props) {
  const exec = useExerExec();

  if (!ccom) return null;

  const istcoln = ccoln === 'texts';

  return (
    <span className="flex flex-gap">
      {!istcoln && makeRegExp('/[A-H]b/').exec(colText) && (
        <IconButton
          Icon={IconGridStrokeRounded}
          onClick={() => exec(ccom.replaceBemoles(coli))}
        />
      )}
      {istcoln &&
        ccom.verticalDivideBlockRender(
          exec,
          coli,
        )((isShow, attrs) => {
          return (
            isShow && (
              <IconButton
                Icon={IconScissor01StrokeRounded}
                {...attrs}
              />
            )
          );
        })}
      <IconButton
        Icon={IconCancel01StrokeRounded}
        onClick={() => exec(ccom.removeBlock(ccoln, coli))}
        confirm={`Удалить блок?\n\n${colText}`}
      />
    </span>
  );
}
