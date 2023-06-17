import { useMemo } from "react";
import ScheduleWidgetTopicTitle from "../complect/TopicTitle";
import ScheduleWidgetDay, { ScheduleWidgetDayProps } from "../days/Day";
import { ScheduleWidgetAppAttsContext, ScheduleWidgetRolesContext, ScheduleWidgetSchContext, makeAttStorage, takeScheduleStrongScopeMaker, useScheduleWidgetRoles } from "../useScheduleWidget";

export default function ScheduleAlarmDay(props: Omit<ScheduleWidgetDayProps, 'scope'>) {
    const atts = useMemo(() => makeAttStorage(props.schedule), [props.schedule]);
    const scope = takeScheduleStrongScopeMaker(props.schedule.w);
    const roles = useScheduleWidgetRoles(props.schedule);

    return <ScheduleWidgetSchContext.Provider value={props.schedule}>
        <ScheduleWidgetRolesContext.Provider value={roles}>
            <ScheduleWidgetAppAttsContext.Provider value={atts}>
                <ScheduleWidgetTopicTitle
                    titleBox={props.schedule}
                    altTitle="Расписание"
                    topicBox={props.schedule}
                />
                <ScheduleWidgetDay
                    day={props.day}
                    dayi={props.dayi}
                    schedule={props.schedule}
                    scope={scope}
                />
            </ScheduleWidgetAppAttsContext.Provider>
        </ScheduleWidgetRolesContext.Provider>
    </ScheduleWidgetSchContext.Provider>;
}
