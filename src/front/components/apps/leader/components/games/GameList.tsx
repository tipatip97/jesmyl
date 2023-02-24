import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
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
    <PhaseLeaderContainer
      topClass="template-page-content"
      onMoreClick={
        leaderExer.actionAccessedOrUnd("addTeamGame") &&
        (() => openAbsoluteBottomPopup(<GamesMore />))
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
