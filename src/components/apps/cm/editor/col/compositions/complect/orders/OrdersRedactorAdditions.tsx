import EvaIcon from "../../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../../complect/exer/useExer";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import { cmExer } from "../../../../../Cm.store";
import { EditableCom } from "../../EditableCom";

export default function OrdersRedactorAdditions({
  ccom,
}: {
  ccom: EditableCom;
}) {
  const { exec } = useExer(cmExer);

  return (
    <>
      <div
        className="abs-item abs-full"
        onClick={() => {
          modalService.open({
            title: "Новый текст",
            description: <pre></pre>,
            inputs: ccom.texts?.map((text, texti) => {
              return {
                type: "button",
                title: (
                  <pre>
                    {texti + 1}.{text}
                  </pre>
                ),
                value: "Добавить этот блок",
                onClick: () => exec(ccom.addOrder({ t: texti, s: "one" })),
              };
            }),
          });
        }}
      >
        <EvaIcon name="text" className="abs-icon" />
        <div className="title">Текстовый блок</div>
        <div className="abs-action" />
      </div>
      <div
        className="abs-item abs-full"
        onClick={() => {
          modalService.open({
            title: "Аккордный блок",
            description: "Выбери блок Аккордов для вставки",
            inputs: ccom.chords?.map((chords, chordsi) => {
              return {
                title: <pre>{chords}</pre>,
                type: "button",
                value: `Добавить этот блок`,
                onClick: () => exec(ccom.addOrder({ c: chordsi, s: "enter" })),
              };
            }),
          });
        }}
      >
        <EvaIcon name="options-2" className="abs-icon" />
        <div className="title">Аккордный блок</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
