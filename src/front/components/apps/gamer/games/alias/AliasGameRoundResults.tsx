import { useState } from "react";
import SendButton from "../../../../../complect/SendButton";
import { AliasWordNid } from "./Alias.model";
import AliasGameRoundResultsAnswerList from "./ResultsAnswerList";
import useAliasState from "./useAliasState";

export default function AliasGameRoundResults() {
    const { rememberScore, getAnswerList, isMySpeech, state, memberPossibilities, resetGame, takeSpeaker } = useAliasState();
    const [corStrikedNods, updateCorStrikedNids] = useState<AliasWordNid[]>([]);
    const [incStrikedNods, updateIncStrikedNids] = useState<AliasWordNid[]>([]);
    const correctNids = getAnswerList('cor') || [];
    const incorrectNids = getAnswerList('inc') || [];
    const scoreIncrement = (correctNids.length + incStrikedNods.length * 2) - (incorrectNids.length + corStrikedNods.length * 2);

    if (!isMySpeech()) return <>
        Смотрит результаты - {takeSpeaker()?.name}

        {state?.startTs === 0 && memberPossibilities().isManager &&
            <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
    </>;

    return <>
        <h2>Будет засчитано: {scoreIncrement}</h2>
        <AliasGameRoundResultsAnswerList
            answers={correctNids}
            strikes={corStrikedNods}
            setter={updateCorStrikedNids}
            getAnswerList={getAnswerList}
            isInc={false}
        />
        <AliasGameRoundResultsAnswerList
            answers={incorrectNids}
            strikes={incStrikedNods}
            setter={updateIncStrikedNids}
            getAnswerList={getAnswerList}
            isInc={true}
        />
        <div className="flex center">
            <SendButton
                title="Отправить данные"
                onSend={() => rememberScore(scoreIncrement)}
            />
        </div>
    </>
}