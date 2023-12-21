import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { useMyPossibilitiesCurrentRoom } from '../../complect/rooms/room/hooks/possibilities';
import GamerAliasTimer from './AliasTimer';
import AliasGameRoundResultsAnswerList from './AnswerList';
import { useAliasComputeScore } from './hooks/compute-score';
import { useAliasSimpleExecs } from './hooks/execs';
import { useAliasIsMyTeam } from './hooks/is-my-speech';
import { useAliasMemberList } from './hooks/member-list';
import { useAliasSpeaker } from './hooks/speaker';
import { useAliasRoomState } from './hooks/state';
import { useTokenSortedWordsNaked } from './hooks/token-sorted-words';
import { useAliasCurrentWordInfo } from './hooks/word';

export default function AliasObserverContent() {
  const { corrects, incorrects } = useAliasComputeScore();
  const state = useAliasRoomState();
  const isMyTeam = useAliasIsMyTeam();
  const speaker = useAliasSpeaker();
  const wordInfo = useAliasCurrentWordInfo(state);
  const members = useAliasMemberList(state);
  const isIManager = useMyPossibilitiesCurrentRoom().isManager;
  const { skipTheMemberTurn } = useAliasSimpleExecs();
  const infos = useTokenSortedWordsNaked();

  return (
    <div className="relative full-height margin-gap-v">
      <GamerAliasTimer />
      <div>Спикер - {speaker?.name}</div>
      {!state?.startTs && isIManager && (
        <SendButton
          title={speaker?.name + ' пропускает ход'}
          onSend={skipTheMemberTurn}
        />
      )}
      {(members && members.length < 3) || isMyTeam || !state?.startTs || (
        <div>
          Текущее слово -{' '}
          {wordInfo?.word ??
            (infos.length - 1 === state.wordsi && <span className="color--ko">Слов в арсенале не осталось...</span>)}
        </div>
      )}
      <AliasGameRoundResultsAnswerList answers={corrects} />
      <AliasGameRoundResultsAnswerList
        answers={incorrects}
        myIncorrects
      />
    </div>
  );
}
