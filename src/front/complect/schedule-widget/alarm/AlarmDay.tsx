import ScheduleWidgetContextWrapper from "../ContextWrapper";
import ScheduleWidgetTopicTitle from "../complect/TopicTitle";
import ScheduleWidgetDay, { ScheduleWidgetDayProps } from "../days/Day";
import { takeScheduleStrongScopeMaker } from "../useScheduleWidget";

export default function ScheduleAlarmDay(props: Omit<ScheduleWidgetDayProps, 'scope'>) {
    const scope = takeScheduleStrongScopeMaker(props.schedule.w);

    return <ScheduleWidgetContextWrapper schedule={props.schedule}>
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
    </ScheduleWidgetContextWrapper>;
}
