import { Route, Routes } from 'react-router-dom';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import { IconFile02StrokeRounded } from '../../../../complect/the-icon/icons/file-02';
import { IconQrCode01StrokeRounded } from '../../../../complect/the-icon/icons/qr-code-01';
import IndexMyFiles from './files/MyFiles';

export default function IndexActions() {
  const { readQR, qrNode } = useQRMaster();

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className=""
            headTitle="Взаимодействие"
            contentClass="flex column padding-gap"
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
                  to="files"
                />
              </>
            }
          />
        }
      />

      <Route
        path="files"
        element={<IndexMyFiles />}
      />
    </Routes>
  );
}
