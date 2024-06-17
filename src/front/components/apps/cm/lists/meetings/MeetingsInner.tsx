import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrutalItem from '../../../../../complect/brutal-item/BrutalItem';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconCalendar01SolidSharp } from '../../../../../complect/the-icon/icons/calendar-01';
import { IconCalendar02StrokeRounded } from '../../../../../complect/the-icon/icons/calendar-02';
import { IconFolder01StrokeRounded } from '../../../../../complect/the-icon/icons/folder-01';
import { IconStarSolidRounded, IconStarStrokeRounded } from '../../../../../complect/the-icon/icons/star';
import { useActualRef } from '../../../../../complect/useActualRef';
import { RootState } from '../../../../../shared/store';
import { cmStoreActions } from '../../Cm.store';
import useCmNav from '../../base/useCmNav';
import { Meetings } from './Meetings';
import { MeetingsEvent } from './MeetingsEvent';

const favoriteMeetingsSelector = (state: RootState) => state.cm.favoriteMeetings;

export default function MeetingsInner<Meets extends Meetings>({
  meetings,
  onEventClick,
  asEventBox,
  onContextNavigate,
}: {
  meetings: Meets;
  onEventClick: (event: NonUndefined<Meets['event']>) => void;
  onContextNavigate?: (context: number[]) => void;
  asEventBox?: (event: MeetingsEvent) => ReactNode;
}) {
  const dispatch = useDispatch();
  const {
    registerBackAction,
    appRouteData: { eventContext = [] },
    setAppRouteData,
  } = useCmNav();
  const favorites = useSelector(favoriteMeetingsSelector);
  const setCurrContextRef = useActualRef((eventContext: number[]) => setAppRouteData({ eventContext }));
  const onContextNavigateRef = useActualRef(onContextNavigate);
  const eventContextRef = useActualRef(eventContext);

  useEffect(() => {
    onContextNavigateRef.current?.(eventContextRef.current);
    const deregister = registerBackAction(isForceBack => {
      if (!isForceBack && eventContextRef.current.length) {
        setCurrContextRef.current(eventContextRef.current.slice(0, -1));
        return true;
      }
      return false;
    });
    return () => {
      deregister();
    };
  }, [eventContextRef, onContextNavigateRef, registerBackAction, setCurrContextRef]);

  if (!meetings) return null;

  const [contexts, currContextw] = meetings.getContexts(eventContextRef.current);
  const names = eventContextRef.current.map((context, contexti) => (
    <span
      key={contexti}
      className="pointer"
      onClick={() => setCurrContextRef.current([...eventContextRef.current].slice(0, contexti + 1))}
    >
      {contexti ? ' - ' : ''}
      {meetings.names[context]}
    </span>
  ));

  return (
    <>
      <div className="margin-gap-v">
        <span onClick={() => setCurrContextRef.current([])}>Контекст: </span>
        {names.length ? names : 'Все'}
      </div>
      {eventContextRef.current.length ? null : (
        <>
          {favorites.events.map((eventw, eventwi) => {
            const event = meetings.events?.find(event => event.wid === eventw);
            if (!event) return null;
            const { context } = meetings.contexts[event.contextw] || {};

            return (
              <BrutalItem
                key={eventwi}
                icon={<IconCalendar01SolidSharp />}
                title={event.name}
                onClick={() => onEventClick(event as never)}
                box={asEventBox ? asEventBox(event) : <IconStarSolidRounded className="fade-05" />}
                description={
                  <span
                    onClick={event => {
                      event.stopPropagation();
                      setCurrContextRef.current(context);
                    }}
                  >
                    {context?.map(context => meetings.names[context]).join(' - ')}
                  </span>
                }
              />
            );
          })}
          {favorites.contexts.map((contextw, contextwi) => {
            const context = meetings.contexts[contextw];
            if (!context) return null;

            return (
              <div
                key={contextwi}
                className="relative"
              >
                <BrutalItem
                  icon={<IconFolder01StrokeRounded />}
                  title={meetings.names[context.context[context.context.length - 1]]}
                  onClick={() => setCurrContextRef.current(context.context)}
                  box={<IconStarSolidRounded className="fade-05" />}
                />
                <div className="absolute flex center full-width pos-bottom fade-05 pointers-none">
                  {context.context
                    ?.slice(0, -1)
                    .map(context => meetings.names[context])
                    .join(' - ')}
                </div>
              </div>
            );
          })}
        </>
      )}
      {meetings.events?.map((event, eventi) => {
        if (event.contextw && event.contextw !== currContextw) return null;
        const isFavorite = favorites.events.indexOf(event.wid) > -1;

        return (
          <BrutalItem
            key={eventi}
            icon={<IconCalendar02StrokeRounded />}
            title={event.name}
            onClick={() => onEventClick(event as never)}
            box={
              asEventBox ? (
                asEventBox(event)
              ) : eventContextRef.current.length ? (
                <IconButton
                  Icon={isFavorite ? IconStarSolidRounded : IconStarStrokeRounded}
                  onClick={e => {
                    e.stopPropagation();

                    dispatch(
                      cmStoreActions.favoriteMeetings({
                        ...favorites,
                        events: isFavorite
                          ? favorites.events.filter(eventw => eventw !== event.wid)
                          : [...favorites.events, event.wid],
                      }),
                    );
                  }}
                />
              ) : null
            }
          />
        );
      })}
      {contexts.map(([contexti, contextn, contextw], groupi) => {
        const isFavorite = favorites.contexts.indexOf(contextw) > -1;

        return (
          <BrutalItem
            key={groupi}
            icon={<IconFolder01StrokeRounded />}
            title={contextn}
            onClick={() => setCurrContextRef.current([...eventContextRef.current, contexti])}
            box={
              eventContextRef.current.length ? (
                <IconButton
                  Icon={isFavorite ? IconStarSolidRounded : IconStarStrokeRounded}
                  onClick={e => {
                    e.stopPropagation();

                    dispatch(
                      cmStoreActions.favoriteMeetings({
                        ...favorites,
                        contexts: isFavorite
                          ? favorites.contexts.filter(context => context !== contextw)
                          : [...favorites.contexts, contextw],
                      }),
                    );
                  }}
                />
              ) : null
            }
          />
        );
      })}
    </>
  );
}
