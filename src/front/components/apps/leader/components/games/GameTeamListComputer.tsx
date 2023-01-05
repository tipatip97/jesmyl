import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import mylib, { AddRestMode } from "../../../../../complect/my-lib/MyLib";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import GameTeam from "./teams/GameTeam";
import TheGameTeam from "./teams/TheGameTeam";

export default function GameTeamListComputer({
  onUpdate,
  noComments,
}: {
  onUpdate: (teams: GameTeam[]) => void;
  noComments?: boolean;
}) {
  const { ccontext } = useLeaderContexts();
  const [teams, updateTeams] = useState<GameTeam[] | und>();
  const teamMemberCountInput = useKeyboard()("set-team-member-count", {
    type: "number",
  });
  const [addRestMode, setAddRestMode] = useState<AddRestMode>("strong");

  const humanList = ccontext?.membersReadyToPlay();

  useEffect(() => {
    return () => {
      teamMemberCountInput.remove();
    };
  }, []);

  if (!humanList) return null;

  const teamsCount = +teamMemberCountInput.value();
  const countInTeam = teamsCount && humanList.length / teamsCount;

  const truncated = Math.trunc(countInTeam);
  const restCount = humanList?.length % teamsCount;
  const restLabelPrefix = mylib.declension(
    restCount,
    `Оставшегося ${restCount} участника`,
    `Оставшихся ${restCount} участника`,
    `Оставшихся ${restCount} участников`
  );

  const cantPlayers = ccontext?.members
    ?.map(
      (human, humani) =>
        !human.isCanPlayGame() && (
          <HumanFace key={`humani-${humani}`} human={human} />
        )
    )
    .filter((player) => player);

  return (
    <>
      {
        <>
          <div>
            Общее количество участников - {humanList.length}{" "}
            {mylib.declension(
              humanList.length,
              "человек",
              "человека",
              "человек"
            )}
          </div>
          <div className="flex full-width">
            <div className="nowrap">Количество команд</div>
            <div className="full-width margin-gap-h">
              {teamMemberCountInput.node}
            </div>
          </div>
          {teamsCount <= humanList.length ? (
            <>
              {countInTeam ? (
                <div>
                  Состав команд по {truncated}
                  {truncated !== countInTeam
                    ? ` - ${truncated + 1} ${mylib.declension(
                        truncated + 1,
                        "человеку",
                        "человека",
                        "человек"
                      )}`
                    : ` ${mylib.declension(
                        truncated,
                        "человеку",
                        "человека",
                        "человек"
                      )}`}
                </div>
              ) : null}
              {truncated !== countInTeam ? (
                <Dropdown
                  id={addRestMode}
                  className="margin-gap-v"
                  items={[
                    {
                      title: `${restLabelPrefix} в сильную команду`,
                      id: "strong",
                    },
                    {
                      title: `${restLabelPrefix} в слабую команду`,
                      id: "weak",
                    },
                    {
                      title: `${restLabelPrefix} ${
                        restCount === 1 ? "определить" : "распределить"
                      } случайным образом`,
                      id: "random",
                    },
                  ]}
                  onSelect={({ id }) => setAddRestMode(id)}
                />
              ) : null}
              <div className="flex around margin-big-gap">
                {teamMemberCountInput.value() ? (
                  <div
                    className="the-button"
                    onClick={() => {
                      const teams = mylib.groupByFieldsSoftly(
                        ["isMan", "ufp"],
                        humanList,
                        +teamMemberCountInput.value(),
                        addRestMode
                      );
                      const newTeams = teams.map((humans) => {
                        return new GameTeam(
                          {
                            w: 0,
                            ts: GameTeam.makeNewTs(),
                            members: humans.map((human) => human.wid),
                          },
                          humans,
                          null
                        );
                      });

                      updateTeams(newTeams);
                      onUpdate(newTeams);
                    }}
                  >
                    Рассчитать{teams ? " заново" : ""}
                  </div>
                ) : null}
              </div>

              {!!cantPlayers?.length && (
                <>
                  <div className="margin-gap error-message">
                    Не войдут {cantPlayers?.length}
                  </div>
                  {cantPlayers}
                </>
              )}
              {teams?.map((team, teami) => {
                return (
                  <TheGameTeam
                    key={`team-${teami}`}
                    team={team}
                    noComments={noComments}
                  />
                );
              })}
            </>
          ) : (
            <div className="error-message padding-giant-gap text-center">
              Количество команд превышает допустимое число
            </div>
          )}
        </>
      }
    </>
  );
}
