import { useMemo } from "react";
import ScheduleWidgetDay, { ScheduleWidgetDayProps } from "../days/ScheduleWidgetDay";
import { ScheduleWidgetAppAttsContext, makeAttStorage, takeScheduleStrongScopeMaker } from "../useScheduleWidget";

export default function ScheduleAlarmDay(props: Omit<ScheduleWidgetDayProps, 'scope'>) {
    const atts = useMemo(() => makeAttStorage(props.schedule), [props.schedule]);
    const scope = takeScheduleStrongScopeMaker(props.schedule.w);

    return <ScheduleWidgetAppAttsContext.Provider value={atts}>
        <ScheduleWidgetDay
            day={props.day}
            dayi={props.dayi}
            schedule={props.schedule}
            scope={scope}
        />
    </ScheduleWidgetAppAttsContext.Provider>;
}
