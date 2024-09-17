import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useExerListener } from '../../../../../complect/exer/hooks/useExer';
import MeetingsInner from '../../lists/meetings/MeetingsInner';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import EditMeetingsEvent from './EditMeetingsEvent';
import { EditMeetingsMore } from './EditMeetingsMore';
import { useEditableMeetings } from './useEditableMeetings';

export default function EditMeetings() {
  const { meetings } = useEditableMeetings();
  useExerListener();
  const [currPath, setCurrPath] = useState<number[]>([]);
  const [popupNode, openPopup] = useBottomPopup(EditMeetingsMore, currPath);

  if (!meetings) return null;

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseCmEditorContainer
            className="edit-meeitngs"
            headTitle="События"
            onMoreClick={openPopup}
            content={
              <>
                {popupNode}
                <MeetingsInner
                  meetings={meetings}
                  onContextNavigate={context => setCurrPath(context)}
                />
              </>
            }
          />
        }
      />

      <Route
        path=":eventw/*"
        element={<EditMeetingsEvent />}
      />
    </Routes>
  );
}
