import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../shared/store";
import modalService from "../../../../../../complect/modal/Modal.service";
import useAuth from "../../../../../index/useAuth";
import { SpyRoom, SpyRoomMemberStatus } from "../../../Spy.model";
import { setSpyCurrentRoomw, spyExer } from "../../../Spy.store";
import useSpyNav from "../../../useSpyNav";
import { SPY_ROLE, unsecretSpyRole } from "../../useSpyLocations";
import spyStorage from "../../../spyStorage";

const roomsSelector = (state: RootState) => state.spy.rooms;
const roomwSelector = (state: RootState) => state.spy.roomw;

const memberStatusPriority = [
    SpyRoomMemberStatus.Owner,
    SpyRoomMemberStatus.Admin,
    SpyRoomMemberStatus.Member,
    SpyRoomMemberStatus.Requester,
];

export default function useSpyRooms() {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsSelector);
    const roomw = useSelector(roomwSelector);
    const { goTo } = useSpyNav();
    const currentRoom = (roomw && rooms?.find(({ w }) => roomw === w)) || null;
    const { auth } = useAuth();

    const canPlayMembers = useMemo(
        () =>
            currentRoom?.members
                .filter((member) => member.status !== SpyRoomMemberStatus.Requester)
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
        spies: useMemo(() => {
            return players?.filter((player) => unsecretSpyRole((currentRoom?.roles && currentRoom.roles[player.login]) || '') === SPY_ROLE).map(({ login }) => login);
        }, [players, currentRoom]),
        currentLocation: useMemo(() => {
            return players?.map((player) => unsecretSpyRole((currentRoom?.roles && currentRoom.roles[player.login]) || '')).find(loc => loc);
        }, [players, currentRoom]),
        memberPossibilities: (room: SpyRoom | null, topLogin = auth?.login) => {
            const member = room?.members.find(({ login }) => login === topLogin);

            if (!member) return { isInvalid: true, member };

            const isRequester = member.status === SpyRoomMemberStatus.Requester;
            const isInactive = member.isInactive;
            const isOwner = member.status === SpyRoomMemberStatus.Owner;
            const isAdmin = member.status === SpyRoomMemberStatus.Admin;

            return {
                isRequester,
                isInactive,
                isOwner,
                isAdmin,
                isManager: isAdmin || isOwner,
                isInvalid: (isRequester || isInactive) && member.status !== SpyRoomMemberStatus.Owner,
                member,
            };
        },
        getMyRoleName: () => {
            return currentRoom?.roles && auth?.login && unsecretSpyRole(currentRoom.roles[auth.login]);
        },
        goToRoom: (roomWid: number) => {
            const isIMemberSubstance = ret.memberPossibilities(rooms?.find(({ w }) => w === roomWid) ?? null);
            if (isIMemberSubstance.isInvalid) {
                if (isIMemberSubstance.member == null) {
                    modalService.confirm('Просматривать результаты и участвовать могут только добавленные в комнату участники. Отправить заявку на вступление?')
                        .then((isRequest) => {
                            if (isRequest) spyExer.send({
                                action: 'requestAddToRoom',
                                method: 'push',
                                args: {
                                    login: auth?.login,
                                    fio: auth?.fio,
                                    roomw: roomWid,
                                }
                            });
                        });
                } else if (isIMemberSubstance.isRequester) modalService.alert('Заявка на вступление в комнату отправлена. Дождись принятия, или свяжись с владельцем комнаты.');
                else modalService.alert('Тебя исключили из комнаты');
                return;
            }

            spyStorage.set('roomw', roomWid);
            dispatch(setSpyCurrentRoomw(roomWid));
            goTo('room');
        }
    };

    return ret;
}