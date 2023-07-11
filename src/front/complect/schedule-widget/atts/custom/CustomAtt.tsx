import { ReactNode, useState } from "react";
import { ScheduleWidgetRightsCtrl } from "../../../../../back/apps/index/complect";
import { CustomAttUseRights, customAttUseRights, customAttUseRightsTitles, scheduleWidgetUserRights } from "../../../../../back/apps/index/rights";
import EvaButton from "../../../eva-icon/EvaButton";
import { EvaIconName } from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import StrongClipboardPicker from "../../../strong-control/field/clipboard/Picker";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import ScheduleWidgetRightControlList from "../../control/RightControlList";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetCustomAttTitles from "./CustomAttTitles";

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

enum WhoCan {
    Read,
    Update,
    No,
}

const whoCanUnits: { action: string, rule: 'R' | 'U', icon: EvaIconName }[] = [
    {
        action: 'видит',
        rule: 'R',
        icon: 'eye-outline',
    },
    {
        action: 'редактирует',
        rule: 'U',
        icon: 'edit-2-outline',
    },
];

export default function ScheduleWidgetCustomAtt(props: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized,
    isRedact?: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(props.scope, ' tattMi/', props.tatt.mi);
    const rights = useScheduleWidgetRightsContext();
    const usedLists = customAttUseRightsTitles
        .map(({ title, id, top }, _, arr) => {
            const child = arr.find(({ top }) => top === id);
            if (child && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, child.id)) return false;
            const parent = top == null ? undefined : arr.find(({ id }) => top === id);

            return (!parent || customAttUseRights.checkIsHasIndividualRights(props.tatt.use, parent.id))
                && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) && title;
        }).filter(itIt);
    const [whoCani, setWhoCani] = useState(WhoCan.No);
    const whoCan = whoCanUnits[whoCani];
    const myBalance = scheduleWidgetUserRights.rightsBalance(rights.myUser?.R);
    const isCanRedact = scheduleWidgetUserRights.checkIsCan(rights.myUser?.R, props.tatt.U);
    const isRedact = props.isRedact;

    const [setRuleModalNode] = useModal(({ header, body }) => {
        return <>
            {header(<>Кто {whoCan.action} вложение <span className="color--7">{props.tatt.title}</span></>)}
            {body(<>
                <ScheduleWidgetRightControlList
                    scope={selfScope}
                    fieldName="field"
                    fieldKey={whoCan.rule}
                    rightCtrl={scheduleWidgetUserRights}
                    R={props.tatt[whoCan.rule]}
                    isReverse
                    isDisabled={(type) => myBalance < scheduleWidgetUserRights.rightLevel(type.id) + 2}
                />
            </>)}
        </>;
    }, null, whoCani !== WhoCan.No, is => !is && setWhoCani(WhoCan.No));

    const [redactModalNode, redactModalScreen] = useModal(({ header, body }) => {
        return <>
            {header(<span className="flex flex-gap full-width between">
                <span>
                    <span className="color--7">{props.tatt.title} </span>
                    - Редактирование шаблона
                </span>
                <StrongClipboardPicker />
            </span>)}
            {body(<>
                <ScheduleWidgetCustomAtt
                    {...props}
                    isRedact
                />
            </>)}
        </>;
    });

    return <>
        {isCanRedact && redactModalNode}
        {isCanRedact && setRuleModalNode}
        <div className={'margin-gap-v' + (isRedact ? '' : ' padding-gap bgcolor--5')}>
            {props.topContent}
            {isRedact || (isCanRedact && <div className="flex flex-end full-width">
                <EvaButton name="edit-outline" onClick={() => redactModalScreen()} />
            </div>)}
            {isRedact && <ScheduleWidgetIconChange
                scope={selfScope}
                icon={props.tatt.icon}
                header={<>Иконка для вложения {props.tatt.title}</>}
            />}
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                fieldKey="title"
                value={props.tatt}
                isRedact={isRedact}
                isImpossibleEmptyValue
                icon={isRedact ? 'bookmark-outline' : props.tatt.icon}
                title="Название"
            />
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                value={props.tatt}
                fieldKey="description"
                multiline
                isRedact={isRedact}
                icon="file-text-outline"
                isImpossibleEmptyValue
                title="Описание вложения"
            />
            {props.tatt.title && <>
                <div className="margin-big-gap-v">
                    {whoCanUnits.map((whoCan, whoCani) => {
                        return <EvaButton
                            key={whoCan.rule}
                            name={whoCan.icon}
                            postfix={<div className="full-width flex between">
                                <span className="flex flex-gap">
                                    Кто {whoCan.action}
                                    <span className="color--7">{scheduleWidgetUserRights.rightsBalance(props.tatt[whoCan.rule]) + 1}+</span>
                                </span>
                                {isRedact && isCanRedact && <EvaButton name="edit-outline" onClick={() => setWhoCani(whoCani)} />}
                            </div>}
                            className="flex-max margin-gap-v"
                        />
                    })}
                </div>
                {isRedact
                    ? customAttUseRightsTitles.map(({ title, id, top }) => {
                        return <div key={id}>
                            {(id !== CustomAttUseRights.CheckTitles || customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles))
                                && <StrongEvaButton
                                    scope={selfScope}
                                    fieldName="field"
                                    fieldKey="use"
                                    cud="U"
                                    name={customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) ? 'checkmark-square-2-outline' : 'square-outline'}
                                    className={(id === CustomAttUseRights.CheckTitles ? 'margin-big-gap-l ' : '')
                                        + (customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id)
                                            && (id !== CustomAttUseRights.Roles || (props.tatt.roles ?? 0) > 1)
                                            && (id !== CustomAttUseRights.Lists || (props.tatt.list ?? 0) > 1)
                                            && (id !== CustomAttUseRights.Titles || props.tatt.titles?.join(''))
                                            ? 'color--7'
                                            : '')}
                                    postfix={(top ? '' : 'Использовать ') + title}
                                    mapExecArgs={(args) => {
                                        return {
                                            ...args,
                                            value: customAttUseRights.switchRights(props.tatt.use, id),
                                        };
                                    }}
                                />}

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
                            {id === CustomAttUseRights.CheckTitles && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles)
                                && <div className="margin-big-gap-l">
                                    {props.tatt.titles?.map((title, titlei) => {
                                        const titleScope = takeStrongScopeMaker(selfScope, ' titlei/', titlei);

                                        return <StrongEditableField
                                            key={titlei}
                                            scope={titleScope}
                                            fieldName=""
                                            isImpossibleEmptyValue
                                            value={title}
                                            isRedact={isRedact}
                                            multiline={customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.CheckTitles)}
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
            </>}
        </div>
    </>;
}
