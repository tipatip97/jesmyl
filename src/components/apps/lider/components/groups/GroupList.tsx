import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { liderExer } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import useLeaderContexts from "../contexts/useContexts";
import GroupFieldBlanks from "./fields/Blanks";
import GroupFace from "./GroupFace";
import LeaderGroupsMore from "./GroupsMore";

export default function GroupList() {
  const { ccontext } = useLeaderContexts();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseLiderContainer
      topClass=""
      headTitle={`Группы${ccontext ? ` - ${ccontext.name}` : ""}`}
      onMoreClick={() => openAbsoluteBottomPopup(<LeaderGroupsMore />)}
      contentClass="padding-big-gap"
      content={
        <>
          {ccontext?.groups?.map((group, groupi) => {
            return <GroupFace key={`groupi-${groupi}`} group={group} />;
          })}
          {liderExer.actionAccessedOrNull("addContextGroupFieldBlanks") && (
            <GroupFieldBlanks />
          )}
        </>
      }
    />
  );
}
