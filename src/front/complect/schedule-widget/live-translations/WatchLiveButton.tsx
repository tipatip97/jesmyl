import { useState } from 'react';
import useIndexNav from '../../../components/index/complect/useIndexNav';
import EvaButton from '../../eva-icon/EvaButton';
import { IScheduleWidget } from '../ScheduleWidget.model';
import { ScheduleWidgetLiveTranslation } from './Live';

export const ScheduleWidgetWatchLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const [isOpen, setIsOpen] = useState(false);
  const indexNav = useIndexNav();

  return (
    <>
      {isOpen && (
        <ScheduleWidgetLiveTranslation
          onClose={setIsOpen}
          schedule={schedule}
        />
      )}
      <EvaButton
        name="monitor"
        onClick={() => {
          setIsOpen(is => !is);
          indexNav.setAppRouteData({ schw: schedule.w });
        }}
        postfix="Следить за трансляцией"
      />
    </>
  );
};
