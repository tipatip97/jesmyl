import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import useLeaderContexts from "./components/contexts/useContexts";
import GeneralMore from "./GeneralMore";
import "./Leader.scss";
import PhaseLeaderContainer from "./phase-container/PhaseLeaderContainer";
import useLeaderNav from "./useLeaderNav";

export default function GeneralPage() {
  const { goTo, setAppRouteData } = useLeaderNav();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext, contexts } = useLeaderContexts();

  return (
    <PhaseLeaderContainer
      topClass="template-page-content"
      withoutBackButton
      headTitle={`Лидер${ccontext ? ` - ${ccontext.name}` : ""}`}
      onMoreClick={() => openAbsoluteBottomPopup((close) => <GeneralMore close={close} />)}
      content={
        ccontext
          ? <>
            <BrutalItem
              title="Участники"
              icon="person-outline"
              onClick={() => goTo("memberList")}
            />
            <BrutalItem
              title="Лидеры"
              icon="person-outline"
              onClick={() => goTo("leaderList")}
            />
            <BrutalItem
              title="Группы"
              icon="people-outline"
              onClick={() => goTo("groupList")}
            />
            <BrutalItem
              title="Игры"
              icon="cube-outline"
              onClick={() => goTo("games")}
            />
          </>
          : <>
            <h2 className="padding-giant-gap-h flex center">Выбор контекста</h2>
            <div >
              {contexts?.list?.map(({ name, w }) => {
                return <BrutalItem
                  key={w}
                  title={name}
                  icon="calendar-outline"
                  onClick={() => setAppRouteData({ contextw: w })}
                />
              })}
            </div>
          </>
      }
    />
  );
}
