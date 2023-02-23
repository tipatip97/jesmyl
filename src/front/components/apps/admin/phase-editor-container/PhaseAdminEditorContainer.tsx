
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../complect/exer/useExer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { adminExer } from "../adminExer";
import PhaseAdminContainer from "../complect/PhaseAdmContainer";
import "./PhaseAdminEditorContainer.scss";

export default function PhaseAdminEditorContainer(
  props: PhaseContainerProps & { onMoreClick?: () => void }
) {
  const { lookIcon } = useExer(adminExer);

  return (
    <PhaseAdminContainer
      {...props}
      topClass={`phase-admin-editor-container ${props.topClass}`}
      headClass="flex between"
      head={
        <div>
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
