import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { TeamGameImportable } from "../../Leader.model";
import useGames from "./useGames";

export default function TeamGameFace({ game, importantOnClick }: { game: TeamGameImportable, importantOnClick?: () => void }) {
  const { goToGame } = useGames();

  return (
    <div className="face-item" onClick={importantOnClick || (() => goToGame(game.w))}>
      <span className="face-logo">
        <EvaIcon name="cube-outline" />
      </span>
      <span className="face-title">{game.name}</span>
    </div>
  );
}
