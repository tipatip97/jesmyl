import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import TheTeam from "./TheTeam";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame } = useCgame();

  return (
    <PhaseLiderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame?.name || ""}`}
      content={
        <>
          {cgame?.teams.map((team, teami) => {
            return <TheTeam key={`teami-${teami}`} team={team} />;
          })}
        </>
      }
    />
  );
}
