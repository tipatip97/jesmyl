import { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IExportableMeetings } from '../../../../../../shared/api/complect/apps/cm/complect/Meetings';
import { useAtomValue } from '../../../../../complect/atoms';
import { cmMeetingsAtom } from '../../molecules';
import { useEditableCols } from '../col/useEditableCols';
import { EditableMeetings } from './EditableMeetings';

let localMeetings: EditableMeetings | nil;
let localIMeetings: IExportableMeetings | nil;

export function useEditableMeetings() {
  const imeetings = useAtomValue(cmMeetingsAtom);
  const navigate = useNavigate();

  const eventw = +useParams().eventw!;
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
    goToEvent: useCallback((eventw: number) => navigate(`/cm/edit/events/${eventw}`), [navigate]),
  };
}
