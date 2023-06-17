import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import ScheduleCreateWidgetButton from "../../../complect/schedule-widget/CreateWidgetButton";
import ScheduleWidget from "../../../complect/schedule-widget/ScheduleWidget";
import useScheduleWidget from "../../../complect/schedule-widget/useScheduleWidget";
import useConnectionState from "../../index/useConnectionState";
import GeneralMore from "./GeneralMore";
import "./Leader.scss";
import CurrentContextSelect from "./components/CurrentContextSelect";
import { useLeaderCcontext } from "./components/contexts/useContexts";
import PhaseLeaderContainer from "./phase-container/PhaseLeaderContainer";

export default function LeaderSchedule() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const ccontext = useLeaderCcontext();
  const { schedule } = useScheduleWidget(ccontext?.w);
  const connectionNode = useConnectionState();

  return <PhaseLeaderContainer
    topClass="template-page-content"
    withoutBackButton
    headTitle={`Расписание${ccontext ? ` - ${ccontext.name}` : ""}`}
    head={connectionNode}
    onMoreClick={() => openAbsoluteBottomPopup((close) => <GeneralMore close={close} />)}
    content={
      ccontext
        ? schedule
          ? <ScheduleWidget schedule={schedule} expand />
          : <ScheduleCreateWidgetButton
            appName="leader"
            title={ccontext.name}
            schw={ccontext.w}
          />
        : <CurrentContextSelect />
    }
  />;
}
