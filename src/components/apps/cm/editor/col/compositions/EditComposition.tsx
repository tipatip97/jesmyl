import EditContainerCorrectsInformer from "../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import useEditableCols from "../useEditableCols";
import "./EditComposition.scss";
import { useEditableCcom } from "./useEditableCcom";
import useEditComposition from "./useEditComposition";

export default function EditComposition() {
  const cols = useEditableCols();
  const ccom = useEditableCcom();

  const { rename, setNativeNumber, removeNativeNumber, toggleComExistence } =
    useEditComposition(ccom);

  if (!ccom) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-composition"
      headClass="flex between"
      headTitle={`Категория - ${ccom.initialName}`}
      content={
        <>
          {
            <EditContainerCorrectsInformer
              action="comRename"
              corrects={ccom?.corrects.comRename}
            >
              Название:
              <input
                value={ccom?.name}
                onChange={(event) => rename(event.target.value)}
              />
            </EditContainerCorrectsInformer>
          }
          <div className="cat-list-title">Сборники</div>
          {cols?.cats.map((cat) => {
            return !cat.wid ||
              cat.native.track == null ||
              cat.native.track[0] !== ">wid" ? null : (
              <EditContainerCorrectsInformer
                key={`cat-for-bind-${cat.wid}`}
                action="setNativeNum"
                corrects={ccom?.corrects[`setNativeNum:${cat.wid}`]}
              >
                <span>{cat.name} </span>
                <input
                  value={ccom.refs?.[cat.wid] || ""}
                  onChange={(event) => {
                    if (event.target.value.match(/\D/)) return;
                    setNativeNumber(cat.native, event.target.value);
                    // else cat.toggleCom(ccom);
                  }}
                />
                {ccom.refs?.[cat.wid] != null ? (
                  <span
                    className="pointer"
                    onClick={() => removeNativeNumber(cat.native)}
                  >
                    {" " +
                      (isNaN(ccom.refs?.[cat.wid])
                        ? "Корректно очистить"
                        : "Удалить")}
                  </span>
                ) : null}
              </EditContainerCorrectsInformer>
            );
          })}
          <div className="cat-list-title">Группированые</div>
          {cols?.cats.map((cat) => {
            return !cat.wid || cat.native.track != null ? null : (
              <EditContainerCorrectsInformer
                key={`cat-for-bind-${cat.wid}`}
                action="setNativeNum"
                corrects={ccom?.corrects[`setNativeNum:${cat.wid}`]}
              >
                <span>{cat.name} </span>
                <input
                  type="checkbox"
                  checked={cat.stack.some((comw) => ccom.wid === comw)}
                  onChange={(event) => {
                    if (event.target.value.match(/\D/)) return;
                    toggleComExistence(cat);
                  }}
                />
                {ccom.refs?.[cat.wid] != null ? (
                  <span
                    className="pointer"
                    onClick={() => removeNativeNumber(cat.native)}
                  >
                    {" " +
                      (isNaN(ccom.refs?.[cat.wid])
                        ? "Корректно очистить"
                        : "Удалить")}
                  </span>
                ) : null}
              </EditContainerCorrectsInformer>
            );
          })}
        </>
      }
    />
  );
}
