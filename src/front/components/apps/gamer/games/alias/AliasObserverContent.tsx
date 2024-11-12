import { emptyFunc } from 'shared/utils';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { useMyPossibilitiesCurrentRoom } from '../../complect/rooms/room/hooks/possibilities';
import GamerAliasTimer from './AliasTimer';
import AliasGameRoundResultsAnswerList from './AnswerList';
import { useAliasSimpleExecs } from './hooks/execs';
import { useAliasIsMyTeam } from './hooks/is-my-speech';
import { useAliasMemberList } from './hooks/member-list';
import { useAliasSpeaker } from './hooks/speaker';
import { useAliasRoomState } from './hooks/state';

export default function AliasObserverContent() {
  const state = useAliasRoomState();
  const isMyTeam = useAliasIsMyTeam();
  const speaker = useAliasSpeaker();
  const members = useAliasMemberList(state);
  const isIManager = useMyPossibilitiesCurrentRoom().isManager;
  const { skipTheMemberTurn } = useAliasSimpleExecs();

  return (
    <div className="relative full-height margin-gap-v">
      <GamerAliasTimer onTimeOut={emptyFunc} />
      {speaker?.name && (
        <div className="color--7 margin-big-gap-b">
          {isMyTeam ? `Приготовься! Вы с ${speaker.name} в одной команде` : `Спикер - ${speaker.name}`}
        </div>
      )}
      {!state?.startTs && isIManager && (
        <SendButton
          title={speaker?.name + ' пропускает ход'}
          onSend={skipTheMemberTurn}
        />
      )}
      {(members && members.length < 3) || isMyTeam || !state?.startTs || (
        <div>
          {'Текущее слово - '}
          {state.winfo?.word ?? (!state.arsenal && <span className="color--ko">Слов в арсенале не осталось...</span>)}
        </div>
      )}
      <AliasGameRoundResultsAnswerList />
      <AliasGameRoundResultsAnswerList myIncorrects />
    </div>
  );
}
