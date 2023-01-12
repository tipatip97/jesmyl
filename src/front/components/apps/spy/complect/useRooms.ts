import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { spyStorage } from "../../../../shared/jstorages";
import { RootState } from "../../../../shared/store";
import useAuth from "../../../index/useAuth";
import { SpyRoom, SpyRoomMemberStatus } from "../Spy.model";
import { setSpyCurrentRoomw, spyExer } from "../Spy.store";
import useSpyNav from "../useSpyNav";


export const wordSpyParts = '0987654321qwertyuiopasdfghjklzxcvbnm';
const symbols = `${wordSpyParts}!@#$%^&*()_+=,./[]{}:;QWERTYUIOPASDFGHJKLZXCVBNM\\"'<>?`;
export const getSpyRandomSymbol = (line = symbols) => line[mylib.randomOf(0, line.length - 1)];
export const secretSpyRole = (word: string[]) => {
    while (new Blob([word.join("")]).size < 50) {
        word.splice(mylib.randomOf(0, word.length - 1), 0, getSpyRandomSymbol());
    }
    return btoa(
        unescape(
            encodeURIComponent(
                getSpyRandomSymbol() + word.join("") + getSpyRandomSymbol()
            )
        )
    );
};

export const unsecretSpyRole = (word: string) => {
    const role = decodeURIComponent(escape(atob(word))).replace(/[^а-яё -]/gi, '');
    return role === 'ШПИОН' ? null : role;
};

const cacheSelector = (state: RootState) => state.spy.cache;
const roomwSelector = (state: RootState) => state.spy.roomw;

export default function useRooms() {
    const dispatch = useDispatch();
    const cache = useSelector(cacheSelector);
    const roomw = useSelector(roomwSelector);
    const { goTo } = useSpyNav();
    const currentRoom = (roomw && cache?.rooms?.find(({ w }) => roomw === w)) || null;
    const { auth } = useAuth();
    const players = useMemo(
        () =>
            currentRoom?.members
                .filter((member) => !member.isInactive && member.status !== SpyRoomMemberStatus.Requester),
        [currentRoom]
    );

    const ret = {
        auth,
        cache,
        currentRoom,
        players,
        spies: useMemo(() => {
            return players?.filter((player) => unsecretSpyRole((currentRoom?.roles && currentRoom.roles[player.login]) || '') === null).map(({ login }) => login);
        }, [players]),
        currentLocation: useMemo(() => {
            return players?.map((player) => unsecretSpyRole((currentRoom?.roles && currentRoom.roles[player.login]) || '')).find(loc => loc);
        }, [players]),
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
            const isIMemberSubstance = ret.memberPossibilities(cache?.rooms?.find(({ w }) => w === roomWid) ?? null);
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