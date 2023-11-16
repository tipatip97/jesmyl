import SendButton from "../../../../../complect/SendButton";
import useAliasState from "./useAliasState";

export default function AliasGameRoundWin({ maxScore }: { maxScore: number }) {
    const { state, resetGame, memberPossibilities } = useAliasState();
    const winTeams = state?.teams.filter(team => team.score === maxScore);

    return <>
        <h2>Наилучшие поздравления!</h2>
        {winTeams?.map(team => {
            return <div key={team.members[0]}>{team.title}</div>;
        })}
        {memberPossibilities().isManager && <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
            <SendButton
                title="Завершить игру"
                confirm
                onSend={resetGame}
            />
        </div>}
    </>
}
