import { useDispatch, useSelector } from 'react-redux';
import { riseUpExerUpdates } from '../Complect.store';
import EvaIcon from '../eva-icon/EvaIcon';
import useFullscreenContent from '../fullscreen-content/useFullscreenContent';
import { RootState } from '../../shared/store';
import './Exec.scss';
import ExecList from './ExecList';
import { Exer } from './Exer';
import { ExerStorage } from './Exer.model';

const numExerUpdatesSelector = (state: RootState) => state.complect.numExerUpdates;

export default function useExer<Storage extends ExerStorage>(exer: Exer<Storage>) {
  const dispatch = useDispatch();
  useSelector(numExerUpdatesSelector);
  const { openFullscreenContent, closeFullscreenContent } = useFullscreenContent();

  return {
    exec: <Value,>(value?: Value) => {
      dispatch(riseUpExerUpdates());
      return value;
    },
    execs: exer.execs,
    lookIcon: exer.execs.length ? (
      <span
        className="show-execs-icon"
        execs-count={exer.execs.length}
      >
        <EvaIcon
          name="eye-outline"
          className="action-button pointer"
          onClick={() =>
            openFullscreenContent(
              <ExecList
                exer={exer}
                onLoad={() => closeFullscreenContent()}
              />,
            )
          }
        />
      </span>
    ) : null,
  };
}
