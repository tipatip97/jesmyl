import { useState } from 'react';
import TheButton from '../../../../../complect/Button';
import useModal from '../../../../../complect/modal/useModal';
import { adminExer } from '../../adminExer';
import { useAdminContext } from '../../adminStorage';
import PhaseAdminEditorContainer from '../../phase-editor-container/PhaseAdminEditorContainer';

export default function TheUser() {
  const { currentUser } = useAdminContext();
  const [passphrase, setPassphrase] = useState('');
  const [level, setLevel] = useState(currentUser?.level);

  const [modalNode, openModal] = useModal(({ body, header, footer }, close) => {
    return (
      <>
        {header('Уровень доступа')}
        {body(
          <>
            <div>Пароль</div>
            <div>
              <input onChange={event => setPassphrase(event.target.value)} />
            </div>
            <div>Уровень доступа</div>
            <div>
              <input
                type="number"
                onChange={event => setLevel(+event.target.value)}
              />
            </div>
          </>,
        )}
        {footer(
          <>
            <div
              className="pointer"
              onClick={() => {
                if (level && passphrase && currentUser) {
                  close();
                  return adminExer.send({
                    action: 'setUserLevel',
                    method: 'set',
                    args: {
                      level,
                      fio: currentUser.name,
                      login: currentUser.login,
                      passphrase,
                    },
                  });
                }
              }}
            >
              Подтвердить
            </div>
          </>,
        )}
      </>
    );
  });

  if (!currentUser) return null;

  return (
    <PhaseAdminEditorContainer
      className="user-application"
      headTitle={`Пользователь - ${currentUser.name}`}
      content={
        <>
          {modalNode}
          <div className="flex margin-gap">Уровень доступа - {currentUser.level}</div>
          <TheButton onClick={openModal}>Изменить уровень доступа</TheButton>
        </>
      }
    />
  );
}
