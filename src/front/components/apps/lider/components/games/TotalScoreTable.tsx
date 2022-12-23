import { useMemo, useState } from "react";
import GameTeam from "./teams/GameTeam";
import { RateSortedItem } from "./timers/GameTimer.model";
import GameTimerScreen from "./timers/GameTimerScreen";
import useGames from "./useGames";

export default function TotalScoreTable({
  selectedTimers,
}: {
  selectedTimers: number[];
}) {
  const [openScores, updateOpenScores] = useState<number[]>([]);
  const { cgame } = useGames();

  const scores = useMemo(() => {
    const rateSortedItemsMap = new Map<number, RateSortedItem[]>();

    selectedTimers.forEach((timerWid) => {
      const timer = cgame?.timers?.find((timer) => timer.wid === timerWid);

      timer?.rateSortedTeams().forEach((rateSorts) => {
        const { team, start, finish } = rateSorts;
        if (start && finish && team) {
          if (rateSortedItemsMap.has(team.wid))
            rateSortedItemsMap.set(
              team.wid,
              rateSortedItemsMap.get(team.wid)?.concat(rateSorts) ?? []
            );
          else rateSortedItemsMap.set(team.wid, [rateSorts]);
        }
      });
    });

    const scores: RateSortedItem[] = [];

    rateSortedItemsMap.forEach((items, team) => {
      type ScoreMap = {
        start: number;
        finish: number;
        starts: number[];
        finishes: number[];
        team?: GameTeam;
      };

      const { start, finish } = items.reduce<ScoreMap>(
        ({ start, finish, starts, finishes }, item) => ({
          start: item.start + start,
          finish: item.finish + finish,
          starts: [...starts, start] as number[],
          finishes: [...finishes, finish] as number[],
          team: item.team,
        }),
        { start: 0, finish: 0, starts: [], finishes: [] }
      );

      scores.push({ start, finish, rowi: -1, team: cgame?.getTeam(team) });
    });
    return scores;
  }, [selectedTimers]);

  const scoresNode = useMemo(() => {
    return scores
      .sort((a, b) => a.finish - a.start - (b.finish - b.start))
      .map(({ team, start, finish }, scorei) => {
        return (
          <div key={`scorei-${scorei}`} className="margin-gap">
            <div
              className="flex flex-gap pointer"
              onClick={() => {
                const index = openScores.indexOf(scorei);
                if (index < 0) updateOpenScores([...openScores, scorei]);
                else
                  updateOpenScores(
                    openScores.filter((scoreIndex) => scoreIndex !== scorei)
                  );
              }}
            >
              <span>
                {scorei + 1}. {team?.name} -
              </span>
              <GameTimerScreen start={start} pause={finish} />
            </div>
            {openScores.indexOf(scorei) < 0 || (
              <div className="padding-giant-gap">
                {selectedTimers.map((timerWid, timeri) => {
                  const timer = cgame?.getTimer(timerWid);
                  if (!timer) return null;

                  const scores = timer.rateSortedTeams();
                  const teamScores = scores.find(
                    ({ team: scoreTeam }) => scoreTeam?.wid === team?.wid
                  );
                  const teamInTimer = timer.teams.find(
                    (timerTeam) => team?.wid === timerTeam.wid
                  );

                  return (
                    !!(
                      teamInTimer &&
                      teamScores?.start &&
                      teamScores?.finish
                    ) && (
                      <div key={`point-${timeri}`} className="flex flex-gap">
                        <span
                          className={`${
                            timer.isInactive ? "text-strike" : ""
                          } text-bold`}
                        >
                          {timer.name}
                        </span>{" "}
                        -
                        <GameTimerScreen
                          start={teamScores.start}
                          pause={teamScores.finish}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        );
      });
  }, [openScores, scores]);

  return <div className="full-container padding-giant-gap">{scoresNode}</div>;
}
