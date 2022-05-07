import useExer from "../../../../../../../../complect/exer/useExer";
import { cmExer } from "../../../../../Cm.store";
import { EditableCom } from "../../EditableCom";


export default function useEditTextsChords(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        changeBlock: (coln: 'texts' | 'chords', coli: number, value: string) => exec(com?.changeBlock(coln, coli, value)),
        insertBlocks: (coln: 'texts' | 'chords', coli: number, value: string) => exec(com?.insertBlocks(coln, coli, value)),
    };
    return ret;
}