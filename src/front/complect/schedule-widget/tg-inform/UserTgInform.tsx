import StrongEvaButton from '../../strong-control/StrongEvaButton';
import { IconNotification01StrokeRounded } from '@icons/notification-01';
import { IconNotificationOff01StrokeRounded } from '@icons/notification-off-01';
import { IScheduleWidget } from '../ScheduleWidget.model';
import { takeStrongScopeMaker, useScheduleWidgetRights } from '../useScheduleWidget';

export const ScheduleWidgetMyUserTgInform = ({ scope, schedule }: { scope: string; schedule: IScheduleWidget }) => {
  const rights = useScheduleWidgetRights(schedule);
  if (rights.myUser === undefined) return;
  const userScope = takeStrongScopeMaker(scope, ' userMi/', rights.myUser.mi);

  if (rights.auth.tgId === undefined) return;

  return rights.myUser.tgInform === 0 ? (
    <StrongEvaButton
      scope={userScope}
      cud="U"
      fieldName="tgInform"
      fieldValue={1}
      Icon={IconNotificationOff01StrokeRounded}
      postfix="Не оповещать меня о событиях в TG"
      className="margin-gap-b"
    />
  ) : (
    <StrongEvaButton
      scope={userScope}
      cud="U"
      fieldName="tgInform"
      fieldValue={0}
      Icon={IconNotification01StrokeRounded}
      postfix="Оповещать меня о событиях в TG"
      className="margin-gap-b"
    />
  );
};
