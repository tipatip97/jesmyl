import { useState } from 'react';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useExerListener } from '../../../../../complect/exer/hooks/useExer';
import MeetingsInner from '../../lists/meetings/MeetingsInner';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import { EditMeetingsMore } from './EditMeetingsMore';
import './Meetings.scss';
import { useEditableMeetings } from './useEditableMeetings';

export default function EditMeetings() {
  const { meetings, goToEvent } = useEditableMeetings();
  useExerListener();
  const [currPath, setCurrPath] = useState<number[]>([]);
  const [popupNode, openPopup] = useBottomPopup(EditMeetingsMore, currPath);

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
            onEventClick={event => goToEvent(event.wid)}
            onContextNavigate={context => setCurrPath(context)}
          />
        </>
      }
    />
  );
}
