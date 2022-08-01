import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import useLeaderContexts from "./components/contexts/useContexts";
import GeneralMore from "./GeneralMore";
import "./Lider.scss";
import PhaseLiderContainer from "./phase-container/PhaseLiderContainer";
import useLiderNav from "./useLiderNav";

export default function GeneralPage() {
  const { goTo } = useLiderNav();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      withoutBackButton
      headTitle={`Лидер${ccontext ? ` - ${ccontext.name}` : ""}`}
      onMoreClick={() => openAbsoluteBottomPopup(<GeneralMore />)}
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
