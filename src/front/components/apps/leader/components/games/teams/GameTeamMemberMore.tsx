import { BottomPopupContenterPreparer } from '../../../../../../complect/absolute-popup/bottom-popup/model';
import modalService from '../../../../../../complect/modal/Modal.service';
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
  return prepare({
    items: [
      {
        title: 'Исключить личность',
        icon: 'person-delete-outline',
        onClick: async () => {
          if (game) {
            const isDel = await modalService.confirm(
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
  });
}
