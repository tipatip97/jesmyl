import ScheduleWidgetTopicTitle from '../complect/TopicTitle';
import { ScheduleWidgetDay, ScheduleWidgetDayProps } from '../days/Day';
import ScheduleWidgetContextWrapper from '../general/ContextWrapper';
import { takeScheduleStrongScopeMaker } from '../useScheduleWidget';

export default function ScheduleAlarmDay(props: OmitOwn<ScheduleWidgetDayProps, 'scope'>) {
  const scope = takeScheduleStrongScopeMaker(props.schedule.w);

  return (
    <ScheduleWidgetContextWrapper schedule={props.schedule}>
      <h3>
        <ScheduleWidgetTopicTitle
          titleBox={props.schedule}
          altTitle="Мероприятие"
          topicBox={props.schedule}
        />
      </h3>
      <ScheduleWidgetDay
        day={props.day}
        dayi={props.dayi}
        schedule={props.schedule}
        scope={scope}
        isForceOpen={props.isForceOpen}
      />
    </ScheduleWidgetContextWrapper>
  );
}
