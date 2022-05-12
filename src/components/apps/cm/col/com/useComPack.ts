import { useMemo } from "react";
import useCmNav from "../../base/useCmNav";
import { useCcat } from "../cat/useCcat";
import { Com } from "./Com";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";


export default function useComPack(): [Com[] | nil, string] {
    const [ccat] = useCcat();
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { route } = useCmNav();

    return useMemo(() => {
        return route?.includes('lists')
            ? route.includes('marks')
                ? [markedComs, " - Избранное"]
                : currentMeeting && route.includes('meetings')
                    ? [currentMeeting.coms, " - " + currentMeeting.name]
                    : ccat ?
                        [ccat.coms, " - " + ccat.name]
                        : [null, ""]
            : [null, ""];
    }, [ccat, currentMeeting, markedComs, route]);
}