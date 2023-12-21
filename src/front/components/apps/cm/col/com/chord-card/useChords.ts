import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';

const chordsSelector = (state: RootState) => state.cm.chordTracks;

export function useChords() {
  const chords = useSelector(chordsSelector);
  return chords;
}
