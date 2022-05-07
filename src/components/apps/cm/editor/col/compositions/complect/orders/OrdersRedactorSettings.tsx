import EvaIcon from "../../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../../complect/exer/useExer";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../../../complect/my-lib/MyLib";
import { ChordVisibleVariant } from "../../../../../Cm.model";
import { cmExer } from "../../../../../Cm.store";
import ComOrders from "../../../../../col/com/orders/ComOrders";
import { EditableCom } from "../../EditableCom";

export default function OrdersRedactorSettings({
  ccom,
}: {
  ccom: EditableCom;
}) {
  const { exec } = useExer(cmExer);

  return (
    <>
      <div
        className="abs-item abs-full"
        onClick={(event) => {
          event.stopPropagation();
          ccom.switchLang();
          exec();
        }}
      >
        <EvaIcon name="flag-outline" className="abs-icon" />
        <div className="title">Язык</div>
        <div className="abs-action">{ccom.langn}</div>
      </div>
      <div
        className="abs-item abs-full"
        onClick={async () => {
          const dotts = "."
            .repeat(12)
            .split("")
            .map((_, i) => i)
            .reverse();
          const first = ccom.transPosition;
          let pos = ccom.transPosition;
          const prev = pos;
          const init = ccom.initialTransPosition;

          modalService.open({
            title: "Тональность песни",
            description: () => (
              <ComOrders
                com={ccom}
                chordVisibleVariant={ChordVisibleVariant.Maximal}
              />
            ),
            inputs: dotts.map((position) => {
              return {
                type: "button",
                closable: false,
                value: `${
                  position === first ? "* " : ""
                }На ${position} ${mylib.declension(
                  position,
                  "полутон",
                  "полутона",
                  "полутонов"
                )} от базовой`,
                // disabled: () => position === first,
                style: () => ({
                  fontWeight: position === pos ? "bold" : undefined,
                }),
                onClick: () => ccom.setTransPosition((pos = position)),
              };
            }),
            onCloseAcion: () => exec(),
            buttons: [
              {
                title: "Отменить",
                onClick: () => exec(ccom.setTransPosition(prev)),
              },
            ],
          });
        }}
      >
        <EvaIcon name="bell-outline" className="abs-icon" />
        <div className="title">Изменить тональность</div>
        <div className="abs-action">{ccom.firstChord}</div>
      </div>
      <div
        className="abs-item abs-full"
        onClick={() => {
          exec(ccom.setField("b", ccom.isBemoled === 1 ? 0 : 1, 0));
        }}
      >
        <div className="abs-icon">{!ccom.isBemoled ? "#" : "b"}</div>
        <div className="title">
          Сделать {ccom.isBemoled ? "диезным" : "бемольным"}
        </div>
        <div className="abs-action"></div>
      </div>
    </>
  );
}
