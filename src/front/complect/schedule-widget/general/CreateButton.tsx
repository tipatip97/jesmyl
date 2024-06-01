import { useState } from 'react';
import { AppName } from '../../../app/App.model';
import KeyboardInput from '../../keyboard/KeyboardInput';
import useModal from '../../modal/useModal';
import useToast from '../../modal/useToast';
import StrongButton from '../../strong-control/StrongButton';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import IconButton from '../../the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../../../complect/the-icon/icons/cancel-01';
import { IconPlusSignStrokeRounded } from '../../../complect/the-icon/icons/plus-sign';
import { initialScheduleScope } from '../useScheduleWidget';

export default function ScheduleCreateWidgetButton({
  title: topTitle,
  schw,
  appName,
}: {
  title: string;
  schw: number;
  appName: AppName;
}) {
  const [title, setTitle] = useState(topTitle);
  const [tosterNode, toast] = useToast();
  const [modalNode, screen] = useModal(({ header, body, footer }, closeModal) => {
    return (
      <>
        {header(<>Новое расписание</>)}
        {body(
          <>
            <div>Создать расписание с названием</div>
            <div>
              <KeyboardInput
                value={title}
                onChange={setTitle}
              />
            </div>
          </>,
        )}
        {footer(
          <div className="flex flex-gap">
            <StrongEvaButton
              Icon={IconPlusSignStrokeRounded}
              scope={initialScheduleScope}
              fieldName="list"
              cud="C"
              className="color--ok"
              postfix="Создать"
              onSuccess={() => {
                closeModal();
                setTitle('');
              }}
              mapExecArgs={args => {
                if (!title) {
                  toast('Нужно дать название!');
                  return;
                }

                return {
                  ...args,
                  schw,
                  title,
                  app: appName,
                };
              }}
            />
            <IconButton
              Icon={IconCancel01StrokeRounded}
              postfix="Отменить"
              className="color--ko"
              onClick={() => {
                setTitle('');
                closeModal();
              }}
            />
          </div>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      {tosterNode}
      <StrongButton
        title="Создать расписание"
        scope={initialScheduleScope}
        fieldName="list"
        cud="C"
        mapExecArgs={args => {
          if (!title) {
            screen();
            return;
          }
          setTitle('');

          return {
            ...args,
            schw,
            title,
            app: appName,
          };
        }}
      />
    </>
  );
}
