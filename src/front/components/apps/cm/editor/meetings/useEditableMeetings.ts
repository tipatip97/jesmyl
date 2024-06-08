import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import useCmNav from '../../base/useCmNav';
import { IExportableMeetings } from '../../lists/meetings/Meetings.model';
import { useEditableCols } from '../col/useEditableCols';
import { editEventNavPhasePoint } from '../editorNav';
import { EditableMeetings } from './EditableMeetings';

let localMeetings: EditableMeetings | nil;
let localIMeetings: IExportableMeetings | nil;

const meetingsSelector = (state: RootState) => state.cm.meetings;

export function useEditableMeetings() {
  const imeetings: IExportableMeetings | und = useSelector(meetingsSelector);
  const {
    jumpTo,
    appRouteData: { eventw },
  } = useCmNav();
  const cols = useEditableCols();
  const meetings: EditableMeetings | nil = useMemo(() => {
    if (!cols) return;
    if (localIMeetings && localIMeetings === imeetings) return localMeetings;

    localMeetings = new EditableMeetings(imeetings, cols);
    localIMeetings = imeetings;
    return localMeetings;
  }, [cols, imeetings]);

  return {
    meetings,
    currentEvent: meetings?.events?.find(meeting => meeting.wid === eventw),
    goToEvent: (eventw: number) => {
      jumpTo({ phase: editEventNavPhasePoint, data: { eventw } });
    },
  };
}
