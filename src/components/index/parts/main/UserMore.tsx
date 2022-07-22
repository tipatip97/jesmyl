import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../complect/modal/Modal.service";
import { refresh } from "../../../../complect/refresh/Refresher";
import { indexStorage } from "../../../../shared/jstorages";
import useAuth from "../../useAuth";
import MailToDevelopers from "./MailToDevelopers";

let timeout: any;

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
        onContextMenu={(event) => {
          event.preventDefault();
          modalService
            .confirm("Произвести выход из системы?", "Разлогиниться")
            .then((logout) => logout && indexStorage.rem("auth"));
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
          let isLoggedOut = false;

          modalService
            .open({
              title: "Выход",
              description: ({ forceUpdate }) =>
                isLoggedOut ? (
                  <div>Был произведён выход из системы</div>
                ) : (
                  <div
                    onTouchStart={() => {
                      timeout = setTimeout(() => {
                        indexStorage.rem("auth");
                        isLoggedOut = true;
                        forceUpdate();
                        refresh.onLogin();
                        forceUpdate();
                        logout();
                      }, 10_000);
                    }}
                    onTouchEnd={() => clearTimeout(timeout)}
                  >
                    Чтоб выйти из системы, необходимо очистить кеш браузера,
                    через который устанавливалось приложение
                  </div>
                ),
            })
            .then((logout) => logout && indexStorage.rem("auth"));
        }}
      >
        <EvaIcon name="person-outline" className="abs-icon" />
        <div>Выйти из системы</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
