import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { cmStorage } from "../../../../../shared/jstorages";
import useCmNav from "../../base/useCmNav";
import { riseUpMeetingsUpdate, setCurrentMeetingw, updateMeetingList } from "../../Cm.store";
import { localCols, useCols } from "../../cols/useCols";
import { Meeting } from "./Meeting";
import { Meetings } from "./Meetings";

let localMeetings: Meetings | nil;
let currentMeeting: Meeting | nil;

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.numMeetingsUpdate);
    const meetings = useSelector((state: RootState) => state.cm.cm_meetings);
    const meetingw = useSelector((state: RootState) => state.cm.meetingw);
    const { setPhase } = useCmNav();
    const [cols] = useCols();

    useEffect(() => {
        if (cols && meetings) {
            localMeetings = new Meetings(meetings, cols);
            setCurrMeeting(meetingw);
            dispatch(riseUpMeetingsUpdate());
        }
    }, [meetings, cols]);

    return {
        meetings: localMeetings?.stack,
        currentMeeting,
        isEditable: false,
        createMeeting: () => localMeetings?.create((meetings) => dispatch(updateMeetingList(meetings))),
        goToMeeting: (meetingw: number) => {
            setCurrMeeting(meetingw);
            cmStorage.set('meetingw', meetingw);
            dispatch(setCurrentMeetingw(meetingw));
            setPhase('meeting');
        },
    };
}

cmStorage.listen('cm_meetings', 'useMeetings global', (val) => {
    localMeetings = new Meetings(val, localCols);
});

const setCurrMeeting = (meetingw?: number) => meetingw != null && (currentMeeting = localMeetings?.stack?.find(meeting => meeting.wid === meetingw));