import useExer from "../../../../../../complect/exer/useExer";
import { cmExer } from "../../../Cm.store";
import { CatTracker } from "../../../col/cat/Cat.model";
import { EditableCat } from "./EditableCat";


export default function useEditCategory(cat: EditableCat | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        rename: (name: string) => exec(cat?.rename(name, exec)),
        setKind: (kind: CatTracker) => exec(cat?.setKind(kind, exec)),
    };
    return ret;
}