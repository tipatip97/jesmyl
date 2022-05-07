import mylib from "../../../../../../../../complect/my-lib/MyLib";
import useCmNav from "../../../../../base/useCmNav";
import EditContainerCorrectsInformer from "../../../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import { useEditableCcom } from "../../useEditableCcom";
import TextAreaRedactor from "./TextAreaRedactor";
import useEditTextsChords from "./useEditTextsChords";

export default function TextsChordsRedactor({
  ccoln,
}: {
  ccoln: "texts" | "chords";
}) {
  const ccom = useEditableCcom();
  const { goTo } = useCmNav();
  const { changeBlock, insertBlocks } = useEditTextsChords(ccom);

  if (!ccom) return null;

  const istcoln = ccoln === "texts";
  const colList = ccom[ccoln];

  return (
    <>
      {colList?.length ? (
        colList.map((col, coli) => {
          return (
            <EditContainerCorrectsInformer
              className="margin-big-gap-v"
              key={`com-text ${ccoln} ${coli}`}
              corrects={ccom.corrects[`changeBlocks_${ccoln}_${coli}`]}
            >
              <div>
                <TextAreaRedactor
                  ccoln={ccoln}
                  coli={coli}
                  com={ccom}
                  col={col}
                  onChange={(value) => changeBlock(ccoln, coli, value)}
                  onInsert={(value) => insertBlocks(ccoln, coli, value)}
                />
                {((ords) => (
                  <div
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
                  </div>
                ))(
                  ccom.orders?.filter(
                    (ord) => (istcoln ? ord.texti : ord.chordsi) === coli
                  ) || []
                )}
              </div>
            </EditContainerCorrectsInformer>
          );
        })
      ) : istcoln ? (
        <textarea
          className="text-heap-textarea"
          onPaste={(event) => {
            ccom.parseBlocksFromClipboard(event);
          }}
          onChange={(event) => {
            const value = event.target.value;
            const isEnLetter = /[a-z]/i.test(value);

            ccom.add("chords", isEnLetter ? value : "");
            ccom.add("texts", isEnLetter ? "" : value);

            if (isEnLetter) goTo("chords");
          }}
          placeholder="Для начала можно вставить текст песни в это поле. Текст должен быть разделён двумя переносами строк между блоками (припевом, куплетом, и т.д.). Он может содержать названия типа блоков (например: Куплет 1. или Припев, и т.д.)."
        />
      ) : null}
    </>
  );
}
