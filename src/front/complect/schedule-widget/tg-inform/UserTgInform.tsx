import StrongEvaButton from '../../strong-control/StrongEvaButton';
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
      name="bell-off-outline"
      postfix="Не оповещать меня о событиях в TG"
      className="margin-gap-b"
    />
  ) : (
    <StrongEvaButton
      scope={userScope}
      cud="U"
      fieldName="tgInform"
      fieldValue={0}
      name="bell-outline"
      postfix="Оповещать меня о событиях в TG"
      className="margin-gap-b"
    />
  );
};
