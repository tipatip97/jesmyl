import useExer from "../../../../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../../../../complect/keyboard/useKeyboard";
import { cmExer } from "../../../../../Cm.store";
import TheCom from "../../../../../col/com/TheCom";
import EditContainerCorrectsInformer from "../../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCcom } from "../../useEditableCcom";

export default function EditableCompositionMain() {
  const ccom = useEditableCcom();
  const { exec } = useExer(cmExer);
  const aboutInput = useKeyboard();

  if (!ccom) return null;
  const [input] = aboutInput(`EditableCompositionMain ${ccom.wid}`, {
    initialValue: ccom?.name,
    className: "full-width",
    onChange: (value) => exec(ccom?.rename(value, exec)),
  });

  return (
    <>
      {
        <EditContainerCorrectsInformer
          corrects={ccom?.corrects.comRename}
          className="flex"
        >
          <div className="margin-gap-h">Название</div>
          {input}
        </EditContainerCorrectsInformer>
      }
      <TheCom com={ccom} hideInvisibles />
    </>
  );
}
