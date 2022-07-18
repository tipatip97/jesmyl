import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { useLiderNavConfigurer } from "../useLiderNav";

export default function PhaseLiderContainer(props: PhaseContainerProps) {
  const { goBack } = useLiderNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
