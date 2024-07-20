import { useCallback, useMemo } from 'react';
import { useAtomValue } from '../../../../../complect/atoms';
import useCmNav from '../../base/useCmNav';
import { IExportableMeetings } from '../../../../../../back/apps/cm/Meetings.model';
import { cmMolecule } from '../../molecules';
import { useEditableCols } from '../col/useEditableCols';
import { editEventNavPhasePoint } from '../editorNav';
import { EditableMeetings } from './EditableMeetings';

let localMeetings: EditableMeetings | nil;
let localIMeetings: IExportableMeetings | nil;

export function useEditableMeetings() {
  const imeetings = useAtomValue(cmMolecule.take('meetings'));

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
    goToEvent: useCallback(
      (eventw: number) => {
        jumpTo({ phase: editEventNavPhasePoint, data: { eventw } });
      },
      [jumpTo],
    ),
  };
}
