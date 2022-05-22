import { useDispatch, useSelector } from "react-redux";
import mylib from "../../../../complect/my-lib/MyLib";
import { cmStorage } from "../../../../shared/jstorages";
import { RootState } from "../../../../shared/store";
import { updateSelectedComws } from "../Cm.store";
import { Com } from "../col/com/Com";
import { useCols } from "../cols/useCols";

let localSelectedComs: Com[] | nil;

export default function useSelectedComs() {
    const dispatch = useDispatch();
    const [cols] = useCols();

    const ret = {
        selectedComws: useSelector((state: RootState) => state.cm.selectedComws),
        takeSelectedComs: (): Com[] => {
            if (localSelectedComs?.length) return localSelectedComs;

            localSelectedComs = cols && ret.selectedComws
                .map(comw => cols.coms.find(com => com.wid === comw))
                .filter(com => com) as Com[];

            return localSelectedComs ?? [];
        },
        isPreventSaveNav: () => !mylib.isEq(cmStorage.get('selectedComws'), ret.selectedComws),
        selectedComPosition: (com: Com) => ret.selectedComws.indexOf(com.wid) + 1,
        updateSelectedComws: (comws: number[]) => dispatch(updateSelectedComws(comws)),
        clearSelectedComws: () => {
            ret.updateSelectedComws([]);
            localSelectedComs = null;
            cmStorage.set('selectedComws', []);
        },
        saveSelectedComws: () => {
            ret.updateSelectedComws(ret.selectedComws);
            cmStorage.set('selectedComws', ret.selectedComws);
        },
        getLocalSelectedComws: () => cmStorage.get('selectedComws'),
        toggleSelectedCom: (com: Com) => {
            ret.updateSelectedComws(
                ret.selectedComPosition(com)
                    ? ret.selectedComws.filter((comw) => com.wid !== comw)
                    : [...ret.selectedComws, com.wid]
            );
        }
    };
    return ret;
}