import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import ScheduleWidgetDayEventAtt from "./ScheduleWidgetDayEventAtt";

export default function ScheduleWidgetDayEventAtts(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
}>) {
    return <>{props.typeBox.atts?.map((attKey) => {
        return <ScheduleWidgetDayEventAtt
            scope={props.scope}
            typeBox={props.typeBox}
            key={attKey}
            attKey={attKey}
            day={props.day}
            event={props.event}
        />;
    })}</>;
}
