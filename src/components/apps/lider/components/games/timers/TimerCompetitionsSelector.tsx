import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import mylib from "../../../../../../complect/my-lib/MyLib";
import GameTeam from "../teams/GameTeam";

export default function TimerCompetitionsSelector({
  joins,
  teams,
  onSelect,
  isRedact = true,
}: {
  joins: number;
  teams: GameTeam[];
  onSelect: (item: { id: number; title: string }) => void;
  isRedact?: boolean;
}) {
  return (
    <>
      <div className="dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
        Таймер
        {isRedact ? (
          <Dropdown
            id={joins}
            items={[
              {
                id: 1,
                title: "Глобальное противостояние",
              },
            ].concat(
              [2, 3, 4, 5, 6, 7, 8, 9]
                .map((num) => {
                  return num < teams.length
                    ? {
                        id: num,
                        title: `Соревнуются по ${num} ${mylib.declension(
                          num,
                          "команде",
                          "команды",
                          "команд"
                        )}`,
                      }
                    : { id: 0, title: "" };
                })
                .filter(({ id }) => id)
            )}
            onSelect={onSelect}
          />
        ) : (
          <div>{joins}</div>
        )}
      </div>
    </>
  );
}
