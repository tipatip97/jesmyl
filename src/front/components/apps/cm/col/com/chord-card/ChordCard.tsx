import { useAtomValue } from '../../../../../../complect/atoms';
import { cmMolecule } from '../../../molecules';
import { ChordTrack } from './ChordCard.model';
import './ChordCard.scss';
import ChordCardTracked from './ChordCardTracked';

export default function ChordCard({
  chordName,
  resource,
  ...props
}: {
  chordName: string;
  resource?: Record<string, ChordTrack>;
  customContent?: (card: JSX.Element | null) => JSX.Element;
  bottomPadding?: number;
}) {
  const chords = useAtomValue(cmMolecule.take('chordTracks'));
  const track = (resource ?? chords)[chordName];

  return (
    <ChordCardTracked
      {...props}
      track={track}
    />
  );
}
