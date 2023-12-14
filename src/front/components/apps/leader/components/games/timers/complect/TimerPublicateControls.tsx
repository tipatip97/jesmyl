import SendButton from "../../../../../../../complect/sends/send-button/SendButton";
import modalService from "../../../../../../../complect/modal/Modal.service";
import { TeamGameImportable } from "../../../../Leader.model";
import { LeaderCleans } from "../../../LeaderCleans";
import { GameTimerImportable } from "../GameTimer.model";
import useGameTimer from "../useGameTimer";

export default function TimerPublicateControls({
    isNewTimer,
    newCommentText,
    name,
    isTeamsTaken,
    timer,
    game,
    generalTimerw,
    onSuccess,
}: {
    generalTimerw: number,
    onSuccess: () => void,
    isNewTimer: boolean,
    newCommentText: string,
    name?: string,
    isTeamsTaken: boolean,
    timer: GameTimerImportable,
    game: TeamGameImportable,
}) {
    const use = useGameTimer(game, generalTimerw);

    if (!game) return null;

    return <>{isNewTimer
        ? <div className="flex around flex-gap margin-big-gap">
            {newCommentText
                ? <div className="error-message">Комментарий не отправлен</div>
                : !name
                    ? <div className="error-message">Нет названия таймера</div>
                    : !isTeamsTaken
                        ? <div className="flex center color--3">
                            Команды ещё не сформированы
                        </div>
                        : <SendButton
                            title="Опубликовать таймер"
                            confirm
                            onSuccess={() => {
                                use.updateTimer(null);
                                onSuccess();
                            }}
                            onSend={() => {
                                if (!game.teams) return;
                                return LeaderCleans.publicateTimer(game.w, {
                                    ...timer,
                                    mode: LeaderCleans.getTimerConfigurableField('mode', timer, game),
                                    joins: LeaderCleans.getTimerConfigurableField('joins', timer, game),
                                    sort: LeaderCleans.getTimerConfigurableField('sort', timer, game),
                                    teams: LeaderCleans.getTimerConfigurableFieldAsIs('teams', timer, game) ?? game.teams.map(it => it.w),
                                });
                            }}
                        />}
        </div>
        : <div
            className={`flex center pointer ${timer.isInactive ? "color--3" : "error-message"}`}
            onClick={async () => {
                if (
                    await modalService.confirm(
                        timer.isInactive
                            ? "Восстановить таймер?"
                            : "Исключить таймер?"
                    )
                )
                    LeaderCleans.setIsInactiveGameTimer(game.w, timer.w, !timer.isInactive);
            }}
        >
            {timer.isInactive ? "Восстановить таймер" : "Исключить таймер"}
        </div>
    }</>;
}
