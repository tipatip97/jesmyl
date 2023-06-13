import { useState } from "react";
import { IScheduleWidgetRole } from "../ScheduleWidget.model";
import EvaIcon from "../../eva-icon/EvaIcon";

export default function ScheduleWidgetRoleFace({
    role,
}: {
    role?: IScheduleWidgetRole,
}) {
    const [isShowName, setIsShowName] = useState(true);
    if (role === undefined) return <div className="color--ko">Неизвестная роль</div>;

    return <div
        className="flex flex-gap color--7 pointer"
        onClick={() => setIsShowName(!isShowName)}
    >
        <EvaIcon name={role.icon ?? 'person-outline'} />
        <div className="face-title">
            {isShowName
                ? role.user?.alias || role.user?.fio
                : role.title}
        </div>
    </div>;
}
