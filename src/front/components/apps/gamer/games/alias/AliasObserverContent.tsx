import SendButton from "../../../../../complect/SendButton";
import GamerAliasTimer from "./AliasTimer";
import AliasGameRoundResultsAnswerList from "./ResultsAnswerList";
import { useAliasState } from "./useAliasState";

export default function AliasObserverContent() {
    const { takeSpeaker, state, memberPossibilities, resetGame, computeScore, takeCurrentWord, takeCurrentTeam, auth } = useAliasState();
    const { corrects, incorrects } = computeScore();
    const isMyTeam = auth.login && takeCurrentTeam('team')?.members.includes(auth.login);

    return <div className="relative full-height margin-gap-v">
        <GamerAliasTimer />
        <div>Спикер - {takeSpeaker()?.name}</div>
        {isMyTeam || !state?.startTs
            || <div>
                Текущее слово - {
                    takeCurrentWord()
                    ?? (!state.words.length
                        && <span className="color--ko">Слов в арсенале не осталось...</span>)}
            </div>
        }
        {state?.startTs === 0 && memberPossibilities().isManager &&
            <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
        <AliasGameRoundResultsAnswerList
            answers={corrects}
            isInc={false}
        />
        <AliasGameRoundResultsAnswerList
            answers={incorrects}
            isInc={true}
        />
    </div>;
}
