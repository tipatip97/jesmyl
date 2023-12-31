import AliasGameRoundWin from './AliasGameRoundWin';
import AliasObserverContent from './AliasObserverContent';
import AliasSpeakerContent from './AliasSpeakerContent';
import { useAliasIsMySpeech } from './hooks/is-my-speech';
import { useAliasRoomState } from './hooks/state';

export default function AliasGameRound() {
  const state = useAliasRoomState();
  const isMySpeech = useAliasIsMySpeech();

  if (state?.wins) return <AliasGameRoundWin wins={state.wins} />;

  return isMySpeech ? <AliasSpeakerContent /> : <AliasObserverContent />;
}
