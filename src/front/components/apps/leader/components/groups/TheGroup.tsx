import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import { HumanListComponentProps } from "../people/People.model";
import LeaderGroupFields from "./fields/Fields";
import GroupMemberMore from "./GroupMemberMore";
import LeaderGroupMore from "./GroupMore";
import useLeaderGroups from "./useGroups";

export default function TheLeaderGroup(props: HumanListComponentProps) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { cgroup } = useLeaderGroups();
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
          {cgroup?.mentors.map((human, humani) => {
            return <HumanFace key={`humani ${humani}`} human={human} />;
          })}
          <h2>Участники</h2>
          {cgroup?.members.map((human, humani) => {
            return (
              <HumanFace
                key={`humani ${humani}`}
                human={human}
                onMoreClick={() =>
                  openAbsoluteBottomPopup((close) => (
                    <GroupMemberMore
                      group={cgroup}
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
