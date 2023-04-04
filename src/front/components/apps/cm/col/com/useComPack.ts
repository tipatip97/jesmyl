import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";
import { useCcat } from "../cat/useCcat";
import { Com } from "./Com";
import { useCcom } from "./useCcom";


export default function useComPack(isSingleInAll?: boolean): [Com[] | nil, string] {
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { route } = useCmNav();
    const ccom = useCcom();
    const { takeSelectedComs } = useSelectedComs();
    const cat = useCcat(route?.includes('all'));

    return route ?
        route.includes('marks')
            ? [markedComs, ' - Избранное']
            : currentMeeting && route.includes('meetings')
                ? [currentMeeting.coms, ' - ' + currentMeeting.name]
                : route.includes('selected')
                    ? [takeSelectedComs(), ' - Выбранное']
                    : isSingleInAll && ccom
                        ? [[ccom], ' - ' + ccom.name]
                        : route.includes('all') && cat
                            ? [cat.searchedComs, ' - ' + cat.name]
                            : [null, '']
        : [null, ''];
}