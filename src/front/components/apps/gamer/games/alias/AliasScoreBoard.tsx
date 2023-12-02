import { useAliasState } from "./useAliasState";

export default function AliasScoreBoard() {
    const { state, players } = useAliasState();
    return <>
        <h1>Цель: {state?.dream}</h1>
        {state?.teams.map((team, teami) => {
            return <div key={'' + teami}>
                {team.title && <h2>{team.title}</h2>}
                <h2>Счёт: {team.score}</h2>
                {team.members.map((memberl) => {
                    return <div key={memberl} className="margin-gap-l">
                        {players?.find((player) => player.login === memberl)?.name}
                    </div>
                })}
            </div>
        })}
    </>;
}
