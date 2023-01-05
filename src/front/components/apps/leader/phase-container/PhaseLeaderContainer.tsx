import EditablePhaseContainerConfigurer from "../../../../complect/phase-container/EditablePhaseContainerConfigurer";
import { EditablePhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { leaderExer } from "../Leader.store";
import { useLeaderNavConfigurer } from "../useLeaderNav";

export default function PhaseLeaderContainer(
  props: EditablePhaseContainerProps
) {
  const { goBack } = useLeaderNavConfigurer();

  return (
    <EditablePhaseContainerConfigurer
      {...props}
      exer={leaderExer}
      goBack={goBack}
    />
  );
}
