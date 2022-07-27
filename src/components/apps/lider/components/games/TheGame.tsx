import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { liderExer } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import HumanFace from "../people/HumanFace";
import usePeople from "../people/usePeople";
import TheTeam from "../teams/TheTeam";
import OutsiderMore from "./OutsiderMore";
import TimerFace from "./timers/TimerFace";
import useGameTimer from "./timers/useGameTimer";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame } = useCgame();
  const { people } = usePeople();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const usedHumans =
    cgame?.teams.reduce(
      (list, team) => list.concat(team.members),
      [] as string[]
    ) || [];

  const { newTimer } = useGameTimer(cgame);

  return (
    <PhaseLiderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame?.name || ""}`}
      content={
        <>
          <h2 className="margin-gap">Не вошедшие игроки:</h2>
          {people?.humanList
            ?.filter((human) => usedHumans.indexOf(human.id) < 0)
            .map((human, humani) => (
              <HumanFace
                key={`humani-${humani}`}
                human={human}
                onMoreClick={
                  cgame && liderExer.actionAccessedOrUnd('addMemberToTeam') &&
                  (() => {
                    openAbsoluteBottomPopup(
                      <OutsiderMore game={cgame} human={human} />
                    );
                  })
                }
              />
            ))}
          <h2 className="margin-gap">Таймеры:</h2>
          {cgame?.timers?.map((timer, timeri) => {
            return <TimerFace key={`timeri-${timeri}`} timer={timer} />;
          })}
          <TimerFace timer={newTimer} />
          <h2 className="margin-big-gap-v margin-gap">Команды:</h2>
          {cgame?.teams.map((team, teami) => {
            return <TheTeam key={`teami-${teami}`} team={team} redactable />;
          })}
        </>
      }
    />
  );
}
