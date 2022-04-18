import { cmStorage } from "../../../../../../shared/jstorages";


const chords = cmStorage.getOr('chords', {});

export function useChords() {

    return {
        chords,
    };
}

