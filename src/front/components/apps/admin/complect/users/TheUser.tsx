import TheButton from "../../../../../complect/Button";
import modalService from "../../../../../complect/modal/Modal.service";
import { adminExer } from "../../adminExer";
import { useAdminContext } from "../../adminStorage";
import PhaseAdminEditorContainer from "../../phase-editor-container/PhaseAdminEditorContainer";

export default function TheUser() {
  const { currentUser } = useAdminContext();

  if (!currentUser) return null;

  return (
    <PhaseAdminEditorContainer
      className="user-application"
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
        </>
      }
    />
  );
}
