import { useCcat } from "../../col/useCcol";
import PhaseCmEditorContainer from "../PhaseCmEditorContainer";
import useEditCategory from "./useEditCategory";

export default function EditCategory() {
  const [ccat] = useCcat();
  const { rename } = useEditCategory(ccat);

  if (!ccat) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-categories"
      headClass="flex between"
      headTitle="Категория"
      content={
        <>
          {
            <div>
              Название:
              <input
                value={ccat?.name}
                onChange={(event) => rename(event.target.value)}
              />
            </div>
          }
        </>
      }
    />
  );
}
