import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../../../complect/phase-container/PhaseContainerConfigurer.model';
import useCmNav from '../../base/useCmNav';

export default function PhaseCmContainer(props: PhaseContainerProps) {
  const { goBack } = useCmNav();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
