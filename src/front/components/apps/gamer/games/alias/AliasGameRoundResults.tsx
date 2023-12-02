import SendButton from "../../../../../complect/SendButton";
import { MyLib } from "../../../../../complect/my-lib/MyLib";
import AliasGameRoundResultsAnswerList from "./ResultsAnswerList";
import { useAliasState } from "./useAliasState";

export default function AliasGameRoundResults() {
    const { rememberScore, computeScore, state, memberPossibilities, resetGame, isMySpeech } = useAliasState();
    const { corrects, incorrects, score } = computeScore();

    return <>
        <div className="full-height over-y-auto">
            <h2>Будет засчитано: {score}</h2>
            <AliasGameRoundResultsAnswerList
                answers={corrects}
                isInc={false}
            />
            <AliasGameRoundResultsAnswerList
                answers={incorrects}
                isInc={true}
            />
            {isMySpeech() && <div className="flex center margin-gap">
                <SendButton
                    title="Отправить данные"
                    disabled={
                        ((answers) => state?.rej
                            && MyLib.entries(state.rej)
                                .some(([strNid, rejs]) => answers?.includes(+strNid)
                                    && rejs.length > 0
                                    && !state.fix.includes(+strNid))
                        )(state?.cor.concat(state.inc))
                    }
                    onSend={rememberScore}
                />
            </div>}
        </div>
        {state?.startTs === 0 && memberPossibilities().isManager &&
            <div className="flex center margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
    </>
}
