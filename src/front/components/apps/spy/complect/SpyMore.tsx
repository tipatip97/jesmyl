import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../complect/modal/Modal.service";
import { spyExer } from "../Spy.store";
import NewRoomScreen from "./rooms/NewRoomScreen";
import useSpyOfflineRooms from "./rooms/offline-room/useSpyOfflineRooms";

export default function SpyMore() {
  const { openFullscreenContent } = useFullscreenContent();
  const { passport } = useSpyOfflineRooms();

  return (
    <>
      {spyExer.actionAccessedOrNull('addNewRoom') && <div
        className="abs-item pointer"
        onClick={() => openFullscreenContent((close) => <NewRoomScreen close={close} />)}
      >
        <EvaIcon name="plus" className="abs-icon" />
        <div>Новая комната</div>
        <div className="abs-action" />
      </div>}
      <div
        className={`abs-item pointer ${passport ? '' : ' fade-05'}`}
        onClick={() => {
          if (passport)
            openFullscreenContent((close) => <NewRoomScreen close={close} offline />);
          else modalService.alert('Нужно создать паспорт для добавления оффлайн комнат', 'Пойми!');
        }}
      >
        <EvaIcon name="plus" className="abs-icon" />
        <div>Новая оффлайн комната</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
