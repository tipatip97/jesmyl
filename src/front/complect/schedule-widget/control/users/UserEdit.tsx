import { ScheduleWidgetUserRoleRight, scheduleWidgetRights } from "../../../../../back/apps/index/rights";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { IScheduleWidgetUser } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetRightControlList from "../RightControlList";

const accessLevel = scheduleWidgetRights.rightLevel(ScheduleWidgetUserRoleRight.ReadTitles);

export function ScheduleWidgetUserEdit({
    scope,
    user,
    onUpdate,
}: StrongComponentProps & {
    user: IScheduleWidgetUser,
    onUpdate?: <User extends IScheduleWidgetUser, Key extends keyof User>(key: Key, value: User[Key]) => void,
}) {
    const rights = useScheduleWidgetRightsContext();
    const userScope = takeStrongScopeMaker(scope, ' userMi/', user.mi);

    return <>
        <StrongEditableField
            scope={userScope}
            fieldName="alias"
            isRedact
            setSelfRedact
            title="Имя"
            icon="person-outline"
            value={user.alias || user.fio}
            onUpdate={onUpdate && ((value) => onUpdate('alias', value))}
        />
        {rights.myUser && <ScheduleWidgetRightControlList
            scope={userScope}
            fieldName="R"
            rightCtrl={scheduleWidgetRights}
            rights={rights}
            R={user.R}
            isHidden={rights.isCanTotalRedact
                ? undefined
                : ((type) => accessLevel < scheduleWidgetRights.rightLevel(type.id))}
            isCantEdit={rights.myUser.mi === user.mi
                || (!rights.isCanTotalRedact
                    && scheduleWidgetRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.TotalRedact))}
            onUpdate={onUpdate && ((value) => onUpdate('R', value))}
        />}
    </>;
}
