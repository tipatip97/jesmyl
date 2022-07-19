import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import TeamGameMaker from "./TeamGameMaker";

export default function GameMore() {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => <TeamGameMaker close={close} />)
        }
      >
        <EvaIcon name="people-outline" className="abs-icon" />
        <div>Новая командная игра</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
