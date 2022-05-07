import { useState } from "react";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import LoadIndicatedContent from "../../../../../../complect/load-indicated-content/LoadIndicatedContent";
import { catTrackers } from "../../../col/cat/Cat.complect";
import ComFace from "../../../col/com/face/ComFace";
import EditContainerCorrectsInformer from "../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { useEditableCcat } from "./useEditableCcat";
import useEditCategory from "./useEditCategory";

export default function EditCategory() {
  const ccat = useEditableCcat();
  const { rename, setKind, clearStack } = useEditCategory(ccat);
  const [isShowComs, setIsShowComs] = useState(false);
  const [isCleared, setCleared] = useState(false);

  if (!ccat) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-category"
      headClass="flex between"
      headTitle={`Категория - ${ccat.initialName}`}
      content={
        <>
          {
            <EditContainerCorrectsInformer corrects={ccat?.col.corrects.catRename}>
              Название:
              <input
                value={ccat?.name}
                onChange={(event) => rename(event.target.value)}
              />
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
                    onSelect={(kind) => setKind(kind)}
                  />
                </div>
                {(ccat.kind !== "list" && ccat.coms.length > 0) || isCleared ? (
                  <div
                    className="pointer"
                    onClick={() => {
                      clearStack(!isCleared);
                      setCleared(!isCleared);
                    }}
                  >
                    {isCleared ? "Восстановить список" : "Очистить список"}
                  </div>
                ) : null}
              </div>
              <div
                className="pointer"
                onClick={() => setIsShowComs(!isShowComs)}
              >
                {isShowComs ? " Скрыть" : " Показать"} список песен{" "}
                {ccat.coms.length}
              </div>
            </EditContainerCorrectsInformer>
          }
          {isShowComs ? (
            <LoadIndicatedContent isLoading={!ccat.coms.length}>
              {ccat.coms.map((com) => (
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
