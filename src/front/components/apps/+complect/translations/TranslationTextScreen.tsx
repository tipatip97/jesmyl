import { useSelector } from 'react-redux';
import { ScheduleWidgetLiveTranslation } from '../../../../complect/schedule-widget/live-translations/Live';
import { useSchedules } from '../../../../complect/schedule-widget/useScheduleWidget';
import { RootState } from '../../../../shared/store';
import useIndexNav from '../../../index/complect/useIndexNav';

const isCanShowTextTranslationSelector: (state: RootState) => boolean = state =>
  state.complect.isCanShowTextTranslation;

interface Props {
  children: React.ReactNode;
}

const emptyFunc = () => {};

export const TranslationTextScreen = ({ children }: Props) => {
  if (!useSelector(isCanShowTextTranslationSelector)) return <>{children}</>;

  return <Screen>{children}</Screen>;
};

const Screen = ({ children }: Props) => {
  const schw = useIndexNav().appRouteData.schw;
  const schedules = useSchedules();
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
