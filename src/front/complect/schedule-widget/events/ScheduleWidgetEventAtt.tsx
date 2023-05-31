import React from "react";
import { IScheduleWidgetDayListItem, ScheduleWidgetAttKey, ScheduleWidgetDay } from "../ScheduleWidget.model";
import { useScheduleWidgetAppAttsContext } from "../useScheduleWidget";

export default function ScheduleWidgetEventAtt(props: {
    atts: ScheduleWidgetAttKey[],
    item: IScheduleWidgetDayListItem,
    day: ScheduleWidgetDay,
}) {
    const appAtts = useScheduleWidgetAppAttsContext();
    return <>{props.atts.map((attKey) => {
        return <React.Fragment key={attKey}>{appAtts[attKey].result?.(props.item, props.day)}</React.Fragment>
    })}</>;
}