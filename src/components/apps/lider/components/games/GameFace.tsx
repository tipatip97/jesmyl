import { HTMLAttributes } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import Game from "./Game";
import useGames from "./useGames";

export default function TeamGameFace({
  game,
  ...props
}: { game: Game } & HTMLAttributes<HTMLDivElement>) {
  const { goToGame } = useGames();

  return (
    <div {...props} className="face-item" onClick={() => goToGame(game)}>
      <span className="face-logo">
        <EvaIcon name="cube-outline" />
      </span>
      <span className="face-title">{game.name}</span>
    </div>
  );
}
