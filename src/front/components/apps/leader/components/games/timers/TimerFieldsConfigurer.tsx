import { useEffect, useMemo, useState } from "react";
import SendButton from "../../../../../../complect/SendButton";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { TeamGameImportable } from "../../../Leader.model";
import { leaderExer } from "../../../Leader.store";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import { GameTeamImportable } from "../teams/GameTeams.model";
import { GameTimerConfigurable, GameTimerMode } from "./GameTimer.model";
import TimerCompetitionsSelector from "./TimerCompetitionsSelector";
import TimerModeSelector from "./TimerModeSelector";
import useGames from "../useGames";

export default function TimerFieldsConfigurer({
  redact,
  redactable,
  onSend,
  onUpdate,
  game
}: {
  timerFields?: GameTimerConfigurable;
  redact?: boolean;
  redactable?: boolean;
  game?: TeamGameImportable;
  onUpdate?: (fields: GameTimerConfigurable) => void;
  onSend?: (fields: GameTimerConfigurable) => Promise<unknown> | und;
}) {

  const fields = game?.timerFields || ({} as GameTimerConfigurable);
  const [modeState, setMode] = useState<GameTimerMode | null>(null);
  const [joinsState, setJoins] = useState<number | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { editIcon, isRedact, setIsRedact } = useIsRedactArea(
    redactable,
    redact
  );
  const { publicateGameTimerFields } = useGames();

  const mode = useMemo(
    () => modeState ?? fields.mode ?? GameTimerMode.None,
    [fields.mode, modeState]
  );
  const joins = useMemo(
    () => joinsState ?? fields.joins ?? 0,
    [fields.joins, joinsState]
  );

  const [teamsState, updateTeams] = useState<GameTeamImportable[] | und>(game?.teams);
  const teams = useMemo(() => {
    const teams = [...(teamsState ?? (game?.teams || []))];
    const fieldTeams = fields.teams;
    if (fieldTeams)
      teams?.sort(
        ({ w: a }, { w: b }) =>
          fieldTeams.indexOf(a) - fieldTeams.indexOf(b)
      );

    return teams;
  }, [game?.teams, fields.teams, teamsState]);

  const resultDict = useMemo(
    () => ({ mode, joins, teams: teamsState }),
    [joins, mode, teamsState]
  );

  useEffect(
    () =>
      onUpdate?.({
        ...resultDict,
        teams: resultDict.teams?.map(({ w }) => w),
      }),
    [resultDict]
  );

  if (!game || !leaderExer.actionAccessedOrNull("updateGameTimerFields")) return null;

  return (
    <div className="margin-gap">
      <h2 className="flex flex-gap">
        Значения полей в таймерах
        {editIcon}
      </h2>
      <div className={isSending ? "disabled" : ""}>
        <TimerModeSelector
          mode={mode}
          addItems={[
            {
              id: GameTimerMode.None,
              title: "Свободный выбор",
            },
          ]}
          isRedact={isRedact}
          onSelect={({ id }) => setMode(id)}
        />
        <TimerCompetitionsSelector
          joins={joins}
          addItems={[
            {
              id: GameTimerMode.None,
              title: "Свободный выбор",
            },
          ]}
          isRedact={isRedact}
          onSelect={({ id }) => setJoins(id)}
        />
        <div>
          <div className="flex flex-gap">
            Последовательность команд
            {isRedact ? (
              teamsState && (
                <EvaIcon name="close" onClick={() => updateTeams(undefined)} />
              )
            ) : (
              <div className="color--3">
                {fields.teams ? "Специальная сортировка" : "По умолчанию"}
              </div>
            )}
          </div>
          {isRedact &&
            teams?.map((team, teami) => {
              return (
                <div
                  key={teami}
                  className={
                    'flex flex-gap'
                    + (joins && !((teami + 1) % joins) ? "margin-big-gap-b" : "")}
                >
                  <EvaIcon
                    name={teami ? "corner-left-up" : "corner-left-down"}
                    className="as-button-circle"
                    onClick={() => {
                      const newTeams = [...teams];
                      if (teami)
                        [newTeams[teami - 1], newTeams[teami]] = [
                          newTeams[teami],
                          newTeams[teami - 1],
                        ];
                      else
                        [newTeams[teami + 1], newTeams[teami]] = [
                          newTeams[teami],
                          newTeams[teami + 1],
                        ];

                      if (mylib.isEq(newTeams, game.teams))
                        updateTeams(undefined);
                      else updateTeams(newTeams);
                    }}
                  />
                  {team.name}
                </div>
              );
            })}
        </div>
      </div>
      {isRedact && onSend && !mylib.isEq(fields, resultDict) && (
        <div>
          <SendButton
            title="Отправить значения"
            confirm
            onFailure={() => setIsSending(false)}
            onSuccess={() => {
              setIsSending(false);
              setIsRedact(false);
            }}
            onSend={() => {
              setIsSending(true);
              return publicateGameTimerFields(game.w, {
                ...resultDict,
                teams: resultDict.teams?.map(({ w }) => w),
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
