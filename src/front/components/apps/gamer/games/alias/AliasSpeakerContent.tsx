import { useState } from "react";
import styled from "styled-components";
import SendButton from "../../../../../complect/sends/send-button/SendButton";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import { useMyPossibilitiesCurrentRoom } from "../../complect/rooms/room/hooks/possibilities";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import GamerAliasTimer from "./AliasTimer";
import { useAliasComputeScore } from "./hooks/compute-score";
import { useAliasCurrentTeamNaked } from "./hooks/current-team";
import { useAliasSimpleExecs, useAliasStrikeWord } from "./hooks/execs";
import { useAliasRoomState } from "./hooks/state";
import { useAliasCurrentWordInfo } from "./hooks/word";

const altWordInfo = { minus: 0, weight: 0, plus: 0 };

export default function AliasSpeakerContent() {
    const [isWordSending, setIsWordSending] = useState(false);

    const state = useAliasRoomState();
    const wordInfo = useAliasCurrentWordInfo();
    const strikeWord = useAliasStrikeWord();
    const myTeam = useAliasCurrentTeamNaked('team');
    const { score } = useAliasComputeScore();
    const { minus, plus } = useAliasCurrentWordInfo() ?? altWordInfo;
    const { resetSpeech, startSpeech } = useAliasSimpleExecs();
    const myPossibilities = useMyPossibilitiesCurrentRoom();

    if (!state) return null;

    return <>
        {state.words.length
            ? <ShowWordArea
                className={
                    'flex column center text-center no-scrollbar'
                    + (state.phase === GamerAliasRoomStatePhase.Speech ? ' speech' : '')}
            >
                <GamerAliasTimer />
                {state?.phase === GamerAliasRoomStatePhase.Speech
                    ? <div className="round-button flex center">
                        {wordInfo?.word}
                    </div>
                    : <div
                        className="round-button flex center"
                        onClick={startSpeech}
                    >
                        Начать
                    </div>
                }
                <div className="flex full-width between">
                    <AboveButton className="flex column">
                        <ScoreInc>+{plus}</ScoreInc>
                        <Button
                            name="checkmark-circle-2-outline"
                            className="color--ok"
                            disabled={isWordSending}
                            onClick={() => {
                                setIsWordSending(true);
                                strikeWord('cor')?.then(() => setIsWordSending(false));
                            }}
                        />
                    </AboveButton>
                    {myTeam && <div>{score}</div>}
                    <AboveButton className="flex column">
                        <ScoreInc>-{minus}</ScoreInc>
                        <Button
                            name="close-circle-outline"
                            className="color--ko"
                            disabled={isWordSending}
                            onClick={() => {
                                setIsWordSending(true);
                                strikeWord('inc')?.then(() => setIsWordSending(false));
                            }}
                        />
                    </AboveButton>
                </div>
            </ShowWordArea>
            : <div className="half-height flex center color--ko">Слов в арсенале не осталось...</div>}
        {myPossibilities.isManager
            && <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
                <SendButton
                    title="Завершить спич"
                    confirm
                    onSend={resetSpeech}
                />
            </div>}
    </>;
}


const ScoreInc = styled.div`
    display: inline-block;
    margin-top: -2.5em;
    margin-bottom: 2.5em;
`;

const Button = styled(EvaButton)`
    --icon-scale: 4;
`;

const AboveButton = styled.div`
    --pos: 40px;

    margin: var(--pos);
    opacity: 0;
    pointer-events: none;
    transition: opacity .5s;

    @media screen and (max-width: 350px) {
        --icon - scale: 3;
        --pos: 30px;
    }
`;

const ShowWordArea = styled.div`
    --ring-size: 50vmin;

    position: relative;
    overflow-y: scroll;
    padding: 30px 0;

    .round-button {
        cursor: pointer;
    }

    &.speech {
        .round - button {
            background: var(--color--2);
            color: var(--color--3);
            padding: 0 20vmin;
            cursor: initial;
        }

        ${AboveButton} {
            opacity: 1;
            pointer-events: all;
        }
    }

    .loader-icon {
        --icon - size: 50px;
    }

    .round-button {
        width: var(--ring-size);
        max-width: var(--ring-size);
        min-width: var(--ring-size);
        height: var(--ring-size);
        max-height: var(--ring-size);
        min-height: var(--ring-size);

        background: var(--color--7);
        color: var(--color--1);
        border-radius: var(--ring-size);
        transition: background .5s;
    }
`;
