import { ReactNode } from "react";
import { AppName } from "../../../app/App.model";
import useConnectionState from "../../../components/index/useConnectionState";
import PhaseContainerConfigurer from "../../phase-container/PhaseContainerConfigurer";
import { PhaseContainerConfigurerProps } from "../../phase-container/PhaseContainerConfigurer.model";
import StrongClipboardPicker from "../../strong-control/field/clipboard/Picker";
import ScheduleCreateWidgetButton from "./CreateButton";
import ScheduleWidget from "../ScheduleWidget";
import { IScheduleWidget } from "../ScheduleWidget.model";
import '../ScheduleWidget.scss';
import useScheduleWidget from "../useScheduleWidget";

export default function ScheduleWidgetPage(props: Omit<PhaseContainerConfigurerProps, 'content' | 'topClass'> & {
    schedulew: number,
    schedule?: IScheduleWidget,
    title: string,
    appName: AppName,
    altActionsNode?: ReactNode,
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
                ? <ScheduleWidget schedule={schedule} altActionsNode={props.altActionsNode} />
                : <ScheduleCreateWidgetButton
                    appName={props.appName}
                    title={props.title}
                    schw={props.schedulew}
                />
        }
    />;
}
