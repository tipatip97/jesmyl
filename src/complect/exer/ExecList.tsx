import { useState } from "react";
import { useDispatch } from "react-redux";
import EditContainerCorrectsInformer from "../../components/apps/cm/editor/edit-container-corrects-informer/EditContainerCorrectsInformer";
import { riseUpExerUpdates } from "../Complect.store";
import EvaIcon from "../eva-icon/EvaIcon";
import LoadIndicatedContent from "../load-indicated-content/LoadIndicatedContent";
import { Exer } from "./Exer";
import { ExerStorage } from "./Exer.model";
import useExer from "./useExer";

export default function ExecList<Storage extends ExerStorage>({
  exer,
  onLoad
}: {
  exer: Exer<Storage>;
  onLoad: () => void;
}) {
  const dispatch = useDispatch();
  const { execs } = useExer(exer);
  const isDisabledSendButton = execs.some(
    (exec) => exec.corrects?.errors?.length
  );
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="full-container">
      <LoadIndicatedContent isLoading={isLoading} onLoaded={onLoad}>
        <div className="flex center column full-height">
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
            onClick={() => {
              setIsLoading(true);
              exer.load(() => {
                dispatch(riseUpExerUpdates());
                setIsLoading(false);
              });
            }}
          />
        </div>
      </LoadIndicatedContent>
    </div>
  );
}
