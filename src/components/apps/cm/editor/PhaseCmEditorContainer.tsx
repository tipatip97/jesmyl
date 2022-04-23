import useExer from "../../../../complect/exer/useExer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { cmExer } from "../Cm.store";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";

export default function PhaseCmEditorContainer(props: PhaseContainerProps) {
  const { sendIcon } = useExer(cmExer);
  return <PhaseCmContainer {...props} head={<div className="flex">{sendIcon}{props.head}</div>} />;
}
