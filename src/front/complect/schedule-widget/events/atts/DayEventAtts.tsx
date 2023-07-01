import { scheduleWidgetUserRights } from "../../../../../back/apps/index/rights";
import { MyLib } from "../../../my-lib/MyLib";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetAppAttsContext, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetDayEventAtt from "./DayEventAtt";

export default function ScheduleWidgetDayEventAtts(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    isPast: boolean,
    schedule: IScheduleWidget,
}>) {
    const [appAtts] = useScheduleWidgetAppAttsContext();
    const rights = useScheduleWidgetRightsContext();
    const myUserR = rights.myUser?.R;
    const atts = MyLib.entries(props.event.atts);

    MyLib.entries(props.typeBox.atts).forEach((attEntry) => {
        if (!atts.some(entry => entry[0] === attEntry[0])) atts.push(attEntry);
    });

    return <>
        {atts.map(([attKey, att]) => {
            const appAtt = appAtts[attKey];
            if (!appAtt || !scheduleWidgetUserRights.checkIsCan(myUserR, appAtt.R)) return null;
            const scope = takeStrongScopeMaker(props.scope, ' attKey/', attKey);

            return <ScheduleWidgetDayEventAtt
                key={attKey}
                scope={scope}
                typeBox={props.typeBox}
                att={att}
                attKey={attKey}
                day={props.day}
                schedule={props.schedule}
                event={props.event}
                isPast={props.isPast}
                isCanRedact={scheduleWidgetUserRights.checkIsCan(myUserR, appAtt.U)}
            />;
        })}
    </>;
}
