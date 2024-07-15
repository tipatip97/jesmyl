import EditablePhaseContainerConfigurer from '../../../../complect/phase-container/EditablePhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../../complect/phase-container/PhaseContainerConfigurer.model';
import { leaderExer } from '../leaderExer';
import useLeaderNav from '../useLeaderNav';

export default function PhaseLeaderContainer(props: PhaseContainerProps) {
  const { goBack } = useLeaderNav();

  return (
    <EditablePhaseContainerConfigurer
      {...props}
      exer={leaderExer}
      goBack={goBack}
    />
  );
}
