import useExer from "../../../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../../../complect/keyboard/useKeyboard";
import { cmExer } from "../../../../Cm.store";
import EditContainerCorrectsInformer from "../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCols } from "../../useEditableCols";
import { useEditableCcom } from "../useEditableCcom";

export default function CategoryBinds() {
  const [cols] = useEditableCols();
  const ccom = useEditableCcom();
  const aboutInput = useKeyboard();
  const { exec } = useExer(cmExer);

  if (!ccom) return null;

  return (
    <>
      <div className="cat-list-title">Сборники</div>
      {cols?.cats.map((cat) => {
        const [input, updateInputValue] = aboutInput(
          `cat-for-bind-${cat.wid}`,
          {
            initialValue: `${ccom.refs?.[cat.wid] || ""}`,
            type: "number",
            onChange: (value) => {
              if (!value) {
                exec(ccom.removeNativeNumber(cat, exec));
                return;
              }
              if (value.match(/\D/)) return;
              exec(ccom.setNativeNumber(cat, value));
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
              onChange={() => exec(cat?.toggleComExistence(ccom, exec))}
            />
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
