import { CustomAttUseTaleId } from '../../../../../models';
import EvaIcon from '../../../../eva-icon/EvaIcon';
import ScheduleWidgetCleans from '../../../complect/Cleans';
import ScheduleWidgetRoleFace from '../../../control/roles/RoleFace';
import ScheduleWidgetListUnitFace from '../../../lists/UnitFace';
import { extractScheduleWidgetRole, useScheduleWidgetRightsContext } from '../../../useScheduleWidget';

export default function KeyValueListAttNumberMember({ value }: { value: number }) {
  const rights = useScheduleWidgetRightsContext();

  if (ScheduleWidgetCleans.checkIsTaleIdUnit(value, CustomAttUseTaleId.Roles)) {
    const role = extractScheduleWidgetRole(rights.schedule, value);
    return (
      <ScheduleWidgetRoleFace
        role={role}
        schedule={rights.schedule}
      />
    );
  } else if (ScheduleWidgetCleans.checkIsTaleIdUnit(value, CustomAttUseTaleId.Lists)) {
    return <ScheduleWidgetListUnitFace unitMi={Math.trunc(value)} />;
  } else if (ScheduleWidgetCleans.checkIsTaleIdUnit(value, CustomAttUseTaleId.Users)) {
    const userMi = Math.trunc(value);
    const user = rights.schedule.ctrl.users.find(user => user.mi === userMi);
    return user === undefined ? (
      <div className="color--ko">Участник не найден</div>
    ) : (
      <div className="color--3 flex flex-gap">
        <EvaIcon name="person" />
        {user.fio || user.nick}
      </div>
    );
  }

  return null;
}
