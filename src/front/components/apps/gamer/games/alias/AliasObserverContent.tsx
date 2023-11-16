import SendButton from "../../../../../complect/SendButton";
import GamerAliasTimer from "./AliasTimer";
import useAliasState from "./useAliasState";

export default function AliasObserverContent() {
    const { takeSpeaker, state, memberPossibilities, resetGame } = useAliasState();

    return <>
        <GamerAliasTimer />
        Спикер - {takeSpeaker()?.name}
        {state?.startTs === 0 && memberPossibilities().isManager &&
            <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
                <SendButton
                    title="Завершить игру"
                    confirm
                    onSend={resetGame}
                />
            </div>}
    </>;
}