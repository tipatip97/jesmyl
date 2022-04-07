import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { ChordVisibleVariant } from "../Cm.model";
import { updateChordVisibleVariant } from "../Cm.store";

export function useChordVisibleVariant(): [ChordVisibleVariant, (val: ChordVisibleVariant) => void] {
    const dispatch = useDispatch();
    const chordVisibleVariant = useSelector((state: RootState) => state.cm.chordVisibleVariant);

    return [chordVisibleVariant, (val: ChordVisibleVariant) => {
        cmStorage.set('chordVisibleVariant', val);
        dispatch(updateChordVisibleVariant(val));
    }];
}
