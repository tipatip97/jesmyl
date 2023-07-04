import { useBottomPopup } from "../../../complect/absolute-popup/useBottomPopup";
import ScheduleWidgetPage from "../../../complect/schedule-widget/ScheduleWidgetPage";
import { GeneralMoreContenter } from "./GeneralMore";
import "./Leader.scss";
import { CurrentContextSelectPage } from "./components/CurrentContextSelectPage";
import { useLeaderCcontext } from "./components/contexts/useContexts";
import useLeaderNav from "./useLeaderNav";

export default function LeaderSchedule() {
  const [generalMoreNode, openGeneralMore] = useBottomPopup(GeneralMoreContenter);
  const ccontext = useLeaderCcontext();
  const { goBack } = useLeaderNav();

  return ccontext === undefined
    ? <CurrentContextSelectPage />
    : <>
      {generalMoreNode}
      <ScheduleWidgetPage
        appName="leader"
        goBack={goBack}
        schedulew={ccontext.w}
        onMoreClick={() => openGeneralMore()}
        title={ccontext.name}
      />
    </>
}
