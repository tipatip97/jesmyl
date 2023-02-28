import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import { GamerNavData } from "../../../Gamer.model";
import { gamerRoomGames } from "../../../useGamerNav";
import GamerRoomContent from "../GamerRoomContent";
import useEditableRooms from "./useEditableRooms";
import useGamerRooms from "./useGamerRooms";

export default function GamerRoom({ config }: { config: NavigationThrowNodeProps<GamerNavData> }) {
  const { currentRoom, memberPossibilities, setCurrentGame } = useGamerRooms();
  const { removeRoom } = useEditableRooms();

  const possibilities = memberPossibilities(currentRoom);

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
