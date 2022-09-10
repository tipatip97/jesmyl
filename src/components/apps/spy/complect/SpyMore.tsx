import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import NewRoomScreen from "./NewRoomScreen";

export default function SpyMore() {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() =>
          openFullscreenContent((close) => <NewRoomScreen close={close} />)
        }
      >
        <EvaIcon name="plus" className="abs-icon" />
        <div>Новая комната</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
