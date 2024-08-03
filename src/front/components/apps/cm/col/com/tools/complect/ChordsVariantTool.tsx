import { IconApproximatelyEqualSquareStrokeRounded } from '../../../../../../../complect/the-icon/icons/approximately-equal-square';
import { IconCongruentToSquareStrokeRounded } from '../../../../../../../complect/the-icon/icons/congruent-to-square';
import { IconEqualSignSquareStrokeRounded } from '../../../../../../../complect/the-icon/icons/equal-sign-square';
import { useChordVisibleVariant } from '../../../../base/useChordVisibleVariant';
import { ChordVisibleVariant } from '../../../../Cm.model';
import { ComTool } from '../ComTool';
import { useComToolsCcomContext } from '../useMigratableComTools';

export const ChordsVariantTool = () => {
  const ccom = useComToolsCcomContext();
  const [chordVisibleVariant, setChordVisibleVariant] = useChordVisibleVariant();

  return (
    <ComTool
      title="Показать аккорды"
      Icon={
        chordVisibleVariant === ChordVisibleVariant.Maximal
          ? IconApproximatelyEqualSquareStrokeRounded
          : chordVisibleVariant === ChordVisibleVariant.Minimal
            ? IconCongruentToSquareStrokeRounded
            : IconEqualSignSquareStrokeRounded
      }
      onClick={() => {
        setChordVisibleVariant(
          chordVisibleVariant === ChordVisibleVariant.Maximal
            ? ChordVisibleVariant.None
            : !ccom?.orders?.some(ord => !ord.isMin && ord.texti != null)
              ? chordVisibleVariant === ChordVisibleVariant.None
                ? ChordVisibleVariant.Minimal
                : ChordVisibleVariant.None
              : chordVisibleVariant === ChordVisibleVariant.None
                ? ChordVisibleVariant.Minimal
                : ChordVisibleVariant.Maximal,
        );

        return true;
      }}
    />
  );
};
