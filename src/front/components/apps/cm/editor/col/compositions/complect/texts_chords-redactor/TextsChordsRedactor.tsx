import EvaButton from "../../../../../../../../complect/eva-icon/EvaButton";
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
  const colList = istcoln ? ccom.texts : ccom.transBlocks();

  return (
    <>
      {[colList?.length ? colList : ""].flat().map((col, coli) => {
        return (
          <EditContainerCorrectsInformer
            className="margin-big-gap-v"
            key={`com-text ${ccoln} ${coli}`}
            corrects={ccom.corrects[`${ccoln}-block-${coli}`]}
          >
            <div>
              {!coli &&
                <EvaButton
                  name="plus-circle-outline"
                  onClick={() => exec(ccom.insertBlocks(ccoln, -1, ''))}
                />}
              <div className="flex between">
                <div>
                  {coli + 1 + ". "}
                  {((ords) => (
                    <span
                      style={{
                        color: ords.length ? "grey" : "red",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: ords.length
                          ? mylib
                            .unique(
                              ords.map(
                                (o) =>
                                  `${o.top.isAnchor ||
                                    o.top.isAnchorInherit ||
                                    o.top.isAnchorInheritPlus
                                    ? "&#9875;"
                                    : ""
                                  }${o.top.header?.()}${o.top.style?.isInherit
                                    ? ` ${o.top.style.key}`
                                    : ""
                                  }`
                              ),
                              (o) => o
                            )
                            .join(", ")
                          : "Нет упоминаний этого блока",
                      }}
                    />
                  ))(
                    ccom.orders?.filter(
                      (ord) => (istcoln ? ord.texti : ord.chordsi) === coli
                    ) || []
                  )}
                </div>
                <span>
                  {!istcoln && /[A-H]b/.exec(col) && <EvaButton
                    name="hash"
                    onClick={() => exec(ccom.replaceBemoles(coli))}
                  />}
                </span>
                <EvaButton
                  name="close"
                  onClick={() => exec(ccom.removeBlock(ccoln, coli))}
                />
              </div>
              <TextAreaRedactor
                ccoln={ccoln}
                com={ccom}
                col={col}
                onChange={(value) => exec(ccom.changeBlock(ccoln, coli, value))}
              />
              <EvaButton
                name="plus-circle-outline"
                onClick={() => exec(ccom.insertBlocks(ccoln, coli, ''))}
              />
            </div>
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
