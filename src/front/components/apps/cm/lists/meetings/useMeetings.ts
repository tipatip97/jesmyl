import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { riseUpMeetingsUpdate, setCurrentEventw } from "../../Cm.store";
import { localCols, useCols } from "../../cols/useCols";
import { MeetingsEvent } from "./MeetingsEvent";
import { Meetings } from "./Meetings";
import cmStorage from "../../cmStorage";

let localMeetings: Meetings | nil;
let currentMeeting: MeetingsEvent | nil;

const numMeetingsUpdateSelector = (state: RootState) => state.cm.numMeetingsUpdate;
const meetingsSelector = (state: RootState) => state.cm.meetings;
const eventwSelector = (state: RootState) => state.cm.eventw;

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector(numMeetingsUpdateSelector);
    const meetings = useSelector(meetingsSelector);
    const eventw = useSelector(eventwSelector);
    const { goTo } = useCmNav();
    const [cols] = useCols();

    useEffect(() => {
        if (cols && meetings) {
            localMeetings = new Meetings(meetings, cols);
            setCurrEvent(eventw);
            dispatch(riseUpMeetingsUpdate());
        }
    }, [meetings, cols]);

    return {
        meetings: localMeetings,
        currentMeeting,
        goToEvent: (eventw: number) => {
            setCurrEvent(eventw);
            cmStorage.set('eventw', eventw);
            dispatch(setCurrentEventw(eventw));
            goTo('event');
        },
    };
}

cmStorage.listen('meetings', 'useMeetings global', (val) => {
    localMeetings = new Meetings(val, localCols);
});

const setCurrEvent = (eventw?: number) => eventw != null && (currentMeeting = localMeetings?.events?.find(meeting => meeting.wid === eventw));