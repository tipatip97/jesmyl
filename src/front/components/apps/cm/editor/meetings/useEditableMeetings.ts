import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { IExportableMeetings } from '../../../../../../back/apps/cm/Meetings.model';
import { useAtomValue } from '../../../../../complect/atoms';
import { cmMeetingsAtom } from '../../molecules';
import { useEditableCols } from '../col/useEditableCols';
import { EditableMeetings } from './EditableMeetings';

let localMeetings: EditableMeetings | nil;
let localIMeetings: IExportableMeetings | nil;

export function useEditableMeetings() {
  const imeetings = useAtomValue(cmMeetingsAtom);

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
    goToEvent: useCallback((eventw: number) => {}, []),
  };
}
