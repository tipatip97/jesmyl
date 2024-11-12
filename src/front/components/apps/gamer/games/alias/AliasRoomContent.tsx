import { GamerAliasRoomStatePhase } from 'shared/api';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import AliasGameRound from './AliasGameRound';
import AliasGameRoundResults from './AliasGameRoundResults';
import AliasScoreBoard from './AliasScoreBoard';
import { useAliasRoomState } from './hooks/state';
import { AliasRoomInitialContent } from './initial-content/InitialContent';

export default function AliasRoomContent() {
  const state = useAliasRoomState();
  const phase = state?.phase;
  const [scoreNode, openScore] = useFullContent(() => <AliasScoreBoard />);

  return (
    <>
      {scoreNode}
      <div onClick={() => openScore(true)}>Посмотреть счёт</div>
      {phase === GamerAliasRoomStatePhase.Wait || phase === GamerAliasRoomStatePhase.Speech ? (
        <AliasGameRound />
      ) : phase === GamerAliasRoomStatePhase.Results ? (
        <AliasGameRoundResults />
      ) : (
        <AliasRoomInitialContent />
      )}
    </>
  );
}
