import { useState } from "react";
import SendButton from "../../../../../complect/SendButton";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { leaderExer } from "../../Leader.store";
import { HumanExportable, HumanImportable } from "./People.model";

const ufpLabels = "1".repeat(10).split("");

const lineAsHuman = (line: string): HumanExportable | string => {
  const match = line.match(/^([А-ЯЁа-яё\s]+)([\d.]+)\s*([дмДМ])$/);

  if (match == null) return line;

  const [, name, bDay, sex] = match;
  const [day, month, year] = bDay?.split(/\./) || [];

  if (isNaN(new Date(+year, +month - 1, +day).getTime()))
    return "[Date]" + line;

  return {
    // ts: Date.now() + Math.random(),
    notes: "",
    name: name.trim().replace(/\s+/g, " "),
    bDay: new Date(+year, +month - 1, +day).getTime(),
    isMan: !!/[м]/i.exec(sex),
    ufp1: 0,
    ufp2: 0,
  };
};

export default function HumanMaster({
  human,
  close,
}: {
  human?: HumanImportable;
  close: () => void;
}) {
  const [viewHumanList, updateViewHumanList] = useState<
    (HumanExportable | string)[] | null
  >(null);
  const [name, setName] = useState<string | nil>(human?.name);
  const [notes, setNotes] = useState<string | und>(human?.name);
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [bDay, setBDay] = useState<number | nil>(human?.bDay);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);

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
    <div className="full-container flex column padding-giant-gap">
      {human ? null : (
        <Dropdown
          id={isHumanHeap}
          className="margin-big-gap-v"
          items={[
            {
              id: true,
              title: "Добавить несколько личностей",
            },
            {
              id: false,
              title: "Добавление личности",
            },
          ]}
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
              onChange={(value) => {
                updateViewHumanList(value.split(/\n+/).map((line) => lineAsHuman(line)));
              }}
            />
          </div>
          {viewHumanList?.map((human, humani) => {
            if (typeof human === "string") {
              return (
                <div key={humani} className="error-text">
                  {human}
                </div>
              );
            }
            const bDay = new Date(human.bDay);

            return (
              <div key={humani} className="margin-big-gap-v">
                <div>
                  Имя:
                  <KeyboardInput
                    value={human.name}
                    onChange={(value) => human.name = value}
                  />
                </div>
                <div>
                  Пол:{" "}
                  <Dropdown
                    id={human.isMan}
                    items={[
                      {
                        id: true,
                        title: "Мужской",
                      },
                      {
                        id: false,
                        title: "Женский",
                      },
                    ]}
                    onSelect={({ id }) => (human.isMan = id)}
                  />
                </div>
                <div className={bDay.getTime() ? "" : "error-message"}>
                  Дата рождения:
                  <KeyboardInput
                    value={(bDay.getTime() ? bDay : null)?.toLocaleDateString()}
                    onChange={(value) => {
                      const [day, month, year] = value?.split(/\./) || [];
                      human.bDay = new Date(+year, +month - 1, +day).getTime();
                    }}
                  />
                </div>
                <div>
                  Заметка:
                  <KeyboardInput
                    value={human.notes}
                    onChange={(value) => human.notes = value}
                  />
                </div>
              </div>
            );
          })}
          {<div
            className="pointer"
            onClick={() => {
              leaderExer.send({
                action: "addManyHumans",
                method: "concat",
                args: {
                  value: viewHumanList,
                },
              });
              close();
            }}
          >
            Разобрать
          </div>}
        </>
      ) : (
        <>
          <div className="full-width margin-big-gap-v">
            Фамилия, Имя
            <KeyboardInput
              value={human?.name}
              setIsUnknownSymbols={(char) => !!/[^а-яё ]/i.exec(char)}
              preferLanguage="ru"
              onInput={!human
                ? (value) => takeName(value)
                : (val, prev) => {
                  const value = takeName(val);
                  if (value) {
                    leaderExer.setIfCan({
                      action: "setHumanName",
                      scope: `setHumanName-${human.w}`,
                      method: "set",
                      prev,
                      value,
                      args: {
                        wid: human.w,
                        value,
                      },
                    });
                  }
                }}
            />
          </div>
          {name == null && (
            <div className="error-message">Нужно два слова с больших букв</div>
          )}
          <div className="full-width margin-big-gap-v">
            <Dropdown
              id={isMan}
              placeholder="Пол не указан"
              items={[
                {
                  id: true,
                  title: "Мужской",
                },
                {
                  id: false,
                  title: "Женский",
                },
              ]}
              onSelect={({ id }) => {
                setIsMan(id);
                if (human)
                  leaderExer.setIfCan({
                    action: "setHumanIsMan",
                    scope: `setHumanIsMan-${human.w}`,
                    method: "set",
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
              ["УФП1", "ufp1", "setHumanUfp1"],
              ["УФП2", "ufp2", "setHumanUfp2"],
            ] as [string, keyof HumanImportable, string][]
          ).map(([label, fieldn, action], placei) => {
            return (
              <div
                key={action}
                className="full-width margin-big-gap-v flex between"
              >
                {label + " "}
                {ufpLabels.map((_, ufpi) => {
                  return (
                    <EvaIcon
                      key={ufpi}
                      className="pointer"
                      name={((placei ? ufp2 : ufp1) || 0) - 1 === ufpi
                        ? "radio-button-on"
                        : "radio-button-off"}
                      onClick={() => {
                        const value = ufpi + 1;
                        placei ? setUfp2(value) : setUfp1(value);

                        if (human) {
                          leaderExer.setIfCan({
                            action,
                            scope: `${action}-${human.w}`,
                            method: "set",
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
              value={human?.bDay ? new Date(human.bDay).toLocaleDateString() : ""}
              preferLanguage="ru"
              onInput={!human
                ? (value) => takeTime(value)
                : (value) => {
                  const time = takeTime(value);
                  if (time) {
                    leaderExer.setIfCan({
                      action: "setHumanBDay",
                      scope: `setHumanBDay-${human.w}`,
                      method: "set",
                      prev: human.bDay,
                      value: time,
                      args: {
                        wid: human.w,
                        value: time,
                        humann: human.name,
                      },
                    });
                  }
                }}
            />
          </div>
          {bDay == null && (
            <div className="error-message">Некорректная дата</div>
          )}
          <div className="full-width margin-big-gap-v">
            Заметки
            <KeyboardInput
              value={notes}
              preferLanguage="ru"
              onInput={!human
                ? (val) => setNotes(val)
                : (value, prev) => {
                  leaderExer.setIfCan({
                    action: "setHumanNotes",
                    scope: `setHumanNotes-${human.w}`,
                    method: "set",
                    prev,
                    value,
                    args: {
                      wid: human.w,
                      value,
                      humann: human.name,
                    },
                  });
                }}
            />
          </div>
          <div className="flex around full-width">
            <div
              className="pointer"
              style={{
                color: isInactive ? "green" : "red",
              }}
              onClick={() => {
                setIsInactive(!isInactive);
                if (human)
                  leaderExer.setIfCan({
                    action: "setHumanInactive",
                    scope: `setHumanInactive-${human.w}`,
                    method: "set",
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
              {isInactive
                ? "Разблокировать личность"
                : "Заблокировать личность"}
            </div>
          </div>
          {bDay ? (
            <SendButton
              title={human ? "Сохранить" : "Добавить"}
              confirm={human ? null : "Добавить новую личность?"}
              onSuccess={() => close()}
              onSend={() => {
                if (human) return leaderExer.load();
                return leaderExer.send(
                  {
                    action: "addHuman",
                    method: "push",
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
                  });
              }}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
