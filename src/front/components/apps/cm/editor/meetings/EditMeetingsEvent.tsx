import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedSearchInput from "../../../../../complect/DebouncedSearchInput";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import useCmNav from "../../base/useCmNav";
import { cmExer } from "../../Cm.store";
import ComFace from "../../col/com/face/ComFace";
import { useEditableCcat } from "../col/categories/useEditableCcat";
import EditContainerCorrectsInformer from "../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import MeetingsEventHistory from "./MeetingsEventHistory";
import { useEditableMeetings } from "./useEditableMeetings";

export default function EditMeetingsEvent() {
  const { currentEvent } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const zcat = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || "");
  const { goTo } = useCmNav();
  const [isClosedComList, setIsClosedComList] = useState(true);
  const { openAbsoluteBottomPopup, prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const {openFullscreenContent} = useFullscreenContent();

  if (!currentEvent) return null;
  const usedComList = (currentEvent.coms || []).concat(
    currentEvent.prevComs || []
  );
  const comsLength = currentEvent.coms?.length || 0;
  const prevComsLength = currentEvent.prevComs?.length || 0;

  return (
    <PhaseCmEditorContainer
      topClass="edit-meeitngs"
      headTitle={`Событие - ${currentEvent.name}`}
      contentClass="no-padding-top"
      onMoreClick={() => {
        openAbsoluteBottomPopup(prepareAbsoluteBottomPopupContent({
          items: [{
            icon: 'list',
            title: 'История',
            onClick: () => openFullscreenContent((close) => <MeetingsEventHistory close={close} />)
          }]
        }));
      }}
      content={
        <>
          <EditContainerCorrectsInformer>
            Название
            <KeyboardInput
              value={currentEvent.name}
              onFocus={() => setIsClosedComList(true)}
              onChange={(value) => {
                setIsClosedComList(true);
                exec(currentEvent.rename(value));
              }}
            />
          </EditContainerCorrectsInformer>

          <div className="list-title sticky">
            {prevComsLength ? "Новый список" : "Прикреплённые песни"}
          </div>
          {comsLength ? (
            currentEvent.coms?.map((com, comi) => (
              <ComFace
                key={`event-${com.wid}`}
                com={com}
                selectable={false}
                description={
                  <div className="flex">
                    {comsLength === 1 ? null : (
                      <EvaIcon
                        name={comi ? "arrow-upward" : "arrow-downward"}
                        className="margin-big-gap-h"
                        onClick={(event) => {
                          event.stopPropagation();
                          exec(currentEvent.moveCom(comi));
                        }}
                      />
                    )}
                    <EvaIcon
                      name="close-circle-outline"
                      onClick={(event) => {
                        event.stopPropagation();
                        exec(currentEvent.removeCom(com));
                      }}
                    />
                  </div>
                }
              />
            ))
          ) : (
            <div className="flex center margin-gap">Песен нет</div>
          )}
          {prevComsLength ? (
            <>
              <div className="list-title sticky">
                <span>Предыдущие (не войдут)</span>

                {prevComsLength < 2 ? null : (
                  <EvaIcon
                    name={comsLength ? "arrowhead-up-outline" : "plus-outline"}
                    className="pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      exec(currentEvent.mergePrevComs(currentEvent.prevComs));
                    }}
                  />
                )}
              </div>
              {currentEvent.prevComs?.map((com) => (
                <ComFace
                  key={`event-${com.wid}`}
                  com={com}
                  selectable={false}
                  description={
                    <EvaIcon
                      name={
                        comsLength
                          ? "arrow-ios-upward-outline"
                          : "plus-circle-outline"
                      }
                      onClick={(event) => {
                        event.stopPropagation();
                        exec(currentEvent.mergePrevComs([com]));
                      }}
                    />
                  }
                />
              ))}
            </>
          ) : null}
          <div className="list-title sticky">
            <span>Все песни</span>
            <EvaIcon
              className="pointer"
              name={isClosedComList ? "eye-outline" : "eye-off-outline"}
              onClick={() => setIsClosedComList(!isClosedComList)}
            />
          </div>
          {!zcat || isClosedComList ? null : (
            <>
              <DebouncedSearchInput
                placeholder="Поиск песен"
                className="debounced-searcher round-styled margin-gap-v"
                initialTerm={term}
                onSearch={(term) => zcat.search(term)}
                debounce={500}
                onTermChange={(term) => setTerm(term)}
              />
              {zcat?.wraps.map(({ com }) => {
                return (
                  <ComFace
                    key={`category-for-event${com.wid}`}
                    com={com}
                    selectable={false}
                    importantOnClick={() => {
                      goTo({ place: "com", data: { ccomw: com.wid } }, null, true);
                    }}
                    description={
                      usedComList.indexOf(com) < 0 ? (
                        <EvaIcon
                          name="plus-circle-outline"
                          onClick={(event) => {
                            event.stopPropagation();
                            exec(currentEvent.mergeStack([com.wid]));
                          }}
                        />
                      ) : null
                    }
                  />
                );
              })}
            </>
          )}
        </>
      }
    />
  );
}
