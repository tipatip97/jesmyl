import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import PrintableBottomItem from '../PrintableBottomItem';
import QRQuest from '../templates/QRQuest';
import LeaderGroupMaster from './GroupMaster';

export const LeaderGroupsMore: BottomPopupContenter = (isOpen, close, prepare) => {
  const [groupMasterNode, openGroupMaster] = useFullContent(close => <LeaderGroupMaster close={close} />);

  return (
    isOpen && [
      groupMasterNode,
      <>
        {prepare({
          items: [
            {
              title: 'Новая группа',
              icon: 'plus-circle-outline',
              onClick: () => openGroupMaster(),
            },
          ],
        })}
        <PrintableBottomItem
          title="QR квест точки"
          node={<QRQuest />}
          close={close}
          prepare={prepare}
        />
      </>,
    ]
  );
};
