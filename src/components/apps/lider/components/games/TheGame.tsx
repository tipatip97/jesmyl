import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import HumanFace from "../people/HumanFace";
import usePeople from "../people/usePeople";
import TheTeam from "../teams/TheTeam";
import OutsiderMore from "./OutsiderMore";
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

  return (
    <PhaseLiderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame?.name || ""}`}
      content={
        <>
          <div>Не вошедшие</div>
          {people?.humanList
            ?.filter((human) => usedHumans.indexOf(human.id) < 0)
            .map((human, humani) => (
              <HumanFace
                key={`humani-${humani}`}
                human={human}
                onMoreClick={
                  cgame &&
                  (() => {
                    openAbsoluteBottomPopup(
                      <OutsiderMore game={cgame} human={human} />
                    );
                  })
                }
              />
            ))}
          {cgame?.teams.map((team, teami) => {
            return <TheTeam key={`teami-${teami}`} team={team} redactable />;
          })}
        </>
      }
    />
  );
}
