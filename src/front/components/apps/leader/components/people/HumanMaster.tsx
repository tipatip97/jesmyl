import { useEffect, useMemo, useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../complect/modal/Modal.service";
import SendButton from "../../../../../complect/SendButton";
import { leaderExer } from "../../Leader.store";
import useLeaderContexts from "../contexts/useContexts";
import Human from "./Human";
import { HumanExportable } from "./People.model";

const ufpLabels = "1".repeat(10).split("");

const lineAsHuman = (line: string): HumanExportable | string => {
  const match = line.match(/^([А-ЯЁа-яё\s]+)([\d.]+)\s*([дмДМ])$/);

  if (match == null) return line;

  const [, name, bDay, sex] = match;
  const [day, month, year] = bDay?.split(/\./) || [];

  if (isNaN(new Date(+year, +month - 1, +day).getTime()))
    return "[Date]" + line;

  return {
    ts: Date.now() + Math.random(),
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
  human?: Human;
  close: () => void;
}) {
  const [viewHumanList, updateViewHumanList] = useState<
    (HumanExportable | string)[] | null
  >(null);
  const [name, setName] = useState<string | nil>(human?.name);
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [bDay, setBDay] = useState<number | nil>(human?.bDay);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);
  const inputGenerator = useKeyboard();
  const { ccontext } = useLeaderContexts();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  const takeName = (value: string) => {
    if (value.match(/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/)) {
      setName(value);
      return value;
    }
    setName(null);
    return null;
  };

  const nameInput = inputGenerator("human-name", {
    theValue: human?.name,
    setIsUnknownSymbols: (char) => !!/[^а-яё ]/i.exec(char),
    preferLanguage: "ru",
    onInput: !human
      ? (value) => takeName(value)
      : (value, prev) => {
          const name = takeName(value);
          if (name) {
            leaderExer.setIfCan({
              action: "setHumanName",
              scope: `setHumanName-${human.wid}`,
              method: "set",
              prev,
              value,
              args: {
                wid: human.wid,
                value,
              },
            });
          }
        },
  });

  const notesInput = inputGenerator("human-notes", {
    theValue: human?.notes,
    preferLanguage: "ru",
    onInput: !human
      ? undefined
      : (value, prev) => {
          leaderExer.setIfCan({
            action: "setHumanNotes",
            scope: `setHumanNotes-${human.wid}`,
            method: "set",
            prev,
            value,
            args: {
              wid: human.wid,
              value,
              humann: human.name,
            },
          });
        },
  });

  const takeTime = (value: string) => {
    const [day, month, year] = value?.split(/\./) || [];
    let time: number | null = new Date(+year, +month - 1, +day).getTime();

    if (time < 0 || !time) time = null;

    setBDay(time);

    return time;
  };

  const bDayInput = inputGenerator("human-bday", {
    theValue: human?.bDay ? new Date(human.bDay).toLocaleDateString() : "",
    preferLanguage: "ru",
    onInput: !human
      ? (value) => takeTime(value)
      : (value) => {
          const time = takeTime(value);
          if (time) {
            leaderExer.setIfCan({
              action: "setHumanBDay",
              scope: `setHumanBDay-${human.wid}`,
              method: "set",
              prev: human.bDay,
              value: time,
              args: {
                wid: human.wid,
                value: time,
                humann: human.name,
              },
            });
          }
        },
  });

  const heapInput = inputGenerator(`heap-human-input`, {
    className: "input",
    multiline: true,
    placeholder: "Массив личностей",
    onChange: (value) => {
      updateViewHumanList(value.split(/\n+/).map((line) => lineAsHuman(line)));
    },
    theValue: "",
  });

  useEffect(() => {
    return () => {
      nameInput.remove();
      notesInput.remove();
      bDayInput.remove();
      leaderExer.clear();
    };
  }, []);

  const includeToGroupButton = useMemo(() => {
    if (!ccontext) return null;
    const wraps = (human && ccontext.getMembersInGroups([human.wid])) || [];
    const title = (txt = "", txt2 = "") =>
      `${
        wraps.length ? "Переопределить" : "Определить"
      }${txt} в группу ${txt2}`;

    return (
      <div
        className="pointer"
        onClick={() => {
          const groupws = wraps.map(({ group: { wid } }) => wid);

          openAbsoluteBottomPopup(
            ccontext.groups?.map((group) => {
              return (
                <div
                  className={`abs-item pointer ${
                    groupws.indexOf(group.wid) < 0 ? "" : "disabled"
                  }`}
                  onClick={async () => {
                    if (
                      human &&
                      (await modalService.confirm(
                        title(` участника "${human.name}"`, `${group.name}?`)
                      ))
                    ) {
                      group
                        .replaceMemberToGroup(
                          ccontext.wid,
                          human.wid,
                          wraps.map(({ group }) => group)
                        )
                        .then(() => close());
                    }
                  }}
                >
                  <EvaIcon name="people-outline" className="abs-icon" />
                  <div>{group.name}</div>
                  <div className="abs-action"></div>
                </div>
              );
            })
          );
        }}
      >
        {title()}
      </div>
    );
  }, []);

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
          <div className="full-width">{heapInput.node}</div>
          {viewHumanList?.map((human, humani) => {
            if (typeof human === "string") {
              return (
                <div key={`incorrect-humani-${humani}`} className="error-text">
                  {human}
                </div>
              );
            }
            const bDay = new Date(human.bDay);
            const nameInput = inputGenerator(`viewHumanList-name-${human.ts}`, {
              theValue: human.name,
              onChange: (value) => {
                human.name = value;
              },
            });
            const notesInput = inputGenerator(
              `viewHumanList-notes-${human.ts}`,
              {
                theValue: human.notes,
                onChange: (value) => {
                  human.notes = value;
                },
              }
            );
            const bDayInput = inputGenerator(`viewHumanList-bday-${human.ts}`, {
              theValue: (bDay.getTime()
                ? bDay
                : null
              )?.toLocaleDateString(),
              onChange: (value) => {
                const [day, month, year] = value?.split(/\./) || [];
                human.bDay = new Date(+year, +month - 1, +day).getTime();
              },
            });

            return (
              <div key={`humani-${humani}`} className="margin-big-gap-v">
                <div>Имя: {nameInput.node}</div>
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
                  Дата рождения: {bDayInput.node}
                </div>
                <div>Заметка: {notesInput.node}</div>
              </div>
            );
          })}
          {heapInput.value() ? (
            <div
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
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="full-width margin-big-gap-v">
            Фамилия, Имя {nameInput.node}
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
                    scope: `setHumanIsMan-${human.wid}`,
                    method: "set",
                    prev: human.isMan,
                    value: !isMan,
                    args: {
                      wid: human.wid,
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
            ] as [string, keyof Human, string][]
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
                      key={`${fieldn}${ufpi}`}
                      className="pointer"
                      name={`radio-button-${
                        ((placei ? ufp2 : ufp1) || 0) - 1 === ufpi
                          ? "on"
                          : "off"
                      }`}
                      onClick={() => {
                        const value = ufpi + 1;
                        placei ? setUfp2(value) : setUfp1(value);

                        if (human) {
                          leaderExer.setIfCan({
                            action,
                            scope: `${action}-${human.wid}`,
                            method: "set",
                            prev: human[fieldn],
                            value,
                            args: {
                              wid: human.wid,
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
            Дата рождения {bDayInput.node}
          </div>
          {bDay == null && (
            <div className="error-message">Некорректная дата</div>
          )}
          <div className="full-width margin-big-gap-v">
            Заметки {notesInput.node}
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
                    scope: `setHumanInactive-${human.wid}`,
                    method: "set",
                    prev: !!human.isInactive,
                    value: !isInactive,
                    args: {
                      wid: human.wid,
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
            {includeToGroupButton}
          </div>
          {bDay && bDayInput.value() && nameInput.value() ? (
            <SendButton
              title={human ? "Сохранить" : "Добавить"}
              confirm={human ? null : "Добавить новую личность?"}
              onSuccess={() => close()}
              onSend={() => {
                notesInput.remove();
                nameInput.remove();

                return new Promise(async (res, rej) => {
                  if (human) {
                    leaderExer.load(res, rej);
                  } else {
                    leaderExer.send(
                      {
                        action: "addHuman",
                        method: "push",
                        args: {
                          name: nameInput.value(),
                          isMan,
                          notes: notesInput.value(),
                          ufp1,
                          ufp2,
                          bDay,
                          ts: Date.now() + Math.random(),
                          isInactive,
                        } as HumanExportable,
                      },
                      res,
                      rej
                    );
                  }
                });
              }}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
