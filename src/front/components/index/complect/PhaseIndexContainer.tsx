import PhaseContainerConfigurer from '../../../complect/phase-container/PhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../complect/phase-container/PhaseContainerConfigurer.model';
import useIndexNav from './useIndexNav';

export default function PhaseIndexContainer(props: PhaseContainerProps) {
  const { goBack } = useIndexNav();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
