import EvaIcon from "../../eva-icon/EvaIcon";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAtt, ScheduleWidgetAttKey } from "../ScheduleWidget.model";


export default function ScheduleWidgetAttFace({
    att,
    typeTitle,
    attKey,
    scope,
    isRedact,
}: StrongComponentProps<{
    isRedact?: boolean,
    att?: ScheduleWidgetAppAtt,
    attKey: ScheduleWidgetAttKey,
    typeTitle: string,
}>) {
    return <div className="schedule-widget-att flex center column">
        {isRedact && <StrongEvaButton
            scope={scope}
            fieldName=""
            cud="D"
            name="close"
            className="close-button"
            confirm={`Убрать вложение "${att?.title || '??'}" из события "${typeTitle}"`}
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
    </div>;
}
