import useExer from "../../../../../complect/exer/useExer";
import { cmExer } from "../../Cm.store";
import { EditableCom } from "../../col/com/EditableCom";


export default function useEditComposition(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        rename: (name: string) => exec(com?.rename(name)),
    };
    return ret;
}