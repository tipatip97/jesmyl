import useAuth from "../../../components/index/useAuth";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetRole, IScheduleWidgetRoleUser } from "../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../complect/IconChange";
import { takeStrongScopeMaker, useScheduleWidgetIsMainRoleContext } from "../useScheduleWidget";

export default function ScheduleWidgetRole({
    scope,
    schedule,
    role,
    redact,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
    role: IScheduleWidgetRole,
    redact: boolean,
}>) {
    const roleScope = takeStrongScopeMaker(scope, ' roleMi/', role.mi);
    const isIMainAdmin = useScheduleWidgetIsMainRoleContext();
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, redact || null, isIMainAdmin, true);
    const auth = useAuth();

    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        const usersMap: Map<string, IScheduleWidgetRoleUser> = new Map();

        schedule.roles.forEach((role) => {
            if (role.user && !usersMap.has(role.user.login)) usersMap.set(role.user.login, role.user);
            if (role.req && !usersMap.has(role.req.login)) usersMap.set(role.req.login, role.req);
        });

        return <div className="">
            {header(<div className="flex">
                Роль <span className="color--7">{role.title}</span> займёт
            </div>)}
            {body(<div className="flex flex-gap">
                {Array.from(usersMap.values()).map((user) => {
                    if (!user || !role.user || user.login === role.user.login) return null;
                    return <StrongEvaButton
                        key={role.mi}
                        scope={roleScope}
                        fieldName="user"
                        cud="U"
                        confirm={`Теперь ${user?.alias || user?.fio} займёт роль ${role.title}?`}
                        className="flex flex-gap pointer"
                        name="person"
                        postfix={user?.alias || user?.fio}
                        onSuccess={() => closeModal()}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                value: user,
                            };
                        }}
                    />
                })}
            </div>)}
        </div>;
    });

    return <div className="margin-big-gap-v">
        {modalNode}
        <div className="flex flex-gap flex-end">
            {isSelfRedact && role.user && <EvaButton name="sync" onClick={() => screen()} />}
            {editIcon}
        </div>
        {isRedact && <ScheduleWidgetIconChange
            scope={roleScope}
            fieldName="field"
            header={`Иконка для роли ${role.title}`}
            icon={role.icon ?? 'person-outline'}
            mapExecArgs={(args) => {
                return {
                    ...args,
                    key: 'icon',
                };
            }}
        />}
        <StrongEditableField
            scope={roleScope}
            fieldName="field"
            isRedact={isRedact}
            title="Роль"
            icon={role.icon ?? 'person-outline'}
            value={role.title}
            mapExecArgs={(args) => {
                return {
                    ...args,
                    key: 'title',
                };
            }}
        />
        {role.title &&
            <>
                {role.user && <StrongEditableField
                    scope={roleScope}
                    fieldName="userField"
                    title={role.user.fio}
                    isRedact={isRedact}
                    icon="person-done-outline"
                    value={role.user.alias || role.user.fio}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            key: 'alias',
                        };
                    }}
                />}
                {!role.user && <div className="flex flex-gap">
                    <EvaIcon name="person-add-outline" />
                    {role.req
                        ? <div className="flex flex-gap">
                            <div>
                                {role.req.fio}{' '}
                                на роль{' '}
                                <span className="color--7">{role.title}</span>
                            </div>
                            <StrongEvaButton
                                scope={roleScope}
                                fieldName="user"
                                cud="U"
                                name="checkmark-circle-2-outline"
                                className="color--ok"
                                confirm={`Утвердить ${role.req.fio} на роль ${role.title}?`}
                                mapExecArgs={(args) => {
                                    return {
                                        ...args,
                                        value: role.req,
                                    };
                                }}
                            />
                            <StrongEvaButton
                                scope={roleScope}
                                fieldName="req"
                                cud="D"
                                name="close-circle-outline"
                                confirm={`Сбросить кандидата ${role.req.fio} на роль ${role.title}?`}
                            />
                        </div>
                        : auth
                            ? <StrongDiv
                                scope={roleScope}
                                fieldName="req"
                                confirm={`Отикликнуться на вакансию ${role.title}?`}
                                className="text-underline pointer"
                            >Откликнуться</StrongDiv>
                            : 'Отклика нет'}
                </div>}
            </>}
    </div>;
}
