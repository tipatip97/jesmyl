import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useIsExpand from "../../expand/useIsExpand";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import { IScheduleWidgetListCat, IScheduleWidgetListUnit } from "../ScheduleWidget.model";
import ScheduleWidgetUserList from "../control/users/UserList";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../useScheduleWidget";

export default function ScheduleWidgetListUnit({
    scope,
    scheduleScope,
    unit,
    cat,
    cati,
    catScopePostfix,
    shortTitles,
}: StrongComponentProps<{
    scheduleScope: string,
    unit: IScheduleWidgetListUnit,
    cat: IScheduleWidgetListCat,
    cati: number,
    catScopePostfix: string,
    shortTitles: [string, string],
}>) {
    const rights = useScheduleWidgetRightsContext();
    const unitScope = takeStrongScopeMaker(scope, ' unitMi/', unit.mi);
    const title = <>{unit.title || <span className="text-italic">Без названия</span>}</>;
    const [unitTitile, isExpand] = useIsExpand(
        false,
        title,
        rights.isCanRedact
            ? isExpand => isExpand && <EvaButton
                name="edit-outline"
                onClick={() => screen()}
            />
            : null
    );

    const { modalNode, screen } = useModal(({ header }) => {
        return <>
            {header(<div className="flex flex-gap">{title}</div>)}
            <StrongEditableField
                scope={unitScope}
                fieldName="title"
                icon={cat.icon}
                title="Название"
                value={unit.title}
                isRedact
            />
            <ScheduleWidgetUserList
                scope={scheduleScope}
                title="Состав"
                filter={() => true}
                asUserPlusPrefix={(userNode, userScope, user, balance) => {
                    const isForMember = balance < 3;
                    return <div className="flex flex-gap">
                        {user.li?.[cati] === undefined
                            ? <StrongEvaButton
                                name="square-outline"
                                scope={userScope + catScopePostfix}
                                cud="C"
                                fieldName=""
                                disabled={user.R === undefined}
                                mapExecArgs={(args) => {
                                    return {
                                        ...args,
                                        value: isForMember ? unit.mi : -unit.mi,
                                    };
                                }}
                                className="nowrap"
                                postfix={user.R === undefined
                                    ? <EvaIcon name="person-delete-outline" />
                                    : isForMember ? shortTitles[1] : shortTitles[0]}
                            />
                            : <StrongEvaButton
                                name="checkmark-square-2-outline"
                                scope={userScope + catScopePostfix}
                                cud="D"
                                fieldName=""
                                postfix={user.li[cati] < 0 ? shortTitles[0] : shortTitles[1]}
                                disabled={user.R === undefined || (user.li[cati] !== unit.mi && user.li[cati] !== -unit.mi)}
                                className={'flex flex-gap nowrap'
                                    + (user.li[cati] > 0
                                        ? isForMember
                                            ? ' color--7'
                                            : ' color--ko'
                                        : !isForMember
                                            ? ' color--7'
                                            : ' color--ko')}
                            />}
                        {userNode}
                    </div>
                }}
            />
        </>;
    });

    return <>
        {modalNode}
        <div className="margin-big-gap-v">
            <span className="color--3">{unitTitile}</span>
            {isExpand && <div className="margin-big-gap-h">
                <ScheduleWidgetUserList
                    scope={scheduleScope}
                    title={cat.titles[0]}
                    filter={(user) => user.li?.[cati] === -unit.mi}
                    isInitExpand
                />
                <ScheduleWidgetUserList
                    scope={scheduleScope}
                    title={cat.titles[1]}
                    filter={(user) => user.li?.[cati] === unit.mi}
                />
            </div>}
        </div>
    </>;
}
