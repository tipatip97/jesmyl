import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { setMeetingList } from "../Cm.store";
import { Meetings } from "./Meetings";

let meetings = new Meetings(cmStorage.getOr('cm_meetings', []));

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.cm_meetings);

    cmStorage.listen('cm_meetings', 'useMeetings hook', (val) => dispatch(setMeetingList(val)));

    return {
        meetings: meetings.stack,
        isEditable: false,
        createMeeting: () => meetings.create((meetings) => dispatch(setMeetingList(meetings))),
    };
}
