import { Link } from 'react-router-dom';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import { isTouchDevice } from '../../../../../complect/device-differences';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import useQRMaster from '../../../../../complect/qr-code/useQRMaster';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconBookOpen02StrokeRounded } from '../../../../../complect/the-icon/icons/book-open-02';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconPlayStrokeRounded } from '../../../../../complect/the-icon/icons/play';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import useCmNav from '../../base/useCmNav';
import { Com } from '../../col/com/Com';
import FullscreenExpandComList from './FullscreenExpandComList';

export const LocalListToolsPopup: BottomPopupContenter<Com[] | und> = (isOpen, closePopup, _prepare, coms) => {
  const [fullNode, openFullContent] = useFullContent(() => coms && <FullscreenExpandComList coms={coms} />);
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
        <Link to={`tran${coms?.length ? `?comw=${coms[0].wid}` : ''}`}>
          <IconButton
            Icon={isTouchDevice ? IconPlayStrokeRounded : IconComputerStrokeRounded}
            postfix="Показывать слайды списка"
          />
        </Link>
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
