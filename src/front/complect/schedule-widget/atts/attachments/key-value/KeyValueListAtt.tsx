import { useMemo, useState } from "react";
import { CustomAttUseRights, customAttUseRights } from "../../../../../../back/apps/index/rights";
import useAuth from "../../../../../components/index/useAuth";
import EvaButton from "../../../../eva-icon/EvaButton";
import EvaIcon from "../../../../eva-icon/EvaIcon";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import useIsExpand from "../../../../useIsExpand";
import { IScheduleWidget, IScheduleWidgetRole, ScheduleWidgetAppAttCustomizableValue, ScheduleWidgetAppAttCustomized } from "../../../ScheduleWidget.model";
import ScheduleWidgetRoleFace from "../../../roles/RoleFace";
import { extractScheduleWidgetRole, extractScheduleWidgetRoleUser, takeStrongScopeMaker, useScheduleWidgetRolesContext } from "../../../useScheduleWidget";

export default function ScheduleKeyValueListAtt({
    value,
    scope,
    att,
    isRedact,
    schedule,
}: {
    value: ScheduleWidgetAppAttCustomizableValue,
    scope: string,
    att: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
    schedule: IScheduleWidget,
}) {
    const attScope = scope + ' keyValue';
    const [rolesTitle, isExpand] = useIsExpand(false, <>Роли</>);
    const auth = useAuth();
    const { isCanTotalRedact } = useScheduleWidgetRolesContext();
    const myUser = auth && schedule.roles.users.find(user => user.login === auth.login);
    const categories = useMemo(() => {
        const sorted = [...schedule.roles.list].sort((a, b) => (a.cat || 0) - (b.cat || 0));
        const roles: IScheduleWidgetRole[][] = [];
        sorted.forEach(role => {
            if (!role.title || value.values?.some(li => li[0] === role.mi)) return;
            const list = roles[role.cat || 0] ??= [];
            list.push(role);
        });
        return roles;
    }, [schedule.roles.list, value.values]);
    const [catExpands, setCatExpands] = useState([0]);

    return <>{
        <div>
            {value.values?.map(([key, value], itemi) => {
                if (!isRedact && !value) return null;
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                const role = typeof key === 'number' ? extractScheduleWidgetRole(schedule, key) : undefined;

                return <div key={itemi} className="margin-big-gap-b">
                    {typeof key === 'number'
                        ? <ScheduleWidgetRoleFace role={role} schedule={schedule} />
                        : typeof key === 'boolean'
                            ? <StrongEvaButton
                                scope={itemScope}
                                fieldName="key"
                                className={'self-start' + (key ? '' : ' color--7')}
                                cud="U"
                                name={key ? 'checkmark-square-outline' : 'square-outline'}
                                mapExecArgs={(args) => {
                                    return {
                                        ...args,
                                        value: !key,
                                    };
                                }}
                            />
                            : <div className="color--3">{key}</div>}
                    <StrongEditableField
                        scope={itemScope}
                        fieldName="value"
                        className={'margin-gap-l' + (typeof key !== 'boolean' || key ? '' : ' color--7')}
                        value={value}
                        multiline
                        isRedact={isRedact}
                        setSelfRedact={!isCanTotalRedact && typeof key === 'number' && !!myUser && (extractScheduleWidgetRoleUser(schedule, 0, role)?.login !== myUser.login)}
                        mapExecArgs={(args) => ({ ...args, })}
                    />
                </div>;
            })}
            {isRedact && <>
                {customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Titles) && att.titles
                    ?.map((title, titlei) => {
                        if (!title || value.values?.some(li => li[0] === title)) return null;
                        return <div key={titlei} className="flex flex-gap">
                            {title}
                            <StrongEvaButton
                                name="plus"
                                scope={attScope}
                                fieldName=""
                                mapExecArgs={(args) => ({ ...args, key: title })}
                            />
                        </div>;
                    })}
                {customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Checkboxes) && <StrongEvaButton
                    scope={attScope}
                    fieldName=""
                    name="plus"
                    prefix={<><EvaIcon name="checkmark-square-outline" />Чекбокс</>}
                    mapExecArgs={(args) => ({ ...args, key: false, })}
                />}
                {customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Roles) &&
                    <>
                        <div className="color--3 margin-gap-v">{rolesTitle}</div>
                        {isExpand
                            && categories.map((list, listi) => {
                                const isExpand = catExpands.includes(listi);
                                return <div key={listi}>
                                    <EvaButton
                                        name={isExpand ? 'chevron-up' : 'chevron-down'}
                                        prefix={schedule.roles.cats[listi]}
                                        className="color--4"
                                        onClick={() => setCatExpands(isExpand ? catExpands.filter(it => it !== listi) : [...catExpands, listi])}
                                    />
                                    {isExpand && list.map((role) => {
                                        return <div
                                            key={role.mi}
                                            className="flex flex-gap"
                                        >
                                            <ScheduleWidgetRoleFace role={role} schedule={schedule} />
                                            <StrongEvaButton
                                                name="plus"
                                                scope={attScope}
                                                fieldName=""
                                                mapExecArgs={(args) => ({ ...args, key: role.mi, })}
                                            />
                                        </div>
                                    })}
                                </div>;
                            })}
                    </>}
            </>}
        </div>
    }</>;
}
