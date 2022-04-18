import modalService from "../../../complect/modal/Modal.service";
import { indexStorage } from "../../../shared/jstorages";
import { localAuth } from "../Board.source";
import { boardExer } from "../Board.store";
import useIndexNav from "../complect/useIndexNav";

export default function BoardSettings() {
  const { setPhase } = useIndexNav();

  return (
    <>
      <div className="phase-name">Инструменты</div>
      <div className="system-item">
        <span className="text" onClick={() => setPhase("apps")}>
          назад
        </span>
      </div>
      {localStorage.auth == null ? (
        <div className="system-item">
          <span className="text" onClick={() => setPhase("login")}>
            вход
          </span>
        </div>
      ) : (
        <div className="system-item">
          <span
            className="text"
            onClick={() => {
              modalService.open({
                title: "Выход",
                description: "Подтверди выход.",
                buttons: [
                  {
                    title: "Выйти",
                    onClick: () => {
                      indexStorage.rem("auth");
                      setPhase("apps");
                    },
                  },
                  {
                    title: "Отмена",
                  },
                ],
              });
            }}
          >
            выход
          </span>
        </div>
      )}
      {localAuth?.level && localAuth.level < 3 ? null : (
        <div key="message-to-developers.wr" className="system-item">
          <span
            className="text"
            onClick={() => {
              modalService.open({
                title: "Письмо разработчикам",
                description: "Постараемся отреагировать в кратчайшие сроки.",
                inputs: [
                  {
                    type: "textarea",
                    placeholder: "Текст сообщения",
                    rows: 10,
                    onInput: ({ setError }) => setError(""),
                  },
                  {
                    type: "password",
                    title: "Пароль",
                    placeholder: "Пароль",
                    onInput: ({ setError }) => setError(""),
                  },
                ],
                buttons: [
                  {
                    title: "Отправить",
                    closable: false,
                    onClick: ({ closeModal, getInput }) => {
                      if (localAuth)
                        boardExer.send(
                          {
                            action: "writeToDevelopers",
                            args: {
                              message: getInput(0)?.value,
                              id: Date.now(),
                              login: localAuth.login,
                              fio: localAuth.fio,
                              at: localAuth.at,
                            },
                          },
                          () => {
                            // System.showToast('Сообщение отправлено!');
                            closeModal();
                          }
                          // () => System.showToast('Ошибка отправки сообщения!')
                        );
                    },
                  },
                ],
              });
            }}
          >
            написать разработчикам
          </span>
        </div>
      )}
    </>
  );
}
