import { useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import { ScheduleWidgetAppAttResultItem } from "../../../../../complect/schedule-widget/ScheduleWidget.model";
import { ChordVisibleVariant } from "../../Cm.model";
import { Com } from "../../col/com/Com";
import ComFace from "../../col/com/face/ComFace";
import MeetingsInner from "../../lists/meetings/MeetingsInner";
import { useMeetings } from "../../lists/meetings/useMeetings";
import { CmComBindAttach } from "../cmExternalAttach";
import TheComForFullScreen from "./TheComForFullScreen";

const onEventClick = () => { };

export default function CmExternalComListAtt({
    value,
    attItem,
}: {
    value: CmComBindAttach,
    attItem: ScheduleWidgetAppAttResultItem<CmComBindAttach>,
}) {
    const { meetings } = useMeetings();
    const [ccom, setCcom] = useState<Com | und>();
    const [meetingsSelectorNode, showMeetingsSelector] = useFullContent((closeFull) => {
        return <>{meetings &&
            <MeetingsInner
                meetings={meetings}
                onEventClick={onEventClick}
                asEventBox={(event) => attItem(
                    () => {
                        closeFull();
                        return { eventw: event.wid };
                    },
                    <EvaIcon
                        name={event.wid === value.eventw ? 'checkmark-square-2-outline' : 'square-outline'}
                    />
                )}
            />
        }</>;
    });

    const event = value.eventw ? meetings?.events.find((event) => event.wid === value.eventw) : null;

    const [compositionNode, showComposition] = useFullContent(() => {
        return <TheComForFullScreen
            com={ccom}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            comList={event?.coms}
            onComSet={setCcom}
        />;
    });

    return <>
        {meetingsSelectorNode}
        {compositionNode}
        <div className="flex flex-gap">
            {event
                ? <>
                    Событие
                    <span className="color--7">{event.name}</span>
                </>
                : value.eventw
                    ? <span className="color--ko">Событие не найдено</span>
                    : <span>Событие не определено</span>
            }
            <EvaButton name="edit-outline" onClick={() => showMeetingsSelector()} />
        </div>
        {event?.coms?.map(com => {
            return <ComFace
                key={com.wid}
                com={com}
                importantOnClick={() => {
                    setCcom(com);
                    showComposition();
                }} />
        })}
    </>
}