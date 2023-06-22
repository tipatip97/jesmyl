import { scheduleWidgetRights } from "../../../../../back/apps/index/rights";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import useIsExpand from "../../../expand/useIsExpand";
import { IScheduleWidget } from "../../ScheduleWidget.model";
import ScheduleWidgetUser from "./User";

export default function ScheduleWidgetUserList({
    schedule,
    scope,
}: StrongComponentProps & {
    schedule: IScheduleWidget,
}) {
    const [expandNode, isExpand] = useIsExpand(false, <>Участники</>);

    const users = [...schedule.ctrl.users]
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
        {expandNode}
        {isExpand && <div className="margin-gap-v margin-gap-l">
            {users.map(({ user, balance }) => {
                return <ScheduleWidgetUser
                    key={user.mi}
                    scope={scope}
                    user={user}
                    balance={balance}
                />
            })}
        </div>}
    </>;
}
