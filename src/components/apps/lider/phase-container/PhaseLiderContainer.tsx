import EditablePhaseContainerConfigurer from "../../../../complect/phase-container/EditablePhaseContainerConfigurer";
import { EditablePhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { liderExer } from "../Lider.store";
import { useLiderNavConfigurer } from "../useLiderNav";

export default function PhaseLiderContainer(
  props: EditablePhaseContainerProps
) {
  const { goBack } = useLiderNavConfigurer();

  return (
    <EditablePhaseContainerConfigurer
      {...props}
      exer={liderExer}
      goBack={goBack}
      isWithoutLookButton
    />
  );
}
