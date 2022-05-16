import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { updateSelectedComs } from "../Cm.store";
import { Com } from "../col/com/Com";

export default function useSelectedComs() {
    const dispatch = useDispatch();
    const ret = {
        selectedComs: useSelector((state: RootState) => state.cm.selectedComs),
        isSelected: (com: Com) => {
            return ret.selectedComs.indexOf(com.wid) > -1;
        },
        setSelectedComs: (comws: number[]) => dispatch(updateSelectedComs(comws)),
        toggleSelectedCom: (com: Com) => {
            ret.setSelectedComs(
                ret.isSelected(com)
                    ? ret.selectedComs.filter((comw) => com.wid !== comw)
                    : [...ret.selectedComs, com.wid]
            );
        }
    };
    return ret;
}