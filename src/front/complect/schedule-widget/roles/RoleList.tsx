import { useMemo, useState } from "react";
import useAuth from "../../../components/index/useAuth";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import useIsExpand from "../../useIsExpand";
import { IScheduleWidget, IScheduleWidgetRole } from "../ScheduleWidget.model";
import { useScheduleWidgetIsMainRoleContext } from "../useScheduleWidget";
import ScheduleWidgetRole from "./Role";
import ScheduleWidgetRoleUser from "./RoleUser";

export default function ScheduleWidgetRoleList({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const isIMainAdmin = useScheduleWidgetIsMainRoleContext();
    const [usersExpandNode, isUsersExpand] = useIsExpand(false, <>Пользователи</>);
    const auth = useAuth();
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
        return <div className="">
            {header(<div className="flex between">
                Роли
                {isIMainAdmin && !schedule.roles?.list.some((role) => !role.title) && <StrongEvaButton
                    scope={scope}
                    fieldName="roles"
                    name="plus"
                    confirm="Добавить новую роль?"
                />}
            </div>)}
            {body(<>
                {auth && !schedule.roles.users.some(user => user.login === auth.login)
                    && <StrongEvaButton
                        scope={scope}
                        fieldName="users"
                        name="bulb-outline"
                        postfix="Заявить о готовности участия"
                    />}
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
        </div>;
    });

    return <>
        {modalNode}
        <div className="ScheduleWidgetVacancyList flex flex-gap pointer margin-big-gap-v" onClick={() => screen()}>
            Роли
            <EvaIcon name="eye-outline" />
        </div>
    </>;
}
