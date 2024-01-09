import EvaButton from '../../../../../../../complect/eva-icon/EvaButton';
import useQRMaster from '../../../../../../../complect/qr-code/useQRMaster';
import { GamerOfflineRoomsContext } from '../hooks/context';
import { useGamerOfflineRoomJoinByQrCode } from '../hooks/join-by-qr-code';

export const GamerOfflineRoomListJoinByQr = ({ title }: { title: string }) => {
  const qrCodeState = useQRMaster();
  return (
    <GamerOfflineRoomsContext.Provider value={qrCodeState}>
      {qrCodeState.qrNode}
      <Button title={title} />
    </GamerOfflineRoomsContext.Provider>
  );
};

const Button = ({ title }: { title: string }) => {
  const [joinNode, joinByQrCode] = useGamerOfflineRoomJoinByQrCode();

  return (
    <>
      {joinNode}
      <EvaButton
        name="qr-code"
        prefix={title}
        onClick={() => joinByQrCode()}
      />
    </>
  );
};
