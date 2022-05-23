import EvaIcon from "../../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../../complect/exer/useExer";
import mylib from "../../../../../../../../complect/my-lib/MyLib";
import { cmExer } from "../../../../../Cm.store";
import EditContainerCorrectsInformer from "../../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCcom } from "../../useEditableCcom";
import TextAreaRedactor from "./TextAreaRedactor";

export default function TextsChordsRedactor({
  ccoln,
}: {
  ccoln: "texts" | "chords";
}) {
  const ccom = useEditableCcom();
  const { exec } = useExer(cmExer);

  if (!ccom) return null;

  const istcoln = ccoln === "texts";
  const colList = ccom[ccoln];

  return (
    <>
      {[colList || ""].flat().map((col, coli) => {
        return (
          <EditContainerCorrectsInformer
            className="margin-big-gap-v"
            key={`com-text ${ccoln} ${coli}`}
            corrects={ccom.corrects[`changeBlocks_${ccoln}_${coli}`]}
          >
            <div>
              <div className="flex between">
                <div>
                  {coli + 1 + ". "}
                  {((ords) => (
                    <span
                      style={{
                        color: ords.length ? "grey" : "red",
                      }}
                    >
                      {ords.length
                        ? mylib
                            .unique(
                              ords.map(
                                (o) =>
                                  `${o.top.header()}${
                                    o.top.style?.isInherit
                                      ? ` ${o.top.style.name}`
                                      : ""
                                  }`
                              )
                            )
                            .join(", ")
                        : "Нет упоминаний этого блока"}
                    </span>
                  ))(
                    ccom.orders?.filter(
                      (ord) => (istcoln ? ord.texti : ord.chordsi) === coli
                    ) || []
                  )}
                </div>
                <EvaIcon
                  name="close"
                  className="pointer"
                  onClick={() => exec(ccom.removeBlock(ccoln, coli))}
                />
              </div>
              <TextAreaRedactor
                ccoln={ccoln}
                coli={coli}
                com={ccom}
                col={col}
                onChange={(value) => exec(ccom.changeBlock(ccoln, coli, value))}
                onInsert={(value) =>
                  exec(ccom.insertBlocks(ccoln, coli, value))
                }
              />
            </div>
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
