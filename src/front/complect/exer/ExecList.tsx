import { useState } from 'react';
import { IconSentStrokeRounded } from '../../complect/the-icon/icons/sent';
import EditContainerCorrectsInformer from '../../components/apps/cm/editor/edit-container-corrects-informer/EditContainerCorrectsInformer';
import LoadIndicatedContent from '../load-indicated-content/LoadIndicatedContent';
import useToast from '../modal/useToast';
import { Exer } from './Exer';
import { ExerStorage } from './Exer.model';
import { useExerExec, useRiseUpExerUpdates } from './hooks/useExer';

export default function ExecList<Storage extends ExerStorage>({
  exer,
  onLoad,
}: {
  exer: Exer<Storage>;
  onLoad: () => void;
}) {
  const riseUpExerUpdates = useRiseUpExerUpdates();
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
                {
                  <div
                    className="white-pre-line"
                    dangerouslySetInnerHTML={{ __html: exec.title }}
                  />
                }
              </EditContainerCorrectsInformer>
            );
          })}

          <IconSentStrokeRounded
            className={`action-button pointer margin-giant-gap-v ${isDisabledSendButton ? 'disabled' : ''}`}
            onClick={() => {
              setReadyState(0);
              exer
                .load()
                .then(() => {
                  riseUpExerUpdates(1);
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
