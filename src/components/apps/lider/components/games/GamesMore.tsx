import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGameMaster from "./GameMaster";

export default function GamesMore() {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => <LeaderGameMaster close={close} />)
        }
      >
        <EvaIcon name="people-outline" className="abs-icon" />
        <div>Новая командная игра</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
