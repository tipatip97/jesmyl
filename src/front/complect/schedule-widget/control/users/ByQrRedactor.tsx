import { useState } from 'react';
import EvaButton from '../../../eva-icon/EvaButton';
import useModal from '../../../modal/useModal';
import useQRMaster from '../../../qr-code/useQRMaster';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongButton from '../../../strong-control/StrongButton';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import { ScheduleWidgetUserEdit } from './UserEdit';

export function ScheduleWidgetUserByQrRedactor({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();
  const { readQR, qrNode } = useQRMaster();
  const [passport, setPassport] = useState<IScheduleWidgetUser | null>(null);

  const [modalNode] = useModal(
    ({ header, body, footer }) => {
      if (passport === null) return <></>;
      const oldUser = rights.schedule.ctrl.users.find((user) => user.login === passport.login);
      const user = oldUser ?? passport;

      return (
        <>
          {header(
            <>
              {oldUser == null ? 'Добавление' : 'Редактирование'} участника{' '}
              <span className="color--7">{user.fio ?? user.nick}</span>
            </>,
          )}
          {body(
            <>
              <ScheduleWidgetUserEdit
                scope={scope}
                user={user}
                onUpdate={
                  oldUser
                    ? undefined
                    : (key, value) => {
                        setPassport({ ...user, [key]: value });
                      }
                }
              />
            </>,
          )}
          {oldUser == null &&
            footer(
              <div className="flex full-width center margin-big-gap-b">
                <StrongButton
                  scope={scope}
                  fieldName="newUser"
                  className="mood-for-2"
                  fieldValue={user}
                  title="Добавить участника"
                />
              </div>,
            )}
        </>
      );
    },
    (is) => !is && setPassport(null),
    passport !== null,
  );

  return (
    <>
      {modalNode}
      {qrNode}
      <EvaButton
        name="qr-code"
        onClick={() =>
          readQR((data) => {
            if (data.appName === 'index' && data.key === 'passport') setPassport(data.value);
          })
        }
      />
    </>
  );
}
