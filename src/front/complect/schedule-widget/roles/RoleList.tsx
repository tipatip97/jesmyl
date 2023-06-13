import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget } from "../ScheduleWidget.model";
import { useScheduleWidgetIsMainRoleContext } from "../useScheduleWidget";
import ScheduleWidgetRole from "./Role";

export default function ScheduleWidgetRoleList({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const isIMainAdmin = useScheduleWidgetIsMainRoleContext();
    const { editIcon, isRedact } = useIsRedactArea(true, null, isIMainAdmin, true);

    const { modalNode, screen } = useModal(({ header, body, footer }) => {
        return <div className="">
            {header(<div className="flex between">
                Роли
                {editIcon}
            </div>)}
            {body(<>{schedule.roles.map((role) => {
                return <ScheduleWidgetRole
                    key={role.mi}
                    scope={scope}
                    schedule={schedule}
                    role={role}
                    redact={isRedact}
                />
            })}</>)}
            {footer(isRedact && !schedule.roles?.some((role) => !role.title) && <StrongEvaButton
                scope={scope}
                fieldName="roles"
                name="plus"
                prefix="Новая роль"
                confirm="Добавить новую роль?"
            />)}
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
