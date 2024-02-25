import { useMemo, useState } from 'react';
import BrutalItem from '../../../../../complect/brutal-item/BrutalItem';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import { EditableMeetingsEvent } from './EditableMeetingsEvent';
import { useEditableMeetings } from './useEditableMeetings';

export default function AddContext({ close, currPath }: { close: () => void; currPath: number[] }) {
  const [name, setName] = useState('');
  const { meetings } = useEditableMeetings();
  const exec = useExerExec();
  const [contexts, usedContexts] = meetings?.getNames(currPath) || [[], []];
  const [bindEvents, setBindEvents] = useState<EditableMeetingsEvent[]>([]);

  const [, currGroupw] = meetings?.getContexts(currPath) || [];

  const stack = useMemo(
    () =>
      name &&
      contexts
        .filter(ctx => ctx.toLowerCase().search(name.toLowerCase()) > -1)
        .map(context => {
          return (
            <div
              key={context}
              className="context-item"
              onClick={() => setName(context)}
            >
              {context}
            </div>
          );
        }),
    [contexts, name],
  );

  const switchEvent = (event: EditableMeetingsEvent) => {
    bindEvents.indexOf(event) > -1
      ? setBindEvents(bindEvents.filter(eventw => eventw !== event))
      : setBindEvents([...bindEvents, event]);
  };
  const eventsStack = meetings?.events
    ?.map((event, eventi) => {
      if (event.contextw && event.contextw !== currGroupw) return null;
      return (
        <BrutalItem
          key={eventi}
          icon="calendar-outline"
          title={event.name}
          onClick={() => switchEvent(event)}
          box={
            <input
              type="checkbox"
              checked={bindEvents.indexOf(event) > -1}
              onChange={() => switchEvent(event)}
            />
          }
        />
      );
    })
    .filter(item => item);

  return (
    <div className="add-context flex column full-height padding-big-gap center">
      <KeyboardInput
        className="full-width"
        value={name}
        onChange={value => setName(value)}
      />
      {stack}
      {eventsStack?.length ? (
        <>
          <div>Переместить</div>
          {eventsStack}
        </>
      ) : null}
      <button
        className=""
        disabled={!name || usedContexts.indexOf(name) > -1}
        onClick={() => {
          meetings?.addContext(name, currPath, bindEvents);
          close();
          setTimeout(() => exec());
        }}
      >
        Добавить
      </button>
    </div>
  );
}
