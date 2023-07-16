import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../complect/modal/Modal.service";
import useAuth from "../../../index/useAuth";
import { gamerExer } from "../Gamer.store";
import NewGamerRoomScreen from "./rooms/NewGamerRoomScreen";
import useGamerOfflineRooms from "./rooms/offline-room/useGamerOfflineRooms";

export default function GamerMore() {
  const auth = useAuth();
  const { openFullscreenContent } = useFullscreenContent();
  const { passport } = useGamerOfflineRooms();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [
      gamerExer.actionAccessedOrNull('addNewRoom', auth) && {
        title: 'Новая комната',
        icon: "plus",
        onClick: () => openFullscreenContent((close) => <NewGamerRoomScreen close={close} />),
      },
      {
        title: 'Новая оффлайн комната',
        icon: "plus",
        className: passport ? '' : ' fade-05',
        onClick: () => {
          if (passport)
            openFullscreenContent((close) => <NewGamerRoomScreen close={close} offline />);
          else modalService.alert('Нужно создать паспорт для добавления оффлайн комнат', 'Пойми!');
        },
      }]
  });
}
