import { ScheduleWidgetRightsCtrl } from "../../../../../../back/apps/index/complect";
import { CustomAttUseRights, CustomAttUseTaleId, customAttUseRights } from "../../../../../../back/apps/index/rights";
import EvaIcon from "../../../../eva-icon/EvaIcon";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import { ScheduleWidgetAppAttCustomizableValue, ScheduleWidgetAppAttCustomized } from "../../../ScheduleWidget.model";
import ScheduleWidgetRoleFace from "../../../control/roles/RoleFace";
import ScheduleWidgetListUnitFace from "../../../lists/UnitFace";
import { extractScheduleWidgetRole, extractScheduleWidgetRoleUser, takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../../useScheduleWidget";

const checkIsTaleIdUnit = (num: number, taleId: 0.1 | number) => Math.trunc(num) + taleId === num;
const itIt = (it: unknown) => it;

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
    const rights = useScheduleWidgetRightsContext();

    let insertionNode = null;

    if (isRedact) {
        const checkboxes = customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Checkboxes)
            && <div className="flex flex-gap margin-gap-v">
                <EvaIcon name="checkmark-square-outline" />
                <span className="text-italic">Пункт</span>
                <StrongEvaButton
                    scope={attScope}
                    fieldName=""
                    fieldKey={false}
                    name="plus"
                />
            </div>;

        const titles = customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Titles) && att.titles
            ?.map((title, titlei) => {
                if (!title || value.values?.some(li => li[0] === title)) return null;
                return customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.CheckTitles)
                    ? <div key={titlei} className="flex flex-gap">
                        <EvaIcon name="checkmark-square-outline" />
                        {title}
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            fieldKey={false}
                            fieldValue={title}
                        />
                    </div>
                    : <div key={titlei} className="flex flex-gap">
                        {title}
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            fieldKey={title}
                            fieldValue="+"
                        />
                    </div>;
            }).filter(itIt);

        const roles = customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Roles)
            && rights.schedule.ctrl.roles.map((role) => {
                if (
                    !ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(att.roles, (role.cat || 0))
                    || !role.title || value.values?.some(li => li[0] === role.mi)) return null;

                return <div
                    key={role.mi}
                    className="flex flex-gap margin-gap-v"
                >
                    <ScheduleWidgetRoleFace role={role} schedule={rights.schedule} />
                    <StrongEvaButton
                        name="plus"
                        scope={attScope}
                        fieldName=""
                        fieldKey={role.mi}
                    />
                </div>
            }).filter(itIt);

        const lists = customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Lists)
            && rights.schedule.lists.units.map((unit) => {
                if (
                    !ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(att.list, unit.cat)
                    || !unit.title || value.values?.some(li => li[0] === unit.mi + CustomAttUseTaleId.Lists)) return null;

                return <ScheduleWidgetListUnitFace
                    key={unit.mi}
                    unit={unit}
                    postfix={<StrongEvaButton
                        name="plus"
                        scope={attScope}
                        fieldName=""
                        fieldKey={unit.mi + CustomAttUseTaleId.Lists}
                    />}
                />
            }).filter(itIt);

        if (checkboxes || (titles && titles.length) || (roles && roles.length) || (lists && lists.length)) {
            insertionNode = <>
                <div className="margin-gap-v color--7">Вставить поле ввода:</div>
                <div className="margin-big-gap-v">{checkboxes}</div>
                <div className="margin-big-gap-v">{titles}</div>
                <div className="margin-big-gap-v">{roles}</div>
                <div className="margin-big-gap-v">{lists}</div>
            </>;
        } else insertionNode = <div className="margin-big-gap-v text-italic">{att.title}. Вставлять нечего</div>
    }

    return <>{
        <div>
            {value.values?.map(([key, value], itemi) => {
                if (!isRedact && !value) return null;
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                const role = typeof key === 'number' && checkIsTaleIdUnit(key, CustomAttUseTaleId.Roles)
                    ? extractScheduleWidgetRole(rights.schedule, key)
                    : undefined;
                let setSelfRedact = typeof key === 'number';

                if (!rights.isCanTotalRedact && typeof key === 'number') {
                    if (checkIsTaleIdUnit(key, CustomAttUseTaleId.Roles))
                        setSelfRedact = !!rights.myUser && (extractScheduleWidgetRoleUser(rights.schedule, 0, role)?.login !== rights.myUser.login);
                    else if (rights.myUser?.li) {
                        const unit = rights.schedule.lists.units.find(unit => unit.mi === key - CustomAttUseTaleId.Lists);
                        if (unit)
                            setSelfRedact = rights.myUser.li[unit.cat] !== -unit.mi;
                    }
                }

                return <div key={itemi} className="margin-big-gap-b">
                    {typeof key === 'number'
                        ? checkIsTaleIdUnit(key, CustomAttUseTaleId.Lists)
                            ? <ScheduleWidgetListUnitFace unitMi={Math.trunc(key)} />
                            : <ScheduleWidgetRoleFace role={role} schedule={rights.schedule} />
                        : typeof key === 'boolean'
                            ? <StrongEvaButton
                                scope={itemScope}
                                fieldName="key"
                                fieldValue={!key}
                                className={'self-start' + (key ? '' : ' color--7')}
                                cud="U"
                                name={key ? 'checkmark-square-outline' : 'square-outline'}
                                isCanSend={customAttUseRights.checkIsCan(rights.myUser?.R, att.U)}
                            />
                            : <div className="color--3">{key}</div>}
                    {(isRedact || value !== '+')
                        && <StrongEditableField
                            scope={itemScope}
                            fieldName="value"
                            className={
                                'margin-gap-l'
                                + (typeof key !== 'boolean' || key ? '' : ' color--7')
                                + (!isRedact && typeof key === 'boolean' ? ' icon-indent-text' : '')
                            }
                            value={value}
                            multiline
                            isRedact={isRedact}
                            setSelfRedact={setSelfRedact}
                        />}
                </div>;
            })}
            {insertionNode}
        </div>
    }</>;
}
