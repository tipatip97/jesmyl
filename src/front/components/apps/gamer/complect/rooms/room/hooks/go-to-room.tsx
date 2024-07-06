import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useConfirm } from '../../../../../../../complect/modal/confirm/useConfirm';
import useToast from '../../../../../../../complect/modal/useToast';
import { RootState } from '../../../../../../../shared/store';
import { useAuth } from '../../../../../../index/molecules';
import di, { gamerExer } from '../../../../Gamer.store';
import gamerStorage from '../../../../gamerStorage';
import useGamerNav from '../../../../useGamerNav';
import { useMyPossibilitiesInRoom } from './possibilities';

const roomsSelector = (state: RootState) => state.gamer.rooms;

export default function useGamerOfflineRoomsActions() {
  const dispatch = useDispatch();
  const rooms = useSelector(roomsSelector);
  const { goTo } = useGamerNav();
  const auth = useAuth();

  const memberPossibilities = useMyPossibilitiesInRoom();
  const [toastNode, toast] = useToast();
  const [confirmNode, confirm] = useConfirm();

  return [
    <>
      {toastNode}
      {confirmNode}
    </>,
    useCallback(
      (roomWid: number) => {
        const possibilities = memberPossibilities(rooms?.find(({ w }) => w === roomWid));
        if (possibilities.isUnauthorized) {
          toast('Не авторизован', { mood: 'ko' });
          return;
        }
        if (possibilities.isInvalid) {
          if (possibilities.member == null) {
            confirm(
              'Просматривать результаты и участвовать могут только добавленные в комнату участники. Отправить заявку на вступление?',
            ).then(isRequest => {
              if (isRequest)
                gamerExer.send({
                  action: 'requestAddToRoom',
                  method: 'push',
                  args: {
                    login: auth.login,
                    fio: auth.fio,
                    nick: auth.nick,
                    roomw: roomWid,
                  },
                });
            });
          } else if (possibilities.isRequester)
            toast('Заявка на вступление в комнату отправлена. Дождись принятия, или свяжись с владельцем комнаты.');
          else toast('Тебя исключили из комнаты', { mood: 'ko' });
          return;
        }

        gamerStorage.set('roomw', roomWid);
        dispatch(di.roomw(roomWid));
        goTo('room');
      },
      [auth.fio, auth.login, auth.nick, dispatch, goTo, memberPossibilities, rooms, toast],
    ),
  ] as const;
}
