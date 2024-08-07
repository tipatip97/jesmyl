import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import { IconScissor01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/scissor-01';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import TheOrder from '../../../../../col/com/order/TheOrder';
import { EditableCom } from '../../com/EditableCom';

export const CutTextRedactor = ({ ccom, coli }: { ccom: EditableCom; coli: number }) => {
  const reps = ccom.prepareCutBlock(coli);
  const exec = useExerExec();

  return (
    reps && (
      <>
        <IconButton
          Icon={IconScissor01StrokeRounded}
          disabled={reps.disabled}
          disabledReason={() => exec(reps.disabledReason)}
          className="color--ok margin-gap"
          onClick={() => exec(ccom.cutBlock(coli, reps.ords))}
          postfix="Разделить текст"
        />
        {reps.ords.map((ord, ordi) => (
          <TheOrder
            key={ordi}
            com={ccom}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            orderUnit={ord}
            orderUniti={ordi}
          />
        ))}
      </>
    )
  );
};
