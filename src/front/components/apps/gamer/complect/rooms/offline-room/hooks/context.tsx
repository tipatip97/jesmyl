import React, { ReactNode, useContext } from 'react';
import useQRMaster from '../../../../../../../complect/qr-code/useQRMaster';

interface ContextProps {
  readQR: ReturnType<typeof useQRMaster>['readQR'];
  shareQrData: ReturnType<typeof useQRMaster>['shareQrData'];
  qrNode: ReactNode;
}

export const GamerOfflineRoomsContext = React.createContext<ContextProps>({
  qrNode: null,
  readQR: async () => null,
  shareQrData: () => {},
});

export const useGamerOfflineRoomsContext: () => ContextProps = () => useContext(GamerOfflineRoomsContext);
