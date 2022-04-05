import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EvaIcon } from "../../../complect/Eva";
import modalService from "../../../complect/modal/Modal.service";
import { RootState } from "../../../store";
import { setCurrentApp } from "../../board/Board.store";
import { Comps } from "./Cm.complect";
import { updateIsComFullscreenMode } from "./Cm.store";
import { mainTopButtons } from "./editor/Lazies";
import "./Cm.scss";
import { cmStorage } from "../../../store/jstorages";
import { useNav } from "./hooks";
import { CmPhase } from "./Cm.model";
import mylib from "../../../complect/my-lib/MyLib";
import { setts } from "./complect/settings/Setts";
import { StyleProp } from "./complect/settings/StyleProp";

export function CmApplication() {
  // class CStartPage extends React.Component {
  //   constructor() {
  //     super();
  //     g.nav.setContext(this);
  //     this.state = g.nav;
  //   }

  // if (g.nav.phase < 3) setTimeout(() => {
  //   const view = document.getElementById((g.nav[g.nav.phase - -1] || '').toString());
  //   if (view) mylib.scrollToView(view, 'top');
  // }, 100);

  // const rangeStep = 5;
  // let rangeValue = parseFloat(localStorage[g.lsCurrentCompositionFontSize] || '100');
  // const rangeMin = 20;
  // const rangeMax = 200;

  // rangeValue = rangeValue < rangeMin && rangeValue > 0 ? rangeMin : rangeValue > rangeMax ? rangeMax : rangeValue;

  const dispatch = useDispatch();
  // const phase = useSelector((state: RootState) => state.cm.phase);
  const [phase, setPhase] = useNav("phase");
  const rollMode = useSelector((state: RootState) => state.cm.rollMode);
  const isComFullscreenMode = useSelector(
    (state: RootState) => state.cm.isComFullscreenMode
  );

  const [topClickDateNow, setTopClickDateNow] = useState(0);

  return (
    <>
      <div
        key="app-container"
        className={`app-container phase-${phase}${
          isComFullscreenMode || rollMode ? " hidden-tools" : ""
        }${rollMode ? " roll-mode" : ""}`}
        onClick={() => {
          if (phase !== "com" || rollMode) return; ///* || g.streamManager.isCurr
          if (Date.now() - topClickDateNow < 500) {
            dispatch(updateIsComFullscreenMode(!isComFullscreenMode));
            // updateFlexFontSize(400);
            setTopClickDateNow(0);
          } else setTopClickDateNow(Date.now());
        }}
      >
        {/* <CComPlayerSignaler /> */}
        {mainTopButtons()}
        <div key="tools-panel" className="tools-panel">
          <button
            key="bb-button"
            {...{ "aria-label": "back" }}
            className="bb-button weight"
            onClick={async (event) => {
              event.stopPropagation();

              if (phase === "com") {
                ///* && g.streamManager.isJustSub
                // if (
                //   !(await modalService.confirm(
                //     "Отписаться от текущего стрима?",
                //     "Стрим",
                //     "да",
                //     "остаться"
                //   ))
                // )
                //   return;
                // g.streamManager.unsubscribe(() => g.ss());
              } else {
                if (phase === "cats") {
                  dispatch(setCurrentApp(null));
                  ///* else g.nav.goBack();
                  return;
                }
              }

              const newPhase = {
                com: "cat",
                cat: "cats",
                editor: "com",
              }[phase];

              setPhase(newPhase as CmPhase);
            }}
          >
            {phase === "com" ? ( ///* && g.streamManager.isJustSub
              <EvaIcon name="close-outline" />
            ) : phase === "cats" ? (
              <EvaIcon name="arrowhead-left-outline" />
            ) : (
              <EvaIcon name="chevron-left-outline" />
            )}
          </button>
          {/* {g.streamManager.isJustSub ? null : <Marks key="marks-list" />} */}
          {/* {window.json.cm_executions == null ||
          !g.nav.isCanGoBack(g.Phase.News) ? null : (
            <button
              key="execs-button"
              className="execs-button mbtn m-no mxs"
              onClick={() => g.nav.setPhase(g.Phase.News)}
            >
              <EvaIcon name="list" />
            </button>
          )} */}
          {/* {!g.nav.isCanGoBack(g.Phase.Translations) ||
          !isAccessed("canShowTranslation") ? null : (
            <button
              key="translations-button"
              className="translations-button mbtn m-no mxs"
              onClick={() => g.nav.setPhase(g.Phase.Translations)}
            >
              <EvaIcon name="monitor-outline" />
            </button>
          )} */}
          {/* {g.streamManager.isJustSub ? null : (
            <button
              key="meetings-button"
              className="meetings-button mbtn m-no mxs"
              onClick={() => {
                const inputs = g.meetings.stack.map((meeting) => {
                  return {
                    titleHtml: meeting.getTitle(),
                    type: "button",
                    value: "Просмотреть",
                    onClick: () => meeting.showDetails(),
                  };
                }, []);

                const buttons = g.meetings.isEditable
                  ? [
                      {
                        title: "Новое событие",
                        onClick: () => g.meetings.create(),
                      },
                    ]
                  : null;

                modalService.open({
                  title: "События",
                  inputs,
                  buttons,
                });
              }}
            >
              <EvaIcon name="calendar-outline" />
            </button>
          )} */}
          {/* {(() => {
            const getComWindows = () =>
              document.querySelectorAll(".com-ord-list");

            return g.nav.isPhase(g.Phase.Com, g.Phase.Editor) &&
              g.RangePanel ? (
              <RangePanel
                value={rangeValue}
                min={rangeMin}
                max={rangeMax}
                step={rangeStep}
                textElem={() => Array.from(getComWindows())}
                textWide={() => "parent"}
                onRange={(value, per) => {
                  const comWindows = getComWindows();
                  comWindows &&
                    Array.from(comWindows).forEach((comWindow) => {
                      comWindow.style.fontSize = `${value}%`;
                    });
                }}
                onChange={(value, per) => {
                  localStorage.setItem(g.lsCurrentCompositionFontSize, value);
                  rangeValue = value.toFixed(0);
                }}
                registerUpdaters={(update) => {
                  g.updateFlexFontSize = update;
                }}
              />
            ) : null;
          })()} */}
        </div>

        {Object.entries(Comps).map(([phasen, phaseComp]) => {
          return (
            <div
              key={`phase-body.${phasen}`}
              className={`phase-body phase-${phasen} ${
                phasen === phase ? "active" : ""
              }`}
            >
              {phasen === phase ? phaseComp() : null}
              {/* {mylib.func(g.comFooters).call(phasen)} */}
            </div>
          );
        })}
      </div>
    </>
  );
}


