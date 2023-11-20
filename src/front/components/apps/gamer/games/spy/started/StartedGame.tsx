import styled from "styled-components";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import { GamerRoomMember, GamerRoomMemberStatus } from "../../../Gamer.model";
import RoomMemberFace from "../../../complect/GamerRoomMemberFace";
import LocationHideScreen from "./LocationHideScreen";

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

    return <div className="flex column between full-height full-width">
        <MemberList className="full-width margin-big-gap-b no-scrollbar">
            <div className="list">
                {members?.map((member, memberi) => {
                    if (member.isInactive || member.status === GamerRoomMemberStatus.Requester) return null;

                    return <RoomMemberFace
                        key={memberi}
                        member={member}
                        descriptionPlus={
                            retired.indexOf(member.login) > -1
                                ? spies && spies.indexOf(member.login) < 0
                                    ? "Выбыл"
                                    : "Шпион"
                                : ""
                        }
                        onClick={onMemberClick && (() => onMemberClick(member))}
                    />;
                })}
            </div>
        </MemberList>
        <LocationHideScreen
            isAllSpiesFound={
                spies && spies.filter((spyLogin) => retired.includes(spyLogin)).length === spies.length
            }
            myRole={myRole}
            leftContent={
                <div>
                    <div>Игра #{iterations}</div>
                    <div className="color--ko">{isMeInactive ? 'Ты вне игры' : ''}</div>
                </div>}
            rightContent={
                onFinishGame && <EvaButton
                    name="close-square-outline"
                    confirm="Завершить игру"
                    onClick={onFinishGame}
                />}
        />
    </div>
}

const MemberList = styled.div`
    overflow-y: auto;

    > .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;
