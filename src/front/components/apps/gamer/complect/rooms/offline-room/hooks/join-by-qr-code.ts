import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useToast from '../../../../../../../complect/modal/useToast';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { gamerOfflineRoomGames } from '../../../../useGamerNav';
import { useGamerOfflineRoomsContext } from './context';
import { useGamerOfflineRoomsPassport } from './passport';

export const useGamerOfflineRoomJoinByQrCode = () => {
  const dispatch = useDispatch();
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
      readQR(data => {
        if (data.appName === 'gamer' && mylib.isStr(data.key)) {
          const [gameName] = (data.key as string).split('.');
          const offSkelet = gamerOfflineRoomGames.find(({ phase: [phase] }) => phase === gameName);
          if (offSkelet) {
            offSkelet.data?.qrDataCatcher(dispatch, passport, data);
          }
        }
      });
    }, [passport, readQR, toast, dispatch]),
  ] as const;
};
