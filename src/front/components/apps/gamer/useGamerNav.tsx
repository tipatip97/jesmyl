import { Dispatch } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { LocalSokiAuth } from "../../../../back/complect/soki/soki.model";
import { EvaIconName } from "../../../complect/eva-icon/EvaIcon";
import modalService from "../../../complect/modal/Modal.service";
import mylib from "../../../complect/my-lib/MyLib";
import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  INavigationRouteChildItem,
  NavigationStorage,
  UseNavAction
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { QRCodeReaderData } from "../../../complect/qr-code/QRCodeMaster.model";
import TheSpyPassport from "./complect/GamerPassport";
import GamerOfflineRoom from "./complect/rooms/offline-room/GamerOfflineRoom";
import SpyCurrentOfflineGameInfo from "./complect/rooms/offline-room/SpyCurrentOfflineGameInfo";
import SpyOfflineRoomContent from "./complect/rooms/offline-room/SpyOfflineRoomContent";
import GamerRoom from "./complect/rooms/room/GamerRoom";
import Gamer from "./Gamer";
import { GamerGameName, GamerNavData, GamerPassport, GamerStorage } from "./Gamer.model";
import { updateCurrentOfflineGameName, updateSpyOfflineGame } from "./Gamer.store";
import GamerApp from "./GamerApp";
import { OfflineGameShare } from "./games/spy/offline-room/SpyOfflineRoom.model";
import SpyRoomContent from "./games/spy/SpyRoomContent";
import { SPY_ROLE, unsecretSpyRole } from "./games/spy/useSpyLocations";


export type GamerRoomGameSkelet<DataDifference = {}> = INavigationRouteChildItem<GamerNavData, { icon: EvaIconName, title: string } & DataDifference, GamerGameName>;

export const gamerRoomGames: GamerRoomGameSkelet[] = [
  {
    phase: ['spy'],
    node: <SpyRoomContent />,
    data: {
      icon: 'search',
      title: 'Шпион 1.0',
    },
  },
];

export const gamerOfflineRoomGames: GamerRoomGameSkelet<{
  currentNode: ReactNode,
  qr: (dispatch: Dispatch, passport: LocalSokiAuth | GamerPassport, data: QRCodeReaderData<any, any>) => void
}>[] = [
    {
      phase: ['spy'],
      node: <SpyOfflineRoomContent />,
      data: {
        icon: 'search',
        title: 'Шпион 1.0',
        currentNode: <SpyCurrentOfflineGameInfo />,
        qr: (dispatch, passport, data) => {
          if (!passport.login) return;
          const [location, spiesCount, iterations, memberStrList] = data.value as OfflineGameShare || [];
          const members = memberStrList.match(/\.|.{0,32}/g);
          if (!members) return;
          const md5passport = mylib.md5(passport.login);
          const memberi = members.indexOf(md5passport);
          if (memberi < 0) {
            modalService.alert('Ты не в игре');
            return;
          } else {
            const newMembers = [...members];
            newMembers[memberi] = '.';

            dispatch(updateSpyOfflineGame({
              iterations,
              location: memberi < spiesCount ? SPY_ROLE : unsecretSpyRole(location),
              reshareData: [location, spiesCount, iterations, newMembers.join('')],
            }));
            dispatch(updateCurrentOfflineGameName('spy'));
          }
        }
      },
    },
  ];

const gamerNavigation = new NavigationConfig<
  GamerStorage,
  NavigationStorage<GamerStorage>
>({
  root: (content) => <GamerApp content={content} />,
  rootPhase: "gamer",
  logo: "cube",
  routes: [
    {
      phase: ["gamer"],
      icon: "cube",
      title: "Игрок",
      node: <Gamer />,
      next: [
        {
          phase: ["room"],
          node: (config) => <GamerRoom config={config} />,
          next: [
            {
              phase: ['needChooseGame'],
              node: null,
            },
            ...gamerRoomGames,
          ],
        },
        {
          phase: ["offlineRoom"],
          node: (config) => <GamerOfflineRoom config={config} />,
          next: [
            {
              phase: ['needChooseGame'],
              node: null,
            },
            ...gamerOfflineRoomGames,
          ],
        },
      ],
    },
    {
      phase: ["passport"],
      icon: "credit-card",
      title: "Паспорт",
      node: <TheSpyPassport />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useSpyNav() {
  return useGamerNavConfigurer();
}

const useGamerNavConfigurer = () =>
  useNavConfigurer<GamerStorage, NavigationStorage<GamerStorage>>(
    'gamer',
    actions,
    gamerNavigation,
  );
export { useGamerNavConfigurer };

