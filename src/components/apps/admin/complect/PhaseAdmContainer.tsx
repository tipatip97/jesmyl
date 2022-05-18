import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { useAdminNavConfigurer } from "../useAdminNav";

export default function PhaseAdminContainer(props: PhaseContainerProps) {
  const { goBack } = useAdminNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
