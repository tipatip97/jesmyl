import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { ChordVisibleVariant } from "../Cm.model";
import { setChordVisibleVariant } from "../Cm.store";

export function useChordVisibleVariant(): [ChordVisibleVariant, (val: ChordVisibleVariant) => void] {
    const dispatch = useDispatch();

    return [
        useSelector((state: RootState) => state.cm.chordVisibleVariant),
        (val: ChordVisibleVariant) => {
            cmStorage.set('chordVisibleVariant', val);
            dispatch(setChordVisibleVariant(val));
        }
    ];
}
