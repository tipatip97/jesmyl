import { useEffect } from "react";
import useKeyboard from "../../../../../../../../complect/keyboard/useKeyboard";
import { EditableCom } from "../../EditableCom";

export default function TextAreaRedactor({
  ccoln,
  com,
  col,
  coli,
  onChange,
}: {
  ccoln: "texts" | "chords";
  com: EditableCom;
  coli: number;
  col: string;
  onChange: (value: string) => void;
}) {

  const input = useKeyboard()(`redact ${ccoln} #${coli} of com ${com.wid}`, {
    multiline: true,
    closeButton: false,
    className: `cleared-input com-editor-textarea full-width no-resize`,
    theValue: col,
    setIsUnknownSymbols: (char) => ["\r", "\t"].indexOf(char) > -1,
    preferLanguage: ccoln === "texts" ? (com.langi ? "ua" : "ru") : "en",
    autofocus: !col,
    onChange: (value) => onChange(value),
    onPaste: (value) => {
      com.parseBlocksFromClipboard(value, (blocks): boolean => {
        if (blocks.length > 1) {
          if (col !== "") {
            return false;
          }
        } else return false;

        return true;
      });
    },
  });

  useEffect(() => { input.value(col); }, [col]);

  return <>{input.node}</>;
}
