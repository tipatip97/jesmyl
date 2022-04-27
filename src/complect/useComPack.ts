import { useMemo } from "react";
import useCmNav from "../components/apps/cm/base/useCmNav";
import { useCcat } from "../components/apps/cm/col/cat/useCcat";
import { Com } from "../components/apps/cm/col/com/Com";
import { useMarks } from "../components/apps/cm/lists/marks/useMarks";
import { useMeetings } from "../components/apps/cm/lists/meetings/useMeetings";


export default function useComPack(): [Com[] | nil, string] {
    const [ccat] = useCcat();
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { specialPhase } = useCmNav();

    return useMemo(() => {
        return specialPhase
            ? specialPhase === "thematic" && ccat
                ? [ccat.coms, " - " + ccat.name]
                : specialPhase === "meeting" && currentMeeting
                    ? [currentMeeting.coms, " - " + currentMeeting.name]
                    : [markedComs, " - Избранное"]
            : [null, ""];
    }, [ccat, currentMeeting, markedComs, specialPhase]);
}