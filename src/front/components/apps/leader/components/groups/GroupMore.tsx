import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import LeaderGroupMaster from './GroupMaster';
import { LeaderGroupImportable } from './Groups.model';

export const LeaderGroupMoreContenter: BottomPopupContenter<{
  group?: LeaderGroupImportable;
}> = (_, prepare, { group }) => {
  const [groupMasterNode, openGroupMaster] = useFullContent(close => (
    <LeaderGroupMaster
      close={close}
      group={group}
    />
  ));

  return [
    groupMasterNode,
    prepare({
      items: [
        {
          title: 'Редактировать',
          icon: 'edit-outline',
          onClick: () => openGroupMaster(),
        },
      ],
    }),
  ];
};
