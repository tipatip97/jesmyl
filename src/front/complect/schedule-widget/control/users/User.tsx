import { ReactNode } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { IScheduleWidgetUser } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import { ScheduleWidgetUserEdit } from "./UserEdit";

export default function ScheduleWidgetUser({
    scope,
    user,
    balance,
    asUserPlusPrefix,
}: StrongComponentProps<{
    user: IScheduleWidgetUser,
    balance: number,
    asUserPlusPrefix?: (userNode: ReactNode, userScope: string, user: IScheduleWidgetUser, balance: number) => ReactNode,
}>) {
    const rights = useScheduleWidgetRightsContext();
    const userName = `${user.alias && user.alias !== user.fio ? `${user.alias} (${user.fio})` : user.fio} `;

    const { modalNode, screen } = useModal(({ header, body }) => {
        return <>
            {header('Участник ' + userName)}
            {body(<ScheduleWidgetUserEdit scope={scope} user={user} />)}
        </>;
    });
    const userNode = !rights.isCanRedactUsers
        ? <div className="flex flex-gap margin-gap-v">{userName}</div>
        : <EvaButton
            name="edit-outline"
            prefix={<span className="flex flex-gap">
                {userName}
                {balance !== undefined && <span className="color--7">{balance < 0 ? <EvaIcon name="person-delete-outline" /> : balance}</span>}
            </span>}
            className="flex between full-width margin-gap-v"
            onClick={() => screen()}
        />;

    return <>
        {modalNode}
        {asUserPlusPrefix === undefined
            ? userNode
            : asUserPlusPrefix(
                userNode,
                takeStrongScopeMaker(scope, ' userMi/', user.mi),
                user,
                balance
            )}
    </>;
}
