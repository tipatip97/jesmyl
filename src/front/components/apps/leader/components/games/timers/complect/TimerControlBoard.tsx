import { useState } from "react";
import useModal from "../../../../../../../complect/modal/useModal";
import { TeamGameImportable } from "../../../../Leader.model";
import { GameTeamImportable } from "../../teams/GameTeams.model";
import { GameTimerImportable, GameTimerMode } from "../GameTimer.model";
import useGameTimer from "../useGameTimer";
import TimerControlBoardCellItem from "./TimerControlBoardCellItem";
import TimerControlBoardRowPlayButton from "./TimerControlBoardRowPlayButton";
import EvaIcon from "../../../../../../../complect/eva-icon/EvaIcon";
import { LeaderCleans } from "../../../LeaderCleans";

export default function TimerControlBoard({
    teams,
    onTeamsUpdate,
    teamNet,
    timer,
    mode,
    game,
    isNewTimer,
}: {
    isNewTimer: boolean,
    game: TeamGameImportable,
    mode: GameTimerMode,
    timer: GameTimerImportable,
    teams?: GameTeamImportable[],
    teamNet?: GameTeamImportable[][],
    onTeamsUpdate: (teams: GameTeamImportable[]) => void,
}) {
    const [selectedTeamw, setSelectedTeamw] = useState<number | null>(null);
    const [isTeamsResortProcess, setIsTeamsResortProcess] = useState(false);
    const use = useGameTimer(timer.w);
    const { toast, modalNode } = useModal();
    const isCanPlay = mode !== GameTimerMode.TimerTotal && use.isNewTimer && (!timer.finishes || use.isTimerStarted());

    const tableContentNode = teamNet?.map((row, rowi) => {
        return <div key={rowi} className="row">
            <div className="cell flex column ellipsis">
                {row.map((team) => {
                    return <TimerControlBoardCellItem
                        key={team.w}
                        isNewTimer={isNewTimer}
                        rowi={rowi}
                        team={team}
                        teams={teams}
                        timer={timer}
                        game={game}
                        selectedTeamw={selectedTeamw}
                        isHiddenTimers={mode === GameTimerMode.TimerTotal}
                        isTeamCantMove={LeaderCleans.isTeamCantMove(timer, team.w)}
                        isCanPauseForRow={use.isCanPauseForRow(team.w)}
                        onTeamwSelect={(teamw) => setSelectedTeamw(teamw)}
                        onPauseForRow={(teamw, value) => use.pauseForRow(teamw, value)}
                        onTeamsUpdate={(newTeams, teamws) => {
                            setIsTeamsResortProcess(true);
                            onTeamsUpdate(newTeams);
                            use.updateTeamList(teamws)
                                .then(() => setIsTeamsResortProcess(false))
                                .catch(() => {
                                    setIsTeamsResortProcess(false);
                                    toast('Сортировка не удалась', { mood: "ko" });
                                    if (teams) onTeamsUpdate(teams);
                                });
                        }}
                        onFinishTimeChange={(value) => {
                            if (timer.finishes?.[team.w] === value) {
                                toast('Значение не поменялось');
                                return;
                            }
                            if (isNewTimer) use.mapTimer((prevTimer) => ({ ...prevTimer, finishes: { ...prevTimer.finishes, [team.w]: value } }));
                            else return LeaderCleans.changeFinishTime(game.w, timer.w, team.w, value);
                        }}
                    />;
                })}
            </div>
            {isCanPlay
                ? <div className="control-button flex center margin-gap">
                    <TimerControlBoardRowPlayButton
                        onTeamwReset={() => setSelectedTeamw(null)}
                        rowi={rowi}
                        timer={timer}
                        game={game}
                        onStartForRow={(rowi, value) => use.startForRow(rowi, value)}
                    />
                </div>
                : null}
        </div>;
    });

    return <>
        {modalNode}

        {!teamNet?.length || (
            <div className="table-centered-wrapper relative team-list-table margin-big-gap-v">
                <EvaIcon name="loader-outline" className={'teams-resort-loader rotate' + (isTeamsResortProcess ? ' in-process ' : '')} />
                <div className="table">{tableContentNode}</div>
            </div>
        )}
    </>;
}
