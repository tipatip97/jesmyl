import { ReactNode, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongDiv from "../../../strong-control/StrongDiv";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetAppAtt, ScheduleWidgetAttKey, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import { useScheduleWidgetAppAttsContext } from "../../useScheduleWidget";

const altVal = {};

export default function ScheduleWidgetDayEventAtt(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    attKey: ScheduleWidgetAttKey,
    att: ScheduleWidgetAppAtt<unknown>
}>) {
    const appAtts = useScheduleWidgetAppAttsContext();
    const appAtt = appAtts[props.attKey];
    const [isExpand, setIsExpand] = useState(false);

    if (!appAtt) return <div className="error-message">Неизвестное вложение</div>;

    let attContent = null;
    const attachItem = (mapValue: () => unknown, content: ReactNode) => {
        return <StrongDiv
            scope={props.scope}
            fieldName=""
            cud="U"
            mapExecArgs={(args) => {
                const value = mapValue();
                if (value === undefined) return;
                return {
                    ...args,
                    value,
                };
            }}
        >{content}</StrongDiv>;
    };

    try {
        attContent = isExpand && <div>{appAtt.result?.(props.att ?? appAtt.initialAttValue, attachItem, props.scope)}</div>;
    } catch (error) {
        attContent = <div className="error-message">Контент не доступен</div>;
    }

    return <>
        <div className="flex flex-gap between color--7">
            <span className="flex flex-gap pointer" onClick={() => setIsExpand(is => !is)}>
                <EvaIcon name={appAtt.icon} />
                {appAtt.title}
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
        </div>
        <div className="margin-big-gap-l">{attContent}</div>
    </>;
}
