import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import useQRMaster from '../../../../../complect/qr-code/useQRMaster';
import useCmNav from '../../base/useCmNav';
import { Com } from '../../col/com/Com';
import { useTranslation } from '../../translation/useTranslation';
import FullscreenExpandComList from './FullscreenExpandComList';

export const LocalListToolsPopup: BottomPopupContenter<Com[] | und> = (isOpen, closePopup, _prepare, coms) => {
  const [fullNode, openFullContent] = useFullContent(() => coms && <FullscreenExpandComList coms={coms} />);
  const { goToTranslation, isShowFullscreen } = useTranslation();
  const { nav } = useCmNav();
  const { shareQrData, qrNode } = useQRMaster();

  return [
    <>{fullNode}</>,
    isOpen && coms && (
      <>
        <EvaButton
          name="book-open-outline"
          postfix="Раскрыть песни списка"
          onClick={() => {
            openFullContent();
            closePopup();
          }}
        />
        <EvaButton
          name={isShowFullscreen ? 'play-outline' : 'monitor-outline'}
          postfix="Показывать слайды списка"
          onClick={() => goToTranslation(true)}
        />
        <EvaButton
          name="qr-code"
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
