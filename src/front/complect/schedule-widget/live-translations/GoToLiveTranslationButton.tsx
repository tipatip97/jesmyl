import useIndexNav, { indexScheduleWidgetTranslationPagePhase } from '../../../components/index/complect/useIndexNav';
import EvaButton from '../../eva-icon/EvaButton';
import { IScheduleWidget } from '../ScheduleWidget.model';

export const ScheduleWidgetGoToLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const indexNav = useIndexNav();

  if (indexNav.appRouteData.schTranslationComws === undefined) return;

  return (
    <>
      <EvaButton
        name="monitor-outline"
        className="margin-gap-v"
        onClick={() => {
          indexNav.jumpTo(indexScheduleWidgetTranslationPagePhase);
          indexNav.setAppRouteData({ schw: schedule.w });
        }}
        postfix="Моя трансляция"
      />
    </>
  );
};
