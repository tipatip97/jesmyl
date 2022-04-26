import useExer from "../../../../../../complect/exer/useExer";
import { cmExer } from "../../../Cm.store";
import { Cat } from "../../../col/cat/Cat";
import { EditableCom } from "./EditableCom";


export default function useEditComposition(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        rename: (name: string) => exec(com?.rename(name, exec)),
        setNativeNumber: (cat: Cat, number: string) => exec(com?.setNativeNumber(cat, number)),
        removeNativeNumber: (cat: Cat) => exec(com?.removeNativeNumber(cat, exec)),
    };
    return ret;
}