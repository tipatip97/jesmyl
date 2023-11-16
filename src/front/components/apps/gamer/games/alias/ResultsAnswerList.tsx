import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import { AliasWordNid } from "./Alias.model";
import useAliasState from "./useAliasState";

export default function AliasGameRoundResultsAnswerList({ answers, setter, strikes, getAnswerList, isInc }: {
    answers: ReturnType<typeof getAnswerList>,
    strikes: AliasWordNid[],
    setter: (list: AliasWordNid[]) => void,
    getAnswerList: ReturnType<typeof useAliasState>['getAnswerList'],
    isInc: boolean,
}) {
    return <>
        {answers?.map(([nid, word]) => {
            const isStriked = strikes.includes(nid);

            return <div
                key={nid}
                className="flex glex-gap"
            >
                <div
                    className={
                        'flex flex-gap margin-gap-r'
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
                        onClick={() => setter([...strikes, nid])}
                    />}
            </div>;
        })}
    </>;
}
