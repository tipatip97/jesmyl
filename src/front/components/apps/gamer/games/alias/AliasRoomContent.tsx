import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import AliasGameRound from "./AliasGameRound";
import AliasGameRoundResults from "./AliasGameRoundResults";
import AliasRoomInitialContent from "./AliasRoomInitialContent";
import AliasScoreBoard from "./AliasScoreBoard";
import { AliasStateContext, useAliasContextStateMaker } from "./useAliasState";

export default function AliasRoomContent() {
    const aliasState = useAliasContextStateMaker();
    const phase = aliasState.state?.phase;
    const [scoreNode, openFullscreenContent] = useFullContent(() => <AliasScoreBoard />);

    return <AliasStateContext.Provider value={aliasState}>
        {scoreNode}
        {aliasState && <>
            <div onClick={() => openFullscreenContent(true)}>
                Посмотреть счёт
            </div>
            {phase === GamerAliasRoomStatePhase.Wait
                || phase === GamerAliasRoomStatePhase.Speech
                ? <AliasGameRound />
                : phase === GamerAliasRoomStatePhase.Results
                    ? <AliasGameRoundResults />
                    : <AliasRoomInitialContent />}
        </>}
    </AliasStateContext.Provider>;
}