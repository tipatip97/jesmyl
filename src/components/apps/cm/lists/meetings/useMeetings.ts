import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { cmStorage } from "../../../../../store/jstorages";
import useNav from "../../base/useNav";
import { riseUpMeetingsUpdate, setCurrentMeetingw, updateMeetingList } from "../../Cm.store";
import { useCols } from "../../cols/useCols";
import { Meeting } from "./Meeting";
import { Meetings } from "./Meetings";

let localMeetings: Meetings | nil;
let currentMeeting: Meeting | nil;

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.numMeetingsUpdate);
    const meetings = useSelector((state: RootState) => state.cm.cm_meetings);
    const meetingw = useSelector((state: RootState) => state.cm.meetingw);
    const { setPhase } = useNav();
    const [cols] = useCols();

    cmStorage.listen('cm_meetings', 'useMeetings hook', (val) => dispatch(updateMeetingList(val)));

    useEffect(() => {
        localMeetings = new Meetings(meetings, cols);
        dispatch(riseUpMeetingsUpdate());
    }, [meetings]);

    useEffect(() => {
        if (localMeetings) {
            currentMeeting = localMeetings.stack.find(meeting => meeting.wid === meetingw);
            cmStorage.set('meetingw', meetingw);
        }
    }, [meetingw]);

    return {
        meetings: localMeetings?.stack,
        currentMeeting,
        isEditable: false,
        createMeeting: () => localMeetings?.create((meetings) => dispatch(updateMeetingList(meetings))),
        goToMeeting: (meetingw: number) => {
            dispatch(setCurrentMeetingw(meetingw));
            setPhase('meeting');
        },
    };
}
