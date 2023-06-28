import { useSchedules } from "../useScheduleWidget";
import "./Alarm.scss";
import ScheduleWidgetAlarmContent from "./AlarmContent";

export default function ScheduleWidgetAlarm({ onGoTo }: { onGoTo: () => void }) {
    const schedules = useSchedules();

    return <>
        {schedules.list.some((schedule) => schedule.start)
            && <ScheduleWidgetAlarmContent onGoTo={onGoTo} />}
    </>;
}
