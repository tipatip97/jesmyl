import { useLayoutEffect, useMemo, useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import mylib from "../../../../../../complect/my-lib/MyLib";
import SendButton from "../../../../../../complect/SendButton";
import { SpyRoomMemberStatus } from "../../../Spy.model";
import PhaseSpyContainer from "../../PhaseSpyContainer";
import useSpyLocations from "../../useSpyLocations";
import SpyRoomMore from "./SpyRoomMore";
import SpyRoomStartedGame from "./SpyRoomStartedGame copy";
import SpyRoomGameFinished from "./states/SpyRoomGameFinished";
import SpyRoomLocationsInGame from "./states/SpyRoomLocationsInGame";
import SpyRoomMemberInStartGameMore from "./states/SpyRoomMemberInStartGameMore";
import SpyRoomMemberListInGame from "./states/SpyRoomMemberListInGame";
import useEditableRooms from "./useEditableRooms";
import useSpyRooms from "./useSpyRooms";

const memberStatusPriority = [
  SpyRoomMemberStatus.Owner,
  SpyRoomMemberStatus.Admin,
  SpyRoomMemberStatus.Member,
  SpyRoomMemberStatus.Requester,
];

export default function SpyRoom() {
  const {
    auth,
    currentRoom,
    memberPossibilities,
    players,
    getMyRoleName,
    spies,
    currentLocation,
  } = useSpyRooms();
  const { toggleLocation, startGame, finishGame, resetResults, actualLocations, removeRoom, locations } =
    useEditableRooms();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const inputGenerator = useKeyboard();
  const [loactionsOnLoad, updateLoactionsOnLoad] = useState<
    ["add" | "del", string][]
  >([]);
  const [spyCount, setSpyCount] = useState(0);

  const spyCountInput = inputGenerator("SpyRoom - spyCountInput", {
    type: "number",
    onInput: (value) => setSpyCount(+value),
  });

  useLayoutEffect(() => {
    const newLocationList =
      currentRoom?.locations &&
      loactionsOnLoad.filter(([action, location]) => {
        return currentRoom?.locations
          ? currentRoom.locations.indexOf(location) < 0
            ? action === "add"
            : action === "del"
          : false;
      });
    updateLoactionsOnLoad(newLocationList || []);
  }, [currentRoom]);

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

  const possibilities = memberPossibilities(currentRoom);
  const amIManager = possibilities.isManager;
  const myRole = getMyRoleName();

  return (
    <PhaseSpyContainer
      topClass="spy-room"
      headTitle={`Комната ${currentRoom?.name ? ` - ${currentRoom.name}` : ""}`}
      headClass="flex between"
      head={
        <EvaIcon
          name="more-vertical"
          className="margin-gap"
          onClick={() =>
            openAbsoluteBottomPopup(<SpyRoomMore room={currentRoom} onRemove={removeRoom} />)
          }
        />
      }
      content={
        <>
          {!currentRoom ? (
            <div className="error-message text-center padding-giant-gap">
              Комната не найдена
            </div>
          ) : currentRoom.roles ? (
            currentRoom.finisher ? (
              <SpyRoomGameFinished
                location={currentLocation}
                room={currentRoom}
                isMembersClickable={amIManager}
                members={canPlayMembers}
                onResetResults={() => resetResults()}
                spies={spies}
              />
            ) : !amIManager &&
              currentRoom.retired?.includes(auth?.login || "") ? (
              spies?.includes(auth?.login || "") ? (
                "Тебя разоблачили!"
              ) : (
                "Ты больше не в игре. Не сообщай, пожалуйста, название локации до конца игры"
              )
            ) : (
              <SpyRoomStartedGame
                iterations={currentRoom.iterations}
                myRole={myRole}
                retired={currentRoom.retired ?? []}
                isMeInactive={possibilities.isInactive}
                members={canPlayMembers}
                onFinishGame={amIManager ? finishGame : undefined}
                spies={spies}
                onMemberClick={(member) =>
                  amIManager &&
                  openAbsoluteBottomPopup(
                    <SpyRoomMemberInStartGameMore member={member} />
                  )}
              />
            )
          ) : (
            <>
              {possibilities.isInactive && !possibilities.isOwner ? (
                <div>Тебя исключили из комнаты</div>
              ) : (
                <>
                  <SpyRoomMemberListInGame
                    members={currentRoom.members}
                    amIManager={amIManager}
                  />
                  {!locations?.length
                    ? <div className="margin-big-gap text-center">Локаций нет</div>
                    : <>
                      <SpyRoomLocationsInGame
                        onToggleLocation={toggleLocation}
                        amIManager={amIManager}
                      />
                      {!actualLocations.length ? (
                        <div className="color--3 margin-big-gap text-center">
                          Свободных локаций не осталось
                        </div>
                      ) : (
                        amIManager && (
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
                              {spyCountInput.node}
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
                          </>
                        )
                      )}
                    </>}
                </>
              )}
            </>
          )}
        </>
      }
    />
  );
}
