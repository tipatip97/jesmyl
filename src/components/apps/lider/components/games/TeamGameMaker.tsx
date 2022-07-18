import { useState } from "react";
import { useSelector } from "react-redux";
import useExer from "../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { LocalHumanTeam, TeamGame } from "../../Lider.model";
import { liderExer } from "../../Lider.store";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import HumanFace from "../humans/HumanFace";
import RandomTwiceName from "../RandomTwiseName";

export default function TeamGameMaker() {
  const teamMemberCountInput = useKeyboard()("set-team-member-count", {
    type: "number",
  });
  const gameNameInput = useKeyboard()("game-name", {});
  const [teams, updateTeams] = useState<LocalHumanTeam[]>([]);
  const { exec } = useExer(liderExer);
  const people = useSelector((state: RootState) => state.lider.people);

  const humanList = people?.humans;

  if (!humanList) return null;

  const teamMemberCount = +teamMemberCountInput.value();
  const countInTeam = teamMemberCount && humanList.length / teamMemberCount;
  const truncated = Math.trunc(countInTeam);

  return (
    <div className="team-maker full-container padding-giant-gap">
      <div className="flex full-width">
        <div className="nowrap">Название игры</div>
        <div className="full-width margin-gap-h">{gameNameInput.node}</div>
      </div>
      <div>
        Общее количество участников - {humanList.length}{" "}
        {mylib.declension(humanList?.length, "человек", "человека", "человек")}
      </div>
      <div className="flex full-width">
        <div className="nowrap">Количество команд</div>
        <div className="full-width margin-gap-h">
          {teamMemberCountInput.node}
        </div>
      </div>
      {countInTeam ? (
        <div>
          Состав команд по {truncated}
          {truncated !== countInTeam
            ? ` - ${truncated + 1} ${mylib.declension(
                truncated + 1,
                "человек",
                "человека",
                "человек"
              )}`
            : ""}
        </div>
      ) : null}
      <div className="flex around margin-big-gap">
        {teamMemberCountInput.value() ? (
          <div
            className="pointer"
            onClick={() => {
              const teams = mylib.groupByFieldsSoftly(
                ["isMan", "ufp"],
                humanList,
                +teamMemberCountInput.value()
              );
              const idPrefix = Date.now();

              updateTeams(
                teams.map((humans) => {
                  return {
                    id: idPrefix + Math.random(),
                    humans,
                    members: humans.map((human) => human.name),
                    name: getRandomTwiceName().join(" "),
                  };
                })
              );
            }}
          >
            Рассчитать
          </div>
        ) : null}
        {gameNameInput.value() ? (
          <div
            className="pointer"
            onClick={() => {
              liderExer.setIfCan({
                action: "addTeamGame",
                method: "push",
                args: {
                  id: Date.now() + Math.random(),
                  name: gameNameInput.value(),
                  teams: teams.map((team) => {
                    const newTeam: Partial<LocalHumanTeam> = { ...team };
                    delete newTeam.humans;
                    return newTeam;
                  }),
                } as TeamGame,
              });
              exec();
            }}
          >
            Сохранить игру
          </div>
        ) : null}
      </div>
      {teams.map((team, teami) => {
        const [pronoun, noun] = team.name.split(" ");
        return (
          <div key={`teami-${teami}`} className="padding-giant-gap">
            <RandomTwiceName
              pronoun={pronoun}
              noun={noun}
              className="inline-block margin-gap-v"
              onNameChange={(name) => (team.name = name)}
            />
            {team.humans.map((human, humani) => {
              return <HumanFace key={`human ${humani}`} human={human} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
