import { useEffect, useState } from "react";
import mylib from "../../../my-lib/MyLib";
import StrongEditableField from "../../../strong-control/StrongEditableField";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../../atts/ScheduleWidgetBindAtts";
import ScheduleWidgetCleans from "../../complect/ScheduleWidgetCleans";
import ScheduleWidgetDayEventAtts from "../../events/atts/ScheduleWidgetDayEventAtts";

export default function ScheduleWidgetDayEvent(props: {
    scope: string,
    event: IScheduleWidgetDayEvent,
    eventi: number,
    schedule: IScheduleWidget,
    day: IScheduleWidgetDay,
    prevTime: number,
    isShowPeriodsNotTs: boolean,
    onClickOnTs: () => void,
    redact: boolean | nil,
    wakeupMs: number,
}) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    let timerClassNamePlus = '';
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, null, null, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventmi/', props.event.mi);
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        if (isSelfRedact) setIsExpand(true);
    }, [isSelfRedact]);

    if (!box) return <>Неизвестный тип события</>;

    const eventTm = ScheduleWidgetCleans.takeEventTime(props.event, box);
    if (props.isShowPeriodsNotTs) {
        timeMark = eventTm + 'м';
        timerClassNamePlus = props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null) ? '' : ' color--7';
    } else {
        const date = new Date(props.schedule.start);
        date.setHours(0, 0, 0, props.wakeupMs + (props.prevTime - eventTm) * mylib.howMs.inMin);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    return <div className={'day-event' + (isExpand && !props.redact ? ' expand' : '')}>
        <div className={'item-header flex flex-gap between' + (props.redact ? '' : ' pointer')} onClick={() => !props.redact && setIsExpand(is => !is)}>
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
                    isPossibleEmptyValue
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
                isPossibleEmptyValue
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
                    forTitle={`${box.title}: ${props.event.topic}`}
                />
                : <ScheduleWidgetDayEventAtts
                    scope={selfScope}
                    typeBox={box}
                    event={props.event}
                    day={props.day}
                />}
        </div>
    </div>;
}
