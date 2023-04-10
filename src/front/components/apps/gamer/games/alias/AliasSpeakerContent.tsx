import { useState } from "react";
import useAliasState from "./useAliasState";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import GamerAliasTimer from "./AliasTimer";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";

export default function AliasSpeakerContent() {
    const {
        state,
        startSpeech,
        takeCurrentWord,
        strikeWord,
        onSpeechFinish
    } = useAliasState();
    const [isLoading, setIsLoading] = useState(false);
    const [isWordSending, setIsWordSending] = useState(false);

    if (!state) return null;

    return <>
        {isLoading
            ? <div className="flex center full-width full-height">
                <EvaIcon name="loader-outline" className="loader-icon rotate color--1" />
            </div>
            : <div className={
                'show-word-area flex center text-center no-scrollbar'
                + (state.phase === GamerAliasRoomStatePhase.Speech ? ' speech' : '')}
            >
                <GamerAliasTimer
                    onTimeOut={() => {
                        setIsLoading(true);
                        return onSpeechFinish()?.then(() => setIsLoading(false));
                    }} />
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
            </div>}
    </>;
}
