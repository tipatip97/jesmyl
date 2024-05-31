import { BottomPopupContenter } from '../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../complect/fullscreen-content/useFullContent';
import { IconMapsLocation02StrokeRounded } from '@icons/maps-location-02';
import { IconMapsOffStrokeRounded } from '@icons/maps-off';
import { IconUserAdd01StrokeRounded } from '@icons/user-add-01';
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
              Icon: IconUserAdd01StrokeRounded,
              onClick: () => openHumanMaster(),
            },
            {
              title: 'Новый контекст',
              Icon: IconMapsLocation02StrokeRounded,
              onClick: () => openNewLeaderContextMaster(),
            },
            {
              title: 'Покинуть контекст',
              Icon: IconMapsOffStrokeRounded,
              onClick: () => setAppRouteData({ contextw: undefined }),
            },
          ],
        }),
      ]
    : [null, null];
};
