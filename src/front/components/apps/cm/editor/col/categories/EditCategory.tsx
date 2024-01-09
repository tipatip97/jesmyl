import { useState } from 'react';
import Dropdown from '../../../../../../complect/dropdown/Dropdown';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import KeyboardInput from '../../../../../../complect/keyboard/KeyboardInput';
import LoadIndicatedContent from '../../../../../../complect/load-indicated-content/LoadIndicatedContent';
import { catTrackers } from '../../../col/cat/Cat.complect';
import ComFace from '../../../col/com/face/ComFace';
import EditContainerCorrectsInformer from '../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import PhaseCmEditorContainer from '../../phase-editor-container/PhaseCmEditorContainer';
import { useEditableCcat } from './useEditableCcat';

export default function EditCategory() {
  const ccat = useEditableCcat();
  const [isShowComs, setIsShowComs] = useState(false);
  const [isCleared, setCleared] = useState(false);
  const exec = useExerExec();

  if (!ccat) return null;

  return (
    <PhaseCmEditorContainer
      className="edit-category"
      headTitle={`Категория - ${ccat.initialName}`}
      content={
        <>
          {
            <EditContainerCorrectsInformer corrects={ccat?.col.corrects.name}>
              <div className="flex">
                <div className="margin-gap-h">Название:</div>
                <KeyboardInput
                  value={ccat.name}
                  onChange={value => exec(ccat.rename(value, exec))}
                />
              </div>
            </EditContainerCorrectsInformer>
          }
          {
            <EditContainerCorrectsInformer
              access="catSetKind"
              corrects={ccat?.col.corrects.catSetKind}
            >
              <div className="flex between">
                <span>Тип:</span>
                <div className="half-width">
                  <Dropdown
                    id={ccat.kind}
                    items={catTrackers}
                    onSelect={kind => exec(ccat.setKind(kind, exec))}
                  />
                </div>
                {(ccat.kind !== 'list' && ccat.coms.length > 0) || isCleared ? (
                  <div
                    className="pointer"
                    onClick={() => {
                      exec(ccat.clearStack(!isCleared));
                      setCleared(!isCleared);
                    }}
                  >
                    {isCleared ? 'Восстановить список' : 'Очистить список'}
                  </div>
                ) : null}
              </div>
              <div
                className="pointer"
                onClick={() => setIsShowComs(!isShowComs)}
              >
                {isShowComs ? ' Скрыть' : ' Показать'} список песен {ccat.coms.length}
              </div>
            </EditContainerCorrectsInformer>
          }
          {isShowComs ? (
            <LoadIndicatedContent isLoading={!ccat.coms.length}>
              {ccat.coms.map(com => (
                <ComFace
                  key={`edit-category-com-list-com_${com.wid}`}
                  com={com}
                  importantOnClick={() => {}}
                />
              ))}
            </LoadIndicatedContent>
          ) : null}
        </>
      }
    />
  );
}
