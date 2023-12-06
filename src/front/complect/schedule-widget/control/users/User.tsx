import { ReactNode } from "react";
import { packScheduleWidgetInviteLink } from "../../../../../back/apps/index/complect";
import { scheduleWidgetUserRights } from "../../../../../back/apps/index/rights";
import ShareEvaButton from "../../../ShareEvaButton";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import useToast from "../../../modal/useToast";
import { crossApplicationLinkCoder } from "../../../qr-code/QRCodeMaster";
import useQRMaster from "../../../qr-code/useQRMaster";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import { IScheduleWidgetUser } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import { ScheduleWidgetUserEdit } from "./UserEdit";

export default function ScheduleWidgetUser({
    scope,
    user,
    balance,
    asUserPlusPrefix,
}: StrongComponentProps<{
    user: IScheduleWidgetUser,
    balance: number,
    asUserPlusPrefix?: (userNode: ReactNode, userScope: string, user: IScheduleWidgetUser, balance: number) => ReactNode,
}>) {
    const rights = useScheduleWidgetRightsContext();
    const userName = user.nick === undefined
        ? user.fio || <span className="color--7 text-italic">Ссылка</span>
        : `${user.fio && user.fio !== user.nick ? `${user.fio} (${user.nick})` : user.nick} `;
    const { readQR } = useQRMaster();

    const [toastNode, toast] = useToast();
    const [modalNode, screen] = useModal(({ header, body }) => {
        return <>
            {header(<div className="flex between flex-gap">
                <span>
                    {userName}
                    {'- '}
                    {balance < 0
                        ? user.R == null
                            ? 'Новый'
                            : 'в блоке'
                        : scheduleWidgetUserRights.texts[balance]?.role?.[0] || 'Неизвестный'}
                </span>
                {user.login === undefined
                    && <StrongEvaButton
                        scope={takeStrongScopeMaker(scope, ' userMi/', user.mi)}
                        fieldName="userData"
                        cud="U"
                        name="qr-code"
                        mapExecArgs={async (args) => {
                            return await readQR((data) => {
                                if (data.appName === 'index' && data.key === 'passport') {
                                    const valueLogin = (data.value as { login: '' }).login;
                                    if (rights.schedule.ctrl.users.some(user => valueLogin === user.login)) {
                                        toast('Пользователь уже является участником!', { mood: 'ko' });
                                        return;
                                    }
                                }

                                return {
                                    ...args,
                                    ...data.value as {},
                                };
                            });
                        }}
                    />}
            </div>)}
            {body(<ScheduleWidgetUserEdit scope={scope} user={user} />)}
        </>;
    });

    const userNode = <div className="flex flex-gap between margin-gap-v">
        {!rights.isCanRedactUsers
            ? userName
            : <>
                <span className="flex flex-gap">
                    {userName}
                    {balance !== undefined && <span className="flex flex-gap color--7">

                        {user.login === undefined
                            ? <>
                                <EvaIcon name="link-2" className="color--7 icon-scale-05" />
                                {balance < 0 ? null : balance}
                            </>
                            : balance < 0 ? <EvaIcon name="person-delete-outline" /> : balance}
                    </span>}
                </span>
                <span className="flex flex-gap">
                    {user.login === undefined &&
                        <ShareEvaButton
                            prepare={() => {
                                if (balance < 1) {
                                    toast('Необходимо выдать права');
                                    return;
                                }

                                const levelTitle = scheduleWidgetUserRights.texts[balance].role?.[1];

                                return {
                                    url: crossApplicationLinkCoder.encode({
                                        appName: 'index',
                                        key: 'swInvite',
                                        value: packScheduleWidgetInviteLink(rights.schedule.w, user.mi),
                                    }),
                                    title: `Приглашение ${levelTitle}${user.fio ? ` - ${user.fio}` : ''}`,
                                    text: user.fio
                                        ? `${user.fio}, приветствую! Приглашаю вас в качестве ${levelTitle} на мероприятие ${rights.schedule.title}`
                                        : undefined,
                                };
                            }}
                        />}
                    <EvaButton
                        name="edit-outline"
                        className="flex between full-width"
                        onClick={screen}
                    />
                </span>
            </>}
    </div>;

    return <>
        {modalNode}
        {toastNode}
        {asUserPlusPrefix === undefined
            ? userNode
            : asUserPlusPrefix(
                userNode,
                takeStrongScopeMaker(scope, ' userMi/', user.mi),
                user,
                balance
            )}
    </>;
}
