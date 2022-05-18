import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import MailToDevelopers from "./MailToDevelopers";

export default function UserMore() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() => {
          openFullscreenContent(
            <MailToDevelopers close={closeFullscreenContent} />
          );
        }}
      >
        <EvaIcon name="email-outline" className="abs-icon" />
        <div>Написать разработчикам</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
