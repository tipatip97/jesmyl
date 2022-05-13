import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { riseUpMeetingsUpdate, setCurrentMeetingw } from "../../Cm.store";
import { localCols, useCols } from "../../cols/useCols";
import { MeetingsEvent } from "./MeetingsEvent";
import { Meetings } from "./Meetings";

let localMeetings: Meetings | nil;
let currentMeeting: MeetingsEvent | nil;

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.numMeetingsUpdate);
    const meetings = useSelector((state: RootState) => state.cm.meetings);
    const meetingw = useSelector((state: RootState) => state.cm.eventw);
    const { goTo } = useCmNav();
    const [cols] = useCols();

    useEffect(() => {
        if (cols && meetings) {
            localMeetings = new Meetings(meetings, cols);
            setCurrMeeting(meetingw);
            dispatch(riseUpMeetingsUpdate());
        }
    }, [meetings, cols]);

    return {
        meetings: localMeetings,
        currentMeeting,
        goToMeeting: (meetingw: number) => {
            setCurrMeeting(meetingw);
            cmStorage.set('eventw', meetingw);
            dispatch(setCurrentMeetingw(meetingw));
            goTo('meeting');
        },
    };
}

cmStorage.listen('meetings', 'useMeetings global', (val) => {
    localMeetings = new Meetings(val, localCols);
});

const setCurrMeeting = (meetingw?: number) => meetingw != null && (currentMeeting = localMeetings?.events?.find(meeting => meeting.wid === meetingw));