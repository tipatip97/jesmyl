import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../complect/modal/Modal.service";
import { spyExer } from "../Spy.store";
import NewRoomScreen from "./rooms/NewRoomScreen";
import useSpyOfflineRooms from "./rooms/offline-room/useSpyOfflineRooms";

export default function SpyMore() {
  const { openFullscreenContent } = useFullscreenContent();
  const { passport } = useSpyOfflineRooms();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [
      spyExer.actionAccessedOrNull('addNewRoom') && {
        title: 'Новая комната',
        icon: "plus",
        onClick: () => openFullscreenContent((close) => <NewRoomScreen close={close} />),
      },
      {
        title: 'Новая оффлайн комната',
        icon: "plus",
        className: passport ? '' : ' fade-05',
        onClick: () => {
          if (passport)
            openFullscreenContent((close) => <NewRoomScreen close={close} offline />);
          else modalService.alert('Нужно создать паспорт для добавления оффлайн комнат', 'Пойми!');
        },
      }]
  });
}
