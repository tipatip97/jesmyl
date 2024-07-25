import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAtomValue } from '../../../../../complect/atoms';
import { useCols } from '../../cols/useCols';
import { cmMolecule } from '../../molecules';
import { Meetings } from './Meetings';
import { MeetingsEvent } from './MeetingsEvent';

export function useMeetings(): {
  meetings: Meetings | undefined;
  currentEvent: MeetingsEvent | undefined;
} {
  const imeetings = useAtomValue(cmMolecule.take('meetings'));
  const eventw = +useParams().eventw!;
  const cols = useCols();
  const meetings = useMemo(() => cols && new Meetings(imeetings, cols), [cols, imeetings]);

  return {
    meetings,
    currentEvent: meetings?.events?.find(meeting => meeting.wid === eventw),
  };
}
