import { Com } from "../col/com/Com";
import { useCols } from "../cols/useCols";
import useCmNav from "./useCmNav";


export default function useSelectedComs() {
    const cols = useCols();
    const { appRouteData: { selectedComws = [] }, setAppRouteData } = useCmNav();

    const ret = {
        selectedComws,
        takeSelectedComs: () => {
            return (cols && selectedComws
                .map(comw => cols.coms.find(com => com.wid === comw))
                .filter(com => com) as Com[]) || [];
        },
        selectedComPosition: (com: Com) => selectedComws.indexOf(com.wid) + 1,
        updateSelectedComws: (selectedComws: number[]) => setAppRouteData({ selectedComws }),
        clearSelectedComws: () => ret.updateSelectedComws([]),
        toggleSelectedCom: (com: Com) => {
            ret.updateSelectedComws(
                ret.selectedComPosition(com)
                    ? selectedComws.filter((comw) => com.wid !== comw)
                    : [...selectedComws, com.wid]
            );
        }
    };
    return ret;
}