import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import { takeStrongScopeMaker } from "../../../../strong-control/useStrongControl";
import { ScheduleWidgetAppAttCustomizableValue, ScheduleWidgetAppAttCustomized } from "../../../ScheduleWidget.model";

export default function ScheduleKeyValueListAtt({
    value,
    scope,
    att,
    isRedact,
}: {
    value: ScheduleWidgetAppAttCustomizableValue,
    scope: string,
    att: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
}) {
    const attScope = scope + ' keyValue';

    return <>{
        <div>
            {value.values?.map(([title, value], itemi) => {
                if (!isRedact && !value) return null;
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                return <div key={itemi} className="margin-big-gap-b">
                    <div className="color--3">{title}</div>
                    <StrongEditableField
                        scope={itemScope}
                        fieldName="value"
                        className="margin-gap-l"
                        value={value}
                        multiline
                        isRedact={isRedact}
                        mapExecArgs={(args) => ({ ...args, })}
                    />
                </div>;
            })}
            {isRedact && att.titles
                ?.filter(title => !value.values?.some(li => li[0] === title))
                .map((title, titlei) => {
                    if (!title) return null;
                    return <div key={titlei} className="flex flex-gap">
                        {title}
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            mapExecArgs={(args) => ({ ...args, key: title, })}
                        />
                    </div>;
                })}
        </div>
    }</>;
}
