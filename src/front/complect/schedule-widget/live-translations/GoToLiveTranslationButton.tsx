import useIndexNav, { indexScheduleWidgetTranslationPagePhase } from '../../../components/index/complect/useIndexNav';
import IconButton from '../../the-icon/IconButton';
import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';
import { IScheduleWidget } from '../ScheduleWidget.model';

export const ScheduleWidgetGoToLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const indexNav = useIndexNav();

  if (indexNav.appRouteData.schTranslationComws === undefined) return;

  return (
    <>
      <IconButton
        Icon={IconComputerStrokeRounded}
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
