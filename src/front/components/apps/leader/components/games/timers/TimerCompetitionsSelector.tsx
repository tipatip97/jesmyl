import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { GameTeamImportable } from "../teams/GameTeams.model";

export default function TimerCompetitionsSelector({
  joins,
  teams,
  onSelect,
  isRedact = true,
  addItems,
  hideable,
}: {
  joins: number;
  teams?: GameTeamImportable[];
  onSelect: (item: { id: number; title: string }) => void;
  isRedact?: boolean;
  hideable?: boolean;
  addItems?: { id: number; title: string }[];
}) {
  // const { cgame } = useGames();
  // if (hideable && cgame?.timerFields?.joins) return null;

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
                  return !teams || num < teams?.length
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
                .filter(({ id }) => id),
              addItems || []
            )}
            onSelect={onSelect}
          />
        ) : (
          <div className="color--3">{joins || " - "}</div>
        )}
      </div>
    </>
  );
}
