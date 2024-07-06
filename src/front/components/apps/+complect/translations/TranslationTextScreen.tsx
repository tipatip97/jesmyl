import { ScheduleWidgetLiveTranslation } from '../../../../complect/schedule-widget/live-translations/Live';
import useIndexNav from '../../../index/complect/useIndexNav';
import { useIndexSchedules } from '../../../index/molecules';
import { useIsCanShowTextTranslation } from './atoms';

interface Props {
  children: React.ReactNode;
}

const emptyFunc = () => {};

export const TranslationTextScreen = ({ children }: Props) => {
  if (!useIsCanShowTextTranslation()[0]) return <>{children}</>;

  return <Screen>{children}</Screen>;
};

const Screen = ({ children }: Props) => {
  const schw = useIndexNav().appRouteData.schw;
  const schedules = useIndexSchedules();
  const schedule = schedules.list.find(sch => sch.w === schw);

  if (schedule === undefined) return <>{children}</>;

  return (
    <ScheduleWidgetLiveTranslation
      onClose={emptyFunc}
      schedule={schedule}
      isShowMarkdownOnly
    />
  );
};
