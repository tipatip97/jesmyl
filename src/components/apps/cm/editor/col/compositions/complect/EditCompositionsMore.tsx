import EvaIcon from "../../../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../../../complect/fullscreen-content/useFullscreenContent";
import NewComposition from "./NewComposition";

export default function EditCompositionsMore() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();
  return (
    <>
      <div
        className="abs-item abs-full"
        onClick={() =>
          openFullscreenContent(
            <NewComposition close={closeFullscreenContent} />
          )
        }
      >
        <EvaIcon name="plus-circle-outline" className="abs-icon" />
        <div className="title">Новая песня</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
