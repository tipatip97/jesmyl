import { useState } from 'react';
import DebouncedSearchInput from '../../../../../complect/DebouncedSearchInput';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import StrongEvaButton from '../../../../../complect/strong-control/StrongEvaButton';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconArrangeStrokeRounded } from '../../../../../complect/the-icon/icons/arrange';
import { IconCalendar03StrokeRounded } from '../../../../../complect/the-icon/icons/calendar-03';
import { IconCheckmarkSquare02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-square-02';
import { IconLinkBackwardStrokeRounded } from '../../../../../complect/the-icon/icons/link-backward';
import { IconMinusSignSquareStrokeRounded } from '../../../../../complect/the-icon/icons/minus-sign-square';
import { IconPlusSignCircleStrokeRounded } from '../../../../../complect/the-icon/icons/plus-sign-circle';
import { IconSquareStrokeRounded } from '../../../../../complect/the-icon/icons/square';
import { ChordVisibleVariant } from '../../Cm.model';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import ComFace from '../../col/com/face/ComFace';
import MeetingsInner from '../../lists/meetings/MeetingsInner';
import { useMeetings } from '../../lists/meetings/useMeetings';
import { CmComBindAttach } from '../cmExternalAttach';
import TheComForFullScreen from './TheComForFullScreen';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import { IconArrowDataTransferVerticalStrokeRounded } from '../../../../../complect/the-icon/icons/arrow-data-transfer-vertical';

const itIt = (it: unknown) => it;

const cbStopper: CallbackStopper = event => event.stopPropagation();

export default function CmExternalComListAtt({
  value,
  scope,
  isRedact,
  switchIsRedact,
}: {
  value: CmComBindAttach;
  scope: string;
  isRedact?: boolean;
  switchIsRedact: (is?: boolean) => void;
}) {
  const [removedComws, setRemovedComws] = useState<number[]>([]);
  const [ccom, setCcom] = useState<Com | und>();
  const cat = useCcat(true);
  const [term, setTerm] = useState(cat?.term || '');
  const { meetings } = useMeetings();
  const currentEvent = value.eventw == null ? null : meetings?.stack?.find(event => event.w === value.eventw!);

  const [comOrderNode, openComOrder] = useFullContent(() => {
    const comws = value.comws;
    const uniqRemovedComws = comws === undefined ? removedComws : removedComws.filter(comw => !comws.includes(comw));

    return (
      <div className="margin-giant-gap-t">
        {comws?.map((comw, comwi) => {
          const com = cat?.coms.find(com => com.wid === comw);

          if (com === undefined) return null;

          return (
            <ComFace
              key={comw}
              com={com}
              importantOnClick={() => {
                setCcom(com);
                showComposition();
              }}
              description={
                <div className="flex flex-gap">
                  {!comwi || (
                    <StrongEvaButton
                      scope={scope}
                      fieldName="listKey move"
                      fieldKey="comws"
                      fieldValue={{
                        find: ['.', '===', comw],
                        beforei: comwi - 1,
                      }}
                      cud="U"
                      Icon={IconArrowDataTransferVerticalStrokeRounded}
                      className="color--3 margin-giant-gap-b"
                    />
                  )}
                  <StrongEvaButton
                    scope={scope}
                    fieldName="listKey"
                    fieldKey="comws"
                    fieldValue={['.', '===', comw]}
                    cud="D"
                    Icon={IconDelete01StrokeRounded}
                    onSuccess={
                      removedComws.includes(comw) ? undefined : () => setRemovedComws(comws => [...comws, comw])
                    }
                    className="color--ko"
                  />
                </div>
              }
            />
          );
        })}
        {!uniqRemovedComws.length || (
          <>
            <h2>Удалённые песни</h2>
            {uniqRemovedComws.map(comw => {
              const com = cat?.coms.find(com => com.wid === comw);

              return (
                com && (
                  <ComFace
                    key={com.wid}
                    com={com}
                    importantOnClick={() => {
                      setCcom(com);
                      showComposition();
                    }}
                    description={
                      <StrongEvaButton
                        scope={scope}
                        fieldName="listKey"
                        fieldKey="comws"
                        fieldValue={comw}
                        cud="C"
                        Icon={IconLinkBackwardStrokeRounded}
                        className="color--ok"
                        onSuccess={
                          removedComws.includes(comw) ? undefined : () => setRemovedComws(comws => [...comws, comw])
                        }
                      />
                    }
                  />
                )
              );
            })}
          </>
        )}
      </div>
    );
  });

  const [selectorNode] = useFullContent(
    () => {
      return (
        <div className="flex column full-height">
          <div className="flex around full-width margin-big-gap-v">
            <IconButton
              Icon={IconCalendar03StrokeRounded}
              postfix={
                <div className="flex column">
                  <div>Событие</div>
                  {<div className="fade-07">{currentEvent?.n}</div>}
                </div>
              }
              onClick={() => showMeetingBinder()}
            />
            <IconButton
              Icon={IconArrangeStrokeRounded}
              postfix="Порядок песен"
              disabled={!value.comws || value.comws.length < 2}
              onClick={() => openComOrder()}
            />
          </div>
          {cat && (
            <>
              <DebouncedSearchInput
                placeholder="Поиск песен"
                className="debounced-searcher round-styled margin-gap-v"
                initialTerm={term}
                onSearch={term => cat.search(term)}
                debounce={500}
                onTermChange={term => setTerm(term)}
              />
              <div className="margin-gap-t full-height full-width over-y-auto">
                {cat.wraps.map(wrap => {
                  const isIncludes = value.comws?.includes(wrap.com.wid);

                  return (
                    <ComFace
                      key={wrap.com.wid}
                      {...wrap}
                      importantOnClick={() => {
                        setCcom(wrap.com);
                        showComposition();
                      }}
                      description={
                        <div onClick={cbStopper}>
                          {isIncludes ? (
                            <StrongEvaButton
                              scope={scope}
                              fieldName="listKey"
                              fieldKey="comws"
                              fieldValue={['.', '===', wrap.com.wid]}
                              cud="D"
                              Icon={IconMinusSignSquareStrokeRounded}
                              className="color--ko"
                            />
                          ) : (
                            <StrongEvaButton
                              scope={scope}
                              fieldName="listKey"
                              fieldKey="comws"
                              fieldValue={wrap.com.wid}
                              cud="C"
                              Icon={IconPlusSignCircleStrokeRounded}
                            />
                          )}
                        </div>
                      }
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      );
    },
    isRedact ? 'open' : null,
    switchIsRedact,
  );

  const [compositionNode, showComposition] = useFullContent(() => {
    return (
      <TheComForFullScreen
        com={ccom}
        chordVisibleVariant={ChordVisibleVariant.Maximal}
        comList={[...((cat && value.comws?.map(comw => cat.coms.find(com => com.wid === comw)!).filter(itIt)) ?? [])]}
        onComSet={setCcom}
      />
    );
  });

  const [meetingNode, showMeetingBinder] = useFullContent(() => {
    return (
      meetings && (
        <MeetingsInner
          meetings={meetings}
          onEventClick={event => event}
          asEventBox={event =>
            value.eventw === event.wid ? (
              <StrongEvaButton
                scope={scope}
                fieldName="eventw"
                cud="D"
                Icon={IconCheckmarkSquare02StrokeRounded}
              />
            ) : (
              <StrongEvaButton
                scope={scope}
                fieldName="eventw"
                fieldValue={event.wid}
                cud="U"
                Icon={IconSquareStrokeRounded}
              />
            )
          }
        />
      )
    );
  });

  return (
    <>
      {meetingNode}
      {comOrderNode}
      {selectorNode}
      {compositionNode}
      {!currentEvent && !value.comws?.length && <div>Песен нет</div>}
      {(currentEvent ? (value.comws ? [...currentEvent.s, ...value.comws] : currentEvent.s) : value.comws)?.map(
        comw => {
          const com = cat?.coms.find(com => com.wid === comw);
          if (com === undefined) return null;

          return (
            <ComFace
              key={comw}
              com={com}
              importantOnClick={() => {
                setCcom(com);
                showComposition();
              }}
            />
          );
        },
      )}
    </>
  );
}
