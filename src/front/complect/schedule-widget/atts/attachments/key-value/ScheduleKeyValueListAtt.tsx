import EvaIcon from "../../../../eva-icon/EvaIcon";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import useIsExpand from "../../../../useIsExpand";
import { IScheduleWidget, ScheduleWidgetAppAttCustomizableValue, ScheduleWidgetAppAttCustomized } from "../../../ScheduleWidget.model";
import ScheduleWidgetRoleFace from "../../../roles/RoleFace";
import { takeStrongScopeMaker } from "../../../useScheduleWidget";

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

    return <>{
        <div>
            {value.values?.map(([key, value], itemi) => {
                if (!isRedact && !value) return null;
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                return <div key={itemi} className="margin-big-gap-b">
                    {typeof key === 'number'
                        ? <ScheduleWidgetRoleFace role={schedule.roles.find((role) => role.mi === key)} />
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
                        mapExecArgs={(args) => ({ ...args, })}
                    />
                </div>;
            })}
            {isRedact && <>
                {att.titles
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
                <StrongEvaButton
                    scope={attScope}
                    fieldName=""
                    name="plus"
                    prefix={<><EvaIcon name="checkmark-square-outline" />Чекбокс</>}
                    mapExecArgs={(args) => ({ ...args, key: false, })}
                />
                <div className="color--3 margin-gap-v">{rolesTitle}</div>
                {isExpand && <>{schedule.roles.map((role) => {
                    if (!role.title || value.values?.some(li => li[0] === role.mi)) return null;

                    return <div
                        key={role.mi}
                        className="flex flex-gap"
                    >
                        <ScheduleWidgetRoleFace role={role} />
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            mapExecArgs={(args) => ({ ...args, key: role.mi, })}
                        />
                    </div>;
                })}</>}
            </>}
        </div>
    }</>;
}
