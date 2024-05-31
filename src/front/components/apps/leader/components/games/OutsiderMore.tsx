import { useState } from 'react';
import { BottomPopupContenterPreparer } from '../../../../../complect/absolute-popup/bottom-popup/model';
import IconButton from '../../../../../complect/the-icon/IconButton';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { IconCheckmarkCircle02StrokeRounded } from '@icons/checkmark-circle-02';
import { IconUserAdd02StrokeRounded } from '@icons/user-add-02';
import useModal from '../../../../../complect/modal/useModal';
import { TeamGameImportable } from '../../Leader.model';
import { leaderExer } from '../../Leader.store';
import { HumanImportable } from '../people/People.model';
import { GameTeamImportable } from './teams/GameTeams.model';
import { IconCancel02StrokeRounded } from '@icons/cancel-02';

export default function OutsiderMore({
  human,
  game,
  prepare,
}: {
  human: HumanImportable;
  game: TeamGameImportable;
  prepare: BottomPopupContenterPreparer;
}) {
  const [targetTeam, setTargetTeam] = useState<GameTeamImportable | und>();

  const [modalNode, openModal] = useModal(({ header, body, footer }, closeModal) => {
    return (
      <>
        {header(<>{`В какую команду определить участни${human.isMan ? 'ка' : 'цу'} ${human.name}?`}</>)}
        {body(
          <>
            {game.teams?.map(team => {
              return (
                <IconCheckbox
                  postfix={team.name}
                  onChange={() => setTargetTeam(team)}
                />
              );
            })}
          </>,
        )}
        {footer(
          <div>
            <IconButton
              Icon={IconCancel02StrokeRounded}
              postfix="Отмена"
              onClick={closeModal}
            />
            <IconButton
              Icon={IconCheckmarkCircle02StrokeRounded}
              postfix={targetTeam?.name}
              onClick={() => {
                if (targetTeam === undefined) return;

                leaderExer.send({
                  action: 'addMemberToTeam',
                  method: 'push',
                  args: {
                    humanw: human.w,
                    teamw: targetTeam.w,
                    gamew: game.w,
                  },
                });
              }}
            />
          </div>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconUserAdd02StrokeRounded}
        postfix="Определить в команду"
        onClick={openModal}
      />
    </>
  );
}
