import { BottomPopupContenter } from '../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../complect/fullscreen-content/useFullContent';
import NewLeaderContextMaster from './components/contexts/NewContextMaster';
import HumanMaster from './components/people/HumanMaster';
import useLeaderNav from './useLeaderNav';

export const GeneralMoreContenter: BottomPopupContenter = (isOpen, _, prepare) => {
  const [humanMasterNode, openHumanMaster] = useFullContent(close => <HumanMaster close={close} />);
  const [newLeaderContextMasterNode, openNewLeaderContextMaster] = useFullContent(close => (
    <NewLeaderContextMaster close={close} />
  ));
  const { setAppRouteData } = useLeaderNav();

  return isOpen
    ? [
        <>
          {newLeaderContextMasterNode}
          {humanMasterNode}
        </>,
        prepare({
          items: [
            {
              title: 'Добавить личность',
              icon: 'person-add-outline',
              onClick: () => openHumanMaster(),
            },
            {
              title: 'Новый контекст',
              icon: 'map-outline',
              onClick: () => openNewLeaderContextMaster(),
            },
            {
              title: 'Покинуть контекст',
              icon: 'map-outline',
              onClick: () => setAppRouteData({ contextw: undefined }),
            },
          ],
        }),
      ]
    : [null, null];
};
