import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import LeaderGameMaster from './GameMaster';

export const GamesMoreContenter: BottomPopupContenter = (isOpen, _, prepare) => {
  const [fullNode, openFull] = useFullContent(close => <LeaderGameMaster close={close} />);

  return (
    isOpen && [
      fullNode,
      prepare({
        items: [
          {
            title: 'Новая командная игра',
            icon: 'people-outline',
            onClick: () => openFull(),
          },
        ],
      }),
    ]
  );
};
