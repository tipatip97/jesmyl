import { ChordTrack } from './ChordCard.model';
import './ChordCard.scss';
import ChordCardTracked from './ChordCardTracked';
import { useChords } from './useChords';

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
  const chords = useChords();
  const track = (resource ?? chords)[chordName];

  return <ChordCardTracked {...props} track={track} />;
}
