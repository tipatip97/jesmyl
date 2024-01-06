import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
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
            icon="qr-code"
            title="Читать QR"
            onClick={() => readQR()}
          />
          <BrutalItem
            icon="file-text-outline"
            title="Мои файлы"
            onClick={() => goTo('files')}
          />
        </>
      }
    />
  );
}
