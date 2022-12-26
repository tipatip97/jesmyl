import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../complect/modal/Modal.service";
import useAuth from "../../useAuth";
import MailToDevelopers from "./MailToDevelopers";

export default function UserMore() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();
  const { logout } = useAuth();

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
      <div
        className="abs-item pointer"
        onClick={(event) => {
          event.preventDefault();
          modalService
            .confirm("Произвести выход из системы?", "Разлогиниться")
            .then(isLogout => isLogout && logout());
        }}
      >
        <EvaIcon name="person-outline" className="abs-icon" />
        <div>Выйти из системы</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
