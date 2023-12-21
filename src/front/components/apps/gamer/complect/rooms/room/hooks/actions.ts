import { useDispatch, useSelector } from 'react-redux';
import modalService from '../../../../../../../complect/modal/Modal.service';
import { RootState } from '../../../../../../../shared/store';
import useAuth from '../../../../../../index/useAuth';
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

  const ret = {
    goToRoom: (roomWid: number) => {
      const possibilities = memberPossibilities(rooms?.find(({ w }) => w === roomWid));
      if (possibilities.isUnauthorized) {
        modalService.alert('Не авторизован');
        return;
      }
      if (possibilities.isInvalid) {
        if (possibilities.member == null) {
          modalService
            .confirm(
              'Просматривать результаты и участвовать могут только добавленные в комнату участники. Отправить заявку на вступление?',
            )
            .then(isRequest => {
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
          modalService.alert(
            'Заявка на вступление в комнату отправлена. Дождись принятия, или свяжись с владельцем комнаты.',
          );
        else modalService.alert('Тебя исключили из комнаты');
        return;
      }

      gamerStorage.set('roomw', roomWid);
      dispatch(di.roomw(roomWid));
      goTo('room');
    },
  };

  return ret;
}
