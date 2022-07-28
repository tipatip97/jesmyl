import { useMemo, useState } from "react";
import Team from "../teams/Team";
import GameTimer from "./timers/GameTimer";
import { RateSortedItem } from "./timers/GameTimer.model";
import GameTimerScreen from "./timers/GameTimerScreen";

export default function TotalScoreTable({
  selectedTimers,
}: {
  selectedTimers: GameTimer[];
}) {
  const [openScores, updateOpenScores] = useState<number[]>([]);

  const scores = useMemo(() => {
    const rateSortedItemsMap = new Map<Team, RateSortedItem[]>();

    selectedTimers.forEach((timer) => {
      timer.rateSortedTeams().forEach((rateSorts) => {
        const { team, start, finish } = rateSorts;
        if (start && finish) {
          if (rateSortedItemsMap.has(team))
            rateSortedItemsMap.set(
              team,
              rateSortedItemsMap.get(team)?.concat(rateSorts) ?? []
            );
          else rateSortedItemsMap.set(team, [rateSorts]);
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
      };

      const { start, finish } = items.reduce<ScoreMap>(
        ({ start, finish, starts, finishes }, item) => ({
          start: item.start + start,
          finish: item.finish + finish,
          starts: [...starts, start] as number[],
          finishes: [...finishes, finish] as number[],
        }),
        { start: 0, finish: 0, starts: [], finishes: [] }
      );

      scores.push({ start, finish, rowi: -1, team });
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
                {scorei + 1}. {team.name} -
              </span>
              <GameTimerScreen start={start} pause={finish} />
            </div>
            {openScores.indexOf(scorei) < 0 || (
              <div className="padding-giant-gap">
                {selectedTimers.map((timer, timeri) => {
                  const scores = timer.rateSortedTeams();
                  const teamScores = scores.find(
                    ({ team: scoreTeam }) => scoreTeam.wid === team.wid
                  );
                  const teamInTimer = timer.teams.find(
                    (timerTeam) => team.wid === timerTeam.wid
                  );

                  return (
                    !!(
                      teamInTimer &&
                      teamScores?.start &&
                      teamScores?.finish
                    ) && (
                      <div key={`timeri-${timeri}`} className="flex flex-gap">
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
