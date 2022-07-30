import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../complect/modal/Modal.service";
import mylib, { AddRestMode } from "../../../../../complect/my-lib/MyLib";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import Game from "./Game";
import GameTeam from "./teams/GameTeam";
import TheGameTeam from "./teams/TheGameTeam";

export default function TeamGameMaker({ close }: { close: () => void }) {
  const teamMemberCountInput = useKeyboard()("set-team-member-count", {
    type: "number",
  });
  const gameNameInput = useKeyboard()("game-name", {});
  const [teams, updateTeams] = useState<GameTeam[] | null>(null);
  const [addRestMode, setAddRestMode] = useState<AddRestMode>("strong");
  const { ccontext } = useLeaderContexts();

  const humanList = ccontext?.membersReadyToPlay();

  useEffect(() => {
    return () => {
      gameNameInput.remove();
      teamMemberCountInput.remove();
    };
  }, []);

  if (!humanList) return null;

  const cantPlayers = ccontext?.members
    ?.map(
      (human, humani) =>
        !human.isCanPlayGame() && (
          <HumanFace key={`humani-${humani}`} human={human} />
        )
    )
    .filter((player) => player);

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

                  updateTeams(
                    teams.map((humans) => {
                      return new GameTeam(
                        {
                          w: 0,
                          ts: GameTeam.makeNewTs(),
                          members: humans.map((human) => human.wid),
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
                  if (!ccontext) return;
                  const isSend = await modalService.confirm(
                    "Опубликовать игру?"
                  );

                  if (isSend) {
                    Game.sendNewGame(
                      gameNameInput.value(),
                      teams,
                      ccontext.wid
                    );
                    close();
                  }
                }}
              >
                Сохранить игру
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
            return <TheGameTeam key={`team-${teami}`} team={team} />;
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
