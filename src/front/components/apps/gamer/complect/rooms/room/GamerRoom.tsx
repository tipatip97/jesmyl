import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import { GamerNavData } from "../../../Gamer.model";
import { gamerRoomGames } from "../../../useGamerNav";
import GamerRoomContent from "../GamerRoomContent";
import { useGamerRoomActions } from "../hooks/actions";
import { useGamerCurrentRoom } from "./hooks/current-room";
import { useMyPossibilitiesCurrentRoom } from "./hooks/possibilities";

export default function TheGamerRoom({ config }: { config: NavigationThrowNodeProps<GamerNavData> }) {
  const possibilities = useMyPossibilitiesCurrentRoom();
  const { removeRoom, setCurrentGame } = useGamerRoomActions();
  const currentRoom = useGamerCurrentRoom();

  return <GamerRoomContent
    config={config}
    isOwner={possibilities.isOwner}
    isManager={possibilities.isManager}
    isInactive={possibilities.isInactive}
    room={currentRoom}
    games={gamerRoomGames}
    onGameChange={setCurrentGame}
    onRoomRemove={removeRoom}
  />;
}
