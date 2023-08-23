import { ReactNode } from "react";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAtt, ScheduleWidgetAttKey } from "../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./custom/CustomAtt";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import { scheduleWidgetUserRights } from "../../../../back/apps/index/rights";


export default function ScheduleWidgetAttFace({
    tatt,
    typeTitle,
    attKey,
    scope,
    isRedact,
    scheduleScope,
    isLink,
    customAttTopContent,
}: StrongComponentProps<{
    isRedact?: boolean,
    tatt?: ScheduleWidgetAppAtt,
    attKey: ScheduleWidgetAttKey,
    typeTitle: ReactNode,
    customAttTopContent?: (scope: string, attKey: ScheduleWidgetAttKey) => ReactNode,
    scheduleScope: string,
    isLink?: boolean,
}>) {
    const rights = useScheduleWidgetRightsContext();
    const myUserR = rights.myUser?.R;
    const [modalNode, screen] = useModal(tatt && (({ header, body }) => {
        return <>
            {header(<>Вложение <span className="color--7">{tatt.title}</span></>)}
            {body(<ScheduleWidgetCustomAtt
                tatt={tatt as never}
                isRedact
                scope={scheduleScope}
                topContent={customAttTopContent?.(scope, attKey)}
            />)}
        </>;
    }));
    if (!scheduleWidgetUserRights.checkIsCan(myUserR, tatt?.R)) return null;
    const isCanRedact = scheduleWidgetUserRights.checkIsCan(myUserR, tatt?.U);

    return <>
        {modalNode}
        <div
            className={'schedule-widget-tatt relative flex center column' + (isCanRedact && tatt?.isCustomize ? ' color--7 pointer' : '')}
            onClick={isCanRedact && tatt?.isCustomize
                ? screen
                : undefined}
        >
            {isLink && <EvaIcon name="link-2" className="absolute pos-left pos-top color--3 fade-05" />}
            {isRedact && isCanRedact && <StrongEvaButton
                scope={scope}
                fieldName=""
                cud="D"
                name="close"
                className="close-button"
                confirm={<>Убрать {isLink ? 'ссылку вложения' : 'вложение'} <span className="color--7">{tatt?.title || '??'}</span> из события {typeTitle}?</>}
            />}
            {tatt
                ? <>
                    <EvaIcon name={tatt.icon} />
                    <div className="ellipsis full-max-width">{tatt.title}</div>
                </>
                : <>
                    <EvaIcon
                        name="question-mark-circle-outline"
                        className="color--ko"
                    />
                    <div className="color--ko">Не изв.</div>
                </>}
        </div>
    </>;
}
