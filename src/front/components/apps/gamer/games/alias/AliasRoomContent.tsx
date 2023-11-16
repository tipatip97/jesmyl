import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import AliasGameRound from "./AliasGameRound";
import AliasGameRoundResults from "./AliasGameRoundResults";
import AliasRoomInitialContent from "./AliasRoomInitialContent";
import AliasScoreBoard from "./AliasScoreBoard";
import useAliasState from "./useAliasState";

export default function AliasRoomContent() {
    const { state } = useAliasState();
    const phase = state?.phase;
    const { openFullscreenContent } = useFullscreenContent();

    return <>
        <div onClick={() => openFullscreenContent(<AliasScoreBoard />, true)}>
            Посмотреть счёт
        </div>
        {phase === GamerAliasRoomStatePhase.Wait
            || phase === GamerAliasRoomStatePhase.Speech
            ? <AliasGameRound />
            : phase === GamerAliasRoomStatePhase.Results
                ? <AliasGameRoundResults />
                : <AliasRoomInitialContent />}
    </>
}