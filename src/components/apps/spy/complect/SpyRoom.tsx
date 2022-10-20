import { useLayoutEffect, useMemo, useState } from "react";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaButton from "../../../../complect/eva-icon/EvaButton";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import mylib from "../../../../complect/my-lib/MyLib";
import SendButton from "../../lider/complect/SendButton";
import { SpyRoomMemberStatus } from "../Spy.model";
import PhaseSpyContainer from "./PhaseSpyContainer";
import RoomMemberFace from "./RoomMemberFace";
import SpyRoomMemberInStartGameMore from "./SpyRoomMemberInStartGameMore";
import SpyRoomMemberMore from "./SpyRoomMemberMore";
import SpyRoomMore from "./SpyRoomMore";
import useEditableRooms from "./useEditableRooms";
import useRooms from "./useRooms";

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
    cache,
    getMyRoleName,
    spies,
    currentLocation,
  } = useRooms();
  const { toggleLocation, startGame, finishGame, resetResults } =
    useEditableRooms();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const inputGenerator = useKeyboard();
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [isShowMyRole, setIsShowMyRole] = useState(false);
  const [loactionsOnLoad, updateLoactionsOnLoad] = useState<
    ["add" | "del", string][]
  >([]);

  const spyCountInput = inputGenerator("SpyRoom - spyCountInput", {
    type: "number",
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

  const sortedMembers = useMemo(
    () =>
      currentRoom?.members
        .filter(() => true)
        .sort(
          (a, b) =>
            memberStatusPriority.indexOf(a.status) -
            memberStatusPriority.indexOf(b.status)
        ),
    [currentRoom]
  );

  const possibilities = memberPossibilities(currentRoom);
  const isManager = possibilities.isManager;
  const locationName = getMyRoleName();

  return (
    <PhaseSpyContainer
      topClass="spy-room"
      headTitle={`Комната ${
        currentRoom?.name ? ` - ${currentRoom?.name}` : ""
      }`}
      headClass="flex between"
      head={
        <EvaIcon
          name="more-vertical"
          className="margin-gap"
          onClick={() =>
            openAbsoluteBottomPopup(<SpyRoomMore room={currentRoom} />)
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
              <div>
                <div className="padding-big-gap text-center color--3">
                  Игру завершил {currentRoom.finisher.name}
                </div>
                <div className="padding-gap text-center color--3">
                  {currentLocation == null ? (
                    <span className="error-message">Все шпионы</span>
                  ) : (
                    `Локация - ${currentLocation}`
                  )}
                </div>
                {sortedMembers?.map((member, memberi) => {
                  return (
                    <RoomMemberFace
                      key={`m ${memberi}`}
                      member={member}
                      description={[
                        currentRoom.retired &&
                        currentRoom.retired.indexOf(member.login) > -1
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
                {possibilities.isManager && (
                  <div className="flex center">
                    <SendButton
                      title="Сбросить результаты"
                      confirm
                      onSend={() => resetResults()}
                    />
                  </div>
                )}
              </div>
            ) : !isManager &&
              currentRoom.retired?.includes(auth?.login || "") ? (
              spies?.includes(auth?.login || "") ? (
                "Тебя разоблачили!"
              ) : (
                "Ты больше не в игре. Не сообщай, пожалуйста, название локации до конца игры"
              )
            ) : (
              <div>
                <h2>
                  Игра начата
                  {possibilities.isInactive ? ". Ты вне игры" : ""}
                </h2>
                {!possibilities.isInactive && (
                  <div
                    className="flex flex-gap padding-giant-gap pointer"
                    onClick={() => setIsShowMyRole(!isShowMyRole)}
                  >
                    {
                      <EvaIcon
                        name={isShowMyRole ? "eye-off-outline" : "eye-outline"}
                      />
                    }
                    {isShowMyRole ? (
                      locationName === null ? (
                        <span>Ты - шпион!</span>
                      ) : (
                        <span>Текущая локация - {locationName}</span>
                      )
                    ) : (
                      <span className="fade-05">
                        {" "}
                        - кликни, чтоб увидеть локацию
                      </span>
                    )}
                  </div>
                )}
                <div>
                  {currentRoom.members.map((member, memberi) => {
                    if (member.isInactive) return null;

                    return (
                      <div
                      // className={
                      //   getRoleName(member.login) ? "" : "error-message"
                      // }
                      >
                        <RoomMemberFace
                          key={`m ${memberi}`}
                          member={member}
                          descriptionPlus={
                            currentRoom.retired &&
                            currentRoom.retired.indexOf(member.login) > -1
                              ? spies && spies.indexOf(member.login) < 0
                                ? "Выбыл"
                                : "Шпион"
                              : ""
                          }
                          onClick={() =>
                            isManager &&
                            openAbsoluteBottomPopup(
                              <SpyRoomMemberInStartGameMore member={member} />
                            )
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                {isManager ? (
                  <>
                    {currentRoom.spiesCount ===
                      spies?.filter((spyLogin) =>
                        currentRoom.retired?.includes(spyLogin)
                      ).length && (
                      <div className="error-message text-center margin-big-gap">
                        Больше шпионов нет
                      </div>
                    )}
                    <div className="flex center">
                      <SendButton
                        title="Завершить игру"
                        confirm
                        onSend={() => finishGame()}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            )
          ) : (
            <>
              {possibilities.isInactive && !possibilities.isOwner ? (
                <div>Тебя исключили из комнаты</div>
              ) : (
                <>
                  <h2>Участники</h2>
                  {sortedMembers?.map((member, memberi) => {
                    return (
                      <RoomMemberFace
                        key={`m ${memberi}`}
                        member={member}
                        onClick={() =>
                          isManager &&
                          openAbsoluteBottomPopup(
                            <SpyRoomMemberMore member={member} />
                          )
                        }
                      />
                    );
                  })}
                  <h2
                    className="flex flex-gap pointer"
                    onClick={() => setIsOpenLocations(!isOpenLocations)}
                  >
                    Локации
                    <EvaButton
                      name={
                        isOpenLocations
                          ? "arrow-ios-upward-outline"
                          : "arrow-ios-downward-outline"
                      }
                    />
                  </h2>
                  {isOpenLocations &&
                    cache?.locations?.map((location, locationi) => {
                      const isStriked = currentRoom.locations?.some(
                        (loc) => loc === location
                      );
                      const isOnLoading = loactionsOnLoad.some(
                        ([, loc]) => loc === location
                      );

                      return (
                        <div
                          key={`l ${locationi}`}
                          className={`flex flex-gap margin-gap-v ${
                            isManager ? "pointer" : ""
                          } ${isOnLoading ? "disabled" : ""} ${
                            isStriked ? "error-message" : ""
                          }`}
                          onClick={() =>
                            isManager &&
                            updateLoactionsOnLoad([
                              ...loactionsOnLoad,
                              [toggleLocation(location), location],
                            ])
                          }
                        >
                          <EvaButton
                            name={
                              isOnLoading
                                ? "loader-outline"
                                : isStriked
                                ? "close-circle-outline"
                                : "checkmark-circle-2-outline"
                            }
                            className={isOnLoading ? "rotate" : ""}
                          />
                          <span className={isStriked ? "text-strike" : ""}>
                            {location}
                          </span>
                        </div>
                      );
                    })}
                  {cache?.locations?.length ===
                  currentRoom?.locations?.length ? (
                    <div className="color--3 margin-big-gap text-center">
                      Свободных локаций не осталось
                    </div>
                  ) : (
                    isManager && (
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
                              disabled={
                                !+spyCountInput.value() ||
                                players.length < +spyCountInput.value()
                              }
                              onSend={() => startGame(+spyCountInput.value())}
                            />
                          </div>
                        )}
                      </>
                    )
                  )}
                </>
              )}
            </>
          )}
        </>
      }
    />
  );
}
