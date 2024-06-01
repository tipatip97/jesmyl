import { useState } from 'react';
import IconButton from '../../the-icon/IconButton';
import { IScheduleWidget } from '../ScheduleWidget.model';
import { ScheduleWidgetLiveTranslation } from './Live';
import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';

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
      <IconButton
        Icon={IconComputerStrokeRounded}
        onClick={() => setIsOpen(is => !is)}
        postfix="Следить за трансляцией"
      />
    </>
  );
};
