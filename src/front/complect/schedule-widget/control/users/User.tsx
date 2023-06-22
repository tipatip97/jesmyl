import { scheduleWidgetRights } from "../../../../../back/apps/index/rights";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { IScheduleWidgetRoleUser } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetRightControlList from "../RightControlList";

export default function ScheduleWidgetUser({
    scope,
    user,
    balance,
}: StrongComponentProps<{
    user: IScheduleWidgetRoleUser,
    balance?: number,
}>) {
    const userScope = takeStrongScopeMaker(scope, ' userMi/', user.mi);
    const rights = useScheduleWidgetRightsContext();
    const userName = `${user.alias ? `${user.alias} (${user.fio})` : user.fio} `;

    const { modalNode, screen } = useModal(({ header, body }) => {
        return <>
            {header('Участник ' + userName)}
            {body(<>
                <StrongEditableField
                    scope={userScope}
                    fieldName="alias"
                    isRedact
                    setSelfRedact
                    title="Имя"
                    icon="person-outline"
                    value={user.alias || user.fio}
                />
                <ScheduleWidgetRightControlList
                    scope={userScope}
                    fieldName="R"
                    rights={scheduleWidgetRights}
                    R={user.R}
                    isCantEdit={!(rights.myUser && rights.mainRole && rights.mainRole.user !== user.mi && rights.myUser.mi !== user.mi)}
                />
            </>)}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name="edit-outline"
            prefix={<span className="flex">
                {userName}
                {rights.isCanTotalRedact && balance !== undefined && <span className="color--7"> {balance < 0 ? <EvaIcon name="person-delete-outline" /> : balance}</span>}
            </span>}
            className="flex between full-width margin-gap-v"
            onClick={rights.isCanTotalRedact ? (() => screen()) : undefined}
        />
    </>;
}
