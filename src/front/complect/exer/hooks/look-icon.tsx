import EvaIcon from '../../eva-icon/EvaIcon';
import useFullContent from '../../fullscreen-content/useFullContent';
import ExecList from '../ExecList';
import { Exer } from '../Exer';
import { ExerStorage } from '../Exer.model';

export const useShowExerLookIcon = <Storage extends ExerStorage>(exer: Exer<Storage>) => {
  const [fulContentNode, openFullContent] = useFullContent(close => {
    return (
      <ExecList
        exer={exer}
        onLoad={close}
      />
    );
  });

  return (
    <>
      {fulContentNode}
      {!exer.execs.length || (
        <span
          className="show-execs-icon"
          execs-count={exer.execs.length}
        >
          <EvaIcon
            name="eye-outline"
            className="action-button pointer"
            onClick={() => openFullContent()}
          />
        </span>
      )}
    </>
  );
};
