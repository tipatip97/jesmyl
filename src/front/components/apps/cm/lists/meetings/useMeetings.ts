import { useMemo } from 'react';
import { useAtomValue } from '../../../../../complect/atoms';
import useCmNav from '../../base/useCmNav';
import { useCols } from '../../cols/useCols';
import { cmMolecule } from '../../molecules';
import { Meetings } from './Meetings';
import { MeetingsEvent } from './MeetingsEvent';

export function useMeetings(): {
  meetings: Meetings | undefined;
  currentEvent: MeetingsEvent | undefined;
  goToEvent: (eventw: number) => void;
} {
  const imeetings = useAtomValue(cmMolecule.take('meetings'));
  const {
    goTo,
    appRouteData: { eventw },
  } = useCmNav();
  const cols = useCols();
  const meetings = useMemo(() => cols && new Meetings(imeetings, cols), [cols, imeetings]);

  return {
    meetings,
    currentEvent: meetings?.events?.find(meeting => meeting.wid === eventw),
    goToEvent: (eventw: number) => goTo({ place: 'event', data: { eventw } }),
  };
}
