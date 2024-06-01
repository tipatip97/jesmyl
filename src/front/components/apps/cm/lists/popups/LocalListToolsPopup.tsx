import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import { isTouchDevice } from '../../../../../complect/device-differences';
import IconButton from '../../../../../complect/the-icon/IconButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { IconBookOpen02StrokeRounded } from '../../../../../complect/the-icon/icons/book-open-02';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import useQRMaster from '../../../../../complect/qr-code/useQRMaster';
import useCmNav from '../../base/useCmNav';
import { Com } from '../../col/com/Com';
import { useGoToTranslation } from '../../translation/complect/hooks/go-to-translation';
import FullscreenExpandComList from './FullscreenExpandComList';
import { IconPlayStrokeRounded } from '../../../../../complect/the-icon/icons/play';

export const LocalListToolsPopup: BottomPopupContenter<Com[] | und> = (isOpen, closePopup, _prepare, coms) => {
  const [fullNode, openFullContent] = useFullContent(() => coms && <FullscreenExpandComList coms={coms} />);
  const goToTranslation = useGoToTranslation();
  const { nav } = useCmNav();
  const { shareQrData, qrNode } = useQRMaster();

  return [
    <>{fullNode}</>,
    isOpen && coms && (
      <>
        <IconButton
          Icon={IconBookOpen02StrokeRounded}
          postfix="Раскрыть песни списка"
          onClick={() => {
            openFullContent();
            closePopup();
          }}
        />
        <IconButton
          Icon={isTouchDevice ? IconPlayStrokeRounded : IconComputerStrokeRounded}
          postfix="Показывать слайды списка"
          onClick={() => goToTranslation(true)}
        />
        <IconButton
          Icon={IconQrCodeStrokeRounded}
          postfix="Поделиться по QR"
          onClick={() =>
            shareQrData(
              nav,
              'selectedComws',
              coms.map(({ wid }) => wid),
              coms.map(com => `${com.number}. ${com.name.trim()}`).join('\n'),
            )
          }
        />
      </>
    ),
    qrNode,
  ];
};
