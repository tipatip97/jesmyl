import EvaButton from '../../../complect/eva-icon/EvaButton';
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
          headTitle="Расписание"
          content={<div className="color--ko flex center margin-giant-gap-v">Расписание не найдено</div>}
        />
      );

    return (
      <ScheduleWidgetPage
        goBack={goBack}
        appName={schedule.app}
        schedulew={schedule.w}
        schedule={schedule}
        title={'Расписание ' + schedule.title}
        altActionsNode={
          <EvaButton
            name="bell-off-outline"
            onClick={() => setAppRouteData({ schw: undefined })}
          />
        }
      />
    );
  }

  return (
    <ScheduleWidgetListPage
      headTitle="Расписания"
      goBack={goBack}
      onScheduleObserve={schedule => setAppRouteData({ schw: schedule.w })}
    />
  );
}
