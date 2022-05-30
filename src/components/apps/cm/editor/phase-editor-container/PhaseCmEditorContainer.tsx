import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import { PhaseContainerProps } from "../../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { cmExer } from "../../Cm.store";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./PhaseCmEditorContainer.scss";

export default function PhaseCmEditorContainer(
  props: PhaseContainerProps & { onMoreClick?: () => void }
) {
  const { lookIcon } = useExer(cmExer);

  return (
    <PhaseCmContainer
      {...props}
      topClass={`phase-cm-editor-container ${props.topClass} ${
        lookIcon ? "with-changes" : ""
      }`}
      head={
        <div className={`flex ${props.headClass}`}>
          {props.head}
          {lookIcon}
          {props.onMoreClick ? (
            <EvaIcon
              name="more-vertical-outline"
              className="action-button"
              onClick={props.onMoreClick}
            />
          ) : null}
        </div>
      }
    />
  );
}
