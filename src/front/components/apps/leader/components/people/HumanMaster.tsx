import { useState } from 'react';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { IconCheckmarkCircle01StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-01';
import { IconRecordStrokeRounded } from '../../../../../complect/the-icon/icons/record';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { leaderExer } from '../../Leader.store';
import { LeaderCleans } from '../LeaderCleans';
import useLeaderContext from '../contexts/useContexts';
import { HumanExportable, HumanImportable } from './People.model';

const ufpLabels = '1'.repeat(10).split('');
const isNNull = (it: unknown) => it !== null;

const sexItems = [
  {
    id: true,
    title: 'Мужской',
  },
  {
    id: false,
    title: 'Женский',
  },
];

const heapItems = [
  {
    id: true,
    title: 'Добавить несколько личностей',
  },
  {
    id: false,
    title: 'Добавление личности',
  },
];

const prepareSearchName = (name: string) => {
  return name.replace(/ё/i, 'е').toUpperCase();
};

const lineAsHuman = (line: string, upperExistsNames: string[]): HumanExportable => {
  const match = line.match(/^([А-ЯЁа-яё\s]+)([\d.]+)\s*([дмДМ])?$/);

  if (match == null) return null!;
  const [, humanName, bDay, sex] = match;
  const name = humanName.trim().replace(/\s+/g, ' ');

  if (
    upperExistsNames.includes(prepareSearchName(name)) ||
    upperExistsNames.includes(prepareSearchName(name.split(' ').reverse().join(' ')))
  )
    return null!;

  const [day, month, year] = bDay?.split(/\./) || [];

  if (isNaN(new Date(+year, +month - 1, +day).getTime())) return null!;

  return {
    notes: '',
    name,
    bDay: new Date(+year, +month - 1, +day).getTime(),
    isMan: sex ? !!/м/i.exec(sex) : name.match(/[^аяь]$/i) !== null,
    ufp1: 0,
    ufp2: 0,
  };
};

export default function HumanMaster({
  human,
  close,
  pushInCcontextAs,
}: {
  human?: HumanImportable;
  close: () => void;
  pushInCcontextAs?: 'mentors' | 'members';
}) {
  const [viewHumanList, updateViewHumanList] = useState<(HumanExportable | string)[] | null>(null);
  const [name, setName] = useState<string | nil>(human?.name);
  const [notes, setNotes] = useState<string | und>(human?.name);
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [bDay, setBDay] = useState<number | nil>(human?.bDay);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);
  const { humans, ccontext } = useLeaderContext();

  const takeName = (value: string) => {
    if (value.match(/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/)) {
      setName(value);
      return value;
    }
    setName(null);
    return null;
  };

  const takeTime = (value: string) => {
    const [day, month, year] = value?.split(/\./) || [];
    let time: number | null = new Date(+year, +month - 1, +day).getTime();

    if (time < 0 || !time) time = null;

    setBDay(time);

    return time;
  };

  return (
    <div className="flex column padding-giant-gap">
      {pushInCcontextAs || human ? null : (
        <Dropdown
          id={isHumanHeap}
          className="margin-big-gap-v"
          items={heapItems}
          onSelect={({ id }) => setIsHumanHeap(id)}
        />
      )}
      {isHumanHeap ? (
        <>
          <div className="full-width">
            <KeyboardInput
              className="input"
              multiline
              placeholder="Массив личностей"
              onChange={value => {
                const existsNames = humans?.map(human => prepareSearchName(human.name)) ?? [];

                updateViewHumanList(
                  value
                    .split(/\n+/)
                    .map(line => lineAsHuman(line, existsNames))
                    .filter(isNNull),
                );
              }}
            />
          </div>
          {viewHumanList?.map((human, humani) => {
            if (typeof human === 'string') {
              return (
                <div
                  key={humani}
                  className="error-text"
                >
                  {human}
                </div>
              );
            }
            const bDay = new Date(human.bDay);

            return (
              <div
                key={humani}
                className="margin-big-gap-v"
              >
                <div>
                  Имя:
                  <KeyboardInput
                    value={human.name}
                    onChange={value => (human.name = value)}
                  />
                </div>
                <div>
                  Пол:{' '}
                  <Dropdown
                    id={human.isMan}
                    items={sexItems}
                    onSelect={({ id }) => {
                      human.isMan = id;
                    }}
                  />
                </div>
                <div className={bDay.getTime() ? '' : 'error-message'}>
                  Дата рождения:
                  <KeyboardInput
                    value={(bDay.getTime() ? bDay : null)?.toLocaleDateString()}
                    onChange={value => {
                      const [day, month, year] = value?.split(/\./) || [];
                      human.bDay = new Date(+year, +month - 1, +day).getTime();
                    }}
                  />
                </div>
                <div>
                  Заметка:
                  <KeyboardInput
                    value={human.notes}
                    onChange={value => (human.notes = value)}
                  />
                </div>
              </div>
            );
          })}
          {
            <div
              className="margin-big-gap pointer"
              onClick={() => {
                leaderExer.send({
                  action: 'addManyHumans',
                  method: 'concat',
                  args: {
                    value: viewHumanList,
                  },
                });
                close();
              }}
            >
              Отправить список
            </div>
          }
        </>
      ) : (
        <>
          <div className="full-width margin-big-gap-v">
            Фамилия, Имя
            <KeyboardInput
              value={human?.name}
              setIsUnknownSymbols={char => !!/[^а-яё ]/i.exec(char)}
              preferLanguage="ru"
              onInput={
                !human
                  ? value => takeName(value)
                  : (val, prev) => {
                      const value = takeName(val);
                      if (value) {
                        leaderExer.set({
                          action: 'setHumanName',
                          scope: `setHumanName-${human.w}`,
                          method: 'set',
                          prev,
                          value,
                          args: {
                            wid: human.w,
                            value,
                          },
                        });
                      }
                    }
              }
            />
          </div>
          {name == null && <div className="error-message">Нужно два слова с больших букв</div>}
          <div className="full-width margin-big-gap-v">
            <Dropdown
              id={isMan}
              placeholder="Пол не указан"
              items={sexItems}
              onSelect={({ id }) => {
                setIsMan(id);
                if (human)
                  leaderExer.set({
                    action: 'setHumanIsMan',
                    scope: `setHumanIsMan-${human.w}`,
                    method: 'set',
                    prev: human.isMan,
                    value: !isMan,
                    args: {
                      wid: human.w,
                      value: !isMan,
                      humann: human.name,
                    },
                  });
              }}
            />
          </div>
          {(
            [
              ['УФП1', 'ufp1', 'setHumanUfp1'],
              ['УФП2', 'ufp2', 'setHumanUfp2'],
            ] as [string, keyof HumanImportable, string][]
          ).map(([label, fieldn, action], placei) => {
            return (
              <div
                key={action}
                className="full-width margin-big-gap-v flex between"
              >
                {label + ' '}
                {ufpLabels.map((_, ufpi) => {
                  const Icon =
                    ((placei ? ufp2 : ufp1) || 0) - 1 === ufpi
                      ? IconCheckmarkCircle01StrokeRounded
                      : IconRecordStrokeRounded;

                  return (
                    <Icon
                      key={ufpi}
                      className="pointer"
                      onClick={() => {
                        const value = ufpi + 1;
                        placei ? setUfp2(value) : setUfp1(value);

                        if (human) {
                          leaderExer.set({
                            action,
                            scope: `${action}-${human.w}`,
                            method: 'set',
                            prev: human[fieldn],
                            value,
                            args: {
                              wid: human.w,
                              value,
                              humann: human.name,
                            },
                          });
                        }
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="full-width margin-big-gap-v">
            Дата рождения
            <KeyboardInput
              value={human?.bDay ? new Date(human.bDay).toLocaleDateString() : ''}
              preferLanguage="ru"
              onInput={
                !human
                  ? value => takeTime(value)
                  : value => {
                      const time = takeTime(value);
                      if (time) {
                        leaderExer.set({
                          action: 'setHumanBDay',
                          scope: `setHumanBDay-${human.w}`,
                          method: 'set',
                          prev: human.bDay,
                          value: time,
                          args: {
                            wid: human.w,
                            value: time,
                            humann: human.name,
                          },
                        });
                      }
                    }
              }
            />
          </div>
          {bDay == null && <div className="error-message">Некорректная дата</div>}
          <div className="full-width margin-big-gap-v">
            Заметки
            <KeyboardInput
              value={notes}
              preferLanguage="ru"
              onInput={
                !human
                  ? val => setNotes(val)
                  : (value, prev) => {
                      leaderExer.set({
                        action: 'setHumanNotes',
                        scope: `setHumanNotes-${human.w}`,
                        method: 'set',
                        prev,
                        value,
                        args: {
                          wid: human.w,
                          value,
                          humann: human.name,
                        },
                      });
                    }
              }
            />
          </div>
          <div className="flex around full-width">
            <div
              className="pointer"
              style={{
                color: isInactive ? 'green' : 'red',
              }}
              onClick={() => {
                setIsInactive(!isInactive);
                if (human)
                  leaderExer.set({
                    action: 'setHumanInactive',
                    scope: `setHumanInactive-${human.w}`,
                    method: 'set',
                    prev: !!human.isInactive,
                    value: !isInactive,
                    args: {
                      wid: human.w,
                      value: !isInactive,
                      humann: human.name,
                    },
                  });
              }}
            >
              {isInactive ? 'Разблокировать личность' : 'Заблокировать личность'}
            </div>
          </div>
          {bDay ? (
            <SendButton
              title={human ? 'Сохранить' : 'Добавить'}
              confirm={human ? null : 'Добавить новую личность?'}
              onSuccess={result => {
                if (pushInCcontextAs && result && ccontext) {
                  const humanw = result.execs?.list[0]?.value.w;
                  if (humanw) LeaderCleans.addContextHuman(ccontext.w, humanw, pushInCcontextAs).then(() => close());
                }
              }}
              onSend={() => {
                if (human) return leaderExer.load();
                return leaderExer.send({
                  action: 'addHuman',
                  method: 'push',
                  args: {
                    name,
                    isMan,
                    notes,
                    ufp1,
                    ufp2,
                    bDay,
                    ts: Date.now() + Math.random(),
                    isInactive,
                  } as HumanExportable,
                  onLoad: (exec, result) => {},
                });
              }}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
