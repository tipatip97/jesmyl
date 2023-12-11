import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import EvaIcon, { IconEva } from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import { NavigationThrowNodeProps } from "../../../../../complect/nav-configurer/Navigation.model";
import { GamerGameName, GamerNavData, GamerRoom } from "../../Gamer.model";
import useGamerNav, { GamerRoomGameSkelet } from "../../useGamerNav";
import GamerRoomMemberList from "../GamerRoomMemberList";
import PhaseGamerContainer from "../PhaseGamerContainer";

export default function GamerRoomContent({ config, isInactive, isManager, isOwner, room, onRoomRemove, games, onGameChange, namePrefix }: {
  config: NavigationThrowNodeProps<GamerNavData>,
  isOwner?: boolean,
  isManager?: boolean,
  isInactive?: boolean,
  room?: GamerRoom | null,
  games: GamerRoomGameSkelet[],
  onRoomRemove: (roomw: number) => void,
  onGameChange: (gameName: GamerGameName) => void,
  namePrefix?: string,
}) {
  const [popupNode, openPopup] = useBottomPopup((_, prepare) => prepare({
    items: [
      config.relativePoint && {
        title: 'Сменить игру',
        icon: "undo-outline",
        onClick: () => {
          goTo('needChooseGame', config.relativePoint);
          setIsForceChoose(true);
        },
      },
      isOwner && {
        title: 'Удалить комнату',
        icon: "trash-2-outline",
        onClick: async () => {
          if (
            room &&
            (await modalService.confirm(`Удалить комнату ${room.name}?`))
          ) {
            onRoomRemove(room.w);
            goBack();
          }
        },
      }
    ]
  }));
  const { goTo, goBack } = useGamerNav();
  const [isForceChoose, setIsForceChoose] = useState(false);

  const isNeedChooseGame = config.currentChildPhase === 'needChooseGame';

  useLayoutEffect(() => {
    if (!isForceChoose && room?.currentGame && (isNeedChooseGame || room?.currentGame !== config.currentChildPhase)) {
      goTo(room.currentGame, config.relativePoint);
    }
  }, [isForceChoose, isNeedChooseGame, room?.currentGame, config.relativePoint]);

  return <GamerRoomDiv
    className=""
    headTitle={`${namePrefix || ''}Комната ${room?.name ? ` - ${room.name}` : ""}`}
    head={((gameData) => gameData &&
      <EvaButton
        name={gameData.icon}
        className="color--7 margin-gap-r"
        postfix={gameData.title}
      />)
      (games.find(({ phase: [gameName] }) => room?.currentGame === gameName)?.data)}
    contentClass="flex column custom-align-items"
    onMoreClick={isManager ? openPopup : undefined}
    content={
      <>
        {popupNode}
        {!room
          ? <div className="error-message text-center padding-giant-gap">
            Комната не найдена
          </div>
          : <>
            {isInactive && !isOwner
              ? <div>Тебя исключили из комнаты</div>
              : <>
                {isNeedChooseGame
                  ? <>
                    <GamerRoomMemberList />
                    {isManager
                      ? <><h2>Игры</h2>
                        <div className="gamer-game-palette flex center full-width flex-wrap flex-gap">
                          {games.map(({ phase: [gameName], data }) => {
                            if (!data) return null;
                            return <div
                              key={gameName}
                              className="gamer-game-item flex column around flex-gap pointer"
                              onClick={() => {
                                goTo(gameName, config.relativePoint);
                                onGameChange(gameName);
                                setIsForceChoose(false);
                              }}
                            >
                              <EvaIcon name={data.icon} />
                              <div className="title">{data.title}</div>
                            </div>;
                          })}
                        </div>
                      </>
                      : null}
                  </>
                  : null}
                {config.outletContent}
              </>}
          </>}
      </>}
  />;
}

const GamerRoomDiv = styled(PhaseGamerContainer)`
.gamer-game-palette {
  display: flex;

  .gamer-game-item {
    --size: 45vmin;
    --max-size: 300px;

    background: var(--color--1);
    width: var(--size);
    height: var(--size);
    max-width: var(--max-size);
    max-height: var(--max-size);
    border-radius: 20px;

    ${IconEva} {
      --icon-scale: 3;
      margin-top: 30px
    }
  }
}
`;