const styleProps = [
  {
    n: 'fontStyle',
    title: 'Курсив',
    type: 'p',
    on: 'italic'
  }, {
    n: 'fontWeight',
    title: 'Жирный',
    type: 'p',
    on: 'bold'
  }, {
    n: 'textDecoration',
    title: 'Подчёркнутый',
    type: 'p',
    on: 'underline'
  }, {
    n: 'marginTop',
    title: '-Отступ сверху-',
    type: 'p',
    on: '0'
  }, {
    n: 'fontSize',
    title: 'Размер',
    type: 'g',
    variants: [
      {
        title: 'S',
        n: 'S',
        val: '.5em'
      }, {
        title: 'M',
        n: 'M',
        val: '.7em'
      }, {
        title: 'N',
        n: 'N',
        val: '1em'
      }
    ],
    def: 'N'
  }, {
    n: 'marginLeft',
    title: 'Отступ',
    type: 'g',
    variants: [
      {
        title: 'Z',
        n: 'Z',
        val: '0'
      }, {
        title: 'S',
        n: 'S',
        val: '.5em'
      }, {
        title: 'M',
        n: 'M',
        val: '1em'
      }, {
        title: 'L',
        n: 'L',
        val: '1.5em'
      }
    ],
    def: 'Z'
  }
];

const putStyles = () => {
  const topStyles: any = {};
  const newStyles: any = topStyles['.app-container.cm .com-ord-list '] = {};
  
  (['headerProps', 'textProps'] as (keyof StyleProp)[]).forEach((styleCol: keyof StyleProp) => {
    setts.styles.forEach(styleBlock => {
      const block: any = newStyles[setts.query(styleBlock.name, styleCol, '.', styleBlock.isInherit ? styleBlock.name : '')] = {};
      const sBlock = styleBlock[styleCol];

      Object.keys(sBlock).forEach(bProp => {
        const prop: any = styleProps.find(sProp => sProp.n === bProp);
        block[bProp] = prop.type === 'p' ? sBlock[bProp] : (prop.variants.find((variant: any) => variant.n === sBlock[bProp]) || {}).val;
      });
    });
  });

  console.log(topStyles);

  mylib.useElement('style', 'cm-styles', style => {
    style.innerText = mylib.stringifyCss(topStyles);
    console.log(style);
  });
};

putStyles();

