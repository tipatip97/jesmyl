import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import HumanFace from "../people/HumanFace";
import { HumanListComponentProps } from "../people/People.model";
import LeaderGroupMore from "./GroupMore";
import useLeaderGroups from "./useGroups";

export default function TheLeaderGroup(props: HumanListComponentProps) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { cgroup } = useLeaderGroups();

  return (
    <PhaseLiderContainer
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
            return <HumanFace key={`humani ${humani}`} human={human} />;
          })}
        </div>
      }
    />
  );
}
