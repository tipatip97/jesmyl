import IconButton from '../../../complect/the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../../../complect/the-icon/icons/cancel-01';
import PhaseContainerConfigurer from '../../../complect/phase-container/PhaseContainerConfigurer';
import ScheduleWidgetListPage from '../../../complect/schedule-widget/general/ListPage';
import ScheduleWidgetPage from '../../../complect/schedule-widget/general/Page';
import { useSchedules } from '../../../complect/schedule-widget/useScheduleWidget';
import useIndexNav from './useIndexNav';

export default function ScheduleWidgetAlarmScheduleList() {
  const schedules = useSchedules();
  const { setAppRouteData, appRouteData, goBack } = useIndexNav();

  if (appRouteData.schw !== undefined) {
    const schedule = schedules.list.find(schedule => schedule.w === appRouteData.schw);

    if (schedule === undefined)
      return (
        <PhaseContainerConfigurer
          goBack={() => setAppRouteData({ schw: undefined })}
          className="ScheduleWidgetAlarmScheduleList"
          headTitle="Мероприятие"
          content={<div className="color--ko flex center margin-giant-gap-v">Мероприятие не найдено</div>}
        />
      );

    return (
      <ScheduleWidgetPage
        goBack={goBack}
        appName={schedule.app}
        schedulew={schedule.w}
        schedule={schedule}
        title={schedule.title}
        headTitle={
          <span className="flex flex-gap">
            {schedule.title}
            <IconButton
              Icon={IconCancel01StrokeRounded}
              onClick={event => {
                event.stopPropagation();
                setAppRouteData({ schw: undefined });
              }}
            />
          </span>
        }
      />
    );
  }

  return (
    <ScheduleWidgetListPage
      headTitle="Мероприятия"
      goBack={goBack}
    />
  );
}
