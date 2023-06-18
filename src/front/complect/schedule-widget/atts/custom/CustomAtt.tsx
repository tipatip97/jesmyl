import { ReactNode } from "react";
import { CustomAttUseRights, customAttUseRights, customAttUseRightsTitles } from "../../../../../back/apps/index/rights";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { useIsRedactAreaWithInit } from "../../../useIsRedactArea";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import { takeStrongScopeMaker } from "../../useScheduleWidget";
import ScheduleWidgetCustomAttTitles from "./CustomAttTitles";

const isIs = (is: unknown) => is;

export default function ScheduleWidgetCustomAtt({ att, scope, redact, topContent }: StrongComponentProps<{
    att: ScheduleWidgetAppAttCustomized,
    redact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(scope, ' attMi/', att.mi);
    const { editIcon, isRedact } = useIsRedactAreaWithInit(!att.title || !att.description, true, redact, true, true);
    const usedLists = customAttUseRightsTitles.map(({ title, id }) => customAttUseRights.checkIsHasIndividualRights(att.use, id) && title).filter(isIs);

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
        {isRedact
            ? customAttUseRightsTitles.map(({ title, id }) => {
                return <StrongEvaButton
                    key={id}
                    scope={selfScope}
                    fieldName="field"
                    cud="U"
                    name={customAttUseRights.checkIsHasIndividualRights(att.use, id) ? 'checkmark-square-2-outline' : 'square-outline'}
                    postfix={'Использовать ' + title}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            key: 'use',
                            value: customAttUseRights.switchRights(att.use, id),
                        };
                    }}
                />;
            })
            : !usedLists.length ||
            <span className="color--4">
                Используются
                <span className="color--3"> {usedLists.join(', ')}</span>
            </span>}
        {customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Titles) && <ScheduleWidgetCustomAttTitles
            scope={selfScope}
            att={att}
            isRedact={isRedact}
        />}
    </div>;
}
