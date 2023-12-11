import EvaSendButton from "../../../../../complect/eva-icon/send-button/EvaSendButton";
import useToast from "../../../../../complect/modal/useToast";
import { AliasWordInfo } from "./Alias.model";
import { useAliasState } from "./useAliasState";

export default function AliasGameRoundResultsAnswerList({ answers, isInc }: {
    answers: AliasWordInfo[],
    isInc: boolean,
}) {
    const { state, fixWord, isMySpeech, rejectWord, auth, takeCurrentTeam } = useAliasState();
    const [koToastNode, showKoToast] = useToast({ mood: 'ko' });
    const [toastNode, showToast] = useToast();

    if (state?.fix === undefined) return null;
    const fix = state?.fix;
    const isItMySpeech = isMySpeech();
    const isMyTeam = auth.login && takeCurrentTeam('team')?.members.includes(auth.login);

    return <>
        {koToastNode}
        {toastNode}
        {answers?.map(({ nid, word, weight, max }) => {
            const isStriked = fix.includes(nid);
            const scoreNum = (isStriked ? !isInc : isInc) ? -(max - weight) - 1 : weight;
            const isRej = state.rej?.[nid] && (
                isItMySpeech
                    ? state.rej[nid].length
                    : auth.login && state.rej[nid].includes(auth.login));

            return <div
                key={nid}
                className="flex glex-gap"
            >
                <div
                    className={
                        'flex flex-gap'
                        + (isInc ? ' color--ko' : ' color--ok')
                        + (isStriked ? ' text-strike' : '')
                    }
                >{word}</div>
                {isItMySpeech && !isRej
                    ? <EvaSendButton
                        name={(isStriked ? isInc : !isInc) ? "minus-circle-outline" : "plus-circle-outline"}
                        onSend={() => fixWord(nid)}
                        className="margin-gap-l"
                        onFailure={showKoToast}
                    />
                    : (isItMySpeech || !isMyTeam) && <EvaSendButton
                        name={isStriked ? 'alert-triangle-outline' : 'alert-triangle'}
                        className={
                            'margin-sm-gap-l'
                            + (isRej ? ' color--ko' : '')
                        }
                        onSend={() => isItMySpeech ? fixWord(nid) : rejectWord(nid)}
                        onFailure={showKoToast}
                        onSuccess={() => !isItMySpeech && showToast('Возражение принято')}
                    />}
                <span className={`${scoreNum > 0 ? 'color--ok' : 'color--ko'} margin-gap-l`}>
                    {scoreNum > 0 ? '+' : ''}{scoreNum}
                </span>
            </div>;
        })}
    </>;
}
