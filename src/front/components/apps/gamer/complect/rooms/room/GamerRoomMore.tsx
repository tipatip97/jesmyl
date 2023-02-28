import useAbsoluteBottomPopup, { BottomPopupSkeletIcon } from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../../complect/modal/Modal.service";
import { GamerRoom } from "../../../Gamer.model";
import useSpyNav from "../../../useGamerNav";

export default function GamerRoomMore({ room, onRemove, items }: {
  room: GamerRoom | nil,
  onRemove: (roomw: number) => Promise<unknown | void>,
  items?: BottomPopupSkeletIcon[],
}) {
  const { goBack } = useSpyNav();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [
      items,]
  });
}
