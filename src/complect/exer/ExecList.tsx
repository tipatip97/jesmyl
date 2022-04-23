import { useDispatch } from "react-redux";
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

  return (
    <div className="full-container flex center">
      {execs.map((exec) => {
        return <div key={exec.scope}>{exec.title}</div>;
      })}
      
      <EvaIcon
        name="paper-plane-outline"
        className="action-button pointer"
        onClick={() => exer.load(() => dispatch(riseUpExerUpdates()))}
      />
    </div>
  );
}
