import useExer from "../../../../../complect/exer/useExer";
import { PhaseContainerProps } from "../../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { cmExer } from "../../Cm.store";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./PhaseCmEditorContainer.scss";

export default function PhaseCmEditorContainer(props: PhaseContainerProps) {
  return <PhaseCmContainer
    {...props}
    topClass={`phase-cm-editor-container ${props.topClass || ''}`}
    head={<>{props.head}{useExer(cmExer).lookIcon}</>}
  />;
}
