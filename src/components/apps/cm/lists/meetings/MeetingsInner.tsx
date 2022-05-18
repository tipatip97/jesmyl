import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import {
  updateCurrentMeetingsContext,
  updateFavoriteMeetings,
} from "../../Cm.store";
import { Meetings } from "./Meetings";

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
  const favorites = useSelector(
    (state: RootState) => state.cm.favoriteMeetings
  );
  const currContext = useSelector(
    (state: RootState) => state.cm.currentMeetingsContext
  );
  const setCurrContext = (context: number[]) =>
    dispatch(updateCurrentMeetingsContext(context));

  useEffect(
    () => onContextNavigate?.(currContext),
    [currContext, onContextNavigate]
  );

  if (!meetings) return null;

  const [contexts, currContextw] = meetings.getContexts(currContext);
  const names = currContext.map((context, contexti) => (
    <span
      key={`context-${contexti}`}
      className="pointer"
      onClick={() => setCurrContext([...currContext].slice(0, contexti + 1))}
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
      {currContext.length ? null : (
        <>
          {favorites.events.map((eventw, eventwi) => {
            const event = meetings.events.find((event) => event.wid === eventw);
            if (!event) return null;
            const { context } = meetings.contexts[event.group] || {};

            return (
              <div key={`event-${eventwi}`} className="relative">
                <BrutalItem
                  icon="calendar-outline"
                  title={event.name}
                  onClick={() => onEventClick(event)}
                  description={<EvaIcon className="fade-05" name="star" />}
                />
                <div className="absolute flex center full-width float-bottom fade-05 pointers-none">
                  {context
                    ?.map((context) => meetings.names[context])
                    .join(" - ")}
                </div>
              </div>
            );
          })}
          {favorites.contexts.map((contextw, contextwi) => {
            const context = meetings.contexts[contextw];
            if (!context) return null;

            return (
              <BrutalItem
                key={`folder-${contextwi}`}
                icon="folder-outline"
                title={
                  meetings.names[context.context[context.context.length - 1]]
                }
                onClick={() => setCurrContext(context.context)}
                description={<EvaIcon name="star" />}
              />
            );
          })}
          <div className="margin-big-gap-v" />
        </>
      )}
      {meetings.events.map((event, eventi) => {
        if (event.group && event.group !== currContextw) return null;
        const isFavorite = favorites.events.indexOf(event.wid) > -1;

        return (
          <BrutalItem
            key={`event-${eventi}`}
            icon="calendar-outline"
            title={event.name}
            onClick={() => onEventClick(event)}
            description={
              currContext.length ? (
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
            key={`folder-${groupi}`}
            icon="folder-outline"
            title={contextn}
            onClick={() => setCurrContext([...currContext, contexti])}
            description={
              currContext.length ? (
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
