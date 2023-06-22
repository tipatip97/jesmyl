import EvaButton from "../../../eva-icon/EvaButton";
import useFullContent from "../../../fullscreen-content/useFullContent";
import { ScheduleStorage } from "../../ScheduleWidget.model";
import ScheduleWidgetAlarmSchedule from "./AlarmSchedule";

export default function ScheduleWidgetAlarmScheduleList({
    schedules
}: {
    schedules: ScheduleStorage,
}) {
    const [modalNode, screen] = useFullContent(() => {
        return <>
            {schedules.list.map((schedule) => {
                return <ScheduleWidgetAlarmSchedule key={schedule.w} schedule={schedule} />;
            })}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name="list"
            onClick={() => screen()}
        />
    </>;
}
