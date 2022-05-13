import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { riseUpMeetingsUpdate, setCurrentMeetingw } from "../../Cm.store";
import { localEditableCols, useEditableCols } from "../col/useEditableCols";
import { EditableMeetingsEvent } from "./EditableMeeting";
import { EditableMeetings } from "./EditableMeetings";

let localMeetings: EditableMeetings | nil;
let currentMeeting: EditableMeetingsEvent | nil;

export function useEditableMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.numMeetingsUpdate);
    const meetings = useSelector((state: RootState) => state.cm.meetings);
    const meetingw = useSelector((state: RootState) => state.cm.eventw);
    const { goTo } = useCmNav();
    const [cols] = useEditableCols();

    useEffect(() => {
        if (cols && meetings) {
            localMeetings = new EditableMeetings(meetings, cols);
            setCurrMeeting(meetingw);
            dispatch(riseUpMeetingsUpdate());
        }
    }, [meetings, cols]);

    return {
        events: localMeetings?.events,
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
    localMeetings = new EditableMeetings(val, localEditableCols);
});

const setCurrMeeting = (meetingw?: number) => meetingw != null && (currentMeeting = localMeetings?.events?.find(meeting => meeting.wid === meetingw));