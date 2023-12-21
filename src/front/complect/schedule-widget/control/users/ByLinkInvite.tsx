import { useState } from 'react';
import EvaButton from '../../../eva-icon/EvaButton';
import KeyboardInput from '../../../keyboard/KeyboardInput';
import useModal from '../../../modal/useModal';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongButton from '../../../strong-control/StrongButton';

export function ScheduleWidgetUserByLinkInvite({ scope }: StrongComponentProps) {
  const [fio, setAlias] = useState('');

  const [modalNode, screen] = useModal(({ header, body, footer }, closeModal) => {
    return (
      <>
        {header(<>Индивидуальная сылка для участника</>)}
        {body(
          <>
            <div>Кого ожидать по ссылке?</div>
            <KeyboardInput value={fio} onChange={setAlias} placeholder="Имя участника" />
          </>,
        )}
        {footer(
          <div className="flex full-width center margin-big-gap-b">
            <StrongButton
              scope={scope}
              fieldName="newUser"
              className="mood-for-2"
              fieldValue={{ fio }}
              title="Создать ссылку"
              onSuccess={closeModal}
            />
          </div>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <EvaButton name="link-2" onClick={screen} />
    </>
  );
}
