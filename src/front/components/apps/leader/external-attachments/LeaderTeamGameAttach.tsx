import React from "react";
import EvaButton from "../../../../complect/eva-icon/EvaButton";
import useModal from "../../../../complect/modal/useModal";
import { ScheduleWidgetAppAttResultItem } from "../../../../complect/schedule-widget/ScheduleWidget.model";
import TeamGameFace from "../components/games/GameFace";
import LeaderGameTotalScoreTable from "../components/games/LeaderGameTotalScoreTable";
import useGames from "../components/games/useGames";
import { LeaderResultBoardAttachValues } from "./leaderScheduleAttachments";

const importantOnClick = () => { };

export default function LeaderTeamGameAttach({
    value,
    attItem
}: {
    value: LeaderResultBoardAttachValues,
    attItem: ScheduleWidgetAppAttResultItem<LeaderResultBoardAttachValues>,
}) {
    const { contextGames, jumpToGame } = useGames();

    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<div>Вложить результат игры</div>)}
            {body(<>
                {contextGames?.map((game, gamei) => {
                    return <React.Fragment key={gamei}>
                        {attItem(
                            () => {
                                closeModal();
                                return { gamew: game.w };
                            },
                            <TeamGameFace
                                game={game}
                                importantOnClick={importantOnClick}
                            />)}
                    </React.Fragment>;
                })}
            </>)}
        </>;
    });

    const game = value.gamew && contextGames?.find((game) => game.w === value.gamew);

    return <div>
        {modalNode}
        <div className="flex flex-gap margin-gap-h">
            {game
                ? <span>{game.name}</span>
                : value.gamew
                    ? <span className="error-message">Игра удалена</span>
                    : <span>Не определена</span>
            }
            {game && <EvaButton name="external-link-outline" onClick={() => jumpToGame(game.w)} />}
            <EvaButton name="edit-outline" onClick={() => screen()} />
        </div>
        {game && <LeaderGameTotalScoreTable game={game} />}
    </div>;
}
