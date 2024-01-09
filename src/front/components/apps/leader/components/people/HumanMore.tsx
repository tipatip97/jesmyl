import { ReactNode } from 'react';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useConfirm } from '../../../../../complect/modal/confirm/useConfirm';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { LeaderCleans } from '../LeaderCleans';
import useLeaderContext from '../contexts/useContexts';
import HumanMaster from './HumanMaster';
import { HumanImportable } from './People.model';

export const HumanMoreContenter: BottomPopupContenter<{
  human: HumanImportable;
  humanMoreAdditions?: (human: HumanImportable) => ReactNode;
}> = (isOpen, _, prepare, { human, humanMoreAdditions }) => {
  const [humanMasterNode, openHumanMaster] = useFullContent(close => (
    <HumanMaster
      close={close}
      human={human}
    />
  ));
  const { ccontext, contextMembers, contextMentors, humans } = useLeaderContext();
  const isMentor = ccontext?.mentors.includes(human.w);
  const participantListName = isMentor ? 'mentors' : 'members';
  const wraps = isMentor
    ? LeaderCleans.getMembersInGroups(participantListName, contextMentors, [human.w], ccontext?.groups)
    : LeaderCleans.getMembersInGroups(participantListName, contextMembers, [human.w], ccontext?.groups) || [];

  const title = (txt = '', txt2 = '') => `${wraps.length ? 'Переопределить' : 'Определить'}${txt} в группу ${txt2}`;

  const [confirmNode, confirm] = useConfirm();

  const [groupsPopupNode, openGroupsPopup] = useBottomPopup((isOpen, close, prepare) => {
    const groups = ccontext?.groups;
    if (!groups) return;
    const groupws = wraps.map(({ group: { w } }) => w);

    return (
      isOpen && (
        <>
          {confirmNode}
          {prepare({
            items: groups.map(group => {
              return {
                titleNode: (
                  <span>
                    {group.name}
                    <span className="color--7"> {LeaderCleans.takeGroupMentorNames(humans, group)}</span>
                  </span>
                ),
                icon: 'people-outline',
                className: !groupws.includes(group.w) ? '' : 'disabled',
                onClick: async () => {
                  if (human && (await confirm(title(` участника "${human.name}"`, `${group.name}?`)))) {
                    LeaderCleans.replaceMemberToGroup(
                      group.w,
                      ccontext.w,
                      human.w,
                      wraps.map(({ group }) => group),
                      participantListName,
                    ).then(() => close());
                  }
                },
              };
            }),
          })}
        </>
      )
    );
  });

  return [
    <>
      {humanMasterNode}
      {groupsPopupNode}
    </>,
    isOpen && (
      <>
        {prepare({
          items: [
            {
              title: 'Редактировать',
              icon: 'edit-outline',
              onClick: () => openHumanMaster(),
            },
            {
              title: title(),
              icon: 'people-outline',
              onClick: () => setTimeout(openGroupsPopup),
            },
          ],
        })}
        {typeof humanMoreAdditions === 'function' ? humanMoreAdditions(human) : humanMoreAdditions}
      </>
    ),
  ];
};
