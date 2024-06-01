import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconCancelSquareStrokeRounded } from '../../../../../../complect/the-icon/icons/cancel-square';
import { GamerRoomMember, GamerRoomMemberStatus } from '../../../Gamer.model';
import RoomMemberFace from '../../../complect/GamerRoomMemberFace';
import LocationHideScreen from './LocationHideScreen';

export default function SpyRoomStartedGame({
  iterations,
  retired,
  members,
  isMeInactive = false,
  spies,
  myRole,
  onFinishGame,
  onMemberClick,
}: {
  iterations: number;
  retired: string[];
  members?: GamerRoomMember[];
  isMeInactive?: boolean;
  spies?: string[];
  myRole: string | nil;
  onFinishGame?: (() => void) | nil;
  onMemberClick?: (member: GamerRoomMember) => void;
}) {
  return (
    <div className="flex column between full-height full-width">
      <div className="full-width margin-big-gap-b no-scrollbar">
        <div className="list">
          {members?.map((member, memberi) => {
            if (member.isInactive || member.status === GamerRoomMemberStatus.Requester) return null;

            return (
              <RoomMemberFace
                key={memberi}
                member={member}
                descriptionPlus={
                  retired.indexOf(member.login) > -1
                    ? spies && spies.indexOf(member.login) < 0
                      ? 'Выбыл'
                      : 'Шпион'
                    : ''
                }
                onClick={onMemberClick && (() => onMemberClick(member))}
              />
            );
          })}
        </div>
      </div>
      <LocationHideScreen
        isAllSpiesFound={spies && spies.filter(spyLogin => retired.includes(spyLogin)).length === spies.length}
        myRole={myRole}
        leftContent={
          <div>
            <div>Игра #{iterations}</div>
            <div className="color--ko">{isMeInactive ? 'Ты вне игры' : ''}</div>
          </div>
        }
        rightContent={
          onFinishGame && (
            <IconButton
              Icon={IconCancelSquareStrokeRounded}
              className="color--ko"
              confirm="Завершить игру"
              onClick={onFinishGame}
            />
          )
        }
      />
    </div>
  );
}
