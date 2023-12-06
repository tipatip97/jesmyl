import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import ScheduleWidgetRegisterType from "./RegisterType";
import { ScheduleWidgetUserByLinkInvite } from "./users/ByLinkInvite";
import { ScheduleWidgetUserByQrRedactor } from "./users/ByQrRedactor";
import ScheduleWidgetUserList from "./users/UserList";

export default function ScheduleWidgetControl({ scope }: StrongComponentProps) {
    const rights = useScheduleWidgetRightsContext();

    const [modalNode, screen] = useModal(({ header, body }) => {
        return rights.isCanRedact
            ? <>
                {header(<>Управление <span className="color--7">{rights.schedule.title}</span></>)}
                {body(<>
                    <ScheduleWidgetUserList
                        scope={scope}
                        titlePostfix={rights.isCanRedactUsers
                            && (isExpand => isExpand
                                && <span className="flex flex-gap">
                                    <ScheduleWidgetUserByLinkInvite scope={scope} />
                                    <ScheduleWidgetUserByQrRedactor scope={scope} />
                                </span>)
                        }
                    />
                    <ScheduleWidgetRegisterType scope={scope} />
                    {rights.isCanTotalRedact && <StrongEvaButton
                        scope={scope}
                        cud="U"
                        fieldName="withTech"
                        fieldValue={rights.schedule.withTech ? 0 : 1}
                        name={rights.schedule.withTech ? 'checkmark-square-2-outline' : 'square-outline'}
                        postfix="Первый - технический день"
                        confirm={`Сделать первый день ${rights.schedule.withTech ? 'обычным' : 'подготовительным'}?`}
                        className="margin-big-gap-b"
                    />}
                </>)}
            </>
            : <>
                {header(<div>Участники</div>)}
                {body(rights.schedule.ctrl.users.map((user) => {
                    if (!user.R || user.login === undefined) return null;
                    return <div key={user.mi} className="margin-gap-v">
                        {user.fio && user.fio !== user.nick ? `${user.fio} (${user.nick})` : user.nick}
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
                onClick={screen}
                className="margin-gap-v flex-max"
            />
            : <EvaButton
                name="people-outline"
                postfix={<>Участники <EvaIcon name="chevron-right" /></>}
                onClick={screen}
                className="margin-gap-v flex-max"
            />}
    </>;
}
