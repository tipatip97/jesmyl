import useExer from "../../../../../../../../complect/exer/useExer";
import { cmExer } from "../../../../../Cm.store";
import { Cat } from "../../../../../col/cat/Cat";
import { EditableCat } from "../../../categories/EditableCat";
import { EditableCom } from "../../EditableCom";


export default function useEditCompositionCategoryBinds(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        setNativeNumber: (cat: Cat, number: string) => exec(com?.setNativeNumber(cat, number)),
        removeNativeNumber: (cat: Cat) => exec(com?.removeNativeNumber(cat, exec)),
        toggleComExistence: (cat: EditableCat) => exec(cat?.toggleComExistence(com, exec)),
    };
    return ret;
}