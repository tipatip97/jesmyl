import { ReactNode } from "react";
import { CustomAttUseRights, customAttUseRights, customAttUseRightsTitles } from "../../../../../back/apps/index/rights";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { useIsRedactAreaWithInit } from "../../../useIsRedactArea";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetCustomAttTitles from "./CustomAttTitles";

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

export default function ScheduleWidgetCustomAtt({ tatt, scope, redact, topContent }: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized,
    redact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(scope, ' tattMi/', tatt.mi);
    const rights = useScheduleWidgetRightsContext();
    const { editIcon, isRedact } = useIsRedactAreaWithInit(!tatt.title || !tatt.description, true, redact, true, true);
    const usedLists = customAttUseRightsTitles.map(({ title, id }) => customAttUseRights.checkIsHasIndividualRights(tatt.use, id) && title).filter(itIt);

    return <div className="bgcolor--5 padding-gap margin-gap-v">
        {topContent}
        <div className="flex flex-end full-width">{editIcon}</div>
        {isRedact && <ScheduleWidgetIconChange
            scope={selfScope}
            icon={tatt.icon}
            header={<>Иконка для вложения {tatt.title}</>}
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
                return <div
                    key={id}
                    className=""
                >
                    <StrongEvaButton
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
                    />

                    {id === CustomAttUseRights.Roles && customAttUseRights.checkIsHasIndividualRights(tatt.use, CustomAttUseRights.Roles)
                        && <div className="margin-gap-v margin-big-gap-l">
                            {rights.schedule.ctrl.cats.map((cat, cati) => {
                                return <StrongEvaButton
                                    key={cati}
                                    scope={selfScope}
                                    cud="U"
                                    fieldName="field"
                                    name={tatt.roles === cati ? 'radio-button-on' : 'radio-button-off'}
                                    postfix={cat}
                                    mapExecArgs={(args) => ({ ...args, key: 'roles', value: cati })}
                                />;
                            })}
                        </div>}
                    {id === CustomAttUseRights.Lists && customAttUseRights.checkIsHasIndividualRights(tatt.use, CustomAttUseRights.Lists)
                        && <div className="margin-gap-v margin-big-gap-l">
                            {rights.schedule.lists.cats.map((cat, cati) => {
                                return <StrongEvaButton
                                    key={cati}
                                    scope={selfScope}
                                    cud="U"
                                    fieldName="field"
                                    name={tatt.list === cati ? 'radio-button-on' : 'radio-button-off'}
                                    postfix={cat.title}
                                    mapExecArgs={(args) => ({ ...args, key: 'list', value: cati })}
                                />;
                            })}
                        </div>}
                    {id === CustomAttUseRights.Titles && customAttUseRights.checkIsHasIndividualRights(tatt.use, CustomAttUseRights.Titles)
                        && <div className="margin-big-gap-l">
                            {tatt.titles?.map((title, titlei) => {
                                const titleScope = takeStrongScopeMaker(selfScope, ' titlei/', titlei);

                                return <StrongEditableField
                                    key={titlei}
                                    scope={titleScope}
                                    fieldName=""
                                    isImpossibleEmptyValue
                                    value={title}
                                    isRedact={isRedact}
                                />;
                            })}
                            {!tatt.titles?.some(itNIt) &&
                                <StrongEvaButton
                                    scope={selfScope}
                                    fieldName="titles"
                                    name="plus"
                                />}
                        </div>}
                </div>;
            })
            : <>
                {customAttUseRights.checkIsHasIndividualRights(tatt.use, CustomAttUseRights.Titles)
                    && <ScheduleWidgetCustomAttTitles tatt={tatt} />}
                {!usedLists.length ||
                    <div className="margin-gap-t color--4">
                        Используются:
                        <span className="color--3"> {usedLists.join(', ')}</span>
                    </div>}
            </>}
    </div>;
}
