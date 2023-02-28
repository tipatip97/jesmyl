import SendButton from "../../../../../complect/SendButton";
import { GamerRoomMember, GamerRoomMemberStatus } from "../../Gamer.model";
import RoomMemberFace from "../../complect/GamerRoomMemberFace";
import SpyShowMyRole from "./SpyShowMyRole";
import SpyLocations from "./SpyLocations";

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
    iterations: number,
    retired: string[],
    members?: GamerRoomMember[],
    isMeInactive?: boolean,
    spies?: string[],
    myRole: string | nil,
    onFinishGame?: (() => void) | nil,
    onMemberClick?: ((member: GamerRoomMember) => void),
}) {

    return <div>
        <h2 className="flex center">
            Игра #{iterations}
            {isMeInactive ? ". Ты вне игры" : ""}
        </h2>
        {!isMeInactive && myRole && <SpyShowMyRole role={myRole} />}
        {members?.map((member, memberi) => {
            if (member.isInactive || member.status === GamerRoomMemberStatus.Requester) return null;

            return (
                <RoomMemberFace
                    key={`m ${memberi}`}
                    member={member}
                    descriptionPlus={
                        retired.indexOf(member.login) > -1
                            ? spies && spies.indexOf(member.login) < 0
                                ? "Выбыл"
                                : "Шпион"
                            : ""
                    }
                    onClick={onMemberClick && (() => onMemberClick(member))}
                />
            );
        })}
        {onFinishGame
            ? <>
                {spies && spies.filter((spyLogin) => retired.includes(spyLogin)).length
                    === spies.length && (
                        <div className="error-message text-center margin-big-gap">
                            Больше шпионов нет
                        </div>
                    )}
                <div className="flex center">
                    <SendButton
                        title="Завершить игру"
                        confirm
                        onSend={onFinishGame}
                    />
                </div>
            </>
            : null}
        <SpyLocations />
    </div>
}
