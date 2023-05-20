import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import useLeaderContexts from "../contexts/useContexts";
import GroupFieldBlanks from "./fields/Blanks";
import GroupFace from "./GroupFace";
import LeaderGroupsMore from "./GroupsMore";

export default function GroupList() {
  const { ccontext } = useLeaderContexts();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  if (!ccontext) return null;

  return (
    <PhaseLeaderContainer
      topClass=""
      headTitle={`Группы - ${ccontext.name}`}
      onMoreClick={() => openAbsoluteBottomPopup((close) => <LeaderGroupsMore close={close} />)}
      contentClass="padding-big-gap"
      content={
        <>
          {ccontext.groups?.map((group, groupi) => {
            return <GroupFace key={groupi} group={group} />;
          })}
          {leaderExer.actionAccessedOrNull("addContextGroupFieldBlanks") && (
            <GroupFieldBlanks />
          )}
        </>
      }
    />
  );
}
