import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import useLeaderContexts from "../contexts/useContexts";
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
      contentClass="margin-gap"
      content={
        <>
          {ccontext?.groups?.map((group, groupi) => {
            return <GroupFace key={`groupi-${groupi}`} group={group} />;
          })}
        </>
      }
    />
  );
}
