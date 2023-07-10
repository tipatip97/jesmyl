import { ReactNode } from "react";
import { packScheduleWidgetInviteLink } from "../../../../../back/apps/index/complect";
import { scheduleWidgetUserRights } from "../../../../../back/apps/index/rights";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { crossApplicationLinkCoder } from "../../../qr-code/QRCodeMaster";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
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
    const userName = user.fio === undefined
        ? user.alias || <span className="color--7 text-italic">Ссылка</span>
        : `${user.alias && user.alias !== user.fio ? `${user.alias} (${user.fio})` : user.fio} `;

    const { modalNode, screen, toast } = useModal(({ header, body }) => {
        return <>
            {header(<>
                {userName}
                {' - '}
                {balance < 0
                    ? user.R == null
                        ? 'Новый'
                        : 'в блоке'
                    : scheduleWidgetUserRights.texts[balance]?.role?.[0] || 'Неизвестный'}
            </>)}
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
                    {user.login === undefined && <EvaButton
                        className="flex between color--7 full-width"
                        name="link-2"
                        onClick={() => {
                            if (balance < 1) {
                                toast('Необходимо выдать права');
                                return;
                            }
                            const levelTitle = scheduleWidgetUserRights.texts[balance].role?.[1];

                            navigator.share({
                                url: crossApplicationLinkCoder.encode({
                                    appName: 'index',
                                    key: 'swInvite',
                                    value: packScheduleWidgetInviteLink(rights.schedule.w, user.mi),
                                }),
                                title: `Приглашение ${levelTitle}${user.alias ? ` - ${user.alias}` : ''}`,
                                text: user.alias
                                    ? `${user.alias}, приветствую! Приглашаю вас в качестве ${levelTitle} на мероприятие ${rights.schedule.title}`
                                    : undefined,
                            })
                        }}
                    />}
                    <EvaButton
                        name="edit-outline"
                        className="flex between full-width"
                        onClick={() => screen()}
                    />
                </span>
            </>}
    </div>;

    return <>
        {modalNode}
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
