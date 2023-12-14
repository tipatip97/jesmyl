import SendButton from "../../../../../complect/SendButton";
import { useMyPossibilitiesCurrentRoom } from "../../complect/rooms/room/hooks/possibilities";
import GamerAliasTimer from "./AliasTimer";
import AliasGameRoundResultsAnswerList from "./AnswerList";
import { useAliasComputeScore } from "./hooks/compute-score";
import { useAliasSimpleExecs } from "./hooks/execs";
import { useAliasIsMyTeam } from "./hooks/is-my-speech";
import { useAliasSpeaker } from "./hooks/speaker";
import { useAliasRoomState } from "./hooks/state";
import { useAliasCurrentWordInfo } from "./hooks/word";

export default function AliasObserverContent() {
    const { corrects, incorrects } = useAliasComputeScore();
    const state = useAliasRoomState();
    const isMyTeam = useAliasIsMyTeam();
    const myPossibilities = useMyPossibilitiesCurrentRoom();
    const speaker = useAliasSpeaker();
    const { resetGame } = useAliasSimpleExecs();
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
        {state?.startTs === 0 && myPossibilities.isManager &&
            <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
        <AliasGameRoundResultsAnswerList
            answers={corrects}
        />
        <AliasGameRoundResultsAnswerList
            answers={incorrects}
            myIncorrects
        />
    </div>;
}
