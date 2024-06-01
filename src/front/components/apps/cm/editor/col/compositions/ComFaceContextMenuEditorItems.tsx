import IconButton from '../../../../../../complect/the-icon/IconButton';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
import { IconCalendar03StrokeRounded } from '../../../../../../complect/the-icon/icons/calendar-03';
import useSelectedComs from '../../../base/useSelectedComs';
import MeetingsInner from '../../../lists/meetings/MeetingsInner';
import { useEditableMeetings } from '../../meetings/useEditableMeetings';

export default function ComFaceContextMenuEditorItems() {
  const { meetings, goToEvent } = useEditableMeetings();
  const exec = useExerExec();
  const { selectedComws } = useSelectedComs();

  const [fullNode, openFullContent] = useFullContent(
    close =>
      meetings && (
        <MeetingsInner
          meetings={meetings}
          onEventClick={event => {
            exec(event.mergeStack(selectedComws));
            goToEvent(event.wid);
            close();
          }}
        />
      ),
  );

  return (
    <>
      {fullNode}
      {!selectedComws.length || (
        <IconButton
          Icon={IconCalendar03StrokeRounded}
          postfix="Выбранные в событие"
          onClick={() => openFullContent()}
        />
      )}
    </>
  );
}
