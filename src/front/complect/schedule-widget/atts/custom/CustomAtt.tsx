import { ReactNode } from "react";
import { ScheduleWidgetRightsCtrl } from "../../../../../back/apps/index/complect";
import { CustomAttUseRights, customAttUseRights, customAttUseRightsTitles } from "../../../../../back/apps/index/rights";
import EvaButton from "../../../eva-icon/EvaButton";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetCustomAttTitles from "./CustomAttTitles";

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

export default function ScheduleWidgetCustomAtt(props: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized,
    isRedact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(props.scope, ' tattMi/', props.tatt.mi);
    const rights = useScheduleWidgetRightsContext();
    const usedLists = customAttUseRightsTitles.map(({ title, id }) => customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) && title).filter(itIt);

    const modal = useModal(({ header, body }) => {
        return <>
            {header(<>Редактирование шаблона {props.tatt.title}</>)}
            {body(<>
                <ScheduleWidgetCustomAtt
                    {...props}
                    isRedact
                />
            </>)}
        </>;
    });

    return <>
        {modal.modalNode}
        <div className={'margin-gap-v' + (props.isRedact ? '' : ' padding-gap bgcolor--5')}>
            {props.topContent}
            {props.isRedact || <div className="flex flex-end full-width">
                <EvaButton name="edit-outline" onClick={() => modal.screen()} />
            </div>}
            {props.isRedact && <ScheduleWidgetIconChange
                scope={selfScope}
                icon={props.tatt.icon}
                header={<>Иконка для вложения {props.tatt.title}</>}
            />}
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                fieldKey="title"
                value={props.tatt}
                isRedact={props.isRedact}
                isImpossibleEmptyValue
                icon={props.isRedact ? 'bookmark-outline' : props.tatt.icon}
                title="Название"
            />
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                value={props.tatt}
                fieldKey="description"
                multiline
                isRedact={props.isRedact}
                icon="file-text-outline"
                isImpossibleEmptyValue
                title="Описание вложения"
            />
            {props.isRedact
                ? customAttUseRightsTitles.map(({ title, id }) => {
                    return <div
                        key={id}
                        className=""
                    >
                        <StrongEvaButton
                            scope={selfScope}
                            fieldName="field"
                            fieldKey="use"
                            cud="U"
                            name={customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) ? 'checkmark-square-2-outline' : 'square-outline'}
                            className={
                                customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id)
                                    && (id !== CustomAttUseRights.Roles || (props.tatt.roles ?? 0) > 1)
                                    && (id !== CustomAttUseRights.Lists || (props.tatt.list ?? 0) > 1)
                                    && (id !== CustomAttUseRights.Titles || props.tatt.titles?.join(''))
                                    ? 'color--7'
                                    : ''}
                            postfix={'Использовать ' + title}
                            mapExecArgs={(args) => {
                                return {
                                    ...args,
                                    value: customAttUseRights.switchRights(props.tatt.use, id),
                                };
                            }}
                        />

                        {id === CustomAttUseRights.Roles && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Roles)
                            && <div className="margin-gap-v margin-big-gap-l">
                                {rights.schedule.ctrl.cats.map((cat, cati, cata) => {
                                    return <StrongEvaButton
                                        key={cati}
                                        scope={selfScope}
                                        cud="U"
                                        fieldName="field"
                                        fieldKey="roles"
                                        fieldValue={cati}
                                        name={ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.roles, cati) ? 'checkmark-square-outline' : 'square-outline'}
                                        className={ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.roles, cati) ? 'color--7' : ''}
                                        postfix={cat}
                                        mapExecArgs={(args) => {
                                            return {
                                                ...args,
                                                value: ScheduleWidgetRightsCtrl.switchRights(props.tatt.roles, cati, cata.length)
                                            };
                                        }}
                                    />;
                                })}
                            </div>}
                        {id === CustomAttUseRights.Lists && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Lists)
                            && <div className="margin-gap-v margin-big-gap-l">
                                {rights.schedule.lists.cats.map((cat, cati, cata) => {
                                    return <StrongEvaButton
                                        key={cati}
                                        scope={selfScope}
                                        cud="U"
                                        fieldName="field"
                                        fieldKey="list"
                                        name={ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.list, cati) ? 'checkmark-square-outline' : 'square-outline'}
                                        className={ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.list, cati) ? 'color--7' : ''}
                                        postfix={cat.title}
                                        mapExecArgs={(args) => {
                                            return {
                                                ...args,
                                                value: ScheduleWidgetRightsCtrl.switchRights(props.tatt.list, cati, cata.length)
                                            };
                                        }}
                                    />;
                                })}
                            </div>}
                        {id === CustomAttUseRights.Titles && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles)
                            && <div className="margin-big-gap-l">
                                {props.tatt.titles?.map((title, titlei) => {
                                    const titleScope = takeStrongScopeMaker(selfScope, ' titlei/', titlei);

                                    return <StrongEditableField
                                        key={titlei}
                                        scope={titleScope}
                                        fieldName=""
                                        isImpossibleEmptyValue
                                        value={title}
                                        isRedact={props.isRedact}
                                    />;
                                })}
                                {!props.tatt.titles?.some(itNIt) &&
                                    <StrongEvaButton
                                        scope={selfScope}
                                        fieldName="titles"
                                        name="plus"
                                    />}
                            </div>}
                    </div>;
                })
                : <>
                    {customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles)
                        && <ScheduleWidgetCustomAttTitles tatt={props.tatt} />}
                    {!usedLists.length ||
                        <div className="margin-gap-t color--4">
                            Используются:
                            <span className="color--3"> {usedLists.join(', ')}</span>
                        </div>}
                </>}
        </div>
    </>;
}
