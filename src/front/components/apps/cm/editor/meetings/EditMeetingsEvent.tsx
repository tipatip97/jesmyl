import { useState } from 'react';
import DebouncedSearchInput from '../../../../../complect/DebouncedSearchInput';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconArrowDown02StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-down-02';
import { IconArrowUp02StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-up-02';
import { IconArrowUpDoubleStrokeRounded } from '../../../../../complect/the-icon/icons/arrow-up-double';
import { IconHelpCircleStrokeRounded } from '../../../../../complect/the-icon/icons/help-circle';
import { IconLeftToRightListBulletStrokeRounded } from '../../../../../complect/the-icon/icons/left-to-right-list-bullet';
import { IconPlusSignStrokeRounded } from '../../../../../complect/the-icon/icons/plus-sign';
import { IconPlusSignCircleStrokeRounded } from '../../../../../complect/the-icon/icons/plus-sign-circle';
import { IconViewStrokeRounded } from '../../../../../complect/the-icon/icons/view';
import { IconViewOffSlashStrokeRounded } from '../../../../../complect/the-icon/icons/view-off-slash';
import useCmNav from '../../base/useCmNav';
import { ComFace } from '../../col/com/face/ComFace';
import { useEditableCcat } from '../col/categories/useEditableCcat';
import EditContainerCorrectsInformer from '../edit-container-corrects-informer/EditContainerCorrectsInformer';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import MeetingsEventHistory from './MeetingsEventHistory';
import { useEditableMeetings } from './useEditableMeetings';
import { EditableCat } from '../col/categories/EditableCat';
import { EditableMeetingsEvent } from './EditableMeetingsEvent';

export default function EditMeetingsEvent() {
  const currentEvent: EditableMeetingsEvent | und = useEditableMeetings().currentEvent;
  const exec = useExerExec();
  const zcat: EditableCat | und = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || '');
  const { goTo } = useCmNav();
  const [isClosedComList, setIsClosedComList] = useState(true);
  const [fullNode, openFullContent] = useFullContent(() => <MeetingsEventHistory />);

  const [popupNode, openPopup] = useBottomPopup((isOpen, close) => {
    return (
      isOpen && (
        <IconButton
          Icon={IconLeftToRightListBulletStrokeRounded}
          postfix="История"
          onClick={() => {
            openFullContent(true);
            close();
          }}
        />
      )
    );
  });

  if (!currentEvent) return null;
  const usedComList = (currentEvent.coms || []).concat(currentEvent.prevComs || []);
  const comsLength = currentEvent.coms?.length || 0;
  const prevComsLength = currentEvent.prevComs?.length || 0;

  return (
    <PhaseCmEditorContainer
      className="edit-meeitngs"
      headTitle={`Событие - ${currentEvent.name}`}
      contentClass="no-padding-top"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          {fullNode}
          <EditContainerCorrectsInformer>
            Название
            <KeyboardInput
              value={currentEvent.name}
              onFocus={() => setIsClosedComList(true)}
              onChange={value => {
                setIsClosedComList(true);
                exec(currentEvent.rename(value));
              }}
            />
          </EditContainerCorrectsInformer>

          <div className="list-title sticky">{prevComsLength ? 'Новый список' : 'Прикреплённые песни'}</div>
          {comsLength ? (
            currentEvent.coms?.map((com, comi) => (
              <ComFace
                key={com.wid}
                com={com}
                comi={comi}
                selectable={false}
                description={() => (
                  <div className="flex">
                    {comsLength === 1 ? null : (
                      <IconButton
                        Icon={comi ? IconArrowUp02StrokeRounded : IconArrowDown02StrokeRounded}
                        className="margin-big-gap-h"
                        onClick={event => {
                          event.stopPropagation();
                          exec(currentEvent.moveCom(comi));
                        }}
                      />
                    )}
                    <IconHelpCircleStrokeRounded
                      onClick={event => {
                        event.stopPropagation();
                        exec(currentEvent.removeCom(com));
                      }}
                    />
                  </div>
                )}
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
                  <IconButton
                    Icon={comsLength ? IconArrowUpDoubleStrokeRounded : IconPlusSignStrokeRounded}
                    className="pointer"
                    onClick={event => {
                      event.stopPropagation();
                      exec(currentEvent.mergePrevComs(currentEvent.prevComs));
                    }}
                  />
                )}
              </div>
              {currentEvent.prevComs?.map((com, comi) => (
                <ComFace
                  key={com.wid}
                  com={com}
                  comi={comi}
                  selectable={false}
                  description={() => (
                    <IconButton
                      Icon={comsLength ? IconArrowUp02StrokeRounded : IconPlusSignCircleStrokeRounded}
                      onClick={event => {
                        event.stopPropagation();
                        exec(currentEvent.mergePrevComs([com]));
                      }}
                    />
                  )}
                />
              ))}
            </>
          ) : null}
          <div className="list-title sticky">
            <span>Все песни</span>
            <IconButton
              className="pointer"
              Icon={isClosedComList ? IconViewStrokeRounded : IconViewOffSlashStrokeRounded}
              onClick={() => setIsClosedComList(!isClosedComList)}
            />
          </div>
          {!zcat || isClosedComList ? null : (
            <>
              <DebouncedSearchInput
                placeholder="Поиск песен"
                className="debounced-searcher round-styled margin-gap-v"
                initialTerm={term}
                onSearch={term => zcat.search(term)}
                debounce={500}
                onTermChange={term => setTerm(term)}
              />
              {zcat?.wraps.map(({ com }, wrapi) => {
                return (
                  <ComFace
                    key={com.wid}
                    com={com}
                    comi={wrapi}
                    selectable={false}
                    importantOnClick={() => {
                      goTo({ place: 'com', data: { ccomw: com.wid } }, null, true);
                    }}
                    description={() =>
                      usedComList.indexOf(com) < 0 ? (
                        <IconPlusSignCircleStrokeRounded
                          onClick={event => {
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
