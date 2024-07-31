import { useAtomValue } from '../../../../../../complect/atoms';
import { cmMolecule } from '../../../molecules';
import { ChordTrack } from './ChordCard.model';
import './ChordCard.scss';
import ChordCardTracked from './ChordCardTracked';

const chordTracksAtom = cmMolecule.select(s => s.chordTracks);

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
  const chords = useAtomValue(chordTracksAtom);
  const track = (resource ?? chords)[chordName];

  return (
    <ChordCardTracked
      {...props}
      track={track}
    />
  );
}
