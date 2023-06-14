import { useState } from "react";
import { IScheduleWidget, IScheduleWidgetRole } from "../ScheduleWidget.model";
import EvaIcon from "../../eva-icon/EvaIcon";
import { extractScheduleWidgetRoleUser } from "../useScheduleWidget";

export default function ScheduleWidgetRoleFace({
    role,
    schedule,
}: {
    role?: IScheduleWidgetRole,
    schedule: IScheduleWidget,
}) {
    const roleUser = role && extractScheduleWidgetRoleUser(schedule, role.mi);
    const [isShowName, setIsShowName] = useState(!!roleUser);
    if (role === undefined) return <div className="color--ko">Неизвестная роль</div>;

    return <div
        className="flex flex-gap color--7 pointer"
        onClick={() => setIsShowName(!isShowName)}
    >
        <EvaIcon name={ isShowName && role.user === undefined
                ? 'clock'
                : role.icon ?? 'person-outline'} />
        <div className="face-title">
            {isShowName
                ? roleUser?.alias || roleUser?.fio || <span className="color--3">Вокант</span>
                : role.title}
        </div>
    </div>;
}
