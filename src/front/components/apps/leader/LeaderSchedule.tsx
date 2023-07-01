import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import ScheduleWidgetPage from "../../../complect/schedule-widget/ScheduleWidgetPage";
import GeneralMore from "./GeneralMore";
import "./Leader.scss";
import { CurrentContextSelectPage } from "./components/CurrentContextSelectPage";
import { useLeaderCcontext } from "./components/contexts/useContexts";
import useLeaderNav from "./useLeaderNav";

export default function LeaderSchedule() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const ccontext = useLeaderCcontext();
  const { goBack } = useLeaderNav();

  return ccontext === undefined
    ? <CurrentContextSelectPage />
    : <ScheduleWidgetPage
      appName="leader"
      goBack={goBack}
      schedulew={ccontext.w}
      onMoreClick={() => openAbsoluteBottomPopup((close) => <GeneralMore close={close} />)}
      title={ccontext.name}
    />
}
