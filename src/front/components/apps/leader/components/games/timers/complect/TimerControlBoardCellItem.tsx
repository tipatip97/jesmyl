import { useEffect, useState } from "react";
import EvaButton from "../../../../../../../complect/eva-icon/EvaButton";
import EvaSendButton from "../../../../../../../complect/eva-icon/EvaSendButton";
import KeyboardInput from "../../../../../../../complect/keyboard/KeyboardInput";
import mylib from "../../../../../../../complect/my-lib/MyLib";
import { GameTeamImportable } from "../../teams/GameTeams.model";
import { GameTimerImportable } from "../GameTimer.model";
import TimerControlBoardCellItemStopButton from "./TimerControlBoardCellItemStopButton";
import TimerScreen from "./TimerScreen";
import { TeamGameImportable } from "../../../../Leader.model";
import { LeaderCleans } from "../../../LeaderCleans";

const howMs = mylib.getMilliseconds();

export default function TimerControlBoardCellItem(props: {
    isTeamCantMove: boolean,
    isNewTimer: boolean,
    rowi: number,
    isHiddenTimers: boolean,
    isCanPauseForRow: boolean,
    selectedTeamw: number | null,
    timer: GameTimerImportable,
    team: GameTeamImportable,
    game: TeamGameImportable,
    teams?: GameTeamImportable[],
    onTeamsUpdate: (teams: GameTeamImportable[], teamws: number[]) => void,
    onTeamwSelect: (teamw: number | null) => void,
    onPauseForRow: (teamw: number, value?: number) => void,
    onFinishTimeChange: (newFinish: number) => Promise<unknown> | nil | void,
}) {
    const [isTimeRedact, setIsTimeRedact] = useState(false);
    const start = LeaderCleans.getTimerStartTs(props.timer, props.game, props.rowi);
    const pause = props.timer.finishes?.[props.team.w];
    const [newTimeImagine, setNewTimeImagine] = useState('');

    const getInputValue = (pause: number | und, start: number) => {
        return pause ? LeaderCleans.getTimePeriodAsString(start, pause) : '';
    };

    const [inputValue, setInputValue] = useState(() => getInputValue(pause, start));

    useEffect(() => {
        if (pause) setInputValue(getInputValue(pause, start));
    }, [pause, start]);

    useEffect(() => {
        if (!isTimeRedact) {
            setNewTimeImagine('');
            return;
        }
        const digits = inputValue.split(/\D+/);
        const [millisecondsStr, secondsStr, minutesStr, hoursStr] = digits.reverse();

        let hours = +hoursStr?.padStart(2, '0').slice(0, 2);
        let minutes = +minutesStr?.padStart(2, '0').slice(0, 2);
        let seconds = +secondsStr?.padStart(2, '0').slice(0, 2);
        let milliseconds = +millisecondsStr?.padStart(3, '0').slice(0, 3);

        if (minutes && minutes > 59) minutes = 59;
        if (seconds && seconds > 59) seconds = 59;
        if (milliseconds && milliseconds > 999) milliseconds = 999;

        setNewTimeImagine(
            (hours ? `${hours}:`.padStart(3, '0') : '')
            + (minutes ? `${minutes}:`.padStart(3, '0') : '')
            + (seconds ? `${seconds}.`.padStart(3, '0') : '')
            + ('' + milliseconds).padStart(3, '0')
        );
    }, [inputValue, isTimeRedact]);

    return <div
        className={'TimerControlBoardCellItem flex full-width'
            + (props.isTeamCantMove ? '' : ' pointer ')
            + (props.selectedTeamw ? props.isTeamCantMove ? ' color--2 ' : ' color--7 ' : '  ')
            + (props.selectedTeamw === props.team.w ? ' selected-team ' : '')}
    >
        {!props.isNewTimer || (start && pause)
            ? isTimeRedact
                ? <EvaSendButton
                    name="checkmark-circle-2-outline"
                    onSend={() => {
                        const [millisecondsStr, secondsStr, minutesStr, hoursStr] = newTimeImagine.split(/\D/).reverse();
                        let deltaTime = 0;
                        if (hoursStr) deltaTime += +hoursStr * howMs.inHour;
                        if (minutesStr) deltaTime += +minutesStr * howMs.inMin;
                        if (secondsStr) deltaTime += +secondsStr * howMs.inSec;
                        if (millisecondsStr) deltaTime += +millisecondsStr;

                        setIsTimeRedact(is => !is);
                        return props.onFinishTimeChange(deltaTime ? start + deltaTime : 0);
                    }}
                    onFailure={it => it}
                />
                : <EvaButton
                    name="edit-2-outline"
                    onClick={() => setIsTimeRedact(is => !is)}
                />
            : null}
        <div className="flex column full-width over-hidden">
            <div
                className="team-box full-max-width ellipsis"
                onClick={() => {
                    if (props.team.w === props.selectedTeamw) {
                        props.onTeamwSelect(null);
                        return;
                    }
                    if (props.isTeamCantMove) return;
                    if (!props.selectedTeamw) {
                        props.onTeamwSelect(props.team.w);
                        return;
                    }

                    const newTeams = [...props.teams?.map(({ w }) => w) || []];
                    const selectedi = newTeams.indexOf(props.selectedTeamw);
                    const teami = newTeams.indexOf(props.team.w);
                    [newTeams[selectedi], newTeams[teami]] = [
                        newTeams[teami],
                        newTeams[selectedi],
                    ];
                    props.onTeamsUpdate(
                        newTeams
                            .map((wid) => props.teams?.find((team) => team.w === wid))
                            .filter((team) => team) as GameTeamImportable[],
                        newTeams,
                    );
                    props.onTeamwSelect(null);
                }}
            >
                {props.team.name}
            </div>

            {isTimeRedact
                ? <>
                    {newTimeImagine}
                    <KeyboardInput
                        className="team-rating-manual-redact-input"
                        placeholder="Пробел - разделитель"
                        value={inputValue}
                        onChange={setInputValue}
                    />
                </>
                : (!props.isHiddenTimers || pause) && (props.isNewTimer || pause)
                    ? <TimerScreen
                        className="color--3"
                        start={start}
                        pause={pause}
                    />
                    : null}
        </div>

        {props.isNewTimer && props.isCanPauseForRow && (
            <div className="control-button  center pointer padding-gap">
                <TimerControlBoardCellItemStopButton
                    onPauseForRow={props.onPauseForRow}
                    onTeamwSelect={props.onTeamwSelect}
                    rowi={props.rowi}
                    team={props.team}
                    timer={props.timer}
                    game={props.game}
                />
            </div>
        )}
    </div>;
}
