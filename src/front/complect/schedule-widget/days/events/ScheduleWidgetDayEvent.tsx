import { useEffect } from "react";
import mylib from "../../../my-lib/MyLib";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../../atts/ScheduleWidgetBindAtts";
import ScheduleWidgetCleans from "../../complect/ScheduleWidgetCleans";
import ScheduleWidgetDayEventAtts from "../../events/atts/ScheduleWidgetDayEventAtts";
import { useIsSchWidgetExpand } from "../../useScheduleWidget";

const msInMin = mylib.howMs.inMin;
const msInDay = mylib.howMs.inDay;

export default function ScheduleWidgetDayEvent(props: {
    scope: string,
    scheduleScope: string,
    event: IScheduleWidgetDayEvent,
    eventi: number,
    dayi: number,
    schedule: IScheduleWidget,
    day: IScheduleWidgetDay,
    prevTime: number,
    isShowPeriodsNotTs: boolean,
    onClickOnTs: () => void,
    redact: boolean | nil,
    wakeupMs: number,
    isPastDay: boolean,
}) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    let timerClassNamePlus = '';
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, null, null, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventmi/', props.event.mi);

    const eventTm = ScheduleWidgetCleans.takeEventTm(props.event, box);
    const eventFinishMs = props.schedule.start + props.wakeupMs + props.prevTime * msInMin + props.dayi * msInDay;
    const eventStartMs = eventFinishMs - eventTm * msInMin;
    const isPastEvent = Date.now() > eventFinishMs;

    const [isExpand, switchIsExpand] = useIsSchWidgetExpand(selfScope, isPastEvent || props.isPastDay);

    useEffect(() => {
        if (isSelfRedact) switchIsExpand(true);
    }, [isSelfRedact, switchIsExpand]);

    if (!box) return <>Неизвестный шаблон события</>;

    if (props.isShowPeriodsNotTs) {
        timeMark = eventTm + 'м';
        timerClassNamePlus = props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null) ? '' : ' color--7';
    } else {
        const date = new Date(eventStartMs);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    return <div
        className={
            'day-event'
            + (isExpand && !props.redact ? ' expand' : '')
            + (props.isPastDay ? '' : isPastEvent ? ' past' : '')
        }>
        <div
            className={'item-header flex flex-gap between' + (props.redact ? '' : ' pointer')}
            onClick={() => !props.redact && switchIsExpand()}
        >
            <div className="left-part flex flex-gap">
                <span
                    className={'time-mark pointer' + timerClassNamePlus}
                    onClick={event => {
                        event.stopPropagation();
                        props.onClickOnTs();
                    }}
                >{timeMark}</span>
                <span className="color--3">{box.title}{props.event.topic ? ': ' : ''}</span>
                <span>{props.event.topic}</span>
            </div>
            {editIcon}
        </div>
        <div className="day-event-content">
            {isRedact && <>
                <StrongEditableField
                    isRedact
                    scope={selfScope}
                    fieldName="field"
                    type="number"
                    value={'' + eventTm}
                    postfix=" мин"
                    title="Продолжительность, мин"
                    icon="clock-outline"
                    mapExecArgs={(args) => ({ ...args, key: 'tm' })}
                />
                <StrongEditableField
                    isRedact
                    scope={selfScope}
                    fieldName="field"
                    value={props.event.topic}
                    title="Тема"
                    icon="bookmark-outline"
                    mapExecArgs={(args) => ({ ...args, key: 'topic' })}
                />
            </>}
            <StrongEditableField
                isRedact={isRedact}
                scope={selfScope}
                fieldName="field"
                multiline
                value={props.event.dsc}
                title="Содержание"
                textClassName=" "
                icon="file-text-outline"
                mapExecArgs={(args) => ({ ...args, key: 'dsc' })}
            />
            {isRedact ?
                <ScheduleWidgetBindAtts
                    atts={props.event.atts}
                    scope={selfScope}
                    scheduleScope={props.scheduleScope}
                    forTitle={`${box.title}${props.event.topic ? `: ${props.event.topic}` : ''}`}
                />
                : <ScheduleWidgetDayEventAtts
                    scope={selfScope}
                    typeBox={box}
                    event={props.event}
                    day={props.day}
                    isPast={isPastEvent || props.isPastDay}
                />}
        </div>
    </div>;
}
