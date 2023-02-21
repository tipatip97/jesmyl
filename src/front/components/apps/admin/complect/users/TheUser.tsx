import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import TheButton from "../../../../../complect/Button";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import { adminExer } from "../../Admin.store";
import PhaseAdminEditorContainer from "../../phase-editor-container/PhaseAdminEditorContainer";
import UserMore from "./UserMore";
import useUsers from "./useUsers";

export default function TheUser() {
  const { currentUser, getMessages } = useUsers();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  if (!currentUser) return null;

  return (
    <PhaseAdminEditorContainer
      topClass="user-application"
      headTitle={`Пользователь - ${currentUser.name}`}
      content={
        <>
          <div className="flex margin-gap">
            Уровень доступа - {currentUser.level}
          </div>
          <TheButton
            onClick={() => {
              return new Promise((resolve) => {
                let passphrase = '';
                let level = currentUser.level;
                modalService.open({
                  title: 'Уровень доступа',
                  inputs: [
                    {
                      title: 'пароль',
                      onInput: ({ value }) => passphrase = value,
                    },
                    {
                      title: 'Уровень доступа',
                      value: () => '' + level,
                      onInput: ({ value }) => level = +value,
                      type: 'number',
                    }
                  ],
                  buttons: [
                    {
                      title: 'Изменить',
                      onClick: () => {
                        if (level && passphrase)
                          return adminExer.send({
                            action: 'setUserLevel',
                            method: 'set',
                            args: {
                              level,
                              fio: currentUser.name,
                              login: currentUser.login,
                              passphrase
                            },
                          }).then(resolve).catch();
                      }
                    },
                    {
                      title: 'отмена',
                    }
                  ],
                });
              });
            }}
          >Изменить уровень доступа</TheButton>
          <div className="">Сообщения от пользователя</div>
          <div className="messages-box">
            {getMessages(currentUser).map((message) => (
              <div
                key={`message-${message.w}`}
                className="message flex between"
              >
                <span>{message.message}</span>
                <EvaIcon
                  name="more-vertical"
                  className="pointer"
                  onClick={() => {
                    openAbsoluteBottomPopup(<UserMore message={message} />);
                  }}
                />
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
