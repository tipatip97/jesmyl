import { MyLib } from "../../../my-lib/MyLib";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import ScheduleWidgetDayEventAtt from "./ScheduleWidgetDayEventAtt";

export default function ScheduleWidgetDayEventAtts(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    isPast: boolean,
    schedule: IScheduleWidget,
}>) {
    return <>
        {props.event.atts && MyLib.entries(props.event.atts).map(([attKey, att]) => {
            const scope = takeStrongScopeMaker(props.scope, ' attKey/', attKey);

            return <ScheduleWidgetDayEventAtt
                scope={scope}
                typeBox={props.typeBox}
                key={attKey}
                att={att}
                attKey={attKey}
                day={props.day}
                schedule={props.schedule}
                event={props.event}
                isPast={props.isPast}
            />;
        })}
    </>;
}
