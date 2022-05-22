import { useMemo } from "react";
import useCmNav from "../../base/useCmNav";
import { useCcat } from "../cat/useCcat";
import { Com } from "./Com";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";
import useSelectedComs from "../../base/useSelectedComs";


export default function useComPack(): [Com[] | nil, string] {
    const [ccat] = useCcat();
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { route } = useCmNav();
    const { takeSelectedComs } = useSelectedComs();

    return useMemo(() => {
        return route?.includes('marks')
            ? [markedComs, " - Избранное"]
            : currentMeeting && route?.includes('meetings')
                ? [currentMeeting.coms, " - " + currentMeeting.name]
                : currentMeeting && route?.includes('selected')
                    ? [takeSelectedComs(), " - Выбранное"]
                    : ccat ?
                        [ccat.wraps.map(wrap => wrap.com), " - " + ccat.name]
                        : [null, ""];
    }, [ccat, currentMeeting, markedComs, route]);
}