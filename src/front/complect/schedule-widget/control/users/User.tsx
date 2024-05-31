import { ReactNode } from 'react';
import {
  ScheduleWidgetUserRoleRight,
  packScheduleWidgetInviteLink,
  scheduleWidgetUserRights,
} from '../../../../models';
import ShareEvaButton from '../../../ShareEvaButton';
import useModal from '../../../modal/useModal';
import useToast from '../../../modal/useToast';
import useQRMaster, { crossApplicationLinkCoder } from '../../../qr-code/useQRMaster';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import IconButton from '../../../the-icon/IconButton';
import { IconEdit02StrokeRounded } from '@icons/edit-02';
import { IconLink02StrokeRounded } from '@icons/link-02';
import { IconNotification01StrokeRounded } from '@icons/notification-01';
import { IconNotificationOff01StrokeRounded } from '@icons/notification-off-01';
import { IconQrCodeStrokeRounded } from '@icons/qr-code';
import { IconUserRemove02StrokeRounded } from '@icons/user-remove-02';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import { ScheduleWidgetUserEdit } from './UserEdit';

export default function ScheduleWidgetUser({
  scope,
  user,
  balance,
  asUserPlusPrefix,
}: StrongComponentProps<{
  user: IScheduleWidgetUser;
  balance: number;
  asUserPlusPrefix?: (userNode: ReactNode, userScope: string, user: IScheduleWidgetUser, balance: number) => ReactNode;
}>) {
  const rights = useScheduleWidgetRightsContext();
  const userName =
    user.nick === undefined
      ? user.fio || <span className="color--7 text-italic">Ссылка</span>
      : `${user.fio && user.fio !== user.nick ? `${user.fio} (${user.nick})` : user.nick} `;
  const { readQR, qrNode } = useQRMaster();

  const [toastNode, toast] = useToast();
  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <div className="flex between flex-gap">
            <span>
              {userName}
              {'- '}
              {balance < 0
                ? user.R == null
                  ? 'Новый'
                  : 'в блоке'
                : scheduleWidgetUserRights.texts[balance]?.role?.[0] || 'Неизвестный'}
            </span>
            {user.login === undefined && (
              <StrongEvaButton
                scope={takeStrongScopeMaker(scope, ' userMi/', user.mi)}
                fieldName="userData"
                cud="U"
                Icon={IconQrCodeStrokeRounded}
                mapExecArgs={async args => {
                  return await readQR(data => {
                    if (data.appName === 'index' && data.key === 'passport') {
                      const valueLogin = (data.value as { login: '' }).login;
                      if (rights.schedule.ctrl.users.some(user => valueLogin === user.login)) {
                        toast('Пользователь уже является участником!', {
                          mood: 'ko',
                        });
                        return;
                      }
                    }

                    return {
                      ...args,
                      ...(data.value as {}),
                    };
                  });
                }}
              />
            )}
          </div>,
        )}
        {body(
          <>
            <ScheduleWidgetUserEdit
              scope={scope}
              user={user}
            />
            <div className="margin-big-gap-t">
              {user.tgInform === 0 ||
              !scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.Read) ? (
                <IconButton
                  Icon={IconNotificationOff01StrokeRounded}
                  postfix="Участник не получает TG-уведомления"
                  disabled
                />
              ) : (
                <IconButton
                  Icon={IconNotification01StrokeRounded}
                  postfix="Участник получает TG-уведомления"
                  disabled
                />
              )}
            </div>
          </>,
        )}
      </>
    );
  });

  const userNode = (
    <div className="flex flex-gap between margin-gap-v">
      {!rights.isCanRedactUsers ? (
        userName
      ) : (
        <>
          <span className="flex flex-gap">
            {userName}
            {balance !== undefined && (
              <span className="flex flex-gap color--7">
                {user.login === undefined ? (
                  <>
                    <IconLink02StrokeRounded className="color--7 icon-scale-05" />
                    {balance < 0 ? null : balance}
                  </>
                ) : balance < 0 ? (
                  <IconUserRemove02StrokeRounded />
                ) : (
                  balance
                )}
              </span>
            )}
          </span>
          <span className="flex flex-gap">
            {user.login === undefined && (
              <ShareEvaButton
                prepare={() => {
                  if (balance < 1) {
                    toast('Необходимо выдать права');
                    return;
                  }

                  const levelTitle = scheduleWidgetUserRights.texts[balance].role?.[1];

                  return {
                    url: crossApplicationLinkCoder.encode({
                      appName: 'index',
                      key: 'swInvite',
                      value: packScheduleWidgetInviteLink(rights.schedule.w, user.mi),
                    }),
                    title: `Приглашение ${levelTitle}${user.fio ? ` - ${user.fio}` : ''}`,
                    text: user.fio
                      ? `${user.fio}, приветствую! Приглашаю вас в качестве ${levelTitle} на мероприятие ${rights.schedule.title}`
                      : undefined,
                  };
                }}
              />
            )}
            <IconButton
              Icon={IconEdit02StrokeRounded}
              className="flex between full-width"
              onClick={screen}
            />
          </span>
        </>
      )}
    </div>
  );

  return (
    <>
      {modalNode}
      {toastNode}
      {qrNode}
      {asUserPlusPrefix === undefined
        ? userNode
        : asUserPlusPrefix(userNode, takeStrongScopeMaker(scope, ' userMi/', user.mi), user, balance)}
    </>
  );
}
