import mylib from "../../my-lib/MyLib";
import useIsRedactArea from "../../useIsRedactArea";
import { ScheduleWidgetDayListItemProps as ScheduleWidgetDayEventListProps } from "../ScheduleWidget.model";
import ScheduleWidgetDayEventAtts from "./ScheduleWidgetDayEventAtt";

export default function ScheduleWidgetDayEvent(props: ScheduleWidgetDayEventListProps) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    const { editIcon } = useIsRedactArea(true, props.redact || null, null, true);

    if (!box) return <>Неизвестный тип события</>;

    const eventPeroiodTime = props.event.tm || box.tm || 0;
    if (props.isShowPeriodsNotTs) timeMark = eventPeroiodTime + 'м';
    else {
        const date = new Date(props.schedule.start);
        date.setHours(0, 0, 0, props.wakeupMs + (props.prevTime - eventPeroiodTime) * mylib.howMs.inMin);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    return <div className="list-item">
        <div className="title flex flex-gap between">
            <div className="left-part flex flex-gap">
                <span className="time-mark pointer" onClick={props.onClickOnTs}>{timeMark}</span>
                <span className="color--3">{box.title}{props.event.title ? ': ' : ''}</span>
                <span>{props.event.title}</span>
            </div>
            {editIcon}
        </div>
        {props.event.dsc && <div className="item-description">{props.event.dsc}</div>}
        {box.atts && <ScheduleWidgetDayEventAtts atts={box.atts} item={props.event} day={props.day} />}
    </div>;
}
