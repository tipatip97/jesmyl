import { useLayoutEffect, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { NavigationThrowNodeProps } from "../../../../../complect/nav-configurer/Navigation.model";
import { GamerGameName, GamerNavData, GamerRoom } from "../../Gamer.model";
import useSpyNav, { gamerRoomGames } from "../../useGamerNav";

export default function GamerGameSelector({ room, config, onGameChange }: { room: GamerRoom, config: NavigationThrowNodeProps<GamerNavData>, onGameChange: (gameName: GamerGameName) => void }) {
    const { goTo } = useSpyNav();
    const [isForceChoose, setIsForceChoose] = useState(false);
    const isNeedChooseGame = config.currentChildPhase === 'needChooseGame';

    useLayoutEffect(() => {
        if (!isForceChoose && isNeedChooseGame && room?.currentGame) {
            goTo(room.currentGame, config.relativePoint);
        }
    }, [isForceChoose, isNeedChooseGame, room?.currentGame, config.relativePoint]);

    return <>
        
    </>;
}