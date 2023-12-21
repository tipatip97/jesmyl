import SendButton from '../../../../../complect/sends/send-button/SendButton';
import RoomMemberFace from '../../complect/GamerRoomMemberFace';
import { GamerRoomMember } from '../../Gamer.model';
import { SpyRoomState } from './Spy.model';
import { SPY_ROLE } from './hooks/locations';

export default function SpyRoomGameFinished({
  state,
  location,
  members,
  isMembersClickable = true,
  spies,
  onResetResults,
}: {
  state: SpyRoomState;
  location: string | nil;
  members?: GamerRoomMember[];
  isMembersClickable?: boolean;
  spies?: string[];
  onResetResults?: (() => void) | nil;
}) {
  return (
    <div>
      <div className="padding-big-gap text-center color--3">Игру завершил {state.finisher?.name}</div>
      <div className="padding-gap text-center color--3">
        {location == null || location === SPY_ROLE ? (
          <span className="error-message">Все шпионы</span>
        ) : (
          `Локация - ${location}`
        )}
      </div>
      {members?.map((member, memberi) => {
        return (
          <RoomMemberFace
            key={`m ${memberi}`}
            member={member}
            isClickable={isMembersClickable}
            description={[
              state.retired && state.retired.indexOf(member.login) > -1 ? 'Выбыл' : '',
              spies && spies.indexOf(member.login) > -1 ? 'Шпион' : '',
            ]
              .filter(label => label)
              .join(' - ')}
          />
        );
      })}
      {onResetResults && (
        <div className="flex center">
          <SendButton
            title="Сбросить результаты"
            confirm
            onSend={onResetResults}
          />
        </div>
      )}
    </div>
  );
}
