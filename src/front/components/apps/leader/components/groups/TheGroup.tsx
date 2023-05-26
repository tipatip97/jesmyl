import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import { LeaderCleans } from "../LeaderCleans";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import { HumanListComponentProps } from "../people/People.model";
import LeaderGroupFields from "./fields/Fields";
import GroupMemberMore from "./GroupMemberMore";
import LeaderGroupMore from "./GroupMore";
import useLeaderGroups from "./useGroups";

export default function TheLeaderGroup(props: HumanListComponentProps) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { cgroup, cgroupMembers, cgroupMentors } = useLeaderGroups();
  const { ccontext } = useLeaderContexts();

  return (
    <PhaseLeaderContainer
      topClass=""
      headTitle={`Группа${cgroup ? ` - ${cgroup.name}` : ""}`}
      onMoreClick={() =>
        cgroup && openAbsoluteBottomPopup(<LeaderGroupMore group={cgroup} />)
      }
      content={
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
                onMoreClick={() =>
                  openAbsoluteBottomPopup((close) => (
                    <GroupMemberMore
                      fields={LeaderCleans.getContextFieldValues(ccontext, cgroup?.fields)}
                      member={human}
                      close={close}
                    />
                  ))
                }
              />
            );
          })}
          {!ccontext?.blanks?.length || <LeaderGroupFields />}
        </div>
      }
    />
  );
}
