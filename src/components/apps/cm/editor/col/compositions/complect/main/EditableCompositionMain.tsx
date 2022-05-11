import TheCom from "../../../../../col/com/TheCom";
import EditContainerCorrectsInformer from "../../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCcom } from "../../useEditableCcom";
import useEditCompositionMain from "./useEditCompositionMain";

export default function EditableCompositionMain() {
  const ccom = useEditableCcom();
  const { rename } = useEditCompositionMain(ccom);

  if (!ccom) return null;

  return (
    <>
      {
        <EditContainerCorrectsInformer
          corrects={ccom?.corrects.comRename}
          className="flex"
        >
          <div className="margin-gap-h">Название</div>
          <input
            className="full-width"
            value={ccom?.name}
            onChange={(event) => rename(event.target.value)}
          />
        </EditContainerCorrectsInformer>
      }
      <TheCom com={ccom} hideInvisibles />
    </>
  );
}
