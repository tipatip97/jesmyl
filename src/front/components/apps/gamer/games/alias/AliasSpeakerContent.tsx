import { useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import GamerAliasTimer from "./AliasTimer";
import useAliasState from "./useAliasState";
import SendButton from "../../../../../complect/SendButton";

export default function AliasSpeakerContent() {
    const {
        state,
        startSpeech,
        takeCurrentWord,
        strikeWord,
        takeCurrentTeam,
        memberPossibilities,
        resetGame,
    } = useAliasState();
    const [isWordSending, setIsWordSending] = useState(false);

    if (!state) return null;
    const myTeam = takeCurrentTeam('team');

    return <>
        <div
            className={
                'show-word-area flex center text-center no-scrollbar'
                + (state.phase === GamerAliasRoomStatePhase.Speech ? ' speech' : '')}
        >
            {myTeam && <h2 className="my-score-screen">
                Счёт {(myTeam.cor?.length || 0) - (myTeam.inc?.length || 0)}
            </h2>}
            <GamerAliasTimer />
            {state?.phase === GamerAliasRoomStatePhase.Speech
                ? <div className="round-button flex center">
                    {takeCurrentWord()}
                </div>
                : <div
                    className="round-button flex center"
                    onClick={startSpeech}
                >
                    Начать
                </div>
            }
            <EvaButton
                name="checkmark-circle-2-outline"
                className="color--ok ok-button"
                disabled={isWordSending}
                onClick={() => {
                    setIsWordSending(true);
                    strikeWord('cor')?.then(() => setIsWordSending(false));
                }}
            />
            <EvaButton
                name="close-circle-outline"
                className="color--ko ko-button"
                disabled={isWordSending}
                onClick={() => {
                    setIsWordSending(true);
                    strikeWord('inc')?.then(() => setIsWordSending(false));
                }}
            />
        </div>
        {state.startTs === 0 && memberPossibilities().isManager && <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
            <SendButton
                title="Завершить игру"
                confirm
                onSend={resetGame}
            />
        </div>}
    </>;
}
