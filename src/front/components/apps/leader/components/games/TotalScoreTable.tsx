import { useMemo, useState } from 'react';
import { GameTeamImportable } from './teams/GameTeams.model';
import { RateSortedItem } from './timers/GameTimer.model';
import TimerScreen from './timers/complect/TimerScreen';
import useGames from './useGames';
import { LeaderCleans } from '../LeaderCleans';

export default function TotalScoreTable({ selectedTimers }: { selectedTimers: number[] }) {
  const [openScores, updateOpenScores] = useState<number[]>([]);
  const { cgame } = useGames();

  const scores = useMemo(() => {
    const rateSortedItemsMap = new Map<number, RateSortedItem[]>();

    selectedTimers.forEach((timerWid) => {
      const timer = cgame?.timers?.find((timer) => timer.w === timerWid);

      timer &&
        LeaderCleans.rateSortedTimerTeams(timer, cgame).forEach((rateSorts) => {
          const { team, start, finish } = rateSorts;
          if (start && finish && team) {
            if (rateSortedItemsMap.has(team.w))
              rateSortedItemsMap.set(team.w, rateSortedItemsMap.get(team.w)?.concat(rateSorts) ?? []);
            else rateSortedItemsMap.set(team.w, [rateSorts]);
          }
        });
    });

    const scores: RateSortedItem[] = [];

    rateSortedItemsMap.forEach((items, teamw) => {
      type ScoreMap = {
        start: number;
        finish: number;
        starts: number[];
        finishes: number[];
        team?: GameTeamImportable;
      };

      const { start, finish } = items.reduce<ScoreMap>(
        ({ start, finish, starts, finishes }, item) => ({
          start: item.start + start,
          finish: item.finish + finish,
          starts: [...starts, start] as number[],
          finishes: [...finishes, finish] as number[],
          team: item.team,
        }),
        { start: 0, finish: 0, starts: [], finishes: [] },
      );

      scores.push({ start, finish, rowi: -1, team: cgame?.teams?.find(({ w }) => w === teamw) });
    });
    return scores;
  }, [selectedTimers, cgame]);

  const scoresNode = useMemo(() => {
    return scores
      .sort((a, b) => a.finish - a.start - (b.finish - b.start))
      .map(({ team, start, finish }, scorei) => {
        return (
          <div key={scorei} className="margin-gap">
            <div
              className="flex flex-gap pointer"
              onClick={() => {
                const index = openScores.indexOf(scorei);
                if (index < 0) updateOpenScores([...openScores, scorei]);
                else updateOpenScores(openScores.filter((scoreIndex) => scoreIndex !== scorei));
              }}
            >
              <span>
                {scorei + 1}. {team?.name} -
              </span>
              <TimerScreen start={start} pause={finish} />
            </div>
            {openScores.indexOf(scorei) < 0 || (
              <div className="padding-giant-gap">
                {selectedTimers.map((timerWid, timeri) => {
                  const timer = cgame?.timers?.find(({ w }) => w === timerWid);
                  if (!timer) return null;

                  const scores = LeaderCleans.rateSortedTimerTeams(timer, cgame);
                  const teamScores = scores.find(({ team: t }) => t?.w === team?.w);
                  const teamInTimer = team && timer.teams?.find((teamw) => team.w === teamw);

                  return (
                    !!(teamInTimer && teamScores?.start && teamScores?.finish) && (
                      <div key={timeri} className="flex flex-gap">
                        <span className={`${timer.isInactive ? 'text-strike' : ''} text-bold`}>{timer.name}</span> -
                        <TimerScreen start={teamScores.start} pause={teamScores.finish} />
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        );
      });
  }, [scores, openScores, selectedTimers, cgame]);

  return <div className="full-container padding-giant-gap">{scoresNode}</div>;
}
