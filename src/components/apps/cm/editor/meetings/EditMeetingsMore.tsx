import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import AddContext from "./AddContext";
import MeetingsCreator from "./MeetingsCreator";

export default function EditMeetingsMore({ currPath }: { currPath: number[] }) {
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
        <div>Создать событие</div>
        <div className="abs-action" />
      </div>
      <div
        className="abs-item pointer"
        onClick={() => {
          openFullscreenContent((close) => (
            <AddContext close={close} currPath={currPath} />
          ));
        }}
      >
        <EvaIcon name="folder-add-outline" className="abs-icon" />
        <div>Создать контекст</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
