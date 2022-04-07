import { cmStorage } from "../../../../../../store/jstorages";


const chords = cmStorage.getOr('chords', {});

export function useChords() {

    return {
        chords,
    };
}

