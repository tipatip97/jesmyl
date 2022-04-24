import useExer from "../../../../../complect/exer/useExer";
import { cmExer } from "../../Cm.store";
import { EditableCat } from "../../col/cat/EditableCat";


export default function useEditCategory(cat: EditableCat | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        rename: (name: string) => exec(cat?.rename(name)),
        setTrack: (name: string) => exec(cat?.setTrack(name, exec)),
    };
    return ret;
}