import { useMemo, useState } from "react";
import LoadIndicatedContent from "../../../../../complect/load-indicated-content/LoadIndicatedContent";
import ComFace from "../../col/com/face/ComFace";
import { useCcat } from "../../col/useCcol";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import PhaseCmEditorContainerItem from "../phase-editor-container/PhaseCmEditorContainerItem";
import useEditCategory from "./useEditCategory";

export default function EditCategory() {
  const [ccat] = useCcat();
  const { rename, setTrack } = useEditCategory(ccat);
  const track = useMemo(() => JSON.stringify(ccat?.track), []);
  const [trackStr, setTrackStr] = useState(track);

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
            </PhaseCmEditorContainerItem>
          }
          <LoadIndicatedContent isLoading={!ccat.coms.length}>
            {ccat.coms.map((com) => (
              <ComFace
                key={`edit-category-com-list-com_${com.wid}`}
                com={com}
                importantOnClick={() => {}}
              />
            ))}
          </LoadIndicatedContent>
        </>
      }
    />
  );
}
