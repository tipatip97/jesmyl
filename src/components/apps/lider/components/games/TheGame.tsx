import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import HumanFace from "../people/HumanFace";
import usePeople from "../people/usePeople";
import TheTeam from "./TheTeam";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame } = useCgame();
  const { people } = usePeople();
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
              <HumanFace key={`humani-${humani}`} human={human} />
            ))}
          {cgame?.teams.map((team, teami) => {
            return <TheTeam key={`teami-${teami}`} team={team} />;
          })}
        </>
      }
    />
  );
}
