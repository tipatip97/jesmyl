import { scheduleWidgetRegTypeRights } from "../../../../back/apps/index/rights";
import useIsExpand from "../../expand/useIsExpand";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import ScheduleWidgetRightControlList from "./RightControlList";

export default function ScheduleWidgetRegisterType({ scope }: StrongComponentProps) {
    const rights = useScheduleWidgetRightsContext();
    const [expandNode, isExpand] = useIsExpand(false, <>Тип мероприятия</>);

    return <>
        <div className="margin-gap-v">{expandNode}</div>
        <div className="margin-big-gap-v">{isExpand
            && <ScheduleWidgetRightControlList
                scope={scope}
                fieldName="type"
                rightCtrl={scheduleWidgetRegTypeRights}
                R={rights.schedule.ctrl.type}
                className="margin-gap-l"
                isCantEdit={!rights.isCanTotalRedact}
                isDescriptionsCollect
            />}
        </div>
    </>;
}