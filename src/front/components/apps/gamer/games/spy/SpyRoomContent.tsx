import { useLayoutEffect, useMemo, useState } from "react";
import SendButton from "../../../../../complect/SendButton";
import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import mylib from "../../../../../complect/my-lib/MyLib";
import { GamerRoomMember, GamerRoomMemberStatus } from "../../Gamer.model";
import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import { memberStatusPriority } from "../../complect/rooms/room/useGamerRooms";
import SpyLocations from "./SpyLocations";
import SpyRoomGameFinished from "./SpyRoomGameFinished";
import SpyRoomLocationsInGame from "./SpyRoomLocationsInGame";
import SpyRoomMemberInStartGameMore from "./SpyRoomMemberInStartGameMore";
import SpyRoomStartedGame from "./started/StartedGame";
import useSpyState from "./useSpyState";

export default function SpyRoomContent() {
    const {
        auth,
        state,
        currentRoom,
        getMyRoleName,
        spies,
        currentLocation,
        memberPossibilities,
        resetResults,
        finishGame,
        players,
        locations,
        actualLocations,
        toggleLocation,
        startGame,
    } = useSpyState();
    const [popupNode, , openPopup] = useBottomPopup<GamerRoomMember>((_, __, member) => <SpyRoomMemberInStartGameMore member={member} />);

    const [loactionsOnLoad, updateLoactionsOnLoad] = useState<["add" | "del", string][]>([]);

    const possibilities = memberPossibilities(currentRoom);
    const amIManager = possibilities.isManager;
    const myRole = getMyRoleName();

    useLayoutEffect(() => {
        const newLocationList =
            state?.locations &&
            loactionsOnLoad.filter(([action, location]) => {
                return state?.locations
                    ? state.locations.indexOf(location) < 0
                        ? action === "add"
                        : action === "del"
                    : false;
            });
        updateLoactionsOnLoad(newLocationList || []);
    }, [state]);

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
    const [spyCount, setSpyCount] = useState(1);

    if (!currentRoom) return null;

    return <>
        {popupNode}
        {state?.roles
            ? state.finisher
                ? <SpyRoomGameFinished
                    location={currentLocation}
                    state={state}
                    isMembersClickable={amIManager}
                    members={canPlayMembers}
                    onResetResults={amIManager && (() => resetResults())}
                    spies={spies}
                />
                : !amIManager &&
                    state.retired?.includes(auth.login || "")
                    ? spies?.includes(auth.login || "")
                        ? "Тебя разоблачили!"
                        : "Ты больше не в игре. Не сообщай, пожалуйста, название локации до конца игры"
                    : <SpyRoomStartedGame
                        iterations={state.iterations}
                        myRole={myRole}
                        retired={state.retired ?? []}
                        isMeInactive={possibilities.isInactive}
                        members={canPlayMembers}
                        onFinishGame={amIManager ? finishGame : undefined}
                        spies={spies}
                        onMemberClick={(member) =>
                            amIManager &&
                            openPopup(member)}
                    />
            : !locations?.length
                ? <div className="margin-big-gap text-center">Локаций нет</div>
                : <>
                    <GamerRoomMemberList />
                    <SpyRoomLocationsInGame
                        onToggleLocation={toggleLocation}
                        amIManager={amIManager}
                    />
                    {!actualLocations.length
                        ? <div className="color--3 margin-big-gap text-center">
                            Свободных локаций не осталось
                        </div>
                        : amIManager &&
                        <>
                            <h2 className="flex">
                                Новая игра
                                {players &&
                                    ` (${players.length} ${mylib.declension(
                                        players.length,
                                        "игрок",
                                        "игрока",
                                        "игроков"
                                    )})`}
                            </h2>
                            <div className="full-width">
                                <span>Количество шпионов:</span>
                                <KeyboardInput
                                    type="number"
                                    onInput={(value) => setSpyCount(+value)}
                                    value={'' + spyCount}
                                />
                            </div>
                            {players && (
                                <div className="flex center padding-giant-gap">
                                    <SendButton
                                        title="Начать игру"
                                        disabled={!spyCount || players.length < spyCount}
                                        onSend={() => startGame(spyCount)}
                                    />
                                </div>
                            )}
                            <SpyLocations />
                        </>}
                </>}
    </>;
}