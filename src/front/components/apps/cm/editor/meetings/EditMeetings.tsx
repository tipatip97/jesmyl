import { useState } from 'react';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import useExer from '../../../../../complect/exer/useExer';
import { cmExer } from '../../Cm.store';
import MeetingsInner from '../../lists/meetings/MeetingsInner';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import EditMeetingsMore from './EditMeetingsMore';
import './Meetings.scss';
import { useEditableMeetings } from './useEditableMeetings';

export default function EditMeetings() {
  const { meetings, goToEvent } = useEditableMeetings();
  useExer(cmExer);
  const [currPath, setCurrPath] = useState<number[]>([]);
  const [popupNode, openPopup] = useBottomPopup(() => <EditMeetingsMore currPath={currPath} />);

  if (!meetings) return null;

  return (
    <PhaseCmEditorContainer
      className="edit-meeitngs"
      headTitle="События"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          <MeetingsInner
            meetings={meetings}
            onEventClick={(event) => goToEvent(event.wid)}
            onContextNavigate={(context) => setCurrPath(context)}
          />
        </>
      }
    />
  );
}
