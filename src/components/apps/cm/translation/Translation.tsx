import { useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useCmNav from "../base/useCmNav";
import ComFace from "../col/com/face/ComFace";
import { useCcom } from "../col/com/useCcom";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";
import "./Translation.scss";
import TranslationScreen from "./TranslationScreen";
import useTranslation from "./useTranslation";

export default function Translations() {
  const [isShowCloseButton, setIsShowCloseButton] = useState(false);
  const { specialPhase } = useCmNav();
  const [, setCcom] = useCcom();

  const {
    currWin,
    newTranslation,
    prevText,
    nextText,
    prevCom,
    nextCom,
    texts,
    currTexti,
    setTexti,
    position,
    switchPosition,
    switchVisible,
    closeTranslation,
    showMarks,
    isShowMarks,
    isShowFullscreen,
    isTranslationBlockVisible,
    comPack: [comList, titlePostfix],
  } = useTranslation();

  if (isShowFullscreen)
    return (
      <div className="translation-container">
        {
          <div className="fullscreen-translation">
            <TranslationScreen
              fontSizeContainId="translation-native-window"
              position={position}
              updater={(update) =>
                window.addEventListener("resize", () => update())
              }
            />
            <div className="top-area left" onDoubleClick={() => prevCom()} />
            <div className="top-area right" onDoubleClick={() => nextCom()} />
            <div className="bottom-area left" onClick={() => prevText()} />
            <div className="bottom-area right" onClick={() => nextText()} />
            <div
              className="center-area"
              onClick={() => showMarks(!isShowMarks)}
              onDoubleClick={() => {
                setIsShowCloseButton(true);
                setTimeout(() => setIsShowCloseButton(false), 2000);
              }}
            >
              <div
                className={`close-translation-button ${
                  isShowCloseButton ? "show" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  closeTranslation();
                }}
              >
                <EvaIcon name="close-circle-outline" />
              </div>
            </div>
          </div>
        }
      </div>
    );

  return (
    <PhaseCmContainer
      topClass={`translation-container ${position}`}
      head={`Трансляция${titlePostfix}`}
      content={
        <>
          <div className="flex">
            <div
              className="translation-screen-wrapper"
              onClick={() => switchVisible()}
            >
              <div className="translation-screen-wrapper-inner">
                <TranslationScreen
                  fontSizeContainId="translation-native-window"
                  position={position}
                  updater={(update) =>
                    window.addEventListener("resize", () => update())
                  }
                />
                {isTranslationBlockVisible ? null : (
                  <div
                    title="esc, V"
                    className="absolute float-bottom full-width margin-gap-v text-center"
                  >
                    Нажми для показа
                  </div>
                )}
              </div>
            </div>
            {specialPhase ? (
              <div className="translation-com-list">
                {comList?.map((com) => {
                  return (
                    <ComFace
                      key={`mark-to-translation_${com.wid}`}
                      com={com}
                      importantOnClick={() => {
                        setCcom(com);
                        setTexti(0);
                      }}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>

          {texts && (
            <div className="translations-line no-scrollbar">
              {texts.map((text, texti) => {
                return (
                  <div
                    key={`translations-line-item_${texti}`}
                    id={`translation-window-line-${texti}`}
                    className="translations-line-item"
                    onClick={() => setTexti(texti)}
                  >
                    <div>{texti + 1}</div>
                    <div
                      className={`translations-line-item-inner ${
                        currTexti === texti ? "active" : ""
                      }`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="control-panel flex between">
            <div className="button" onClick={() => prevText()}>
              <EvaIcon name="chevron-left-outline" />
            </div>
            <div className="button" onClick={() => nextText()}>
              <EvaIcon name="chevron-right-outline" />
            </div>
            <div
              title={currWin ? "" : "Enter"}
              className="start-translation button flex center"
              onClick={(event) => {
                newTranslation(
                  (event.view as any).screenLeft + event.clientX - 70,
                  (event.view as any).screenTop + event.clientY + 70
                );
              }}
            >
              {currWin ? (
                <EvaIcon name="monitor-outline" />
              ) : (
                <EvaIcon name="play-outline" />
              )}
            </div>
            <div
              title="T"
              className={`button ${position === "center" ? "inactive" : ""}`}
              onClick={() => switchPosition()}
            >
              <EvaIcon name="upload-outline" />
            </div>
            <div
              title="esc, V"
              className="button"
              onClick={() => switchVisible()}
            >
              <EvaIcon name="square-outline" />
            </div>
          </div>
        </>
      }
    />
  );
}
