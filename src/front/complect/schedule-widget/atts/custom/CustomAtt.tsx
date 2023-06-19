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

export default function ScheduleWidgetCustomAtt({ tatt, scope, redact, topContent }: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized,
    redact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(scope, ' tattMi/', tatt.mi);
    const { editIcon, isRedact } = useIsRedactAreaWithInit(!tatt.title || !tatt.description, true, redact, true, true);
    const usedLists = customAttUseRightsTitles.map(({ title, id }) => customAttUseRights.checkIsHasIndividualRights(tatt.use, id) && title).filter(isIs);

    return <div className="bgcolor--5 padding-gap margin-gap-v">
        {topContent}
        <div className="flex flex-end full-width">{editIcon}</div>
        {isRedact && <ScheduleWidgetIconChange
            scope={selfScope}
            fieldName="field"
            icon={tatt.icon}
            header={<>Иконка для вложения {tatt.title}</>}
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
            value={tatt.title}
            isRedact={isRedact}
            isImpossibleEmptyValue
            icon={isRedact ? 'bookmark-outline' : tatt.icon}
            title="Название"
            mapExecArgs={(args) => ({ ...args, key: 'title' })}
        />
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={tatt.description}
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
                    name={customAttUseRights.checkIsHasIndividualRights(tatt.use, id) ? 'checkmark-square-2-outline' : 'square-outline'}
                    postfix={'Использовать ' + title}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            key: 'use',
                            value: customAttUseRights.switchRights(tatt.use, id),
                        };
                    }}
                />;
            })
            : !usedLists.length ||
            <span className="color--4">
                Используются
                <span className="color--3"> {usedLists.join(', ')}</span>
            </span>}
        {customAttUseRights.checkIsHasIndividualRights(tatt.use, CustomAttUseRights.Titles) && <ScheduleWidgetCustomAttTitles
            scope={selfScope}
            tatt={tatt}
            isRedact={isRedact}
        />}
    </div>;
}
