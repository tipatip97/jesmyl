import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconCancelSquareStrokeRounded } from '../../../../../../complect/the-icon/icons/cancel-square';
import { IconIncognitoDuotoneRounded } from '../../../../../../complect/the-icon/icons/incognito';
import { IconLocationUser03StrokeRounded } from '../../../../../../complect/the-icon/icons/location-user-03';
import { IconUserBlock01DuotoneRounded } from '../../../../../../complect/the-icon/icons/user-block-01';
import { IconUserQuestion01BulkRounded } from '../../../../../../complect/the-icon/icons/user-question-01';
import { GamerRoomMember, GamerRoomMemberStatus } from '../../../Gamer.model';
import RoomMemberFace from '../../../complect/GamerRoomMemberFace';
import SpyLocations from '../SpyLocations';
import LocationHideScreen from './LocationHideScreen';

interface Props {
  iterations: number;
  startMs?: number;
  roundTm?: number;
  retired: string[];
  members?: GamerRoomMember[];
  isMeInactive?: boolean;
  spies?: string[];
  myRole: string | nil;
  onFinishGame?: (() => void) | nil;
  onMemberClick?: (member: GamerRoomMember) => void;
}

export default function SpyRoomStartedGame({
  iterations,
  retired,
  members,
  isMeInactive = false,
  spies,
  myRole,
  onFinishGame,
  onMemberClick,
  startMs,
  roundTm,
}: Props) {
  const [allLocationsNode, openAllLocationsNode] = useFullContent(() => <SpyLocations isForceShow />);

  return (
    <div className="flex column between full-height full-width">
      {allLocationsNode}
      <div className="full-width margin-big-gap-b no-scrollbar">
        <div className="list">
          {members?.map((member, memberi) => {
            if (member.isInactive || member.status === GamerRoomMemberStatus.Requester) return null;
            const isBlocked = retired.indexOf(member.login) > -1;
            const isSpy = isBlocked && spies?.includes(member.login);

            return (
              <RoomMemberFace
                key={memberi}
                member={member}
                icon={
                  isSpy ? (
                    <IconIncognitoDuotoneRounded className="color--ko" />
                  ) : isBlocked ? (
                    <IconUserBlock01DuotoneRounded />
                  ) : (
                    <IconUserQuestion01BulkRounded />
                  )
                }
                descriptionPlus={isBlocked ? (isSpy ? 'Шпион' : 'Выбыл') : ''}
                onClick={onMemberClick && (() => onMemberClick(member))}
              />
            );
          })}
        </div>
      </div>
      <LocationHideScreen
        isAllSpiesFound={spies && spies.filter(spyLogin => retired.includes(spyLogin)).length === spies.length}
        myRole={myRole}
        roundTm={roundTm}
        startMs={startMs}
        leftContent={
          <div>
            <div>Игра #{iterations}</div>
            <div className="color--ko">{isMeInactive ? 'Ты вне игры' : ''}</div>
          </div>
        }
        rightContent={
          <div className="flex flex-big-gap">
            <IconLocationUser03StrokeRounded
              className="color--7 pointer"
              onClick={() => openAllLocationsNode(true)}
            />
            {onFinishGame && (
              <IconButton
                Icon={IconCancelSquareStrokeRounded}
                className="color--ko"
                confirm="Завершить игру"
                onClick={onFinishGame}
              />
            )}
          </div>
        }
      />
    </div>
  );
}
