import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import useAdminNav from "../useAdminNav";

export default function PhaseAdminContainer(props: PhaseContainerProps) {
  const { goBack } = useAdminNav();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
