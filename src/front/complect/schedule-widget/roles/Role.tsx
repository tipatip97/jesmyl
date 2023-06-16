import { ScheduleWidgetRights } from "../../../../back/apps/index/complect";
import useAuth from "../../../components/index/useAuth";
import EvaButton from "../../eva-icon/EvaButton";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetRole } from "../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../complect/IconChange";
import { extractScheduleWidgetRoleUser, takeStrongScopeMaker, useScheduleWidgetRolesContext } from "../useScheduleWidget";

const mainRoleRights = ScheduleWidgetRights.getAllRights();

export default function ScheduleWidgetRole({
    scope,
    schedule,
    role,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
    role: IScheduleWidgetRole,
}>) {
    const roleScope = takeStrongScopeMaker(scope, ' roleMi/', role.mi);
    const { isCanTotalRedact } = useScheduleWidgetRolesContext();
    const { editIcon, isRedact } = useIsRedactArea(true, !role.title || null, isCanTotalRedact, true);
    const auth = useAuth();
    const roleUser = extractScheduleWidgetRoleUser(schedule, 0, role);
    const catsRedact = useIsRedactArea(true, null, true, true);

    const userSetModal = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<div className="flex">
                Роль <span className="color--7">{role.title}</span> займёт
            </div>)}
            {body(<div className="">
                {schedule.roles.users.map((user, useri) => {
                    if ((roleUser && user.login === roleUser.login) || (role.mi === 0 && user.R !== mainRoleRights)) return null;

                    return <StrongEvaButton
                        key={useri}
                        scope={roleScope}
                        fieldName="field"
                        cud="U"
                        confirm={`Теперь ${user?.alias || user?.fio} займёт роль ${role.title}?`}
                        className="flex flex-gap pointer"
                        name="person"
                        postfix={user?.alias || user?.fio}
                        onSuccess={() => closeModal()}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                key: 'user',
                                value: user.mi,
                            };
                        }}
                    />
                })}
            </div>)}
        </>;
    });

    const catSetModal = useModal(({ header, body, footer }, closeModal) => {
        return <>
            {header(<div className="flex between">
                <span><span className="color--7">{role.title}</span> в категорию</span>

                {catsRedact.editIcon}
            </div>)}
            {body(<>
                {catsRedact.isRedact
                    ? schedule.roles.cats.map((catName, catNamei) => {
                        const catScope = takeStrongScopeMaker(scope + ' categories', ' cati/', catNamei);

                        return <StrongEditableField
                            key={catNamei}
                            scope={catScope}
                            fieldName=""
                            isRedact
                            value={catName}
                        />
                    })
                    : schedule.roles.cats.map((catName, catNamei) => {
                        return <StrongEvaButton
                            key={catNamei}
                            scope={roleScope}
                            fieldName="field"
                            cud="U"
                            className="flex flex-gap pointer"
                            name="folder-outline"
                            postfix={catName}
                            onSuccess={() => closeModal()}
                            mapExecArgs={(args) => {
                                return {
                                    ...args,
                                    key: 'cat',
                                    value: catNamei,
                                };
                            }}
                        />
                    })}
            </>)}
            {footer(<>
                {!schedule.roles.cats.includes('') && catsRedact.isRedact && <StrongEvaButton
                    scope={scope}
                    fieldName="categories"
                    name="folder-add-outline"
                />}
            </>)}
        </>;
    });

    return <div className="margin-gap-v padding-gap bgcolor--5">
        {userSetModal.modalNode}
        {catSetModal.modalNode}
        <div className="flex flex-gap between">
            <div className="full-width">
                <StrongEditableField
                    scope={roleScope}
                    fieldName="field"
                    isRedact={isRedact}
                    title="Роль"
                    icon={isRedact || !role.icon ? 'credit-card-outline' : role.icon}
                    value={role.title}
                    postfix={roleUser && (' - ' + (roleUser.alias || roleUser.fio))}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            key: 'title',
                        };
                    }}
                />
                {(isCanTotalRedact ? isRedact : auth && auth.login === roleUser?.login)
                    && <ScheduleWidgetIconChange
                        scope={roleScope}
                        fieldName="field"
                        header={`Иконка для роли ${role.title}`}
                        icon={role.icon ?? 'person-outline'}
                        exclude={schedule.roles.list.map(role => role.icon)}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                key: 'icon',
                            };
                        }}
                    />}
                {isRedact && <>
                    {role.mi !== 0 && roleUser && <StrongEvaButton
                        scope={roleScope}
                        fieldName="user"
                        cud="D"
                        name="person-delete-outline"
                        confirm={`${roleUser.alias || roleUser.fio} больше не ${role.title}?`}
                        postfix="Освободить роль"
                    />}
                    {roleUser
                        ? <EvaButton name="sync" onClick={() => userSetModal.screen()} postfix="Заменить человека" />
                        : <EvaButton name="person-add-outline" onClick={() => userSetModal.screen()} postfix="Назначить человека" />}
                    {role.mi > 0 && <EvaButton
                        name="grid-outline"
                        onClick={() => catSetModal.screen()}
                        postfix={`Сменить категорию (${schedule.roles.cats[role.cat || 0] || 'Основное'})`}
                    />}
                </>}
            </div>
            {editIcon}
        </div>
    </div>;
}
