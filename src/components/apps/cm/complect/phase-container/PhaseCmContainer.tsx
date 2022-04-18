import PhaseContainerConfigurer from "../../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../../complect/phase-container/PhaseContainerConfigurer.model";


export default function PhaseCmContainer(props: PhaseContainerProps) {
  return <PhaseContainerConfigurer {...props} appName="cm" />;
}
