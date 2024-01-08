import { bottomPopupContentPreparer } from '../../../../complect/absolute-popup/bottom-popup/item-preparer';
import { BottomPopupContenter } from '../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../complect/fullscreen-content/useFullContent';
import modalService from '../../../../complect/modal/Modal.service';
import useAuth from '../../../index/useAuth';
import { gamerExer } from '../Gamer.store';
import NewGamerRoomScreen from './rooms/NewGamerRoomScreen';
import { useGamerOfflineRoomsPassport } from './rooms/offline-room/hooks/passport';

export const GamerMore: BottomPopupContenter = () => {
  const auth = useAuth();
  const [newRoomMakerNode, openNewRoomMaker] = useFullContent(close => <NewGamerRoomScreen close={close} />);
  const [newRoomOffMakerNode, openNewOffRoomMaker] = useFullContent(close => (
    <NewGamerRoomScreen
      close={close}
      offline
    />
  ));
  const passport = useGamerOfflineRoomsPassport();

  return [
    <>
      {newRoomMakerNode}
      {newRoomOffMakerNode}
    </>,
    <>
      {bottomPopupContentPreparer({
        items: [
          gamerExer.actionAccessedOrNull('addNewRoom', auth) && {
            title: 'Новая комната',
            icon: 'plus',
            onClick: () => openNewRoomMaker(),
          },
          {
            title: 'Новая оффлайн комната',
            icon: 'plus',
            className: passport ? '' : ' fade-05',
            onClick: () => {
              if (passport) openNewOffRoomMaker();
              else modalService.alert('Нужно создать паспорт для добавления оффлайн комнат', 'Пойми!');
            },
          },
        ],
      })}
    </>,
  ];
};
