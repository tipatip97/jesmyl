import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpMeetingsUpdate } from "../../Cm.store";
import useCmNav from "../../base/useCmNav";
import cmStorage from "../../cmStorage";
import { localCols, useCols } from "../../cols/useCols";
import { Meetings } from "./Meetings";
import { MeetingsEvent } from "./MeetingsEvent";

let localMeetings: Meetings | nil;
let currentMeeting: MeetingsEvent | nil;

const numMeetingsUpdateSelector = (state: RootState) => state.cm.numMeetingsUpdate;
const meetingsSelector = (state: RootState) => state.cm.meetings;

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector(numMeetingsUpdateSelector);
    const meetings = useSelector(meetingsSelector);
    const { goTo, appRouteData: { eventw } } = useCmNav();
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
            goTo({ place: 'event', data: { eventw } });
        },
    };
}

cmStorage.listen('meetings', 'useMeetings global', (val) => {
    localMeetings = new Meetings(val, localCols);
});

const setCurrEvent = (eventw?: number) => eventw != null && (currentMeeting = localMeetings?.events?.find(meeting => meeting.wid === eventw));