import PhaseContainerConfigurer from "../../../../complect/phase-container/PhaseContainerConfigurer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { usePrinterNavConfigurer } from "../usePrinterNav";

export default function PhasePrinterContainer(props: PhaseContainerProps) {
  const { goBack } = usePrinterNavConfigurer();
  return <PhaseContainerConfigurer {...props} goBack={goBack} />;
}
