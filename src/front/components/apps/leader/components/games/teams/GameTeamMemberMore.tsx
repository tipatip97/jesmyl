import { BottomPopupContenterPreparer } from '../../../../../../complect/absolute-popup/bottom-popup/model';
import { useConfirm } from '../../../../../../complect/modal/confirm/useConfirm';
import { IconUserRemove02StrokeRounded } from '../../../../../../complect/the-icon/icons/user-remove-02';
import { TeamGameImportable } from '../../../Leader.model';
import { leaderExer } from '../../../Leader.store';
import { HumanImportable } from '../../people/People.model';
import { GameTeamImportable } from './GameTeams.model';

export default function GameTeamMemberMore({
  human,
  team,
  game,
  prepare,
}: {
  human: HumanImportable;
  team: GameTeamImportable;
  game: TeamGameImportable;
  prepare: BottomPopupContenterPreparer;
}) {
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      {prepare({
        items: [
          {
            title: 'Исключить личность',
            Icon: IconUserRemove02StrokeRounded,
            onClick: async () => {
              if (game) {
                const isDel = await confirm(
                  `Исключить участни${human.isMan ? 'ка' : 'цу'} ${human.name} из команды "${team.name}"?`,
                  'Исключить',
                );

                if (isDel) {
                  leaderExer.send({
                    action: 'removeMemberFromTeam',
                    method: 'remove',
                    args: {
                      humanw: human.w,
                      teamw: team.w,
                      gamew: game.w,
                    },
                  });
                }
              }
            },
          },
        ],
      })}
    </>
  );
}
