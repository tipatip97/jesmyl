import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
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
        <div className="full-container padding-big-gap">
          <MeetingsInner
            meetings={meetings}
            onEventClick={event => {
              exec(event.mergeStack(selectedComws));
              goToEvent(event.wid);
              close();
            }}
          />
        </div>
      ),
  );

  return (
    <>
      {fullNode}
      {!selectedComws.length || (
        <EvaButton
          name="calendar-outline"
          postfix="Выбранные в событие"
          onClick={() => openFullContent()}
        />
      )}
    </>
  );
}
