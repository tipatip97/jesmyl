import { useState } from 'react';
import EvaButton from '../../eva-icon/EvaButton';
import { IScheduleWidget } from '../ScheduleWidget.model';
import { ScheduleWidgetLiveTranslation } from './Live';

export const ScheduleWidgetWatchLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        onClick={() => setIsOpen(is => !is)}
        postfix="Следить за трансляцией"
      />
    </>
  );
};
