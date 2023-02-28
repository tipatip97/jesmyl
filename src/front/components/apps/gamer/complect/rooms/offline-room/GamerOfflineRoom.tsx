import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import { GamerNavData } from "../../../Gamer.model";
import { gamerOfflineRoomGames } from "../../../useGamerNav";
import GamerRoomContent from "../GamerRoomContent";
import useGamerOfflineRooms from "./useGamerOfflineRooms";

export default function GamerOfflineRoom({ config }: { config: NavigationThrowNodeProps<GamerNavData> }) {
  const { currentOfflineRoom, removeOfflineGame, setRoomGame } = useGamerOfflineRooms();

  return <GamerRoomContent
    config={config}
    isOwner={true}
    isManager={true}
    isInactive={false}
    room={currentOfflineRoom}
    games={gamerOfflineRoomGames}
    onGameChange={setRoomGame}
    onRoomRemove={removeOfflineGame}
    namePrefix="Офф."
  />;
}
