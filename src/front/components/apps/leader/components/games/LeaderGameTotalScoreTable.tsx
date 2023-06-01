import { useMemo, useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import { TeamGameImportable } from "../../Leader.model";
import { LeaderCleans } from "../LeaderCleans";
import { GameTeamImportable } from "./teams/GameTeams.model";
import LeaderGameTimerMaster from "./timers/GameTimerMaster";
import TimerRatingBoard from "./timers/complect/TimerRatingBoard";
import TimerSortRatingVariantSelector from "./timers/complect/TimerSortRatingVariantSelector";

export default function LeaderGameTotalScoreTable({ game }: { game: TeamGameImportable }) {
    const [expandedTimers, setExpandedTimers] = useState<number[]>([]);
    const [openTimerw, setOpenTimerw] = useState(0);
    const openTimer = openTimerw ? game.timers?.find(it => it.w === openTimerw) : null;
    const [fullContent, openFullContent] = useFullContent((close) => {
        return openTimer && <LeaderGameTimerMaster game={game} close={close} timer={openTimer} />;
    });

    const node = useMemo(() => {
        if (!game.teams) return null;
        const teamRating: Map<GameTeamImportable, number> = new Map();

        game.timers?.forEach((timer) => {
            if (timer.isInactive) return;
            const teamsPlayed = LeaderCleans
                .rateSortedTimerTeams(timer, game, true);
            const teamsLen = teamsPlayed.length;

            if (teamsLen > 1)
                teamsPlayed.forEach(({ team, finish }, ratei) => {
                    if (!team || !finish) return;
                    const score = teamsLen - ratei;
                    teamRating.set(team, teamRating.has(team)
                        ? teamRating.get(team)! + score
                        : score);
                });
        });

        return Array.from(teamRating.entries())
            .sort((b, a) => a[1] - b[1])
            .map(([team, balance]) => {
                return <div key={team.w}>{team.name}: {balance}</div>;
            });
    }, [game]);

    return <>
        {fullContent}
        <div className="margin-big-gap">
            <div className="color--3">Общий рейтинг (баллы)</div>
            {node?.length
                ? node
                : <div className="margin-gap-h">Нет активных таймеров</div>}
        </div>
        {game.timers?.map(timer => {
            return <div key={timer.w} className={'margin-big-gap-v' + (timer.isInactive ? ' fade-05 ' : '')}>
                <div
                    className="flex flex-gap pointer"
                    onClick={() => setExpandedTimers(expandedTimers.includes(timer.w)
                        ? expandedTimers.filter(it => it !== timer.w)
                        : [...expandedTimers, timer.w])}
                >
                    <EvaIcon name={expandedTimers.includes(timer.w) ? 'chevron-up' : 'chevron-down'} />
                    <span className="color--3">Таймер</span>
                    <span className="color--7">{timer.name}</span>
                    <EvaButton
                        name="browser-outline"
                        onClick={(event) => {
                            event.stopPropagation();

                            setOpenTimerw(timer.w);
                            openFullContent();
                        }}
                    />
                </div>
                {expandedTimers.includes(timer.w) && <div className="margin-big-gap">
                    <TimerSortRatingVariantSelector isRedact={false} sort={LeaderCleans.getTimerConfigurableField('sort', timer, game)} />
                    <TimerRatingBoard timer={timer} game={game} withoutControls />
                </div>}
            </div>;
        })}</>;
}
