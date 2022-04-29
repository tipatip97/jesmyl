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
          uniq="comRename"
          corrects={ccom?.corrects.comRename}
        >
          Название:
          <input
            value={ccom?.name}
            onChange={(event) => rename(event.target.value)}
          />
        </EditContainerCorrectsInformer>
      }
    </>
  );
}
