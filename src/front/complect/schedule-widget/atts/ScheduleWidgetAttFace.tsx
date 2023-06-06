import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAtt, ScheduleWidgetAttKey } from "../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./custom/ScheduleWidgetCustomAtt";


export default function ScheduleWidgetAttFace({
    att,
    typeTitle,
    attKey,
    scope,
    isRedact,
    scheduleScope,
}: StrongComponentProps<{
    isRedact?: boolean,
    att?: ScheduleWidgetAppAtt,
    attKey: ScheduleWidgetAttKey,
    typeTitle: string,
    scheduleScope: string,
}>) {
    const { modalNode, screen } = useModal(att && (() => {
        return <ScheduleWidgetCustomAtt att={att as never} isRedact scope={scheduleScope} />;
    }));

    return <>
        {modalNode}
        <div
            className={'schedule-widget-att flex center column' + (att?.isCustomize ? ' color--7 pointer' : '')}
            onClick={() => {
                if (att?.isCustomize) screen();
            }}
        >
            {isRedact && <StrongEvaButton
                scope={scope}
                fieldName=""
                cud="D"
                name="close"
                className="close-button"
                confirm={`Убрать вложение "${att?.title || '??'}" из события "${typeTitle}"?`}
                mapExecArgs={(args) => {
                    return {
                        ...args,
                        attn: attKey,
                    };
                }}
            />}
            {att
                ? <>
                    <EvaIcon name={att.icon} />
                    <div className="ellipsis full-max-width">{att.title}</div>
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
