import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalService from "../../../../../../complect/modal/Modal.service";
import { RootState } from "../../../../../../shared/store";
import useAuth from "../../../../../index/useAuth";
import { GamerGameName, GamerRoom, GamerRoomMemberStatus } from "../../../Gamer.model";
import di, { gamerExer } from "../../../Gamer.store";
import gamerStorage from "../../../gamerStorage";
import useGamerNav from "../../../useGamerNav";

const roomsSelector = (state: RootState) => state.gamer.rooms;
const offlineRoomsSelector = (state: RootState) => state.gamer.offlineRooms;
const roomwSelector = (state: RootState) => state.gamer.roomw;

export const memberStatusPriority = [
    GamerRoomMemberStatus.Owner,
    GamerRoomMemberStatus.Admin,
    GamerRoomMemberStatus.Member,
    GamerRoomMemberStatus.Requester,
];

export default function useGamerRooms(offline?: boolean) {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsSelector);
    const offlineRooms = useSelector(offlineRoomsSelector);
    const roomw = useSelector(roomwSelector);
    const { goTo } = useGamerNav();
    const currentRoom = (roomw && (offline ? offlineRooms : rooms)?.find(({ w }) => roomw === w)) || null;
    const auth = useAuth();

    const canPlayMembers = useMemo(
        () =>
            currentRoom?.members
                .filter((member) => member.status !== GamerRoomMemberStatus.Requester)
                .sort(
                    (a, b) =>
                        memberStatusPriority.indexOf(a.status) -
                        memberStatusPriority.indexOf(b.status)
                ),
        [currentRoom]
    );
    const players = useMemo(
        () => canPlayMembers?.filter((member) => !member.isInactive),
        [canPlayMembers]
    );

    const ret = {
        auth,
        canPlayMembers,
        rooms,
        currentRoom,
        players,
        memberPossibilities: (room: GamerRoom | null = currentRoom, topLogin = auth.login) => {
            if (!auth) return { isUnauthorized: true, isInvalid: true };
            const member = room?.members.find(({ login }) => login === topLogin);

            if (!member) return { isInvalid: true };

            const isRequester = member.status === GamerRoomMemberStatus.Requester;
            const isInactive = member.isInactive;
            const isOwner = member.status === GamerRoomMemberStatus.Owner;
            const isAdmin = member.status === GamerRoomMemberStatus.Admin;

            return {
                isRequester,
                isInactive,
                isOwner,
                isAdmin,
                isManager: isAdmin || isOwner || undefined,
                isInvalid: (isRequester || isInactive) && member.status !== GamerRoomMemberStatus.Owner,
                member,
            };
        },
        goToRoom: (roomWid: number) => {
            const possibilities = ret.memberPossibilities(rooms?.find(({ w }) => w === roomWid) ?? null);
            if (possibilities.isUnauthorized) {
                modalService.alert('Не авторизован');
                return;
            }
            if (possibilities.isInvalid) {
                if (possibilities.member == null) {
                    modalService.confirm('Просматривать результаты и участвовать могут только добавленные в комнату участники. Отправить заявку на вступление?')
                        .then((isRequest) => {
                            if (isRequest) gamerExer.send({
                                action: 'requestAddToRoom',
                                method: 'push',
                                args: {
                                    login: auth.login,
                                    fio: auth.fio,
                                    roomw: roomWid,
                                }
                            });
                        });
                } else if (possibilities.isRequester) modalService.alert('Заявка на вступление в комнату отправлена. Дождись принятия, или свяжись с владельцем комнаты.');
                else modalService.alert('Тебя исключили из комнаты');
                return;
            }

            gamerStorage.set('roomw', roomWid);
            dispatch(di.roomw(roomWid));
            goTo('room');
        },
        setCurrentGame: (value: GamerGameName) => {
            gamerExer.send({
                action: 'setCurrentGameName',
                method: 'set',
                args: {
                    value,
                    roomw: currentRoom?.w,
                }
            });
        },
    };

    return ret;
}
