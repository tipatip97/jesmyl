import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import useIsExpand from "../../useIsExpand";
import { IScheduleWidget } from "../ScheduleWidget.model";
import { useScheduleWidgetRolesContext } from "../useScheduleWidget";
import ScheduleWidgetUser from "./User";
import ScheduleWidgetRole from "./roles/Role";
import ScheduleWidgetRoleList from "./roles/RoleList";

export default function ScheduleWidgetControl({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const userRoles = useScheduleWidgetRolesContext();
    const [usersExpandNode, isUsersExpand] = useIsExpand(false, <>Участники</>);

    const { modalNode, screen } = useModal(({ header, body }) => {
        return userRoles.isCanRedact
            ? <>
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
                    <ScheduleWidgetRoleList
                        schedule={schedule}
                        expandContent={!schedule.ctrl?.roles.some((role) => !role.title)
                            && <StrongEvaButton
                                scope={scope}
                                fieldName="roles"
                                name="plus"
                                prefix="роль"
                                confirm="Добавить новую роль?"
                            />}
                        roles={(list) => list.map((role) => {
                            return <ScheduleWidgetRole
                                key={role.mi}
                                scope={scope}
                                schedule={schedule}
                                role={role}
                            />;
                        })}
                    />
                </>)}
            </>
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
