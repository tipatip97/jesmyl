import { useEffect, useState } from "react";
import mylib from "../../../my-lib/MyLib";
import StrongEditableField from "../../../strong-control/StrongEditableField";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayListItem } from "../../ScheduleWidget.model";
import ScheduleWidgetCleans from "../../complect/ScheduleWidgetCleans";
import ScheduleWidgetDayEventAtts from "../../events/ScheduleWidgetEventAtt";

export default function ScheduleWidgetDayEvent(props: {

    scope: string,
    event: IScheduleWidgetDayListItem,
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
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, props.redact || null, null, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventmi:', props.event.mi);
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        if (isSelfRedact) setIsExpand(true);
    }, [isSelfRedact]);

    if (!box) return <>Неизвестный тип события</>;

    const eventTm = ScheduleWidgetCleans.takeEventTime(props.event, box);
    if (props.isShowPeriodsNotTs) timeMark = eventTm + 'м';
    else {
        const date = new Date(props.schedule.start);
        date.setHours(0, 0, 0, props.wakeupMs + (props.prevTime - eventTm) * mylib.howMs.inMin);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    return <div className={'day-event' + (isExpand ? ' expand ' : '')}>
        <div className="item-header flex flex-gap between pointer" onClick={() => setIsExpand(is => !is)}>
            <div className="left-part flex flex-gap">
                <span className="time-mark pointer" onClick={props.onClickOnTs}>{timeMark}</span>
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
                icon="file-text-outline"
                mapExecArgs={(args) => ({ ...args, key: 'dsc' })}
            />
            {props.event.dsc && <div className="item-description">{props.event.dsc}</div>}
            {box.atts && <ScheduleWidgetDayEventAtts atts={box.atts} item={props.event} day={props.day} />}
        </div>
    </div>;
}
