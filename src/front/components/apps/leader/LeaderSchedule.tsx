import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import ScheduleCreateWidgetButton from "../../../complect/schedule-widget/ScheduleCreateWidgetButton";
import ScheduleWidget from "../../../complect/schedule-widget/ScheduleWidget";
import useScheduleWidget from "../../../complect/schedule-widget/useScheduleWidget";
import { leaderAppAtts } from "../../complect/appScheduleAttrsStorage";
import useConnectionState from "../../index/useConnectionState";
import GeneralMore from "./GeneralMore";
import "./Leader.scss";
import CurrentContextSelect from "./components/CurrentContextSelect";
import useLeaderContexts from "./components/contexts/useContexts";
import PhaseLeaderContainer from "./phase-container/PhaseLeaderContainer";

export default function LeaderSchedule() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();
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
          ? <ScheduleWidget schedule={schedule} expand appAtts={leaderAppAtts} />
          : <ScheduleCreateWidgetButton title={ccontext.name} schw={ccontext.w} />
        : <CurrentContextSelect />
    }
  />;
}
