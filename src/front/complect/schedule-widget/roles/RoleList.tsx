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
import ScheduleWidgetRoleUser from "./RoleUser";

export default function ScheduleWidgetRoleList({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const userRoles = useScheduleWidgetRolesContext();
    const [usersExpandNode, isUsersExpand] = useIsExpand(false, <>Пользователи</>);
    const categories = useMemo(() => {
        const sorted = [...schedule.roles.list].sort((a, b) => (a.cat || 0) - (b.cat || 0));
        const roles: IScheduleWidgetRole[][] = [];
        sorted.forEach(role => {
            const list = roles[role.cat || 0] ??= [];
            list.push(role);
        });
        return roles;
    }, [schedule.roles.list]);
    const [catExpands, setCatExpands] = useState([0]);

    const { modalNode, screen } = useModal(({ header, body }) => {
        return userRoles.isCanRedact
            ? <div className="">
                {header(<div className="flex between">
                    Участники
                    {!schedule.roles?.list.some((role) => !role.title) && <StrongEvaButton
                        scope={scope}
                        fieldName="roles"
                        name="plus"
                        prefix="роль"
                        confirm="Добавить новую роль?"
                    />}
                </div>)}
                {body(<>
                    {categories.map((list, listi) => {
                        const isExpand = catExpands.includes(listi);
                        return <div key={listi}>
                            <EvaButton
                                name={isExpand ? 'chevron-up' : 'chevron-down'}
                                prefix={schedule.roles.cats[listi]}
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
                    <div className="margin-big-gap-v">
                        {usersExpandNode}
                        {isUsersExpand && schedule.roles.users.map((user) => {
                            return <ScheduleWidgetRoleUser
                                key={user.mi}
                                scope={scope}
                                user={user}
                            />
                        })}
                    </div>
                </>)}
            </div>
            : <>
                {header(<div>Участники</div>)}
                {body(schedule.roles.users.map((user) => {
                    return <ScheduleWidgetRoleUser
                        key={user.mi}
                        scope={scope}
                        user={user}
                    />
                }))}
            </>;
    });

    return <>
        {modalNode}
        <div className="ScheduleWidgetVacancyList flex flex-gap pointer margin-big-gap-v" onClick={() => screen()}>
            Участники
            <EvaIcon name="eye-outline" />
        </div>
    </>;
}
