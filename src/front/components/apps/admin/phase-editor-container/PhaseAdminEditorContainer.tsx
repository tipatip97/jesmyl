
import useExer from "../../../../complect/exer/useExer";
import { PhaseContainerProps } from "../../../../complect/phase-container/PhaseContainerConfigurer.model";
import { adminExer } from "../adminExer";
import PhaseAdminContainer from "../complect/PhaseAdmContainer";
import "./PhaseAdminEditorContainer.scss";

export default function PhaseAdminEditorContainer(props: PhaseContainerProps) {
  return <PhaseAdminContainer
    {...props}
    topClass={`phase-admin-editor-container ${props.topClass}`}
    head={<>{props.head}{useExer(adminExer).lookIcon}</>}
  />;
}
