import { useBottomPopup } from "../../../complect/absolute-popup/useBottomPopup";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import { useLeaderCcontext } from "./components/contexts/useContexts";
import { CurrentContextSelectPage } from "./components/CurrentContextSelectPage";
import { GeneralMoreContenter } from "./GeneralMore";
import "./Leader.scss";
import PhaseLeaderContainer from "./phase-container/PhaseLeaderContainer";
import useLeaderNav from "./useLeaderNav";

export default function LeaderGeneralPage() {
  const { goTo } = useLeaderNav();
  const [generalMoreNode, openGeneralMore] = useBottomPopup(GeneralMoreContenter);
  const ccontext = useLeaderCcontext();

  if (ccontext === undefined)
    return <CurrentContextSelectPage />;

  return (
    <PhaseLeaderContainer
      topClass="template-page-content"
      withoutBackButton
      headTitle={`Лидер - ${ccontext.name}`}
      onMoreClick={() => openGeneralMore()}
      content={<>
        {generalMoreNode}
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
      }
    />
  );
}
