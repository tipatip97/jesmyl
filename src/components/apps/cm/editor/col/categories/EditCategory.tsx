import { useMemo, useState } from "react";
import LoadIndicatedContent from "../../../../../../complect/load-indicated-content/LoadIndicatedContent";
import { useEditableCcat } from "./useEditableCcat";
import ComFace from "../../../col/com/face/ComFace";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import EditContainerCorrectsInformer from "../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import useEditCategory from "./useEditCategory";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import { catTrackers } from "../../../col/cat/Cat.complect";

export default function EditCategory() {
  const ccat = useEditableCcat();
  const { rename, setKind } = useEditCategory(ccat);
  const [isShowComs, setIsShowComs] = useState(false);

  if (!ccat) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-category"
      headClass="flex between"
      headTitle={`Категория - ${ccat.initialName}`}
      content={
        <>
          {
            <EditContainerCorrectsInformer
              uniq="catRename"
              corrects={ccat?.corrects.catRename}
            >
              Название:
              <input
                value={ccat?.name}
                onChange={(event) => rename(event.target.value)}
              />
            </EditContainerCorrectsInformer>
          }
          {
            <EditContainerCorrectsInformer
              uniq="catSetKind"
              access="catSetKind"
              corrects={ccat?.corrects.catSetKind}
            >
              <div className="flex between">
                <span>Тип:</span>
                <Dropdown
                  id={ccat.kind}
                  items={catTrackers}
                  onSelect={(kind) => setKind(kind)}
                />
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
                  com={com.native}
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
