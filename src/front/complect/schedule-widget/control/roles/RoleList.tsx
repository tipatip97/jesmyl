import { ReactNode, useMemo, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import useIsExpand from "../../../expand/useIsExpand";
import { IScheduleWidgetRole } from "../../ScheduleWidget.model";
import { useScheduleWidgetRightsContext } from "../../useScheduleWidget";

export default function ScheduleWidgetRoleList({
    expandContent,
    roles,
}: {
    expandContent?: ReactNode,
    roles: (list: IScheduleWidgetRole[]) => ReactNode,
    showCatOnly?: number,
}) {
    const rights = useScheduleWidgetRightsContext();
    const [rolesExpandNode, isRolesExpand] = useIsExpand(false, <>Роли</>, isExpand => isExpand && expandContent);
    const categories = useMemo(() => {
        const sorted = [...rights.schedule.ctrl.roles].sort((a, b) => (a.cat || 0) - (b.cat || 0));
        const roles: IScheduleWidgetRole[][] = [];
        sorted.forEach(role => {
            const list = roles[role.cat || 0] ??= [];
            list.push(role);
        });
        return roles;
    }, [rights.schedule.ctrl.roles]);
    const [catExpands, setCatExpands] = useState([0]);

    return <>
        {rolesExpandNode}
        {isRolesExpand && categories.map((list, listi) => {
            const isExpand = catExpands.includes(listi);
            return <div key={listi}>
                <EvaButton
                    name={isExpand ? 'chevron-up' : 'chevron-down'}
                    prefix={rights.schedule.ctrl.cats[listi]}
                    className="color--4"
                    onClick={() => setCatExpands(isExpand ? catExpands.filter(it => it !== listi) : [...catExpands, listi])}
                />
                {isExpand && roles(list)}
            </div>;
        })}
    </>;
}
