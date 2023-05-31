import StrongButton from "../strong-control/StrongButton";
import './ScheduleWidget.scss';
import { initialScheduleScope } from "./useScheduleWidget";

export default function ScheduleCreateWidgetButton({
    title,
    schw,
}: {
    title: string,
    schw: number,
}) {

    return <StrongButton
        title="Создать расписание"
        fieldName="list"
        scope={initialScheduleScope}
        mapExecArgs={(args) => {
            return {
                ...args,
                schw,
                title,
            };
        }}
        cud="C"
    />;
}