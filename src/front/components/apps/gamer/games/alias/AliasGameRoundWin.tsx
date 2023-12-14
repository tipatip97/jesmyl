import SendButton from "../../../../../complect/SendButton";
import { useMyPossibilitiesCurrentRoom } from "../../complect/rooms/room/hooks/possibilities";
import { useAliasSimpleExecs } from "./hooks/execs";
import { useAliasRoomState } from "./hooks/state";

export default function AliasGameRoundWin({ maxScore }: { maxScore: number }) {
    const state = useAliasRoomState();
    const { resetGame } = useAliasSimpleExecs();
    const winTeams = state?.teams.filter(team => team.score === maxScore);
    const myPossibilities = useMyPossibilitiesCurrentRoom();

    return <>
        <h2>Наилучшие поздравления!</h2>
        {winTeams?.map(team => <div key={team.members[0]}>{team.title}</div>)}
        {myPossibilities.isManager && <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
            <SendButton
                title="Завершить игру"
                confirm
                onSend={resetGame}
            />
        </div>}
    </>
}
