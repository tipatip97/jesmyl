import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import useAuth from "../../../../index/useAuth";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import { useLeaderCcontext } from "../contexts/useContexts";
import GroupFieldBlanks from "./fields/Blanks";
import GroupFace from "./GroupFace";
import { LeaderGroupsMore } from "./GroupsMore";

export default function GroupList() {
  const ccontext = useLeaderCcontext();
  const [groupsMoreNode, openGroupsMore] = useBottomPopup(LeaderGroupsMore);
  const auth = useAuth();

  if (!ccontext) return null;

  return (
    <PhaseLeaderContainer
      topClass=""
      headTitle={`Группы - ${ccontext.name}`}
      onMoreClick={() => openGroupsMore()}
      contentClass="padding-big-gap"
      content={
        <>
          {groupsMoreNode}
          {ccontext.groups?.map((group, groupi) => {
            return <GroupFace key={groupi} group={group} />;
          })}
          {leaderExer.actionAccessedOrNull("addContextGroupFieldBlanks", auth) && (
            <GroupFieldBlanks />
          )}
        </>
      }
    />
  );
}
