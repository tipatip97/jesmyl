import { useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import useIsExpand from "../../useIsExpand";
import { IScheduleWidget, IScheduleWidgetRole } from "../ScheduleWidget.model";
import { useScheduleWidgetRolesContext } from "../useScheduleWidget";
import ScheduleWidgetRole from "./Role";
import ScheduleWidgetUser from "./User";

export default function ScheduleWidgetControl({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const userRoles = useScheduleWidgetRolesContext();
    const [usersExpandNode, isUsersExpand] = useIsExpand(false, <>Участники</>);
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

    const { modalNode, screen } = useModal(({ header, body }) => {
        return userRoles.isCanRedact
            ? <div className="">
                {header(<>Управление</>)}
                {body(<>
                    {usersExpandNode}
                    {isUsersExpand && <div className="margin-gap-v">
                        {schedule.ctrl.users.map((user) => {
                            return <ScheduleWidgetUser
                                key={user.mi}
                                scope={scope}
                                user={user}
                            />
                        })}
                    </div>}
                    <div className="flex between">
                        {rolesExpandNode}
                        {isRolesExpand && !schedule.ctrl?.roles.some((role) => !role.title) && <StrongEvaButton
                            scope={scope}
                            fieldName="roles"
                            name="plus"
                            prefix="роль"
                            confirm="Добавить новую роль?"
                        />}
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
                            {isExpand && list.map((role) => {
                                return <ScheduleWidgetRole
                                    key={role.mi}
                                    scope={scope}
                                    schedule={schedule}
                                    role={role}
                                />
                            })}
                        </div>;
                    })}
                </>)}
            </div>
            : <>
                {header(<div>Участники</div>)}
                {body(schedule.ctrl.users.map((user) => {
                    return <ScheduleWidgetUser
                        key={user.mi}
                        scope={scope}
                        user={user}
                    />
                }))}
            </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name="settings-2-outline"
            postfix={<>Управление <EvaIcon name="chevron-right" /></>}
            onClick={() => screen()}
            className="margin-gap-v"
        />
    </>;
}
