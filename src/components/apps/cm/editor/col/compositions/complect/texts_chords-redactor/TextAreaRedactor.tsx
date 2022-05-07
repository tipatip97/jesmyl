import { useEffect, useRef, useState } from "react";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import { EditableCom } from "../../EditableCom";

export default function TextAreaRedactor({
  ccoln,
  com,
  col,
  onChange,
  onInsert,
}: {
  ccoln: "texts" | "chords";
  com: EditableCom;
  coli: number;
  col: string;
  onChange: (value: string) => void;
  onInsert: (value: string) => void;
}) {
  const [value, setValue] = useState(col || "");
  const istcoln = ccoln === "texts";
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => setValue(col), [col]);

  return (
    <textarea
      className={`cleared-input com-editor-textarea full-width ${
        value.trim() === "" ? "empty" : ""
      }`}
      value={value}
      ref={inputRef}
      rows={value.split("\n").length}
      onChange={async (event) => {
        const target = event.target;
        const prev = value;
        const curr = target.value;

        if (prev !== curr) {
          const valnum = curr
            .split("")
            .reduce((p, c) => p + c.charCodeAt(0), 0);
          const diffnum = prev
            .split("")
            .reduce((p, c) => p + c.charCodeAt(0), 0);
          const letter = String.fromCharCode(valnum - diffnum);
          const isNewBlock = letter === "\n" && prev[prev.length - 1] === "\n";

          if (isNewBlock) {
            const txt = istcoln ? "Текстовый блок" : "блок Аккордов";
            if (!(await modalService.confirm(`Добавить новый ${txt}?`))) return;

            onInsert("");
            inputRef.current?.focus();
          }
          onChange(isNewBlock ? curr.replace(/\n+$/, "") : curr);
          setValue(istcoln ? curr : com.transBlock(curr) || "");
        }
      }}
      onPaste={(event) => {
        com.parseBlocksFromClipboard(
          event,
          (blocks): boolean => {
            if (blocks.length > 1) {
              event.preventDefault();

              if (value !== "") {
                // mylib.alert(
                //   "Вставлять многоблочный текст возможно только в пустые блоки."
                // );
                return false;
              }
            } else return false;

            return true;
          }
          //   ccoln,
          //   coli
        );
      }}
    />
  );
}
