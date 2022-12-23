import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { useSpyNavConfigurer } from "../useSpyNav";

export default function PhaseSpyContainer(props: PhaseContainerProps) {
  const { goBack } = useSpyNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
