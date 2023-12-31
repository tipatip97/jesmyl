import { useGamerCurrentRoom } from '../../complect/rooms/room/hooks/current-room';
import { useAliasRoomState } from './hooks/state';

export default function AliasGameRoundWin({ wins }: { wins: number[] }) {
  const state = useAliasRoomState();
  const room = useGamerCurrentRoom();

  if (room === undefined) return null;

  return (
    <>
      <h2>Наилучшие поздравления!</h2>
      {state?.teams?.map(
        (team, teami) =>
          wins.includes(teami) && (
            <div key={team.members[0]}>
              <div>{team.title}</div>
              <div>
                {team.members.map(memberLogin => {
                  return (
                    <div
                      className="margin-gap-l"
                      key={memberLogin}
                    >
                      {room.members.find(member => member.login === memberLogin)?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ),
      )}
    </>
  );
}
