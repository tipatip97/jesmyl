import { useMemo, useState } from "react";
import EvaIcon from "../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../../../complect/keyboard/useKeyboard";
import { NavPhase } from "../../../../../../../complect/nav-configurer/Navigation.model";
import useCmNav from "../../../../base/useCmNav";
import { cmExer } from "../../../../Cm.store";
import { useCcom } from "../../../../col/com/useCcom";
import EditContainerCorrectsInformer from "../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCols } from "../../useEditableCols";
import { EditableCom } from "../EditableCom";

export default function NewComposition({ close }: { close: () => void }) {
  const { goTo } = useCmNav();
  const [cols] = useEditableCols();
  const { exec } = useExer(cmExer);
  const [, setCcom] = useCcom();
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [isTakeName, setIsTakeName] = useState(true);

  const com = useMemo(
    () =>
      new EditableCom({ n: "", w: Date.now() }, cols?.coms.length || -1, cols),
    []
  );

  const [Input] = useKeyboard()("new composition name input", {
    className: "full-width",
    initialValue: name,
    onChange: (value) => {
      create();
      setName(value);
      exec(com.rename(value, exec));
      setIsTakeName(false);
    },
  });

  const corrects = com.col.corrects.comRename;

  const goToRoute = (phase = "texts", isRejectSave = true) => {
    setCcom(com, isRejectSave);
    goTo(["com", phase], null, isRejectSave);
    close();
  };

  const create = (phase?: NavPhase) => {
    com.create(() => goToRoute(phase, false)) && cols?.addCom(com);
  };

  return (
    <>
      <div className="full-container new-composition">
        <div className="title">Новая песня</div>

        <EditContainerCorrectsInformer
          className="full-width"
          corrects={corrects}
        >
          <div className="flex full-width">
            <span className="margin-gap-h">Название </span>
            <div className="full-width">{Input()}</div>
          </div>
        </EditContainerCorrectsInformer>
        <textarea
          className="text-heap-textarea"
          placeholder="Начни писать или вставь текст для создания песни"
          disabled={!!corrects?.errors?.length}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (isTakeName)
              setName(com.correctName(com.takeName(event.target.value)));
          }}
        />
        <EvaIcon
          name="done-all-outline"
          className="pointer margin-big-gap"
          onClick={() => {
            create();
            com.parseBlocks(value);
            goToRoute();
          }}
        />
      </div>
    </>
  );
}
