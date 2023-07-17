import { useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import StrongDiv from "../../../../../complect/strong-control/StrongDiv";
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
    scope,
    isRedact,
    switchIsRedact,
}: {
    value: CmComBindAttach,
    scope: string,
    isRedact: boolean,
    switchIsRedact: (is?: boolean) => void,
}) {
    const { meetings } = useMeetings();
    const [ccom, setCcom] = useState<Com | und>();
    const [meetingsSelectorNode] = useFullContent(() => {
        return <>{meetings &&
            <MeetingsInner
                meetings={meetings}
                onEventClick={onEventClick}
                asEventBox={(event) =>
                    <StrongDiv
                        scope={scope}
                        fieldName=""
                        cud="U"
                        onClick={() => switchIsRedact(false)}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                value: { eventw: event.wid },
                            };
                        }}
                    >
                        <EvaIcon
                            name={event.wid === value.eventw ? 'checkmark-square-2-outline' : 'square-outline'}
                        />
                    </StrongDiv>
                }
            />
        }</>;
    }, isRedact ? 'open' : null, switchIsRedact);

    const event = value.eventw ? meetings?.events?.find((event) => event.wid === value.eventw) : null;

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
            {/* <EvaButton name="edit-outline" onClick={() => showMeetingsSelector()} /> */}
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