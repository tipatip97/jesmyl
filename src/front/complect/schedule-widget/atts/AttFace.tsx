import { ReactNode } from "react";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAtt, ScheduleWidgetAttKey } from "../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./custom/CustomAtt";


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
    const { modalNode, screen } = useModal(tatt && (() => {
        return <ScheduleWidgetCustomAtt
            tatt={tatt as never}
            isRedact
            scope={scheduleScope}
            topContent={customAttTopContent?.(scope, attKey)}
        />;
    }));

    return <>
        {modalNode}
        <div
            className={'schedule-widget-tatt relative flex center column' + (tatt?.isCustomize ? ' color--7 pointer' : '')}
            onClick={() => {
                if (tatt?.isCustomize) screen();
            }}
        >
            {isLink && <EvaIcon name="link-2" className="absolute pos-left pos-top color--3 fade-05" />}
            {isRedact && <StrongEvaButton
                scope={scope}
                fieldName=""
                cud="D"
                name="close"
                className="close-button"
                confirm={<div className="flex flex-gap">Убрать {isLink ? 'ссылку вложения' : 'вложение'} {tatt?.title || '??'} из события <div className="flex">{typeTitle}?</div></div>}
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
