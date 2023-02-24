import useAbsoluteBottomPopup from "../../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../../../complect/fullscreen-content/useFullscreenContent";
import NewComposition from "./NewComposition";

export default function EditCompositionsMore() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  return prepareAbsoluteBottomPopupContent({
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
