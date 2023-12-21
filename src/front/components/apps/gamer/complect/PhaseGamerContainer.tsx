import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../../complect/phase-container/PhaseContainerConfigurer.model';
import useGamerNav from '../useGamerNav';

export default function PhaseGamerContainer(props: PhaseContainerProps) {
  const { goBack } = useGamerNav();
  return (
    <PhaseContainerConfigurer
      {...props}
      goBack={goBack}
    />
  );
}
