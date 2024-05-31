import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import { IconFile02StrokeRounded } from '@icons/file-02';
import { IconQrCode01StrokeRounded } from '@icons/qr-code-01';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import navConfigurers from '../../../../shared/navConfigurers';
import PhaseIndexContainer from '../../complect/PhaseIndexContainer';

export default function IndexActions() {
  const { readQR, qrNode } = useQRMaster();
  const { goTo } = navConfigurers.index();

  return (
    <PhaseIndexContainer
      className=""
      headTitle="Взаимодействие"
      contentClass="flex column"
      content={
        <>
          {qrNode}
          <BrutalItem
            icon={<IconQrCode01StrokeRounded />}
            title="Читать QR"
            onClick={() => readQR()}
          />
          <BrutalItem
            icon={<IconFile02StrokeRounded />}
            title="Мои файлы"
            onClick={() => goTo('files')}
          />
        </>
      }
    />
  );
}
