import mylib from "../../my-lib/MyLib";
import StrongEditableField from "../../strong-control/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { ScheduleWidgetDayListItemProps as ScheduleWidgetEventListProps } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import ScheduleWidgetDayEventAtts from "./ScheduleWidgetEventAtt";

export default function ScheduleWidgetEvent(props: ScheduleWidgetEventListProps) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    const { editIcon, isRedact } = useIsRedactArea(true, props.redact || null, null, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventmi:', props.event.mi);

    if (!box) return <>Неизвестный тип события</>;

    const eventTm = ScheduleWidgetCleans.takeEventTime(props.event, box);
    if (props.isShowPeriodsNotTs) timeMark = eventTm + 'м';
    else {
        const date = new Date(props.schedule.start);
        date.setHours(0, 0, 0, props.wakeupMs + (props.prevTime - eventTm) * mylib.howMs.inMin);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    return <div className="list-item">
        <div className="title flex flex-gap between">
            <div className="left-part flex flex-gap">
                <span className="time-mark pointer" onClick={props.onClickOnTs}>{timeMark}</span>
                <span className="color--3">{box.title}{props.event.topic ? ': ' : ''}</span>
                <span>{props.event.topic}</span>
            </div>
            {editIcon}
        </div>
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
        {props.event.dsc && <div className="item-description">{props.event.dsc}</div>}
        {box.atts && <ScheduleWidgetDayEventAtts atts={box.atts} item={props.event} day={props.day} />}
    </div>;
}
