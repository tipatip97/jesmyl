import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import { useMarks } from "../../lists/marks/useMarks";
import { useMeetings } from "../../lists/meetings/useMeetings";
import { Com } from "./Com";
import { useCcom } from "./useCcom";

export default function useComPack(): [Com[] | nil, string] {
    const { markedComs } = useMarks();
    const { currentMeeting } = useMeetings();
    const { route } = useCmNav();
    const ccom = useCcom();
    const { takeSelectedComs } = useSelectedComs();

    return route?.includes('marks')
        ? [markedComs, " - Избранное"]
        : currentMeeting && route?.includes('meetings')
            ? [currentMeeting.coms, " - " + currentMeeting.name]
            : route?.includes('selected')
                ? [takeSelectedComs(), " - Выбранное"]
                : ccom
                    ? [[ccom], '']
                    : [null, ''];
}
