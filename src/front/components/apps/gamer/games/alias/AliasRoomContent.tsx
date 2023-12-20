import { useMemo } from "react";
import useIsExpand from "../../../../../complect/expand/useIsExpand";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import { useMyPossibilitiesCurrentRoom } from "../../complect/rooms/room/hooks/possibilities";
import { GamerAliasRoomStatePhase } from "./Alias.model";
import AliasGameRound from "./AliasGameRound";
import AliasGameRoundResults from "./AliasGameRoundResults";
import { AliasHelp } from "./AliasHelp";
import AliasScoreBoard from "./AliasScoreBoard";
import { useNounsPronouns } from "./hooks/nouns-pronouns-lines";
import { useAliasPacks } from "./hooks/packs";
import { useAliasRoomState } from "./hooks/state";
import { AliasRoomInitialContent } from "./initial-content/InitialContent";

export default function AliasRoomContent() {
    const state = useAliasRoomState();
    const phase = state?.phase;
    const [scoreNode, openScore] = useFullContent(() => <AliasScoreBoard />);
    const packs = useAliasPacks();
    const nounProns = useNounsPronouns();
    const isIManager = useMyPossibilitiesCurrentRoom().isManager;

    const isInactualDicts = useMemo(() => {
        return state?.dicts
            && state.lens
            && state.phase !== GamerAliasRoomStatePhase.Initial
            && AliasHelp.takeLens(null, state.dicts, packs, nounProns)
                .some((len, leni) => state.lens![leni] && state.lens![leni] > len);
    }, [nounProns, packs, state]);

    const inactualDictsMessage = <div className="color--ko">
        Словари в неактуальном состоянии
    </div>;
    const [expandContent, isExpand] = useIsExpand(false, inactualDictsMessage);

    if (isInactualDicts && !isIManager)
        return inactualDictsMessage;

    const content = <>
        {scoreNode}
        <div onClick={() => openScore(true)}>Посмотреть счёт</div>
        {phase === GamerAliasRoomStatePhase.Wait
            || phase === GamerAliasRoomStatePhase.Speech
            ? <AliasGameRound />
            : phase === GamerAliasRoomStatePhase.Results
                ? <AliasGameRoundResults />
                : <AliasRoomInitialContent />}
    </>;

    return isInactualDicts
        ? <>
            {expandContent}
            {isExpand && content}
        </>
        : content;
}