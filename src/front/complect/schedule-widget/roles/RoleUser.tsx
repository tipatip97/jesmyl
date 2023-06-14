import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidgetRoleUser } from "../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetIsMainRoleContext } from "../useScheduleWidget";

export default function ScheduleWidgetRoleUser({
    scope,
    user,
}: StrongComponentProps<{
    user: IScheduleWidgetRoleUser,
}>) {
    const userScope = takeStrongScopeMaker(scope, ' userMi/', user.mi);
    const isIMainAdmin = useScheduleWidgetIsMainRoleContext();
    const { editIcon, isRedact } = useIsRedactArea(true, null, isIMainAdmin, true);

    return <div className="flex flex-gap between margin-gap-v">
        <div className="full-width">
            <StrongEditableField
                scope={userScope}
                fieldName="alias"
                isRedact={isRedact}
                title={user.fio}
                postfix={user.alias && user.alias !== user.fio && <> ({user.fio})</>}
                icon="credit-card-outline"
                value={user.alias || user.fio}
            />
        </div>
        {editIcon}
    </div>;
}
