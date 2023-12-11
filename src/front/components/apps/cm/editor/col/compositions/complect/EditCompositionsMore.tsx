import { bottomPopupContentPreparer } from "../../../../../../../complect/absolute-popup/useBottomPopup";
import useFullscreenContent from "../../../../../../../complect/fullscreen-content/useFullscreenContent";
import NewComposition from "./NewComposition";

export default function EditCompositionsMore() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();

  return bottomPopupContentPreparer({
    items: [
      {
        onClick: () =>
          openFullscreenContent(
            <NewComposition close={closeFullscreenContent} />
          ),
        icon: "plus-circle-outline",
        title: 'Новая песня'
      }
    ]
  });
}
