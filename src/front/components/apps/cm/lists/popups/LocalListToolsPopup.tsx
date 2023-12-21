import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullscreenContent from '../../../../../complect/fullscreen-content/useFullscreenContent';
import useQRMaster from '../../../../../complect/qr-code/useQRMaster';
import useCmNav from '../../base/useCmNav';
import { Com } from '../../col/com/Com';
import { useTranslation } from '../../translation/useTranslation';
import FullscreenExpandComList from './FullscreenExpandComList';

export const LocalListToolsPopup: BottomPopupContenter<Com[] | und> = (_, prepare, coms) => {
  const { openFullscreenContent } = useFullscreenContent();
  const { goToTranslation, isSelfTranslation: isShowFullscreen } = useTranslation();
  const { nav } = useCmNav();
  const { shareQrData, qrNode } = useQRMaster();

  return [
    null,
    prepare({
      items: [
        coms
          ? [
              {
                title: 'Раскрыть песни списка',
                icon: 'book-open-outline',
                onClick: () => openFullscreenContent(<FullscreenExpandComList coms={coms} />),
              },
              {
                title: 'Показывать слайды списка',
                icon: isShowFullscreen ? 'play-outline' : 'monitor-outline',
                onClick: () => goToTranslation(true),
              },
              {
                title: 'Поделиться по QR',
                icon: 'qr-code',
                onClick: () =>
                  shareQrData(
                    nav,
                    'selectedComws',
                    coms.map(({ wid }) => wid),
                    coms.map(com => `${com.number}. ${com.name.trim()}`).join('\n'),
                  ),
              },
            ]
          : null,
      ],
    }),
    qrNode,
  ];
};
