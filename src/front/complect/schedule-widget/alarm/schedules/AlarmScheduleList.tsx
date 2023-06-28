import PhaseIndexContainer from "../../../../components/index/complect/PhaseIndexContainer";
import useConnectionState from "../../../../components/index/useConnectionState";
import { useSchedules } from "../../useScheduleWidget";
import ScheduleWidgetAlarmSchedule from "./AlarmSchedule";

export default function ScheduleWidgetAlarmScheduleList() {
    const schedules = useSchedules();
    const connectionNode = useConnectionState();

    return <PhaseIndexContainer
        topClass="index-schedules"
        headTitle="События"
        head={connectionNode}
        content={schedules.list.map((schedule) => {
            if (!schedule.start) return null;
            return <ScheduleWidgetAlarmSchedule key={schedule.w} schedule={schedule} />;
        })}
    />;
}
