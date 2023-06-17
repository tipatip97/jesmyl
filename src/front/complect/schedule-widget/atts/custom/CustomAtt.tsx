import { ReactNode } from "react";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { useIsRedactAreaWithInit } from "../../../useIsRedactArea";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import { takeStrongScopeMaker } from "../../useScheduleWidget";
import ScheduleWidgetCustomAttTitles from "./CustomAttTitles";

export default function ScheduleWidgetCustomAtt({ att, scope, redact, topContent }: StrongComponentProps<{
    att: ScheduleWidgetAppAttCustomized,
    redact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(scope, ' attMi/', att.mi);
    const { editIcon, isRedact } = useIsRedactAreaWithInit(!att.title || !att.description, true, redact, true, true);

    return <div className="bgcolor--5 padding-gap margin-gap-v">
        {topContent}
        <div className="flex flex-end full-width">{editIcon}</div>
        {isRedact && <ScheduleWidgetIconChange
            scope={selfScope}
            fieldName="field"
            icon={att.icon}
            header={<>Иконка для вложения {att.title}</>}
            mapExecArgs={(args) => {
                return {
                    ...args,
                    key: 'icon',
                };
            }}
        />}
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={att.title}
            isRedact={isRedact}
            isImpossibleEmptyValue
            icon={isRedact ? 'bookmark-outline' : att.icon}
            title="Название"
            mapExecArgs={(args) => ({ ...args, key: 'title' })}
        />
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={att.description}
            multiline
            isRedact={isRedact}
            icon="file-text-outline"
            isImpossibleEmptyValue
            title="Описание вложения"
            mapExecArgs={(args) => ({ ...args, key: 'description' })}
        />
        <ScheduleWidgetCustomAttTitles
            scope={selfScope}
            att={att}
            isRedact={isRedact}
        />
    </div>;
}
