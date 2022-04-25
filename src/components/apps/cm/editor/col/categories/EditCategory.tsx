import { useMemo, useState } from "react";
import LoadIndicatedContent from "../../../../../../complect/load-indicated-content/LoadIndicatedContent";
import { useEditableCcat } from "./useEditableCcat";
import ComFace from "../../../col/com/face/ComFace";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import PhaseCmEditorContainerItem from "../../phase-editor-container/PhaseCmEditorContainerItem";
import useEditCategory from "./useEditCategory";

export default function EditCategory() {
  const ccat = useEditableCcat();
  const { rename, setTrack } = useEditCategory(ccat);
  const track = useMemo(() => JSON.stringify(ccat?.native.track), [ccat]);
  const [trackStr, setTrackStr] = useState(track);
  const [isShowComs, setIsShowComs] = useState(false);

  if (!ccat) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-categories"
      headClass="flex between"
      headTitle={`Категория - ${ccat.initialName}`}
      content={
        <>
          {
            <PhaseCmEditorContainerItem
              action="catRename"
              corrects={ccat?.corrects.catRename}
            >
              Название:
              <input
                value={ccat?.name}
                onChange={(event) => rename(event.target.value)}
              />
            </PhaseCmEditorContainerItem>
          }
          {
            <PhaseCmEditorContainerItem
              action="catSetTrack"
              corrects={ccat?.corrects.catSetTrack}
            >
              Трек:
              <input
                value={trackStr}
                onChange={(event) => {
                  setTrack(event.target.value);
                  setTrackStr(event.target.value);
                }}
              />
              <div
                className="pointer"
                onClick={() => setIsShowComs(!isShowComs)}
              >
                {isShowComs ? " Скрыть" : " Показать"} список песен
              </div>
            </PhaseCmEditorContainerItem>
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
