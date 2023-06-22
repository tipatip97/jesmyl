import { ReactNode, useMemo, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import useIsExpand from "../../../expand/useIsExpand";
import { IScheduleWidget, IScheduleWidgetRole } from "../../ScheduleWidget.model";

export default function ScheduleWidgetRoleList({
    schedule,
    expandContent,
    roles,
}: {
    schedule: IScheduleWidget,
    expandContent?: ReactNode,
    roles: (list: IScheduleWidgetRole[]) => ReactNode,
}) {
    const [rolesExpandNode, isRolesExpand] = useIsExpand(false, <>Роли</>);
    const categories = useMemo(() => {
        const sorted = [...schedule.ctrl.roles].sort((a, b) => (a.cat || 0) - (b.cat || 0));
        const roles: IScheduleWidgetRole[][] = [];
        sorted.forEach(role => {
            const list = roles[role.cat || 0] ??= [];
            list.push(role);
        });
        return roles;
    }, [schedule.ctrl.roles]);
    const [catExpands, setCatExpands] = useState([0]);

    return <>
        <div className="flex between">
            {rolesExpandNode}
            {isRolesExpand && expandContent}
        </div>
        {isRolesExpand && categories.map((list, listi) => {
            const isExpand = catExpands.includes(listi);
            return <div key={listi}>
                <EvaButton
                    name={isExpand ? 'chevron-up' : 'chevron-down'}
                    prefix={schedule.ctrl.cats[listi]}
                    className="color--4"
                    onClick={() => setCatExpands(isExpand ? catExpands.filter(it => it !== listi) : [...catExpands, listi])}
                />
                {isExpand && roles(list)}
            </div>;
        })}
    </>;
}
