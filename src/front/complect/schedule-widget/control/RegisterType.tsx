import { scheduleWidgetRegTypeRights } from "../../../../back/apps/index/rights";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import useIsExpand from "../../expand/useIsExpand";
import { IScheduleWidget } from "../ScheduleWidget.model";
import ScheduleWidgetRightControlList from "./RightControlList";

export default function ScheduleWidgetRegisterType({
    scope,
    schedule,
}: StrongComponentProps<{
    schedule: IScheduleWidget,
}>) {
    const [expandNode, isExpand] = useIsExpand(false, <>Тип мероприятия</>);

    return <>
        {expandNode}
        {isExpand
            && <ScheduleWidgetRightControlList
                scope={scope}
                fieldName="type"
                rights={scheduleWidgetRegTypeRights}
                R={schedule.ctrl.type}
                className="margin-gap-l"
                isDescriptionsCollect
            />}
    </>;
}
