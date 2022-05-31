import useKeyboard from "../../../../../../../../complect/keyboard/useKeyboard";
import EditContainerCorrectsInformer from "../../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCols } from "../../../useEditableCols";
import { useEditableCcom } from "../../useEditableCcom";
import useEditCompositionCategoryBinds from "./useEditComposition";

export default function CategoryBinds() {
  const [cols] = useEditableCols();
  const ccom = useEditableCcom();
  const { setNativeNumber, removeNativeNumber, toggleComExistence } =
    useEditCompositionCategoryBinds(ccom);
  const aboutInput = useKeyboard();

  if (!ccom) return null;

  return (
    <>
      <div className="cat-list-title">Сборники</div>
      {cols?.cats.map((cat) => {
        const [input, updateInputValue] = aboutInput(
          `cat-for-bind-${cat.wid}`,
          {
            initialValue: `${ccom.refs?.[cat.wid] || ""}`,
            onChange: (value) => {
              if (!value) {
                removeNativeNumber(cat);
                return;
              }
              if (value.match(/\D/)) return;
              setNativeNumber(cat, value);
            },
          }
        );

        return cat.kind !== "dict" ? null : (
          <EditContainerCorrectsInformer
            key={`cat-for-bind-${cat.wid}`}
            corrects={ccom?.corrects[`setNativeNum:${cat.wid}`]}
          >
            <span>{cat.name} </span>
            {input}
            {ccom.refs?.[cat.wid] != null ? (
              <span className="pointer" onClick={() => updateInputValue("")}>
                {" " +
                  (isNaN(ccom.refs?.[cat.wid])
                    ? "Корректно очистить"
                    : "Удалить")}
              </span>
            ) : null}
          </EditContainerCorrectsInformer>
        );
      })}
      <div className="cat-list-title">Списки</div>
      {cols?.cats.map((cat) => {
        return cat.kind !== "list" ? null : (
          <EditContainerCorrectsInformer
            key={`cat-for-bind-${cat.wid}`}
            corrects={ccom?.corrects[`setNativeNum:${cat.wid}`]}
          >
            <span>{cat.name} </span>
            <input
              type="checkbox"
              checked={cat.stack.some((comw) => ccom.wid === comw)}
              onChange={() => toggleComExistence(cat)}
            />
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
