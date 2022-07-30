import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { liderExer } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import useLeaderContexts from "../contexts/useContexts";
import TeamGameFace from "./GameFace";
import GamesMore from "./GamesMore";
import useGames from "./useGames";

export default function GameList() {
  const { teamGames } = useGames();
  const { ccontext } = useLeaderContexts();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      onMoreClick={
        liderExer.actionAccessedOrUnd("addTeamGame") &&
        (() => {
          openAbsoluteBottomPopup(<GamesMore />);
        })
      }
      headTitle={`Командные игры${ccontext?.name ? ` - ${ccontext.name}` : ""}`}
      content={
        <>
          {teamGames?.map((game, gamei) => (
            <TeamGameFace key={`gamei-${gamei}`} game={game} />
          ))}
        </>
      }
    />
  );
}

getRandomTwiceName();
