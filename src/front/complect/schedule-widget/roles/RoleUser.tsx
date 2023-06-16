import { ScheduleWidgetRights } from "../../../../back/apps/index/complect";
import EvaButton from "../../eva-icon/EvaButton";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidgetRoleUser } from "../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRolesContext } from "../useScheduleWidget";

export default function ScheduleWidgetRoleUser({
    scope,
    user,
}: StrongComponentProps<{
    user: IScheduleWidgetRoleUser,
}>) {
    const userScope = takeStrongScopeMaker(scope, ' userMi/', user.mi);
    const { myUser, isCanTotalRedact, mainRole } = useScheduleWidgetRolesContext();
    const isCanEditRights = myUser && mainRole && mainRole.user !== user.mi && myUser.mi !== user.mi;
    const { editIcon, isRedact } = useIsRedactArea(true, null, isCanTotalRedact, true);
    let isCan = true;

    const { modalNode, screen } = useModal(({ header, body }) => {
        return <>
            {header(`Правила доступа для ${user.alias ? `${user.alias} (${user.fio})` : user.fio} `)}
            {body(ScheduleWidgetRights.textList.map(({ title, id }) => {
                if (!title) return null;
                const isHas = isCan && (!isCanEditRights || ScheduleWidgetRights.checkIsHasRights(user.R, id));

                const node = <div key={id} className="flex between full-width margin-gap-v over-hidden">
                    {title}
                    <StrongEvaButton
                        scope={userScope}
                        fieldName="R"
                        cud="U"
                        disabled={!isCan || !isCanEditRights}
                        className={isHas ? 'color--ok' : 'color--3'}
                        name={isHas ? 'toggle-right-outline' : 'toggle-left-outline'}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                value: ScheduleWidgetRights.switchRights(user.R, id, isHas ? '0' : '1'),
                            };
                        }}
                    />
                </div>;
                if (isCan) isCan = isHas;
                return node;
            }))}
        </>;
    });

    return <div className="flex flex-gap between margin-gap-v">
        {modalNode}
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
            {isRedact && <EvaButton
                name="lock-outline"
                postfix="Правила доступа"
                onClick={() => screen()}
            />}
        </div>
        {editIcon}
    </div>;
}
