import { ReactNode, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongDiv from "../../../strong-control/StrongDiv";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetAttKey, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import { useScheduleWidgetAppAttsContext } from "../../useScheduleWidget";

const altVal = {};

export default function ScheduleWidgetDayEventAtt(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    attKey: ScheduleWidgetAttKey,
}>) {
    const appAtts = useScheduleWidgetAppAttsContext();
    const appAtt = appAtts[props.attKey];
    const [isExpand, setIsExpand] = useState(false);

    if (!appAtt) return <div className="error-message">Неизвестное вложение</div>;

    const selfScope = takeStrongScopeMaker(props.scope, ' attKey/', props.attKey);

    let attContent = null;
    const attachItem = (mapValue: () => unknown, content: ReactNode) => {
        return <StrongDiv
            scope={selfScope}
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
        attContent = isExpand && <div className="">{appAtt.result?.(props.event.atts?.[props.attKey] ?? altVal, attachItem)}</div>;
    } catch (error) {
        attContent = <div className="error-message">Контент не доступен</div>;
    }

    return <>
        <div className="flex flex-gap between color--7">
            <span className="flex flex-gap pointer" onClick={() => setIsExpand(is => !is)}>
                <EvaIcon name={appAtt.icon} className="" />
                {appAtt.title}
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
        </div>
        <div className="margin-big-gap-l">{attContent}</div>
    </>;
}
