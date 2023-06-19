import useAuth from "../../../../components/index/useAuth";
import EvaIcon from "../../../eva-icon/EvaIcon";
import { IScheduleWidget, IScheduleWidgetRole } from "../../ScheduleWidget.model";
import { extractScheduleWidgetRoleUser } from "../../useScheduleWidget";

export default function ScheduleWidgetRoleFace({
    role,
    schedule,
}: {
    role?: IScheduleWidgetRole,
    schedule: IScheduleWidget,
}) {
    const auth = useAuth();
    const roleUser = role && extractScheduleWidgetRoleUser(schedule, role.mi);
    if (role === undefined) return <div className="color--ko">Неизвестная роль</div>;

    return <div
        className={'flex flex-gap pointer' + (auth && roleUser && auth.login === roleUser.login ? ' color--7' : ' color--3')}
    >
        <EvaIcon name={role.icon ?? 'github-outline'} />
        <div className="face-title">
            {role.title}{' - '}
            {roleUser?.alias || roleUser?.fio || <span className="color--3 text-italic">Вакант</span>}
        </div>
    </div>;
}
