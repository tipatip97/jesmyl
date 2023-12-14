import GamerAliasTimer from "./AliasTimer";
import AliasGameRoundResultsAnswerList from "./AnswerList";
import { useAliasComputeScore } from "./hooks/compute-score";
import { useAliasIsMyTeam } from "./hooks/is-my-speech";
import { useAliasSpeaker } from "./hooks/speaker";
import { useAliasRoomState } from "./hooks/state";
import { useAliasCurrentWordInfo } from "./hooks/word";

export default function AliasObserverContent() {
    const { corrects, incorrects } = useAliasComputeScore();
    const state = useAliasRoomState();
    const isMyTeam = useAliasIsMyTeam();
    const speaker = useAliasSpeaker();
    const wordInfo = useAliasCurrentWordInfo();

    return <div className="relative full-height margin-gap-v">
        <GamerAliasTimer />
        <div>Спикер - {speaker?.name}</div>
        {isMyTeam || !state?.startTs
            || <div>
                Текущее слово - {
                    wordInfo?.word
                    ?? (!state.words.length
                        && <span className="color--ko">Слов в арсенале не осталось...</span>)}
            </div>
        }
        <AliasGameRoundResultsAnswerList
            answers={corrects}
        />
        <AliasGameRoundResultsAnswerList
            answers={incorrects}
            myIncorrects
        />
    </div>;
}
