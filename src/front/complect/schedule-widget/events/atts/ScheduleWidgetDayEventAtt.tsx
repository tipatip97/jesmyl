import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetAppAtt, ScheduleWidgetAttKey, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import { useIsSchWidgetExpand, useScheduleWidgetAppAttsContext } from "../../useScheduleWidget";

const isNIs = (is: unknown) => !is;

export default function ScheduleWidgetDayEventAtt(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    attKey: ScheduleWidgetAttKey,
    att: ScheduleWidgetAppAtt<unknown>,
    isPast: boolean,
}>) {
    const appAtts = useScheduleWidgetAppAttsContext();
    const appAtt = appAtts[props.attKey];
    const [isExpand, switchIsExpand] = useIsSchWidgetExpand(props.scope, props.isPast);
    const { isRedact, editIcon, setIsSelfRedact } = useIsRedactArea(true, null, true, true);

    if (!appAtt) return <div className="error-message">Неизвестное вложение</div>;

    let attContent = null;

    try {
        attContent = isExpand && <div>
            {appAtt.result?.(
                props.att ?? appAtt.initVal,
                props.scope,
                isRedact,
                (is) => setIsSelfRedact(is ?? isNIs),
            )}
        </div>;
    } catch (error) {
        attContent = <div className="error-message">Контент не доступен</div>;
    }

    return <>
        <div className="flex flex-gap between color--7 margin-gap-v">
            <span className="flex flex-gap pointer" onClick={() => switchIsExpand()}>
                <EvaIcon name={appAtt.icon} />
                {appAtt.title}
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
            {isExpand && editIcon}
        </div>
        <div className="margin-big-gap-l">{attContent}</div>
    </>;
}
