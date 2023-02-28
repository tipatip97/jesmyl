import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { useGamerNavConfigurer } from "../useGamerNav";

export default function PhaseGamerContainer(props: PhaseContainerProps) {
  const { goBack } = useGamerNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
