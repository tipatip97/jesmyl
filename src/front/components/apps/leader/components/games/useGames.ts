import { useLeaderGames } from '../../molecules';
import useLeaderNav, { leaderNavGamePhase } from '../../useLeaderNav';
import useLeaderContext from '../contexts/useContexts';

export default function useGames() {
  const games = useLeaderGames();
  const ctx = useLeaderContext();
  const {
    jumpTo,
    goTo,
    appRouteData: { gamew },
  } = useLeaderNav();

  const cgame = games?.teamGames?.find(game => game.w === gamew);
  const contextGames = games?.teamGames?.filter(({ contextw }) => ctx.ccontext?.w === contextw);

  const ret = {
    cgame,
    games,
    ctx,
    contextGames,
    goToGame: (gamew: number) => goTo({ place: 'game', data: { gamew } }),
    jumpToGame: (gamew: number) => jumpTo({ phase: leaderNavGamePhase, data: { gamew } }),
  };
  return ret;
}
