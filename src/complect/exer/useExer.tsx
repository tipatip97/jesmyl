import { useDispatch, useSelector } from "react-redux";
import { Exec } from "./Exec";
import { RootState } from "../../shared/store";
import { riseUpExerUpdates } from "../Complect.store";
import { Exer } from "./Exer";
import { ExerStorage } from "./Exer.model";
import EvaIcon from "../eva-icon/EvaIcon";
import useFullscreenContent from "../fullscreen-content/useFullscreenContent";
import ExecList from "./ExecList";
import "./Exec.scss";

export default function useExer<Storage extends ExerStorage>(
  exer: Exer<Storage>
) {
  const dispatch = useDispatch();
  useSelector((state: RootState) => state.complect.numExerUpdates);
  const { openFullscreenContent } = useFullscreenContent();

  return {
    exec: <Value,>(value?: Value) => {
      dispatch(riseUpExerUpdates());
      return value;
    },
    execs: exer.execs,
    sendIcon: exer.execs.length ? (
      <span className="show-execs-icon" execs-count={exer.execs.length}>
        <EvaIcon
          name="eye-outline"
          className="action-button pointer"
          onClick={() => openFullscreenContent(<ExecList exer={exer} />)}
        />
      </span>
    ) : null,
  };
}
