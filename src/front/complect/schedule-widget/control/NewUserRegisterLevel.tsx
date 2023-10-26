import { scheduleWidgetUserRights } from "../../../../back/apps/index/rights";
import EvaButton from "../../eva-icon/EvaButton";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import ScheduleWidgetRightControlList from "./RightControlList";

export default function ScheduleWidgetNewUserRegisterLevel({ scope }: StrongComponentProps) {
    const rights = useScheduleWidgetRightsContext();

    const [newUserRightsNode, openNewUserRights] = useModal(({ body }) => {
        return <>
            {body(<ScheduleWidgetRightControlList
                scope={scope}
                fieldName="defu"
                rightCtrl={scheduleWidgetUserRights}
                R={rights.schedule.ctrl.defu}
            />)}
        </>;
    });

    return <>
        {newUserRightsNode}
        <EvaButton
            name="chevron-right"
            className="margin-big-gap-v margin-gap-l"
            prefix="Права по умолчанию"
            onClick={openNewUserRights}
        />
    </>;
}
