import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { ChordVisibleVariant } from "../Cm.model";
import di from "../Cm.store";
import cmStorage from "../cmStorage";

const chordVisibleVariantSelector = (state: RootState) => state.cm.chordVisibleVariant;

export function useChordVisibleVariant(): [ChordVisibleVariant, (val: ChordVisibleVariant) => void] {
    const dispatch = useDispatch();

    return [
        useSelector(chordVisibleVariantSelector),
        (val: ChordVisibleVariant) => {
            cmStorage.set('chordVisibleVariant', val);
            dispatch(di.setChordVisibleVariant(val));
        }
    ];
}
