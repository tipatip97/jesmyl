import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { IScheduleWidget } from "../ScheduleWidget.model";
import { useScheduleWidgetRolesContext } from "../useScheduleWidget";
import ScheduleWidgetRegisterType from "./RegisterType";
import ScheduleWidgetRole from "./roles/Role";
import ScheduleWidgetRoleList from "./roles/RoleList";
import ScheduleWidgetUser from "./users/User";
import ScheduleWidgetUserList from "./users/UserList";

export default function ScheduleWidgetControl({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const userRoles = useScheduleWidgetRolesContext();

    const { modalNode, screen } = useModal(({ header, body }) => {
        return userRoles.isCanRedact
            ? <>
                {header(<>Управление</>)}
                {body(<>
                    <ScheduleWidgetUserList
                        scope={scope}
                        schedule={schedule}
                    />
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
                    <ScheduleWidgetRegisterType schedule={schedule} scope={scope} />
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
