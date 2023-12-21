import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import PhaseLeaderContainer from '../../phase-container/PhaseLeaderContainer';
import { useLeaderCcontext } from '../contexts/useContexts';
import TeamGameFace from './GameFace';
import { GamesMoreContenter } from './GamesMore';
import useGames from './useGames';

export default function GameList() {
  const { contextGames } = useGames();
  const ccontext = useLeaderCcontext();
  const [gamesMoreNode, openGamesMore] = useBottomPopup(GamesMoreContenter);

  return (
    <PhaseLeaderContainer
      className="template-page-content"
      onMoreClick={() => openGamesMore()}
      headTitle={`Командные игры${ccontext?.name ? ` - ${ccontext.name}` : ''}`}
      content={
        <>
          {gamesMoreNode}
          {contextGames?.map((game, gamei) => <TeamGameFace key={gamei} game={game} />)}
        </>
      }
    />
  );
}
