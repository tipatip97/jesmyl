import { useDispatch } from "react-redux";
import EditContainerCorrectsInformer from "../../components/apps/cm/editor/edit-container-corrects-informer/EditContainerCorrectsInformer";
import { riseUpExerUpdates } from "../Complect.store";
import EvaIcon from "../eva-icon/EvaIcon";
import { Exer } from "./Exer";
import { ExerStorage } from "./Exer.model";
import useExer from "./useExer";

export default function ExecList<Storage extends ExerStorage>({
  exer,
}: {
  exer: Exer<Storage>;
}) {
  const dispatch = useDispatch();
  const { execs } = useExer(exer);
  const isDisabledSendButton = execs.some(
    (exec) => exec.corrects?.errors?.length
  );

  return (
    <div className="full-container flex center column">
      {execs.map((exec) => {
        return (
          <EditContainerCorrectsInformer
            key={"exec-list*" + exec.scope}
            corrects={exec?.corrects}
          >
            {exec.title}
          </EditContainerCorrectsInformer>
        );
      })}

      <EvaIcon
        name="paper-plane-outline"
        className={`action-button pointer ${
          isDisabledSendButton ? "disabled" : ""
        }`}
        onClick={() => exer.load(() => dispatch(riseUpExerUpdates()))}
      />
    </div>
  );
}
