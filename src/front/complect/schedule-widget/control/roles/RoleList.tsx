import { useMemo, useState } from 'react';
import useIsExpand from '../../../expand/useIsExpand';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import IconButton from '../../../the-icon/IconButton';
import { IconArrowDownDoubleStrokeRounded } from '../../../../complect/the-icon/icons/arrow-down-double';
import { IconArrowUpDoubleStrokeRounded } from '../../../../complect/the-icon/icons/arrow-up-double';
import { IconPlusSignStrokeRounded } from '../../../../complect/the-icon/icons/plus-sign';
import { IScheduleWidgetRole } from '../../ScheduleWidget.model';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import ScheduleWidgetRole from './Role';

export default function ScheduleWidgetRoleList({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();
  const [rolesExpandNode, isRolesExpand] = useIsExpand(
    false,
    <>Роли</>,
    isExpand =>
      isExpand &&
      rights.isCanTotalRedact &&
      !rights.schedule.ctrl?.roles.some(role => !role.title) && (
        <StrongEvaButton
          scope={scope}
          fieldName="roles"
          Icon={IconPlusSignStrokeRounded}
          prefix="роль"
          confirm="Добавить новую роль?"
        />
      ),
  );
  const categories = useMemo(() => {
    const sorted = [...rights.schedule.ctrl.roles].sort((a, b) => (a.cat || 0) - (b.cat || 0));
    const roles: IScheduleWidgetRole[][] = [];
    sorted.forEach(role => {
      const list = (roles[role.cat || 0] ??= []);
      list.push(role);
    });
    return roles;
  }, [rights.schedule.ctrl.roles]);
  const [catExpands, setCatExpands] = useState([0]);

  return (
    <>
      <h3 className="flex between flex-gap">{rolesExpandNode}</h3>
      {isRolesExpand &&
        categories.map((list, listi) => {
          const isExpand = catExpands.includes(listi);
          return (
            <div key={listi}>
              <IconButton
                Icon={isExpand ? IconArrowUpDoubleStrokeRounded : IconArrowDownDoubleStrokeRounded}
                prefix={rights.schedule.ctrl.cats[listi]}
                className="flex-max color--4"
                onClick={() => setCatExpands(isExpand ? catExpands.filter(it => it !== listi) : [...catExpands, listi])}
              />
              {isExpand &&
                list.map(role => {
                  return (
                    <ScheduleWidgetRole
                      key={role.mi}
                      scope={scope}
                      role={role}
                    />
                  );
                })}
            </div>
          );
        })}
    </>
  );
}
