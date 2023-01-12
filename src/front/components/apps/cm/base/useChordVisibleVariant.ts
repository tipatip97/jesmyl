import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { cmStorage } from "../../../../shared/jstorages";
import { ChordVisibleVariant } from "../Cm.model";
import { setChordVisibleVariant } from "../Cm.store";

const chordVisibleVariantSelector = (state: RootState) => state.cm.chordVisibleVariant;

export function useChordVisibleVariant(): [ChordVisibleVariant, (val: ChordVisibleVariant) => void] {
    const dispatch = useDispatch();

    return [
        useSelector(chordVisibleVariantSelector),
        (val: ChordVisibleVariant) => {
            cmStorage.set('chordVisibleVariant', val);
            dispatch(setChordVisibleVariant(val));
        }
    ];
}
