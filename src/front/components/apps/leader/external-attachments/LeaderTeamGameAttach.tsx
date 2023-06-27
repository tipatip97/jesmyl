import React from "react";
import EvaButton from "../../../../complect/eva-icon/EvaButton";
import useModal from "../../../../complect/modal/useModal";
import StrongDiv from "../../../../complect/strong-control/StrongDiv";
import TeamGameFace from "../components/games/GameFace";
import LeaderGameTotalScoreTable from "../components/games/LeaderGameTotalScoreTable";
import useGames from "../components/games/useGames";
import { LeaderResultBoardAttachValues } from "./leaderScheduleAttachments";

const importantOnClick = () => { };

export default function LeaderTeamGameAttach({
    value,
    scope,
    isRedact,
    switchIsRedact,
}: {
    value: LeaderResultBoardAttachValues,
    scope: string,
    isRedact: boolean,
    switchIsRedact: (is?: boolean) => void,
}) {
    const { contextGames, jumpToGame } = useGames();

    const { modalNode } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<div>Вложить результат игры</div>)}
            {body(<>
                {contextGames?.map((game, gamei) => {
                    return <React.Fragment key={gamei}>
                        <StrongDiv
                            scope={scope}
                            fieldName=""
                            cud="U"
                            mapExecArgs={(args) => {
                                closeModal();
                                return {
                                    ...args,
                                    value: { gamew: game.w },
                                };
                            }}
                        >
                            <TeamGameFace
                                game={game}
                                importantOnClick={importantOnClick}
                            />
                        </StrongDiv>
                    </React.Fragment>;
                })}
            </>)}
        </>;
    }, null, isRedact, switchIsRedact);

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
        </div>
        {game && <LeaderGameTotalScoreTable game={game} />}
    </div>;
}
