import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../shared/store";
import di from "../Cm.store";
import useCmNav from "../base/useCmNav";
import ComFace from "../col/com/face/ComFace";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";
import "./Translation.scss";
import TranslationScreen from "./TranslationScreen";
import { useTranslation } from "./useTranslation";

const isShowTranslationInfoSelector = (state: RootState) => state.cm.isShowTranslationInfo;

export default function Translations({
  hideComList,
}: {
  hideComList?: boolean;
}) {
  const dispatch = useDispatch();
  const [isShowCloseButton, setIsShowCloseButton] = useState(false);
  const [isShowTurnButton, setIsShowTurnButton] = useState(false);
  const [isRotateScreen, rotateScreen] = useState(false);
  const isShowInfo = useSelector(isShowTranslationInfoSelector);
  const { setAppRouteData } = useCmNav();

  const state = useTranslation();
  const {
    currWin,
    watchTranslation,
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
    isSelfTranslation: isShowFullscreen,
    isTranslationBlockVisible,
    comPack: [comList, titlePostfix],
  } = state;
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const onKeyTranslations = async (event: KeyboardEvent) => {
      const state = stateRef.current;

      switch (event.code) {
        case "Enter":
          state.watchTranslation(200, 200);
          break;

        case "ArrowUp":
          if (event.ctrlKey) state.prevCom();
          break;

        case "ArrowDown":
          if (event.ctrlKey) state.nextCom();
          break;

        case "ArrowLeft":
          state.prevText();
          break;

        case "ArrowRight":
          state.nextText();
          break;

        case "Escape":
          if (state.isSelfTranslation) state.closeTranslation();
          else state.switchVisible();
          break;

        case "KeyV":
          state.switchVisible();
          break;

        case "KeyF":
          state.currWin && state.currWin.focus();
          break;

        case "KeyT":
          state.switchPosition();
          break;
      }
    };

    if (state.currWin) state.currWin.onkeydown = onKeyTranslations;
    window.onkeydown = onKeyTranslations;

    return () => {
      if (state.currWin) state.currWin.onkeydown = null;
      window.onkeydown = null;
    };
  }, [state.currWin]);

  if (isShowFullscreen)
    return (
      <div className="translation-container fullscreen">
        {
          <div
            className={`fullscreen-translation ${isShowInfo ? "open-info" : ""} ${isRotateScreen ? "rotate-fullscreen-translation" : ""}`}
          >
            <TranslationScreen
              position={position}
              updater={(update) =>
                window.addEventListener("resize", () => update())
              }
            />
            <div
              className="top-area info-area left"
              onDoubleClick={() => prevCom()}
            >
              <div className="description">
                дважды клик&nbsp;-
                <br />
                предыдущая песня
              </div>
            </div>
            <div
              className="top-area info-area right"
              onDoubleClick={() => nextCom()}
            >
              <div className="description">
                дважды клик&nbsp;-
                <br />
                следующая песня
              </div>
            </div>
            <EvaIcon
              className="close-info-button"
              onClick={() => dispatch(di.switchShowTranslationInfo(false))}
              name="close-outline"
            />
            <div
              className="bottom-area info-area left"
              onClick={() => prevText()}
            >
              <div className="description">
                клик&nbsp;-
                <br />
                предыдущий слайд
              </div>
            </div>
            <div
              className="bottom-area info-area right"
              onClick={() => nextText()}
            >
              <div className="description">
                клик&nbsp;-
                <br />
                следующий слайд
              </div>
            </div>
            <div
              className="center-area info-area top"
              onDoubleClick={() => {
                setIsShowCloseButton(true);
                setTimeout(() => setIsShowCloseButton(false), 2000);
              }}
            >
              <div className="description">
                дважды клик&nbsp;-
                <br />
                закрыть и&nbsp;инфо
              </div>
              <div
                className={`area-button ${isShowCloseButton ? "show" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  closeTranslation();
                }}
              >
                <EvaIcon name="close-circle-outline" />
              </div>
              <div
                className={`area-button second open-info-button ${isShowCloseButton ? "show" : ""}`}
                onClick={() => dispatch(di.switchShowTranslationInfo(!isShowInfo))}
              >
                <EvaIcon name="question-mark-circle-outline" />
              </div>
            </div>
            <div
              className="center-area info-area bottom"
              onDoubleClick={() => {
                setIsShowTurnButton(true);
                setTimeout(() => setIsShowTurnButton(false), 2000);
              }}
            >
              <div className="description">
                дважды клик&nbsp;-
                <br />
                повернуть
              </div>
              <div
                className={`area-button ${isShowTurnButton ? "show" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  rotateScreen(!isRotateScreen);
                }}
              >
                <EvaIcon name="sync-outline" />
              </div>
            </div>
          </div>
        }
      </div>
    );

  return (
    <PhaseCmContainer
      className={`translation-container ${position}`}
      headTitle={`Трансляция${titlePostfix}`}
      content={
        <>
          <div className="flex">
            <div
              className="translation-screen-wrapper"
              onClick={() => switchVisible()}
            >
              <div className="translation-screen-wrapper-inner">
                <TranslationScreen
                  position={position}
                  updater={(update) =>
                    window.addEventListener("resize", () => update())
                  }
                />
                {isTranslationBlockVisible ? null : (
                  <div
                    title="esc, V"
                    className="absolute pos-bottom full-width margin-gap-v text-center"
                  >
                    Нажми для показа
                  </div>
                )}
              </div>
            </div>
            {hideComList ? null : (
              <div className="translation-com-list">
                {comList?.map((com) => {
                  return (
                    <ComFace
                      key={`mark-to-translation_${com.wid}`}
                      com={com}
                      importantOnClick={() => {
                        setAppRouteData({ ccomw: com.wid });
                        setTexti(0);
                      }}
                    />
                  );
                })}
              </div>
            )}
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
                      className={`translations-line-item-inner ${currTexti === texti ? "active" : ""}`}
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
                watchTranslation(
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
