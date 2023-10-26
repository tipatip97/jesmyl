import { ReactNode } from "react";
import { ScheduleWidgetRightsCtrl } from "../../../../../../back/apps/index/complect";
import { CustomAttUseRights, CustomAttUseTaleId, customAttUseRights } from "../../../../../../back/apps/index/rights";
import EvaIcon from "../../../../eva-icon/EvaIcon";
import mylib from "../../../../my-lib/MyLib";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import { IScheduleWidgetListUnit, IScheduleWidgetRole, IScheduleWidgetUser, ScheduleWidgetAppAttCustomizableValue, ScheduleWidgetAppAttCustomized } from "../../../ScheduleWidget.model";
import ScheduleWidgetCleans from "../../../complect/Cleans";
import ScheduleWidgetRoleFace from "../../../control/roles/RoleFace";
import ScheduleWidgetListUnitFace from "../../../lists/UnitFace";
import { extractScheduleWidgetRole, extractScheduleWidgetRoleUser, takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../../useScheduleWidget";
import ScheduleKeyValueListAttArrayItemKeyChange from "./ArrayItemSignChange";
import KeyValueListAttNumberMember from "./KeyValueListAttNumberMember";
import ScheduleKeyValueListAttLiItemDropdown from "./LiItemDropdown";
import ScheduleKeyValueListAttStatistic from "./Statistic";

const itIt = (it: unknown) => it;

export default function ScheduleKeyValueListAtt({
    value: attValue,
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
    let checkboxes: ReactNode = null;
    let titles: ReactNode[] | nil = null;
    let roles: ReactNode[] | nil = null;
    let lists: ReactNode[] | nil = null;
    let users: ReactNode[] | nil = null;
    let dropdownUsers: IScheduleWidgetUser[] = [];
    let dropdownLists: IScheduleWidgetListUnit[] | und;
    let dropdownRoles: IScheduleWidgetRole[] | und;
    let dropdownTitles: string[] | und;

    let exclusiveUsers: IScheduleWidgetUser[] = [];
    let exclusiveLists: IScheduleWidgetListUnit[] | und;
    let exclusiveRoles: IScheduleWidgetRole[] | und;
    
    const userR = rights.myUser?.R ?? rights.schedule.ctrl.defu;

    if (isRedact) {
        checkboxes = customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Checkboxes)
            && <div className="flex flex-gap margin-gap-v">
                <EvaIcon name="checkmark-square-outline" />
                <span className="text-italic">Пункт</span>
                <StrongEvaButton
                    scope={attScope}
                    fieldName=""
                    fieldKey={false}
                    fieldValue=""
                    name="plus"
                />
            </div>;

        if (customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Titles)) {
            dropdownTitles = att.titles;

            titles = att.titles?.map((title, titlei) => {
                if (!title || attValue.values?.some(li => li[0] === title)) return null;

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
        }

        if (customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Roles)) {
            dropdownRoles = rights.schedule.ctrl.roles.filter((role) => ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(att.roles, (role.cat || 0)));
            exclusiveRoles = dropdownRoles.filter((role) => {
                return role.title && !attValue.values?.some(li => li[0] === role.mi || li[1] === role.mi);
            });


            roles = exclusiveRoles.map(role =>
                <div
                    key={role.mi}
                    className="flex flex-gap margin-gap-v"
                >
                    <ScheduleWidgetRoleFace role={role} schedule={rights.schedule} />
                    <StrongEvaButton
                        name="plus"
                        scope={attScope}
                        fieldName=""
                        fieldKey={role.mi}
                        fieldValue="+"
                    />
                </div>);
        }

        if (customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Lists)) {
            dropdownLists = rights.schedule.lists.units.filter((unit) => ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(att.list, unit.cat));
            exclusiveLists = dropdownLists.filter((unit) => {
                return unit.title && !attValue.values?.some(li => li[0] === unit.mi + CustomAttUseTaleId.Lists || li[1] === unit.mi + CustomAttUseTaleId.Lists);
            });

            lists = exclusiveLists.map((unit) =>
                <ScheduleWidgetListUnitFace
                    key={unit.mi}
                    unit={unit}
                    postfix={<StrongEvaButton
                        name="plus"
                        scope={attScope}
                        fieldName=""
                        fieldKey={unit.mi + CustomAttUseTaleId.Lists}
                        fieldValue="+"
                    />}
                />
            );
        }

        if (customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.Users)) {
            dropdownUsers = [...rights.schedule.ctrl.users]
                .sort((a, b) => (a.alias || a.fio || '') < (b.alias || b.fio || '') ? -1 : (a.alias || a.fio) === (b.alias || b.fio) ? 0 : 1);

            exclusiveUsers = dropdownUsers.filter(user => {
                return (user.fio || user.alias) && !attValue.values?.some(li => li[0] === user.mi + CustomAttUseTaleId.Users || li[1] === user.mi + CustomAttUseTaleId.Users);
            });
            users = exclusiveUsers.map((user) =>
                customAttUseRights.checkIsHasIndividualRights(att.use, CustomAttUseRights.CheckUsers)
                    ? <div key={user.mi} className="flex flex-gap">
                        <EvaIcon name="checkmark-square-outline" />
                        {user.alias || user.fio}
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            fieldKey={false}
                            fieldValue={user.mi + CustomAttUseTaleId.Users}
                        />
                    </div>
                    : <div key={user.mi} className="flex flex-gap">
                        {user.alias || user.fio}
                        <StrongEvaButton
                            name="plus"
                            scope={attScope}
                            fieldName=""
                            fieldKey={user.mi + CustomAttUseTaleId.Users}
                            fieldValue="+"
                        />
                    </div>
            );
        }

        const itemNode = <div className="flex flex-gap margin-big-gap-v">
            <EvaIcon name="text" />
            Пункт
            <StrongEvaButton
                name="plus"
                scope={attScope}
                fieldName=""
                fieldKey="Пункт"
                fieldValue="+"
            />
        </div>;

        if (checkboxes || (users || titles || roles || lists || null)?.length) {
            insertionNode = <>
                <div className="margin-gap-v color--7">Вставить поле ввода:</div>
                {itemNode}
                <div className="margin-big-gap-v">{checkboxes}</div>
                <div className="margin-big-gap-v">{titles}</div>
                <div className="margin-big-gap-v">{roles}</div>
                <div className="margin-big-gap-v">{lists}</div>
                <div className="margin-big-gap-v">{users}</div>
            </>;
        } else insertionNode = itemNode || <div className="margin-big-gap-v text-italic">{att.title}. Вставлять нечего</div>
    }

    return <div>
        {attValue.values?.map(([key, value, itemMi], itemi, itema) => {
            if (!isRedact && !value) return null;
            const itemScope = takeStrongScopeMaker(attScope, ' itemMi/', itemMi);
            let role: IScheduleWidgetRole | und = undefined;
            let generalNode = null;

            let setSelfRedact = !rights.isCanTotalRedact;

            if (mylib.isNum(key)) {
                generalNode = <KeyValueListAttNumberMember value={key} />;

                if (ScheduleWidgetCleans.checkIsTaleIdUnit(key, CustomAttUseTaleId.Roles))
                    role = extractScheduleWidgetRole(rights.schedule, key);

                if (!rights.isCanTotalRedact)
                    if (ScheduleWidgetCleans.checkIsTaleIdUnit(key, CustomAttUseTaleId.Roles))
                        setSelfRedact = !!rights.myUser && (extractScheduleWidgetRoleUser(rights.schedule, 0, role)?.login !== rights.myUser.login);
                    else if (rights.myUser?.li) {
                        const id = Math.trunc(key);
                        const unit = rights.schedule.lists.units.find(unit => unit.mi === id);
                        if (unit)
                            setSelfRedact = rights.myUser.li[unit.cat] !== -unit.mi;
                    }
            }

            return <div
                key={itemMi}
                className={
                    'dropdown-ancestor'
                    + (mylib.isArr(value) ? isRedact ? ' margin-giant-gap-b margin-big-gap-t' : ' margin-big-gap-b' : ' margin-gap-b')
                }
            >
                <div className="flex flex-gap between margin-gap-b">
                    <div className="flex flex-gap">
                        {generalNode !== null
                            ? generalNode
                            : mylib.isBool(key)
                                ? <div className={'flex flex-gap color--3' + (key ? ' fade-05' : '')}>
                                    <StrongEvaButton
                                        scope={itemScope}
                                        fieldName="key"
                                        fieldValue={!key}
                                        className="self-start relative z-index:15"
                                        cud="U"
                                        name={key ? 'checkmark-square-outline' : 'square-outline'}
                                        isCanSend={!!scope && customAttUseRights.checkIsCan(userR, att.U)}
                                    />
                                    {mylib.isNum(value) && <KeyValueListAttNumberMember value={value} />}
                                </div>
                                : mylib.isStr(key) && <StrongEditableField
                                    scope={itemScope}
                                    fieldName="key"
                                    className="margin-gap-l mood-for-2 relative z-index:5"
                                    value={key}
                                    isRedact={isRedact}
                                    setSelfRedact
                                />}
                        {isRedact && <>
                            {!mylib.isNum(value) && !mylib.isBool(key) && !mylib.isNil(value) && (value === '+' || value.length < 1)
                                && <StrongEvaButton
                                    scope={itemScope}
                                    cud="U"
                                    fieldName="value"
                                    fieldValue={mylib.isArr(value) ? '+' : []}
                                    name={mylib.isArr(value) ? 'text' : 'list'}
                                />}
                            {mylib.isNum(key)
                                && <ScheduleKeyValueListAttArrayItemKeyChange
                                    scope={itemScope}
                                    theKey={key}
                                    users={exclusiveUsers}
                                    lists={exclusiveLists}
                                    roles={exclusiveRoles}
                                />}
                        </>}
                    </div>
                    {isRedact && !!scope && customAttUseRights.checkIsCan(userR, att.U) &&
                        <div className={'flex flex-gap' + (mylib.isStr(value) ? ' margin-giant-gap-r' : '')}>
                            {itema.length > 1 && <StrongEvaButton
                                scope={attScope}
                                fieldName="move"
                                fieldValue={itemi === 0 ? 2 : itemi - 1}
                                fieldKey={itemMi}
                                className="relative z-index:15 color--7"
                                cud="U"
                                name={itemi > 0 ? 'corner-right-up-outline' : 'corner-left-down-outline'}
                            />}
                            <StrongEvaButton
                                scope={attScope}
                                fieldName=""
                                fieldKey={itemMi}
                                className="relative z-index:15 color--ko"
                                cud="D"
                                confirm="Удалить пункт?"
                                name="trash-2-outline"
                            />
                        </div>}
                </div>
                {(isRedact || value !== '+') && !mylib.isNum(value)
                    && (mylib.isStr(value)
                        ? <StrongEditableField
                            scope={itemScope}
                            fieldName="value"
                            className={
                                'margin-gap-l mood-for-2 relative z-index:5 '
                                + (mylib.isBool(key) ? key ? 'color--3 fade-05' : 'color--3' : '')
                                + (!isRedact && mylib.isBool(key) ? ' icon-indent-text' : '')
                            }
                            value={value}
                            multiline
                            isRedact={isRedact}
                            setSelfRedact={setSelfRedact}
                        />
                        : isRedact
                            ? <div>
                                {value?.map((val, vali, vala) => {
                                    return <div key={vali}>
                                        {!!scope && customAttUseRights.checkIsCan(userR, att.U) &&
                                            <div className="flex flex-gap">
                                            <span className="flex self-start">{vali + 1}.</span>
                                                {vala.length > 1 && <StrongEvaButton
                                                    scope={itemScope}
                                                    fieldName="value list move"
                                                    fieldValue={vali === 0 ? 2 : vali - 1}
                                                    fieldKey={vali}
                                                    className="relative z-index:15 color--7"
                                                    cud="U"
                                                    name={vali > 0 ? 'corner-left-up-outline' : 'corner-right-down-outline'}
                                                    mapExecArgs={args => {
                                                        return {
                                                            ...args,
                                                            find: ['.', '===', val],
                                                        };
                                                    }}
                                                />}
                                                <StrongEvaButton
                                                    scope={itemScope}
                                                    fieldName="value list"
                                                    fieldKey={['.', '===', val]}
                                                    className="relative z-index:15 color--ko"
                                                    cud="D"
                                                    confirm="Удалить пункт?"
                                                    name="trash-2-outline"
                                                />
                                            </div>}
                                        <div className="full-width">
                                            {mylib.isNum(val)
                                                ? <div className="margin-gap-v">
                                                    <KeyValueListAttNumberMember value={val} />
                                                </div>
                                                : <StrongEditableField
                                                    scope={itemScope}
                                                    fieldName="value list key"
                                                    value={val}
                                                    className="mood-for-2 margin-gap-v"
                                                    isRedact
                                                    mapExecArgs={(args, val) => {
                                                        while (value.includes(val)) val += '1';
                                                        return {
                                                            ...args,
                                                            key: vali,
                                                            value: val,
                                                        };
                                                    }}
                                                />}
                                        </div>
                                    </div>;
                                })}
                                {value && <ScheduleKeyValueListAttLiItemDropdown
                                    scope={itemScope}
                                    value={value}
                                    topValues={attValue.values!}
                                    users={dropdownUsers}
                                    titles={dropdownTitles}
                                    lists={dropdownLists}
                                    roles={dropdownRoles}
                                />}

                                <StrongEditableField
                                    scope={itemScope}
                                    fieldName="value list"
                                    cud="C"
                                    className="mood-for-2 relative z-index:5 margin-gap-t"
                                    placeholder="Новый подпункт"
                                    isRedact={isRedact}
                                    setSelfRedact={setSelfRedact}
                                    mapExecArgs={(args, val) => {
                                        while ((value as string[]).includes(val)) val += '1';
                                        return {
                                            ...args,
                                            value: val,
                                        };
                                    }}
                                />
                            </div>
                            : <div>
                                {value?.map((val, vali) => {
                                    return <div key={vali} className="flex flex-gap margin-big-gap-l">
                                        <span className="flex self-start">{vali + 1}.</span>
                                        {mylib.isNum(val)
                                            ? <KeyValueListAttNumberMember value={val} />
                                            : <div>{val}</div>}
                                    </div>;
                                })}
                            </div>)}
            </div>;
        })}
        {insertionNode}
        <ScheduleKeyValueListAttStatistic
            list={attValue.values}
        />
    </div>;
}
