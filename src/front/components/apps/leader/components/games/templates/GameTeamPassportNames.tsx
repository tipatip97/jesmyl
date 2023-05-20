import PrintableTemplate from "../../templates/PrintableTemplate";
import useGames from "../useGames";
import "./GameTemplates.scss";

export default function GameTeamPassportNames({
  selectedTimers,
}: {
  selectedTimers?: number[];
}) {
  const { cgame } = useGames();
  const gameTimers = cgame?.timers;
  const joins = cgame?.timerFields?.joins;
  const timers =
    (selectedTimers?.length &&
      gameTimers &&
      selectedTimers
        .map(
          (wid) =>
            gameTimers.find((timer) => !timer.isInactive && timer.w === wid)
              ?.name
        )
        .filter((timer) => timer)) ||
    cgame?.timerNames;

  let carouselTimers = timers || [];

  return (
    <PrintableTemplate
      noder={(page) => (
        <>
          {cgame?.teams?.map((team, teami) => {
            if (teami && (!joins || !(teami % joins))) {
              carouselTimers = [...carouselTimers];
              carouselTimers.push(carouselTimers.splice(0, 1)[0]);
            }

            return (
              <>
                <div
                  className="for-print break-inside-avoid padding-giant-gap"
                  style={{ borderBottom: "dotted 1px black" }}
                  key={teami}
                >
                  <>
                    <div className="tpl-title">{cgame?.name}</div>
                    <div className="tpl-subtitle margin-gap">
                      Паспорт команды "{team.name}"
                    </div>
                  </>
                </div>
              </>
            );
          })}
        </>
      )}
    />
  );
}
