import useConnectionState from "../../components/index/useConnectionState";
import PhaseContainerConfigurer from "../phase-container/PhaseContainerConfigurer";
import { PhaseContainerConfigurerProps } from "../phase-container/PhaseContainerConfigurer.model";
import StrongClipboardPicker from "../strong-control/field/clipboard/Picker";
import ScheduleWidget from "./ScheduleWidget";
import './ScheduleWidget.scss';
import { useSchedules } from "./useScheduleWidget";

export default function ScheduleWidgetListPage(props: Omit<PhaseContainerConfigurerProps, 'content' | 'topClass'> & {}) {
    const schedules = useSchedules();
    const connectionNode = useConnectionState();

    return <PhaseContainerConfigurer
        {...props}
        topClass="ScheduleWidgetPage ScheduleWidgetListPage"
        head={<span className="flex flex-gap margin-gap">
            {connectionNode}
            <StrongClipboardPicker />
            {props.head}
        </span>}
        content={<>
            {schedules.list.map((schedule) => {
                if (!schedule.start) return null;
                return <ScheduleWidget key={schedule.w} schedule={schedule} />;
            })}
        </>}
    />;
}
