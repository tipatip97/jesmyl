import { ReactNode } from "react";
import { scheduleWidgetRights } from "../../../../../back/apps/index/rights";
import useIsExpand from "../../../expand/useIsExpand";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetUser from "./User";
import { IScheduleWidgetUser } from "../../ScheduleWidget.model";

export default function ScheduleWidgetUserList({
    scope,
    asUserPlusPrefix,
    filter,
    title = <>Участники</>,
    titlePostfix,
    isInitExpand,
}: StrongComponentProps & {
    asUserPlusPrefix?: (userNode: ReactNode, userScope: string, user: IScheduleWidgetUser, balance: number) => ReactNode,
    filter?: (user: IScheduleWidgetUser, useri: number, usera: IScheduleWidgetUser[]) => boolean,
    title?: ReactNode,
    titlePostfix?: ReactNode | ((isExpand: boolean) => ReactNode),
    isInitExpand?: boolean,
}) {
    const rights = useScheduleWidgetRightsContext();
    const [expandNode, isExpand] = useIsExpand(isInitExpand ?? false, title, titlePostfix);

    const users =
        (filter === undefined
            ? [...rights.schedule.ctrl.users]
            : [...rights.schedule.ctrl.users].filter(filter)
        )
            .map(user => {
                return {
                    user,
                    balance: scheduleWidgetRights.rightsBalance(user.R),
                    _: user.alias + user.fio,
                };
            })
            .sort((a, b) => {
                return a.balance < b.balance ? 1 : a.balance > b.balance
                    ? -1
                    : a._ < b._
                        ? -1
                        : 1;
            });

    return <>
        <div className="margin-gap-v">{expandNode}</div>
        {isExpand && <div className="margin-big-gap-v margin-gap-l">
            {!users.length && <div className="text-italic color--7">Список пуст</div>}
            {users.map(({ user, balance }) => {
                return <ScheduleWidgetUser
                    key={user.mi}
                    scope={scope}
                    user={user}
                    balance={balance}
                    asUserPlusPrefix={asUserPlusPrefix}
                />
            })}
        </div>}
    </>;
}
