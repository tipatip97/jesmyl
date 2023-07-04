import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import { useLeaderCcontext } from "../contexts/useContexts";
import TeamGameFace from "./GameFace";
import { GamesMoreContenter } from "./GamesMore";
import useGames from "./useGames";

export default function GameList() {
  const { contextGames } = useGames();
  const ccontext = useLeaderCcontext();
  const [gamesMoreNode, openGamesMore] = useBottomPopup(GamesMoreContenter);

  return (
    <PhaseLeaderContainer
      topClass="template-page-content"
      onMoreClick={
        leaderExer.actionAccessedOrUnd("addTeamGame") &&
        (() => openGamesMore())
      }
      headTitle={`Командные игры${ccontext?.name ? ` - ${ccontext.name}` : ""}`}
      content={
        <>
          {gamesMoreNode}
          {contextGames?.map((game, gamei) => (
            <TeamGameFace key={gamei} game={game} />
          ))}
        </>
      }
    />
  );
}

getRandomTwiceName();
