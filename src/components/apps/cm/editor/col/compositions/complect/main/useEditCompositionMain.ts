import useExer from "../../../../../../../../complect/exer/useExer";
import { cmExer } from "../../../../../Cm.store";
import { EditableCom } from "../../EditableCom";


export default function useEditCompositionMain(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        rename: (name: string) => exec(com?.rename(name, exec)),
    };
    return ret;
}