import { useState } from 'react';
import { BottomPopupContenterPreparer } from '../../../../../complect/absolute-popup/bottom-popup/model';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../complect/eva-icon/EvaCheckbox';
import useModal from '../../../../../complect/modal/useModal';
import { TeamGameImportable } from '../../Leader.model';
import { leaderExer } from '../../Leader.store';
import { HumanImportable } from '../people/People.model';
import { GameTeamImportable } from './teams/GameTeams.model';

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
                <EvaCheckbox
                  postfix={team.name}
                  onChange={() => setTargetTeam(team)}
                />
              );
            })}
          </>,
        )}
        {footer(
          <div>
            <EvaButton
              name="slash"
              postfix="Отмена"
              onClick={closeModal}
            />
            <EvaButton
              name="checkmark-circle-outline"
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
      <EvaButton
        name="person-add-outline"
        postfix="Определить в команду"
        onClick={openModal}
      />
    </>
  );
}
