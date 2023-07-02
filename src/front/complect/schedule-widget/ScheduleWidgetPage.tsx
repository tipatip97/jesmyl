import { AppName } from "../../app/App.model";
import useConnectionState from "../../components/index/useConnectionState";
import PhaseContainerConfigurer from "../phase-container/PhaseContainerConfigurer";
import { PhaseContainerConfigurerProps } from "../phase-container/PhaseContainerConfigurer.model";
import StrongClipboardPicker from "../strong-control/field/clipboard/Picker";
import ScheduleCreateWidgetButton from "./CreateWidgetButton";
import ScheduleWidget from "./ScheduleWidget";
import './ScheduleWidget.scss';
import useScheduleWidget from "./useScheduleWidget";

export default function ScheduleWidgetPage(props: Omit<PhaseContainerConfigurerProps, 'content' | 'topClass'> & {
    schedulew: number,
    title: string,
    appName: AppName,
}) {
    const { schedule } = useScheduleWidget(props.schedulew);
    const connectionNode = useConnectionState();

    return <PhaseContainerConfigurer
        {...props}
        topClass="ScheduleWidgetPage"
        headTitle={props.title}
        head={<span className="flex flex-gap margin-gap">
            {connectionNode}
            <StrongClipboardPicker />
            {props.head}
        </span>}
        content={
            schedule
                ? <ScheduleWidget schedule={schedule} />
                : <ScheduleCreateWidgetButton
                    appName={props.appName}
                    title={props.title}
                    schw={props.schedulew}
                />
        }
    />;
}
