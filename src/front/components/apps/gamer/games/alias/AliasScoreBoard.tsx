import useAliasState from "./useAliasState";

export default function AliasScoreBoard() {
    const { state, players } = useAliasState();
    return <>{
        state?.teams.map((team, teami) => {
            return <div key={'' + teami}>
                {team.title && <h2>{team.title}</h2>}
                <h2>Счёт: {team.score}</h2>
                {team.members.map((memberl) => {
                    return <div key={memberl}>
                        {players?.find((player) => player.login === memberl)?.name}
                    </div>
                })}
            </div>
        })
    }</>;
}
