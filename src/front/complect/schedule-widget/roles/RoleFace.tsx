import { useState } from "react";
import { IScheduleWidget, IScheduleWidgetRole } from "../ScheduleWidget.model";
import EvaIcon from "../../eva-icon/EvaIcon";
import { extractScheduleWidgetRoleUser } from "../useScheduleWidget";
import useAuth from "../../../components/index/useAuth";

export default function ScheduleWidgetRoleFace({
    role,
    schedule,
}: {
    role?: IScheduleWidgetRole,
    schedule: IScheduleWidget,
}) {
    const auth = useAuth();
    const roleUser = role && extractScheduleWidgetRoleUser(schedule, role.mi);
    const [isShowName, setIsShowName] = useState(roleUser != null);
    if (role === undefined) return <div className="color--ko">Неизвестная роль</div>;

    return <div
        className={'flex flex-gap pointer' + (auth && roleUser && auth.login === roleUser.login ? ' color--7' : ' color--3')}
        onClick={() => setIsShowName(!isShowName)}
    >
        <EvaIcon name={isShowName && role.user === undefined
            ? 'clock'
            : role.icon ?? 'person-outline'} />
        <div className="face-title">
            {isShowName
                ? roleUser?.alias || roleUser?.fio || <span className="color--3">Вакант</span>
                : role.title}
        </div>
    </div>;
}
