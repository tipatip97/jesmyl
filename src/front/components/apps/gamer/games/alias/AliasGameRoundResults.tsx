import SendButton from '../../../../../complect/sends/send-button/SendButton';
import AliasGameRoundResultsAnswerList from './AnswerList';
import { useAliasComputeScore } from './hooks/compute-score';
import { useAliasSimpleExecs } from './hooks/execs';
import { useAliasIsCantConfirmResults } from './hooks/is-cant-confirm';
import { useAliasIsMySpeech } from './hooks/is-my-speech';
import { useAliasRoomState } from './hooks/state';

export default function AliasGameRoundResults() {
  const isMySpeech = useAliasIsMySpeech();
  const state = useAliasRoomState();
  const isCantSend = useAliasIsCantConfirmResults(state);
  const { rememberScore } = useAliasSimpleExecs();
  const score = useAliasComputeScore();

  return (
    <div className="full-height over-y-auto">
      <h2>Будет засчитано: {score}</h2>
      <AliasGameRoundResultsAnswerList />
      <AliasGameRoundResultsAnswerList myIncorrects />
      {isMySpeech && (
        <div className="flex center margin-gap">
          <SendButton
            title="Отправить данные"
            disabled={isCantSend}
            onSend={rememberScore}
          />
        </div>
      )}
    </div>
  );
}
