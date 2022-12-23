import PhaseContainerConfigurer from "../../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { useCmNavConfigurer } from "../../base/useCmNav";

export default function PhaseCmContainer(props: PhaseContainerProps) {
  const { goBack } = useCmNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
