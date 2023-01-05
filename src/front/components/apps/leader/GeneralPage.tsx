import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import useLeaderContexts from "./components/contexts/useContexts";
import GeneralMore from "./GeneralMore";
import "./Leader.scss";
import PhaseLeaderContainer from "./phase-container/PhaseLeaderContainer";
import useLeaderNav from "./useLeaderNav";

export default function GeneralPage() {
  const { goTo } = useLeaderNav();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();

  return (
    <PhaseLeaderContainer
      topClass="template-page-content"
      withoutBackButton
      headTitle={`Лидер${ccontext ? ` - ${ccontext.name}` : ""}`}
      onMoreClick={() =>
        openAbsoluteBottomPopup((close) => <GeneralMore close={close} />)
      }
      content={
        ccontext ? (
          <>
            <BrutalItem
              title="Участники"
              icon="person-outline"
              onClick={() => {
                goTo("memberList");
              }}
            />
            <BrutalItem
              title="Лидеры"
              icon="person-outline"
              onClick={() => {
                goTo("leaderList");
              }}
            />
            <BrutalItem
              title="Группы"
              icon="people-outline"
              onClick={() => {
                goTo("groupList");
              }}
            />
            <BrutalItem
              title="Игры"
              icon="cube-outline"
              onClick={() => {
                goTo("games");
              }}
            />
          </>
        ) : (
          <div className="error-message padding-giant-gap flex center">
            Необходимо выбрать контекст
          </div>
        )
      }
    />
  );
}
