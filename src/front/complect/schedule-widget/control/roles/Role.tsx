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
import ScheduleWidgetRoleFace from "./RoleFace";

const mainRoleRights = scheduleWidgetRights.getAllRights();

export default function ScheduleWidgetRole({
    scope,
    role,
}: StrongComponentProps<{
    role: IScheduleWidgetRole,
}>) {
    const roleScope = takeStrongScopeMaker(scope, ' roleMi/', role.mi);
    const rights = useScheduleWidgetRightsContext();
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
                        fieldKey="user"
                        fieldValue={user.mi}
                        cud="U"
                        confirm={`Теперь ${user?.alias || user?.fio} займёт роль ${role.title}?`}
                        className="flex flex-gap pointer"
                        name="person"
                        postfix={user?.alias || user?.fio}
                        onSuccess={() => closeModal()}
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
                            fieldKey="cat"
                            fieldValue={catNamei}
                            cud="U"
                            className="flex flex-gap pointer"
                            name="folder-outline"
                            postfix={catName}
                            onSuccess={() => closeModal()}
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

    const redactRoleModal = useModal(({ header, body }) => {
        return <>
            {header(<div>Редактирование роли {role.title}</div>)}
            {body(<>
                <StrongEditableField
                    scope={roleScope}
                    fieldName="field"
                    isRedact
                    title="Название"
                    icon="credit-card-outline"
                    value={role}
                    fieldKey="title"
                    postfix={roleUser && (' - ' + (roleUser.alias || roleUser.fio))}
                />
                <ScheduleWidgetIconChange
                    scope={roleScope}
                    header={`Иконка для роли ${role.title}`}
                    icon={role.icon ?? 'github-outline'}
                    used={rights.schedule.ctrl.roles.map(role => role.icon)}
                />
                {rights.isCanTotalRedact && <>
                    {role.mi !== 0 && roleUser && <StrongEvaButton
                        scope={roleScope}
                        fieldName="user"
                        cud="D"
                        name="person-delete-outline"
                        confirm={`${roleUser.alias || roleUser.fio} больше не ${role.title}?`}
                        postfix="Освободить роль"
                        className="margin-gap-v"
                    />}
                    {roleUser
                        ? <EvaButton name="sync" onClick={() => userSetModal.screen()} postfix="Заменить человека" className="margin-gap-v" />
                        : <EvaButton name="person-add-outline" onClick={() => userSetModal.screen()} postfix="Назначить человека" className="margin-gap-v" />}
                    {role.mi > 0 && <EvaButton
                        name="grid-outline"
                        onClick={() => catSetModal.screen()}
                        postfix={`Категория ${rights.schedule.ctrl.cats[role.cat || 0] || 'Основное'}`}
                        className="margin-gap-v"
                    />}
                </>}
            </>)}</>
    });

    return <div className="flex flex-gap between margin-gap">
        {userSetModal.modalNode}
        {catSetModal.modalNode}
        {redactRoleModal.modalNode}
        <ScheduleWidgetRoleFace
            schedule={rights.schedule}
            role={role}
        />
        {(rights.isCanTotalRedact || (rights.isCanRedact && auth && auth.login === roleUser?.login))
            && <EvaButton
                name="edit-outline"
                onClick={() => redactRoleModal.screen()}
            />}
    </div>;
}
