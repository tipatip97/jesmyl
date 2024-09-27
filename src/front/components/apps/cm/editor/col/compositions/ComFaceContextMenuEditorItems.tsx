import { useState } from 'react';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import { FullContent } from '../../../../../../complect/fullscreen-content/FullContent';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconCalendar03StrokeRounded } from '../../../../../../complect/the-icon/icons/calendar-03';
import useSelectedComs from '../../../base/useSelectedComs';
import MeetingsInner from '../../../lists/meetings/MeetingsInner';
import { useEditableMeetings } from '../../meetings/useEditableMeetings';

export default function ComFaceContextMenuEditorItems() {
  const { meetings, goToEvent } = useEditableMeetings();
  const exec = useExerExec();
  const { selectedComws } = useSelectedComs();
  const [isShowFull, setIsShowFull] = useState(false);

  return (
    <>
      {isShowFull && meetings && (
        <FullContent
          asRootAnchor={close => (
            <MeetingsInner
              meetings={meetings}
              onEventClick={event => {
                exec(event.mergeStack(selectedComws));
                goToEvent(event.wid);
                close();
              }}
            />
          )}
        />
      )}
      {!selectedComws.length || (
        <IconButton
          Icon={IconCalendar03StrokeRounded}
          postfix="Выбранные в событие"
          onClick={() => setIsShowFull(true)}
        />
      )}
    </>
  );
}
