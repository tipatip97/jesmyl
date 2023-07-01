import ScheduleWidgetListPage from "../../../complect/schedule-widget/ScheduleWidgetListPage";
import useIndexNav from "./useIndexNav";

export default function ScheduleWidgetAlarmScheduleList() {
    return <ScheduleWidgetListPage
        headTitle="События"
        goBack={useIndexNav().goBack}
    />;
}
