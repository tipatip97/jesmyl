import { useSearchParams } from 'react-router-dom';
import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';
import { FullContent } from '../../fullscreen-content/FullContent';
import IconButton from '../../the-icon/IconButton';
import { IScheduleWidget } from 'shared/api';
import { ScheduleWidgetLiveTranslation } from './Live';

const queryKey = 'follow';

export const ScheduleWidgetWatchLiveTranslationButton = ({ schedule }: { schedule: IScheduleWidget }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setIsOpen = (isOpen: unknown) => {
    setSearchParams(prev => {
      if (isOpen) return { ...prev, [queryKey]: 'inner' };

      prev.delete(queryKey);

      return prev;
    });
  };

  return (
    <>
      {searchParams.has(queryKey) && (
        <FullContent
          onClose={setIsOpen}
          containerClassName=""
        >
          <ScheduleWidgetLiveTranslation
            onClose={setIsOpen}
            schedule={schedule}
          />
        </FullContent>
      )}
      <IconButton
        Icon={IconComputerStrokeRounded}
        onClick={setIsOpen}
        className="margin-gap-v"
        postfix="Следить за трансляцией"
      />
    </>
  );
};
