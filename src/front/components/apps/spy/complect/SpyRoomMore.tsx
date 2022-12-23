import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";
import { SpyRoom } from "../Spy.model";
import useSpyNav from "../useSpyNav";
import useEditableRooms from "./useEditableRooms";

export default function SpyRoomMore({ room }: { room: SpyRoom | nil }) {
  const { removeRoom } = useEditableRooms();
  const { goBack } = useSpyNav();

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={async () => {
          if (
            room &&
            (await modalService.confirm(`Удалить комнату ${room.name}?`))
          ) {
            await removeRoom(room.w);
            goBack();
          }
        }}
      >
        <EvaIcon name="trash-2-outline" className="abs-icon" />
        <div>Удалить комнату</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
