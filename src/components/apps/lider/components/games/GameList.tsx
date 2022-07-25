import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { liderExer } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import TeamGameFace from "./GameFace";
import GamesMore from "./GamesMore";
import useGames from "./useGames";

export default function GameList() {
  const { games } = useGames();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      onMoreClick={
        liderExer.actionAccessedOrNull("addTeamGame") === null
          ? undefined
          : () => {
              openAbsoluteBottomPopup(<GamesMore />);
            }
      }
      headTitle="Командные игры"
      content={
        <>
          {games?.teamGames?.map((game, gamei) => (
            <TeamGameFace key={`gamei-${gamei}`} game={game} />
          ))}
        </>
      }
    />
  );
}

getRandomTwiceName();
