import FontSizeContain from "../base/font-size-contain/FontSizeContain";
import { TranslationScreenProps } from "./Translations.model";
import useTranslation from "./useTranslation";

export default function TranslationScreen(props: TranslationScreenProps) {
  const { currWin, currText, onKeyTranslations, position } =
    useTranslation();

  if (currWin) currWin.onkeydown = onKeyTranslations;
  window.onkeydown = onKeyTranslations;

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
        updater={(update) => props.updater && props.updater(update)}
      >
        <div
          style={{ whiteSpace: "pre", textAlign: "center", padding: "10px" }}
          dangerouslySetInnerHTML={{ __html: currText || "" }}
        />
      </FontSizeContain>
    </div>
  );
}
