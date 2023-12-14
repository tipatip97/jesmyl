import SendButton from "../../../../../complect/SendButton";
import { useMyPossibilitiesCurrentRoom } from "../../complect/rooms/room/hooks/possibilities";
import AliasGameRoundResultsAnswerList from "./AnswerList";
import { useAliasComputeScore } from "./hooks/compute-score";
import { useAliasSimpleExecs } from "./hooks/execs";
import { useAliasIsCantConfirmResults } from "./hooks/is-cant-confirm";
import { useAliasIsMySpeech } from "./hooks/is-my-speech";
import { useAliasRoomState } from "./hooks/state";

export default function AliasGameRoundResults() {
    const isMySpeech = useAliasIsMySpeech();
    const myPossibilities = useMyPossibilitiesCurrentRoom();
    const state = useAliasRoomState();
    const isCantSend = useAliasIsCantConfirmResults(state);
    const { resetGame, rememberScore } = useAliasSimpleExecs();
    const { corrects, incorrects, score } = useAliasComputeScore();

    return <>
        <div className="full-height over-y-auto">
            <h2>Будет засчитано: {score}</h2>
            <AliasGameRoundResultsAnswerList
                answers={corrects}
            />
            <AliasGameRoundResultsAnswerList
                answers={incorrects}
                myIncorrects
            />
            {isMySpeech && <div className="flex center margin-gap">
                <SendButton
                    title="Отправить данные"
                    disabled={isCantSend}
                    onSend={rememberScore}
                />
            </div>}
        </div>
        {state?.startTs === 0 && myPossibilities.isManager &&
            <div className="flex center margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
    </>
}
