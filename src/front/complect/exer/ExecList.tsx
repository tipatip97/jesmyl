import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditContainerCorrectsInformer from '../../components/apps/cm/editor/edit-container-corrects-informer/EditContainerCorrectsInformer';
import { riseUpExerUpdates } from '../Complect.store';
import EvaIcon from '../eva-icon/EvaIcon';
import LoadIndicatedContent from '../load-indicated-content/LoadIndicatedContent';
import useToast from '../modal/useToast';
import { Exer } from './Exer';
import { ExerStorage } from './Exer.model';
import { useExerExec } from './hooks/useExer';

export default function ExecList<Storage extends ExerStorage>({
  exer,
  onLoad,
}: {
  exer: Exer<Storage>;
  onLoad: () => void;
}) {
  const dispatch = useDispatch();
  const isDisabledSendButton = exer.execs.some(exec => exec.corrects?.errors?.length);
  const [readyState, setReadyState] = useState(1);
  const [toastNode, toast] = useToast();
  useExerExec();

  return (
    <>
      {toastNode}
      <LoadIndicatedContent
        isLoading={!readyState}
        onLoaded={() => readyState !== 2 && onLoad()}
      >
        <div className="flex center column">
          {exer.execs.map(exec => {
            return (
              <EditContainerCorrectsInformer
                key={`exec-list*${exec.scope}+${exec.id}`}
                corrects={exec?.corrects}
              >
                {exec.title}
              </EditContainerCorrectsInformer>
            );
          })}

          <EvaIcon
            name="paper-plane-outline"
            className={`action-button pointer ${isDisabledSendButton ? 'disabled' : ''}`}
            onClick={() => {
              setReadyState(0);
              exer
                .load()
                .then(() => {
                  dispatch(riseUpExerUpdates());
                  setReadyState(1);
                })
                .catch(error => {
                  toast(error, { mood: 'ko' });
                  setReadyState(2);
                });
            }}
          />
        </div>
      </LoadIndicatedContent>
    </>
  );
}
