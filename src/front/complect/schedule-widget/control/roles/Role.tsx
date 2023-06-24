import { scheduleWidgetRights } from "../../../../../back/apps/index/rights";
import useAuth from "../../../../components/index/useAuth";
import EvaButton from "../../../eva-icon/EvaButton";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidgetRole } from "../../ScheduleWidget.model";
import ScheduleWidgetIconChange from "../../complect/IconChange";
import { extractScheduleWidgetRoleUser, takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";

const mainRoleRights = scheduleWidgetRights.getAllRights();

export default function ScheduleWidgetRole({
    scope,
    role,
}: StrongComponentProps<{
    role: IScheduleWidgetRole,
}>) {
    const roleScope = takeStrongScopeMaker(scope, ' roleMi/', role.mi);
    const rights = useScheduleWidgetRightsContext();
    const { editIcon, isRedact } = useIsRedactArea(true, !role.title || null, rights.isCanTotalRedact, true);
    const auth = useAuth();
    const roleUser = extractScheduleWidgetRoleUser(rights.schedule, 0, role);
    const catsRedact = useIsRedactArea(true, null, true, true);

    const userSetModal = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<div className="flex">
                Роль <span className="color--7">{role.title}</span> займёт
            </div>)}
            {body(<div>
                {rights.schedule.ctrl.users.map((user, useri) => {
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
                    ? rights.schedule.ctrl.cats.map((catName, catNamei) => {
                        const catScope = takeStrongScopeMaker(scope + ' categories', ' cati/', catNamei);

                        return <StrongEditableField
                            key={catNamei}
                            scope={catScope}
                            fieldName=""
                            isRedact
                            value={catName}
                        />
                    })
                    : rights.schedule.ctrl.cats.map((catName, catNamei) => {
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
                {!rights.schedule.ctrl.cats.includes('') && catsRedact.isRedact && <StrongEvaButton
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
                    icon={isRedact || !role.icon ? 'github-outline' : role.icon}
                    value={role.title}
                    postfix={roleUser && (' - ' + (roleUser.alias || roleUser.fio))}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            key: 'title',
                        };
                    }}
                />
                {(rights.isCanTotalRedact ? isRedact : auth && auth.login === roleUser?.login)
                    && <ScheduleWidgetIconChange
                        scope={roleScope}
                        header={`Иконка для роли ${role.title}`}
                        icon={role.icon ?? 'github-outline'}
                        used={rights.schedule.ctrl.roles.map(role => role.icon)}
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
                        postfix={`Категория ${rights.schedule.ctrl.cats[role.cat || 0] || 'Основное'}`}
                    />}
                </>}
            </div>
            {editIcon}
        </div>
    </div>;
}
