import { useBottomPopup } from '../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import PhaseContainerConfigurer from '../../../complect/phase-container/PhaseContainerConfigurer';
import ScheduleWidgetPage from '../../../complect/schedule-widget/general/Page';
import { GeneralMoreContenter } from './GeneralMore';
import './Leader.scss';
import { CurrentContextSelectPage } from './components/CurrentContextSelectPage';
import { useLeaderCcontext } from './components/contexts/useContexts';
import useLeaderNav from './useLeaderNav';

export default function LeaderSchedule() {
  const [generalMoreNode, openGeneralMore] = useBottomPopup(GeneralMoreContenter);
  const ccontext = useLeaderCcontext();
  const { goBack, nav } = useLeaderNav();

  if (!nav.nav.useIsCanRead?.(ccontext?.w) && ccontext)
    return (
      <PhaseContainerConfigurer
        goBack={goBack}
        headTitle="Лидер"
        withoutBackButton
        className=""
        onMoreClick={openGeneralMore}
        content={
          <>
            {generalMoreNode}
            <div className="flex center margin-giant-gap-v color--ko">Контент не доступен</div>
          </>
        }
      />
    );

  if (ccontext === undefined) return <CurrentContextSelectPage />;

  return (
    <>
      {generalMoreNode}
      <ScheduleWidgetPage
        appName="leader"
        goBack={goBack}
        withoutBackButton
        schedulew={ccontext.w}
        onMoreClick={openGeneralMore}
        headTitle={ccontext.name}
        title={ccontext.name}
      />
    </>
  );
}
