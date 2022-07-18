import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { TeamGame } from "../../Lider.model";

export default function TeamGameFace({ game }: { game: TeamGame }) {
  return (
    <div
      className="face-item"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <span className="face-logo">
        <EvaIcon name="cube-outline" />
      </span>
      <span>{game.name}</span>
    </div>
  );
}
