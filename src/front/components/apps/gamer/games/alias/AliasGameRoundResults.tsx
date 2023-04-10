import { useState } from "react";
import SendButton from "../../../../../complect/SendButton";
import useAliasState from "./useAliasState";
import { AliasWordNid } from "./Alias.model";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";

export default function AliasGameRoundResults() {
    const { rememberScore, getAnswerList, isMySpeech } = useAliasState();
    const [corStrikedNods, updateCorStrikedNids] = useState<AliasWordNid[]>([]);
    const [incStrikedNods, updateIncStrikedNids] = useState<AliasWordNid[]>([]);
    const correctNids = getAnswerList('cor') || [];
    const incorrectNids = getAnswerList('inc') || [];
    const scoreIncrement = (correctNids.length + incStrikedNods.length * 2) - (incorrectNids.length + corStrikedNods.length * 2);

    if (!isMySpeech()) return null;

    const showAnswerList = (answers: ReturnType<typeof getAnswerList>, strikes: AliasWordNid[], setter: (list: AliasWordNid[]) => void) =>
        answers?.map(([nid, word]) => {
            const isInc = answers === incorrectNids;
            const isStriked = strikes.includes(nid);

            return <div
                key={'' + nid}
                className="flex glex-gap"
            >
                <div
                    className={
                        'flex flex-gap'
                        + (isInc ? ' error-message' : '')
                        + (isStriked ? ' text-strike' : '')
                    }
                >{word}</div>
                {isStriked
                    ? <EvaButton
                        name={isInc ? "minus-circle-outline" : "plus-circle-outline"}
                        onClick={() => {
                            setter(strikes.filter((currNid) => currNid !== nid));
                        }}
                    />
                    : <EvaButton
                        name={isInc ? "plus-circle-outline" : "minus-circle-outline"}
                        onClick={() => {
                            setter([...strikes, nid]);
                        }}
                    />}
            </div>;
        });

    return <>
        <h2>Будет засчитано: {scoreIncrement}</h2>
        {showAnswerList(correctNids, corStrikedNods, updateCorStrikedNids)}
        {showAnswerList(incorrectNids, incStrikedNods, updateIncStrikedNids)}
        <div className="flex center">
            <SendButton
                title="Отправить данные"
                onSend={() => rememberScore(scoreIncrement)}
            />
        </div>
    </>
}