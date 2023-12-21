import EvaButton from '../../../../complect/eva-icon/EvaButton';
import LeaderApplication from '../Leader';
import { GameDescription } from '../components/games/GameDescription';
import LeaderGameTotalScoreTable from '../components/games/LeaderGameTotalScoreTable';
import useGames from '../components/games/useGames';
import LeaderTeamGameAttachRedact from './LeaderTeamGameAttachRedact';
import { LeaderResultBoardAttachValues } from './leaderScheduleAttachments';

export default function LeaderTeamGameAttach({
  value,
  scope,
  isRedact,
  switchIsRedact,
}: {
  value: LeaderResultBoardAttachValues;
  scope: string;
  isRedact: boolean;
  switchIsRedact: (is?: boolean) => void;
}) {
  const { games, jumpToGame } = useGames();

  const game = value.gamew && games?.teamGames?.find((game) => game.w === value.gamew);

  return (
    <div>
      <LeaderApplication content={null} />
      {isRedact && <LeaderTeamGameAttachRedact isRedact scope={scope} switchIsRedact={switchIsRedact} />}
      <div className="flex flex-gap margin-gap-h">
        {game ? (
          <span className="text-italic">{game.name}</span>
        ) : value.gamew ? (
          <span className="error-message">Игра удалена</span>
        ) : (
          <span>Не определена</span>
        )}
        {game && <EvaButton name="external-link-outline" onClick={() => jumpToGame(game.w)} />}
      </div>
      {game && (
        <>
          <div className="margin-big-gap-l margin-gap-v">
            <div className="color--3">Заметки игры</div>
            <GameDescription game={game} />
          </div>
          <LeaderGameTotalScoreTable game={game} />
        </>
      )}
    </div>
  );
}
