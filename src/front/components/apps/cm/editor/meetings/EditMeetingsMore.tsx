import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import { cmExer } from "../../Cm.store";
import AddContext from "./AddContext";
import MeetingsCreator from "./MeetingsCreator";

export default function EditMeetingsMore({ currPath }: { currPath: number[] }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [
      {
        icon: "plus-circle-outline",
        title: 'Создать событие',
        onClick: () =>
          openFullscreenContent((close) => <MeetingsCreator close={close} />),
      },
      cmExer.actionAccessedOrNull("addMeetingsContext") && (
        {
          title: 'Создать контекст',
          icon: "folder-add-outline",
          onClick: () => {
            openFullscreenContent((close) => (
              <AddContext close={close} currPath={currPath} />
            ));
          },
        })
    ]
  });
}
