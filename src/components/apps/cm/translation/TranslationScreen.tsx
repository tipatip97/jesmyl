import FontSizeContain from "../complect/font-size-contain/FontSizeContain";
import { TranslationScreenProps } from "./Translations.model";
import useTranslation from "./useTranslation";

export default function TranslationScreen(props: TranslationScreenProps) {
  const { currWin, currBlock, onKeyUpTranslations, position } =
    useTranslation();

  if (currWin) currWin.onkeyup = onKeyUpTranslations;
  window.onkeyup = onKeyUpTranslations;

  return (
    <div
      className="translation-screen-wrapper-inner"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        color: "white",
        fontWeight: "bold",
        fontFamily:
          "montserrat, main, calibri, georgia, times, serif, verdana, arial",
        backgroundColor: "black",
      }}
    >
      <FontSizeContain
        containerId={props.fontSizeContainId}
        position={position}
        updater={(update) => {
          if (props.updater) props.updater(update);
        }}
      >
        <div
          style={{ whiteSpace: "pre", textAlign: "center", padding: "10px" }}
          dangerouslySetInnerHTML={{ __html: currBlock || "" }}
        />
      </FontSizeContain>
    </div>
  );
}
