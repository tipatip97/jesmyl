import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import ScheduleWidgetRegisterType from "./RegisterType";
import ScheduleWidgetRole from "./roles/Role";
import ScheduleWidgetRoleList from "./roles/RoleList";
import ScheduleWidgetUserList from "./users/UserList";

export default function ScheduleWidgetControl({
    scope,
}: StrongComponentProps<{
}>) {
    const rights = useScheduleWidgetRightsContext();

    const { modalNode, screen } = useModal(({ header, body }) => {
        return rights.isCanRedact
            ? <>
                {header(<>Управление <span className="color--7">{rights.schedule.title}</span></>)}
                {body(<>
                    <ScheduleWidgetUserList
                        scope={scope}
                    />
                    <ScheduleWidgetRoleList
                        expandContent={!rights.schedule.ctrl?.roles.some((role) => !role.title)
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
                                role={role}
                            />;
                        })}
                    />
                    <ScheduleWidgetRegisterType scope={scope} />
                </>)}
            </>
            : <>
                {header(<div>Участники</div>)}
                {body(rights.schedule.ctrl.users.map((user) => {
                    return <div key={user.mi} className="margin-gap-v">
                        {user.alias ? `${user.alias} (${user.fio})` : user.fio}
                    </div>
                }))}
            </>;
    });

    return <>
        {modalNode}
        {rights.isCanRedact
            ? <EvaButton
                name="settings-2-outline"
                postfix={<>Управление <EvaIcon name="chevron-right" /></>}
                onClick={() => screen()}
                className="margin-gap-v flex-max"
            />
            : <EvaButton
                name="people-outline"
                postfix={<>Участники <EvaIcon name="chevron-right" /></>}
                onClick={() => screen()}
                className="margin-gap-v flex-max"
            />}
    </>;
}
