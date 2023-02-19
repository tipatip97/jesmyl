import { useMemo } from "react";
import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";
import { useCcat } from "../cat/useCcat";
import { Com } from "./Com";


export default function useComPack(): [Com[] | nil, string] {
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { route } = useCmNav();
    const { takeSelectedComs, selectedComws } = useSelectedComs();
    const cat = useCcat(route?.includes('all'));

    return useMemo(() => {
        return route?.includes('marks')
            ? [markedComs, " - Избранное"]
            : currentMeeting && route?.includes('meetings')
                ? [currentMeeting.coms, " - " + currentMeeting.name]
                : route?.includes('selected')
                    ? [takeSelectedComs(), " - Выбранное"]
                    : route?.includes('all')
                        ? cat
                            ? [cat.wraps.map(wrap => wrap.com), " - " + cat.name]
                            : [null, '']
                        : [null, ""];
    }, [cat, currentMeeting, markedComs, route, selectedComws]);
}