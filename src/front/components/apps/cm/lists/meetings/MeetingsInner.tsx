import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { updateFavoriteMeetings } from "../../Cm.store";
import { Meetings } from "./Meetings";

const favoriteMeetingsSelector = (state: RootState) => state.cm.favoriteMeetings;

export default function MeetingsInner<Meets extends Meetings>({
  meetings,
  onEventClick,
  onContextNavigate,
}: {
  meetings: Meets;
  onEventClick: (event: Meets["event"]) => void;
  onContextNavigate?: (context: number[]) => void;
}) {
  const dispatch = useDispatch();
  const { registerBackAction, appRouteData: { eventContext = [] }, setAppRouteData } = useCmNav();
  const favorites = useSelector(favoriteMeetingsSelector);
  const setCurrContext = (eventContext: number[]) => setAppRouteData({ eventContext });

  useEffect(() => {
    onContextNavigate?.(eventContext);
    const deregister = registerBackAction((isForceBack) => {
      if (!isForceBack && eventContext.length) {
        setCurrContext(eventContext.slice(0, -1));
        return true;
      }
      return false;
    });
    return () => {
      deregister();
    };
  }, [eventContext, onContextNavigate]);

  if (!meetings) return null;

  const [contexts, currContextw] = meetings.getContexts(eventContext);
  const names = eventContext.map((context, contexti) => (
    <span
      key={contexti}
      className="pointer"
      onClick={() => setCurrContext([...eventContext].slice(0, contexti + 1))}
    >
      {contexti ? " - " : ""}
      {meetings.names[context]}
    </span>
  ));

  return (
    <>
      <div className="margin-gap-v">
        <span onClick={() => setCurrContext([])}>Контекст: </span>
        {names.length ? names : "Все"}
      </div>
      {eventContext.length ? null : (
        <>
          {favorites.events.map((eventw, eventwi) => {
            const event = meetings.events.find((event) => event.wid === eventw);
            if (!event) return null;
            const { context } = meetings.contexts[event.contextw] || {};

            return (
              <BrutalItem
                key={eventwi}
                icon="calendar-outline"
                title={event.name}
                onClick={() => onEventClick(event)}
                box={<EvaIcon className="fade-05" name="star" />}
                description={
                  <span
                    onClick={(event) => {
                      event.stopPropagation();
                      setCurrContext(context);
                    }}
                  >
                    {context
                      ?.map((context) => meetings.names[context])
                      .join(" - ")}
                  </span>
                }
              />
            );
          })}
          {favorites.contexts.map((contextw, contextwi) => {
            const context = meetings.contexts[contextw];
            if (!context) return null;

            return (
              <div key={contextwi} className="relative">
                <BrutalItem
                  icon="folder-outline"
                  title={
                    meetings.names[context.context[context.context.length - 1]]
                  }
                  onClick={() => setCurrContext(context.context)}
                  box={<EvaIcon className="fade-05" name="star" />}
                />
                <div className="absolute flex center full-width pos-bottom fade-05 pointers-none">
                  {context.context
                    ?.slice(0, -1)
                    .map((context) => meetings.names[context])
                    .join(" - ")}
                </div>
              </div>
            );
          })}
        </>
      )}
      {meetings.events.map((event, eventi) => {
        if (event.contextw && event.contextw !== currContextw) return null;
        const isFavorite = favorites.events.indexOf(event.wid) > -1;

        return (
          <BrutalItem
            key={eventi}
            icon="calendar-outline"
            title={event.name}
            onClick={() => onEventClick(event)}
            box={
              eventContext.length ? (
                <EvaIcon
                  name={isFavorite ? "star" : "star-outline"}
                  onClick={(e) => {
                    e.stopPropagation();

                    dispatch(
                      updateFavoriteMeetings({
                        ...favorites,
                        events: isFavorite
                          ? favorites.events.filter(
                            (eventw) => eventw !== event.wid
                          )
                          : [...favorites.events, event.wid],
                      })
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
            icon="folder-outline"
            title={contextn}
            onClick={() => setCurrContext([...eventContext, contexti])}
            box={
              eventContext.length ? (
                <EvaIcon
                  name={isFavorite ? "star" : "star-outline"}
                  onClick={(e) => {
                    e.stopPropagation();

                    dispatch(
                      updateFavoriteMeetings({
                        ...favorites,
                        contexts: isFavorite
                          ? favorites.contexts.filter(
                            (context) => context !== contextw
                          )
                          : [...favorites.contexts, contextw],
                      })
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
