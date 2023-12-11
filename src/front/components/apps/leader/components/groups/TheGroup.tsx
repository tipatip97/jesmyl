import { useState } from "react";
import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import { LeaderCleans } from "../LeaderCleans";
import useLeaderContext from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import GroupMemberMore from "./GroupMemberMore";
import { LeaderGroupMoreContenter } from "./GroupMore";
import LeaderGroupFields from "./fields/Fields";
import useLeaderGroups from "./useGroups";

export default function TheLeaderGroup() {
  const { cgroup, cgroupMembers, cgroupMentors } = useLeaderGroups();
  const [groupMoreNode, openGroupMore] = useBottomPopup(LeaderGroupMoreContenter, { group: cgroup });
  const [memberw, setMemberw] = useState(0);
  const { ccontext, humans } = useLeaderContext();
  const [memberMoreNode, openMemberMore] = useBottomPopup((close, prepare) => {
    if (memberw === 0) return null;
    const human = humans?.find(human => human.w === memberw);
    if (human === undefined) return null;

    return <GroupMemberMore
      fields={LeaderCleans.getContextFieldValues(ccontext, cgroup?.fields)}
      member={human}
      close={close}
      prepare={prepare}
    />
  });

  return (
    <PhaseLeaderContainer
      className=""
      headTitle={`Группа${cgroup ? ` - ${cgroup.name}` : ""}`}
      onMoreClick={cgroup && openGroupMore}
      content={<>
        {memberMoreNode}
        {groupMoreNode}
        <div className="margin-big-gap">
          <h2>Лидеры</h2>
          {cgroupMentors.map((human, humani) => {
            return <HumanFace key={humani} human={human} />;
          })}
          <h2>Участники</h2>
          {cgroupMembers.map((human, humani) => {
            return (
              <HumanFace
                key={humani}
                human={human}
                onMoreClick={() => {
                  setMemberw(human.w);
                  openMemberMore();
                }}
              />
            );
          })}
          {!ccontext?.blanks?.length || <LeaderGroupFields />}
        </div>
      </>}
    />
  );
}
