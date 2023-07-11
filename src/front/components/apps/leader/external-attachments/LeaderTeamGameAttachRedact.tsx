import React from "react";
import useModal from "../../../../complect/modal/useModal";
import StrongDiv from "../../../../complect/strong-control/StrongDiv";
import TeamGameFace from "../components/games/GameFace";
import useGames from "../components/games/useGames";

const importantOnClick = () => { };

export default function LeaderTeamGameAttachRedact({
    scope,
    isRedact,
    switchIsRedact,
}: {
    scope: string,
    isRedact: boolean,
    switchIsRedact: (is?: boolean) => void,
}) {
    const games = useGames();

    const [modalNode] = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<div>Вложить результат игры</div>)}
            {body(<>
                {games.contextGames?.map((game, gamei) => {
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

    return <div>{modalNode}</div>;
}
