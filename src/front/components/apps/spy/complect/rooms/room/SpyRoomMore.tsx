import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../../complect/modal/Modal.service";
import { SpyRoom } from "../../../Spy.model";
import useSpyNav from "../../../useSpyNav";

export default function SpyRoomMore({ room, onRemove }: { room: SpyRoom | nil, onRemove: (roomw: number) => Promise<unknown | void> }) {
  const { goBack } = useSpyNav();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Удалить комнату',
      icon: "trash-2-outline",
      onClick: async () => {
        if (
          room &&
          (await modalService.confirm(`Удалить комнату ${room.name}?`))
        ) {
          await onRemove(room.w);
          goBack();
        }
      },
    }]
  });
}
