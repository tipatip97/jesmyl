import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import SendButton from "../../../../../complect/SendButton";
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
          <SendButton
            title="Изменить уровень доступа"
            onSend={async () => {
              const passphrase = await modalService.prompt('пароль');
              if (!passphrase) return;
              const level = await modalService.prompt('Изменить уровень доступа', currentUser.level + '');

              if (level)
                return adminExer.send({
                  action: 'setUserLevel',
                  method: 'set',
                  args: {
                    level: +level,
                    fio: currentUser.name,
                    login: currentUser.login,
                    passphrase
                  },
                });
            }}
          />
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
