import { useAliasRoomState } from "./hooks/state";

export default function AliasGameRoundWin({ maxScore }: { maxScore: number }) {
    const state = useAliasRoomState();
    const winTeams = state?.teams.filter(team => team.score === maxScore);

    return <>
        <h2>Наилучшие поздравления!</h2>
        {winTeams?.map(team => <div key={team.members[0]}>{team.title}</div>)}
    </>
}
