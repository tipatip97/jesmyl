import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';
import { ChordPack } from './ChordCard.model';

const chordsSelector = (state: RootState) => state.cm.chordTracks;

export function useChords() {
  const chords: ChordPack = useSelector(chordsSelector);
  return chords;
}
