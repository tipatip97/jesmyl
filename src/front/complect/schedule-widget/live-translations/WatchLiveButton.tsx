import { useState } from 'react';
import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';
import { FullContent } from '../../fullscreen-content/FullContent';
import IconButton from '../../the-icon/IconButton';
import { IScheduleWidget } from '../ScheduleWidget.model';
import { ScheduleWidgetLiveTranslation } from './Live';

export const ScheduleWidgetWatchLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <FullContent onClose={setIsOpen}>
          <ScheduleWidgetLiveTranslation
            onClose={setIsOpen}
            schedule={schedule}
          />
        </FullContent>
      )}
      <IconButton
        Icon={IconComputerStrokeRounded}
        onClick={() => setIsOpen(is => !is)}
        postfix="Следить за трансляцией"
      />
    </>
  );
};
