import { bottomPopupContentPreparer } from '../../../../complect/absolute-popup/bottom-popup/item-preparer';
import useFullscreenContent from '../../../../complect/fullscreen-content/useFullscreenContent';
import modalService from '../../../../complect/modal/Modal.service';
import useAuth from '../../../index/useAuth';
import { gamerExer } from '../Gamer.store';
import NewGamerRoomScreen from './rooms/NewGamerRoomScreen';
import { useGamerOfflineRoomsPassport } from './rooms/offline-room/hooks/passport';

export default function GamerMore() {
  const auth = useAuth();
  const { openFullscreenContent } = useFullscreenContent();
  const passport = useGamerOfflineRoomsPassport();

  return bottomPopupContentPreparer({
    items: [
      gamerExer.actionAccessedOrNull('addNewRoom', auth) && {
        title: 'Новая комната',
        icon: 'plus',
        onClick: () => openFullscreenContent(close => <NewGamerRoomScreen close={close} />),
      },
      {
        title: 'Новая оффлайн комната',
        icon: 'plus',
        className: passport ? '' : ' fade-05',
        onClick: () => {
          if (passport)
            openFullscreenContent(close => (
              <NewGamerRoomScreen
                close={close}
                offline
              />
            ));
          else modalService.alert('Нужно создать паспорт для добавления оффлайн комнат', 'Пойми!');
        },
      },
    ],
  });
}
