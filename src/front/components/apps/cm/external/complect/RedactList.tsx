import { useState } from 'react';
import DebouncedSearchInput from '../../../../../complect/DebouncedSearchInput';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import StrongEvaButton from '../../../../../complect/strong-control/StrongEvaButton';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconArrangeStrokeRounded } from '../../../../../complect/the-icon/icons/arrange';
import { IconCalendar03StrokeRounded } from '../../../../../complect/the-icon/icons/calendar-03';
import { IconCheckmarkSquare02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-square-02';
import { IconMinusSignSquareStrokeRounded } from '../../../../../complect/the-icon/icons/minus-sign-square';
import { IconPlusSignCircleStrokeRounded } from '../../../../../complect/the-icon/icons/plus-sign-circle';
import { IconSquareStrokeRounded } from '../../../../../complect/the-icon/icons/square';
import { CmComBindAttach } from '../../../../../models';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import { ComFace } from '../../col/com/face/ComFace';
import MeetingsInner from '../../lists/meetings/MeetingsInner';
import { useMeetings } from '../../lists/meetings/useMeetings';
import CmExternalComListAttRedactListOrder from './RedactListOrder';

const cbStopper: CallbackStopper = event => event.stopPropagation();
const emptyFunc = () => {};

interface Props {
  value: CmComBindAttach;
  scope: string;
  setCcom: (com: Com) => void;
  setIsOpenComposition: (isOpen: boolean) => void;
}

export default function CmExternalComListAttRedactList({ value, scope, setCcom, setIsOpenComposition }: Props) {
  const cat = useCcat(true);

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isMeetingBinderOpen, setIsMeetingBinderOpen] = useState(false);
  const [term, setTerm] = useState(cat?.term || '');
  const { meetings } = useMeetings();
  const currentEvent = value.eventw == null ? null : meetings?.stack?.find(event => event.w === value.eventw!);

  return (
    <>
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
            onClick={() => setIsMeetingBinderOpen(true)}
          />
          <IconButton
            Icon={IconArrangeStrokeRounded}
            postfix="Порядок песен"
            disabled={!value.comws || value.comws.length < 2}
            onClick={() => setIsOrderOpen(true)}
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
              {cat.wraps.map((wrap, wrapi) => {
                const isIncludes = value.comws?.includes(wrap.item.wid);

                return (
                  <ComFace
                    key={wrap.item.wid}
                    comi={wrapi}
                    {...wrap}
                    com={wrap.item}
                    importantOnClick={() => {
                      setCcom(wrap.item);
                      setIsOpenComposition(true);
                    }}
                    description={() => (
                      <div onClick={cbStopper}>
                        {isIncludes ? (
                          <StrongEvaButton
                            scope={scope}
                            fieldName="listKey"
                            fieldKey="comws"
                            fieldValue={['.', '===', wrap.item.wid]}
                            cud="D"
                            Icon={IconMinusSignSquareStrokeRounded}
                            className="color--ko"
                          />
                        ) : (
                          <StrongEvaButton
                            scope={scope}
                            fieldName="listKey"
                            fieldKey="comws"
                            fieldValue={wrap.item.wid}
                            cud="C"
                            Icon={IconPlusSignCircleStrokeRounded}
                          />
                        )}
                      </div>
                    )}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {isMeetingBinderOpen && meetings && (
        <FullContent onClose={setIsMeetingBinderOpen}>
          <MeetingsInner
            meetings={meetings}
            onEventClick={emptyFunc}
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
        </FullContent>
      )}

      {isOrderOpen && (
        <FullContent onClose={setIsOrderOpen}>
          <CmExternalComListAttRedactListOrder
            scope={scope}
            value={value}
            setCcom={setCcom}
          />
        </FullContent>
      )}
    </>
  );
}
