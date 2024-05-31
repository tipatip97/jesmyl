import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconQrCodeStrokeRounded } from '@icons/qr-code';
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
      <IconButton
        Icon={IconQrCodeStrokeRounded}
        prefix={title}
        onClick={() => joinByQrCode()}
      />
    </>
  );
};
