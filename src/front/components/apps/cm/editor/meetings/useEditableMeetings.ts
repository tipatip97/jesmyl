import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpMeetingsUpdate } from "../../Cm.store";
import useCmNav from "../../base/useCmNav";
import { IExportableMeetings } from "../../lists/meetings/Meetings.model";
import { useEditableCols } from "../col/useEditableCols";
import { editEventNavPhasePoint } from "../editorNav";
import { EditableMeetings } from "./EditableMeetings";
import { EditableMeetingsEvent } from "./EditableMeetingsEvent";

let localEditableMeetings: EditableMeetings | nil;
let currentEvent: EditableMeetingsEvent | nil;

const numMeetingsUpdateSelector = (state: RootState) => state.cm.numMeetingsUpdate;
const meetingsSelector = (state: RootState) => state.cm.meetings;

export function useEditableMeetings() {
    const dispatch = useDispatch();
    useSelector(numMeetingsUpdateSelector);
    const meetings = useSelector(meetingsSelector);
    const { jumpTo, appRouteData: { eventw } } = useCmNav();
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
        currentEvent,
        setEditableMeetings: (meetings?: IExportableMeetings) => {
            localEditableMeetings = new EditableMeetings(meetings, cols);
            dispatch(riseUpMeetingsUpdate());
        },
        goToEvent: (eventw: number) => {
            setCurrEvent(eventw);
            jumpTo({ phase: editEventNavPhasePoint, data: { eventw } });
        },
    };
}

const setCurrEvent = (eventw?: number) => eventw != null && (currentEvent = localEditableMeetings?.events?.find(meeting => meeting.wid === eventw));