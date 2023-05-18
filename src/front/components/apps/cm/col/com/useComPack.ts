import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";
import { useCcat } from "../cat/useCcat";
import { Com } from "./Com";

const altComPacComponent: [null, ''] = [null, ''];

export default function useComPack(com: Com | nil, isSingleInAll?: boolean): [Com[] | nil, string] {
    const { markedComs } = useMarks();
    const { currentEvent } = useMeetings();
    const { route } = useCmNav();
    const { takeSelectedComs } = useSelectedComs();
    const cat = useCcat(route?.includes('all'));

    return route ?
        route.includes('marks')
            ? [markedComs, ' - Избранное']
            : currentEvent && route.includes('meetings')
                ? [currentEvent.coms, ' - ' + currentEvent.name]
                : route.includes('selected')
                    ? [takeSelectedComs(), ' - Выбранное']
                    : isSingleInAll && com
                        ? [[com], ' - ' + com.name]
                        : route.includes('all') && cat
                            ? [cat.searchedComs, ' - ' + cat.name]
                            : altComPacComponent
        : altComPacComponent;
}