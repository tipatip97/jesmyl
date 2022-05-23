import useExer from "../../../../../../../../complect/exer/useExer";
import { cmExer } from "../../../../../Cm.store";
import { EditableOrder } from "../orders/EditableOrder";
import { EditableCom } from "../../EditableCom";


export default function useChordApplicationsRedactor(com: EditableCom | nil) {
    const { exec } = useExer(cmExer);
    const ret = {
        setChordPosition: (ord: EditableOrder, textLinei: number, letteri: number) => exec(ord?.setChordPosition(textLinei, letteri)),
    };
    return ret;
}