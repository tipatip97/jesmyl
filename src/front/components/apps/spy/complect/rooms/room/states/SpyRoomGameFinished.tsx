import SendButton from "../../../../../../../complect/SendButton";
import { SpyRoom, SpyRoomMember } from "../../../../Spy.model";
import RoomMemberFace from "../../../RoomMemberFace";
import { SPY_ROLE } from "../../../useSpyLocations";

export default function SpyRoomGameFinished({
    room,
    location,
    members,
    isMembersClickable = true,
    spies,
    onResetResults,
}: {
    room: SpyRoom,
    location: string | nil,
    members?: SpyRoomMember[],
    isMembersClickable?: boolean,
    spies?: string[],
    onResetResults?: (() => void) | nil,
}) {
    return <div>
        <div className="padding-big-gap text-center color--3">
            Игру завершил {room.finisher?.name}
        </div>
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
                        room.retired &&
                            room.retired.indexOf(member.login) > -1
                            ? "Выбыл"
                            : "",
                        spies && spies.indexOf(member.login) > -1
                            ? "Шпион"
                            : "",
                    ]
                        .filter((label) => label)
                        .join(" - ")}
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
}