import { AppName } from "../../app/App.model";
import StrongButton from "../strong-control/StrongButton";
import './ScheduleWidget.scss';
import { initialScheduleScope } from "./useScheduleWidget";

export default function ScheduleCreateWidgetButton({
    title,
    schw,
    appName,
}: {
    title: string,
    schw: number,
    appName: AppName,
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
                app: appName,
            };
        }}
        cud="C"
    />;
}