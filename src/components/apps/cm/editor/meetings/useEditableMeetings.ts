import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { riseUpMeetingsUpdate, setCurrentEventw } from "../../Cm.store";
import { IExportableMeetings } from "../../lists/meetings/Meetings.model";
import { useEditableCols } from "../col/useEditableCols";
import { EditableMeetings } from "./EditableMeetings";
import { EditableMeetingsEvent } from "./EditableMeetingsEvent";

let localEditableMeetings: EditableMeetings | nil;
let currentMeeting: EditableMeetingsEvent | nil;

export function useEditableMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.numMeetingsUpdate);
    const meetings = useSelector((state: RootState) => state.cm.meetings);
    const eventw = useSelector((state: RootState) => state.cm.eventw);
    const { goTo } = useCmNav();
    const [cols] = useEditableCols();

    useEffect(() => {
        if (!localEditableMeetings) {
            localEditableMeetings = new EditableMeetings(meetings, cols);
            dispatch(riseUpMeetingsUpdate());
        }
    }, [meetings, cols, dispatch]);

    useEffect(() => {
        setCurrEvent(eventw);
        dispatch(riseUpMeetingsUpdate());
    }, [dispatch, eventw]);

    return {
        meetings: localEditableMeetings,
        currentMeeting,
        setEditableMeetings: (meetings?: IExportableMeetings) => {
            localEditableMeetings = new EditableMeetings(meetings, cols);
            dispatch(riseUpMeetingsUpdate());
        },
        goToEvent: (eventw: number) => {
            setCurrEvent(eventw);
            dispatch(setCurrentEventw(eventw));
            goTo('event');
            cmStorage.set('eventw', eventw);
        },
    };
}

const setCurrEvent = (eventw?: number) => eventw != null && (currentMeeting = localEditableMeetings?.events?.find(meeting => meeting.wid === eventw));