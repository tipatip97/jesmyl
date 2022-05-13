import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import MeetingsCreator from "./MeetingsCreator";

export default function EditMeetingsMore() {
  const { openFullscreenContent } = useFullscreenContent();
  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() =>
          openFullscreenContent((close) => <MeetingsCreator close={close} />)
        }
      >
        <EvaIcon name="plus-circle-outline" className="abs-icon" />
        <div>Создать</div>
        <div className="abs-action" />
      </div>
      <div
        className="abs-item pointer"
        onClick={() =>
          openFullscreenContent((close) => <MeetingsCreator close={close} />)
        }
      >
        <EvaIcon name="folder-outline" className="abs-icon" />
        <div>Поменять контекст</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
