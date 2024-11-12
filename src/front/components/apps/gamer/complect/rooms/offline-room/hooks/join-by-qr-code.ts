import { useCallback } from 'react';
import useToast from '../../../../../../../complect/modal/useToast';
import { MyLib, mylib } from 'front/utils';
import { QRCodeReaderData } from '../../../../../../../complect/qr-code/QRCodeMaster.model';
import { gamerOfflineRoomGames } from '../../../../useGamerNav';
import { useGamerOfflineRoomsContext } from './context';
import { useGamerOfflineRoomsPassport } from './passport';

export const useGamerOfflineRoomJoinByQrCode = () => {
  const { readQR } = useGamerOfflineRoomsContext();
  const passport = useGamerOfflineRoomsPassport();
  const [toasNode, toast] = useToast();

  return [
    toasNode,
    useCallback(() => {
      if (!passport?.login) {
        toast('Не авторизован');
        return;
      }
      readQR((data: QRCodeReaderData<unknown, never>) => {
        if (data.appName === 'gamer' && mylib.isStr(data.key)) {
          const [gameName] = (data.key as string).split('.');
          const offSkelet = gamerOfflineRoomGames.find(({ phase: [phase] }) => phase === gameName);
          if (offSkelet) {
            offSkelet.data?.qrDataCatcher(passport, data);
          }
        }
      });
    }, [passport, readQR, toast]),
  ] as const;
};
