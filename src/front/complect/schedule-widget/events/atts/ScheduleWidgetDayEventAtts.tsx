import { MyLib } from "../../../my-lib/MyLib";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import ScheduleWidgetDayEventAtt from "./ScheduleWidgetDayEventAtt";

export default function ScheduleWidgetDayEventAtts(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
}>) {
    return <>
        {MyLib.entries(props.event.atts).map(([attKey, att]) => {
            const scope = takeStrongScopeMaker(props.scope, ' attKey/', attKey);

            return <ScheduleWidgetDayEventAtt
                scope={scope}
                typeBox={props.typeBox}
                key={attKey}
                att={att as never}
                attKey={attKey as never}
                day={props.day}
                event={props.event}
            />;
        })}
    </>;
}
