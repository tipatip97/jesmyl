import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useCmNav from "../../base/useCmNav";
import { Com } from "../../col/com/Com";
import useTranslation from "../../translation/useTranslation";
import FullscreenExpandComList from "./FullscreenExpandComList";

export default function LocalListToolsPopup({ coms }: { coms?: Com[] }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { goToTranslation: openTranslations, isSelfTranslation: isShowFullscreen } = useTranslation();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const { nav } = useCmNav();

  return prepareAbsoluteBottomPopupContent({
    items: [
      coms ? [{
        title: 'Раскрыть песни списка',
        icon: "book-open-outline",
        onClick: () =>
          openFullscreenContent(<FullscreenExpandComList coms={coms} />),
      },
      {
        title: 'Показывать слайды списка',
        icon: isShowFullscreen ? "play-outline" : "monitor-outline",
        onClick: () => openTranslations(true),
      },
      {
        title: 'Поделиться по QR',
        icon: "qr-code",
        onClick: () => nav.shareDataByQr('selectedComws', coms.map(({ wid }) => wid), coms.map(com => `${com.number}. ${com.name.trim()}`).join('\n')),
      }] : null
    ]
  });
}
