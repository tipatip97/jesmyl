import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import useExer from "../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../complect/modal/Modal.service";
import mylib, { AddRestMode } from "../../../../../complect/my-lib/MyLib";
import { liderExer } from "../../Lider.store";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import HumanFace from "../people/HumanFace";
import usePeople from "../people/usePeople";
import Team from "../teams/Team";
import TheTeam from "../teams/TheTeam";
import Game from "./Game";

export default function TeamGameMaker({ close }: { close: () => void }) {
  const teamMemberCountInput = useKeyboard()("set-team-member-count", {
    type: "number",
  });
  const gameNameInput = useKeyboard()("game-name", {});
  const [teams, updateTeams] = useState<Team[] | null>(null);
  const [addRestMode, setAddRestMode] = useState<AddRestMode>("strong");
  const { exec } = useExer(liderExer);
  const { people } = usePeople();

  const humanList = people?.humansReadyToPlay;

  useEffect(() => {
    return () => {
      gameNameInput.remove();
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

  return (
    <div className="team-maker full-container padding-giant-gap">
      <div className="flex full-width margin-big-gap-v">
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
                className="pointer"
                onClick={() => {
                  const teams = mylib.groupByFieldsSoftly(
                    ["isMan", "ufp"],
                    humanList,
                    +teamMemberCountInput.value(),
                    addRestMode
                  );
                  const idPrefix = Date.now();

                  updateTeams(
                    teams.map((humans) => {
                      return new Team(
                        {
                          w: idPrefix + Math.random(),
                          members: humans.map((human) => human.id),
                        },
                        humans,
                        null
                      );
                    })
                  );
                }}
              >
                Рассчитать
              </div>
            ) : null}

            {gameNameInput.value() && teams ? (
              <div
                className="pointer"
                onClick={async () => {
                  const isSend = await modalService.confirm("Опубликовать игру?");

                  if (isSend)
                    liderExer.send({
                      action: "addTeamGame",
                      method: "push",
                      args: new Game(
                        {
                          w: Date.now() + Math.random(),
                          name: gameNameInput.value(),
                          teams: teams.map((team) => team.toDict()),
                        },
                        humanList
                      ).toDict(),
                    });
                  exec();
                  close();
                }}
              >
                Сохранить игру
              </div>
            ) : null}
          </div>

          <div className="margin-gap error-message">Не войдут</div>
          {people?.humanList?.map(
            (human, humani) =>
              !human.isCanPlayGame() && (
                <HumanFace key={`humani-${humani}`} human={human} />
              )
          )}
          {teams?.map((team, teami) => {
            return <TheTeam key={`team-${teami}`} team={team} />;
          })}
        </>
      ) : (
        <div className="error-message padding-giant-gap text-center">
          Количество команд превышает допустимое число
        </div>
      )}
    </div>
  );
}
