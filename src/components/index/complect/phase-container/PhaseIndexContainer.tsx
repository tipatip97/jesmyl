import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";


export default function PhaseIndexContainer(props: PhaseContainerProps) {
  return <PhaseContainerConfigurer {...props} appName="index" />;
}
