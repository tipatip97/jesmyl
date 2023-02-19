import KeyboardInput from "../../../../../../../../complect/keyboard/KeyboardInput";
import { EditableCom } from "../../EditableCom";

export default function TextAreaRedactor({
  ccoln,
  com,
  col,
  onChange,
}: {
  ccoln: "texts" | "chords";
  com: EditableCom;
  col: string;
  onChange: (value: string) => void;
}) {

  return <KeyboardInput
    multiline
    className={"cleared-input com-editor-textarea full-width no-resize"}
    value={col}
    setIsUnknownSymbols={(char) => ["\r", "\t"].indexOf(char) > -1}
    preferLanguage={ccoln === "texts" ? (com.langi ? "ua" : "ru") : "en"}
    autoFocus={!col}
    onChange={(value) => onChange(value)}
    onPaste={(value) => {
      com.parseBlocksFromClipboard(value, (blocks): boolean => {
        if (blocks.length > 1) {
          if (col !== "") {
            return false;
          }
        } else return false;

        return true;
      });
    }}
  />;
}
