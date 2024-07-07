import { useMemo } from 'react';
import { useAtomValue } from '../../../../../complect/atoms';
import useCmNav from '../../base/useCmNav';
import { useCols } from '../../cols/useCols';
import { cmMolecule } from '../../molecules';
import { Meetings } from './Meetings';
import { IExportableMeetings } from './Meetings.model';

let localMeetings: Meetings | nil;
let localIMeetings: IExportableMeetings | nil;

export function useMeetings() {
  const imeetings = useAtomValue(cmMolecule.take('meetings'));
  const {
    goTo,
    appRouteData: { eventw },
  } = useCmNav();
  const cols = useCols();
  const meetings = useMemo(() => {
    if (!cols) return;
    if (localIMeetings && localIMeetings === imeetings) return localMeetings;

    localMeetings = new Meetings(imeetings, cols);
    localIMeetings = imeetings;
    return localMeetings;
  }, [cols, imeetings]);

  return {
    meetings,
    currentEvent: meetings?.events?.find(meeting => meeting.wid === eventw),
    goToEvent: (eventw: number) => {
      goTo({ place: 'event', data: { eventw } });
    },
  };
}
