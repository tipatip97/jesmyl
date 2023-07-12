import useAuth from "../../../components/index/useAuth";
import useConnectionState from "../../../components/index/useConnectionState";
import EvaButton from "../../eva-icon/EvaButton";
import PhaseContainerConfigurer from "../../phase-container/PhaseContainerConfigurer";
import { PhaseContainerConfigurerProps } from "../../phase-container/PhaseContainerConfigurer.model";
import StrongClipboardPicker from "../../strong-control/field/clipboard/Picker";
import ScheduleCreateWidgetButton from "./CreateButton";
import ScheduleWidget from "../ScheduleWidget";
import { IScheduleWidget } from "../ScheduleWidget.model";
import '../ScheduleWidget.scss';
import { useSchedules } from "../useScheduleWidget";

export default function ScheduleWidgetListPage(props: Omit<PhaseContainerConfigurerProps, 'content' | 'topClass'> & {
    onScheduleObserve: (schedule: IScheduleWidget) => void,
}) {
    const schedules = useSchedules();
    const connectionNode = useConnectionState();
    const auth = useAuth();

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
                return <ScheduleWidget
                    key={schedule.w}
                    schedule={schedule}
                    altActionsNode={<EvaButton
                        name="bell-outline"
                        onClick={() => props.onScheduleObserve(schedule)}
                    />}
                />;
            })}
            {auth && auth.level > 29
                && <ScheduleCreateWidgetButton
                    appName="index"
                    schw={Date.now()}
                    title=""
                />}
        </>}
    />;
}
