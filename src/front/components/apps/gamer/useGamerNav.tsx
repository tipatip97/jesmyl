import React, { ReactNode, Suspense } from 'react';
import { LocalSokiAuth, SokiServerEvent } from '../../../../back/complect/soki/soki.model';
import mylib from '../../../complect/my-lib/MyLib';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import {
  INavigationRouteChildItem,
  NavigationThrowNodeProps,
  UseNavAction,
} from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { QRCodeReaderData } from '../../../complect/qr-code/QRCodeMaster.model';
import { IconAnonymousStrokeRounded } from '../../../complect/the-icon/icons/anonymous';
import { iconPackOfGameController03 } from '../../../complect/the-icon/icons/game-controller-03';
import { iconPackOfPassport } from '../../../complect/the-icon/icons/passport';
import { IconVoiceIdStrokeRounded } from '../../../complect/the-icon/icons/voice-id';
import { TheIconType } from '../../../complect/the-icon/model';
import { GamerGameName, GamerRoom } from './Gamer.back-model';
import { GamerNavData, GamerPassport, GamerStoraged } from './Gamer.model';
import { toStopAliasGame } from './games/alias/hooks/execs';
import { SPY_ROLE, unsecretSpyRole } from './games/spy/hooks/locations';
import { OfflineGameShare } from './games/spy/offline-room/SpyOfflineRoom.model';
import { gamerMolecule } from './molecules';

const LazyGamerApp = React.lazy(() => import('./GamerApp'));
const LazyTheGamerPassport = React.lazy(() => import('./complect/GamerPassport'));
const LazyGamerOfflineRoom = React.lazy(() => import('./complect/rooms/offline-room/GamerOfflineRoom'));
const LazySpyCurrentOfflineGameInfo = React.lazy(
  () => import('./complect/rooms/offline-room/SpyCurrentOfflineGameInfo'),
);
const LazySpyOfflineRoomContent = React.lazy(() => import('./complect/rooms/offline-room/SpyOfflineRoomContent'));
const LazyTheGamerRoom = React.lazy(() => import('./complect/rooms/room/GamerRoom'));
const LazyAliasRoomContent = React.lazy(() => import('./games/alias/AliasRoomContent'));
const LazyGamer = React.lazy(() => import('./Gamer'));
const LazySpyRoomContent = React.lazy(() => import('./games/spy/SpyRoomContent'));

interface GameData {
  Icon: TheIconType;
  title: string;
  onResetGame?: (room: GamerRoom | und) => Promise<SokiServerEvent | null> | nil;
}

export type GamerRoomGameSkelet<DataDifference = {}> = INavigationRouteChildItem<
  GamerNavData,
  GameData & DataDifference,
  GamerGameName
>;

export const gamerRoomGames: GamerRoomGameSkelet[] = [
  {
    phase: ['spy'],
    node: <LazySpyRoomContent />,
    data: {
      Icon: IconAnonymousStrokeRounded,
      title: 'Шпион 1.0',
    },
  },
  {
    phase: ['alias'],
    node: <LazyAliasRoomContent />,
    data: {
      Icon: IconVoiceIdStrokeRounded,
      title: 'Алиас',
      onResetGame: toStopAliasGame,
    },
  },
];

const fakeConfig: NavigationThrowNodeProps<GamerNavData> = {
  currentChildPhase: '',
  outletContent: null,
  relativePoint: [''],
};

export const gamerOfflineRoomGames: GamerRoomGameSkelet<{
  currentNode: ReactNode;
  qrDataCatcher: (passport: LocalSokiAuth | GamerPassport, data: QRCodeReaderData<any, any>) => void;
}>[] = [
  {
    phase: ['spy'],
    node: (
      <Suspense>
        <LazySpyOfflineRoomContent />
      </Suspense>
    ),
    data: {
      Icon: IconAnonymousStrokeRounded,
      title: 'Шпион 1.0',
      currentNode: (
        <Suspense>
          <LazySpyCurrentOfflineGameInfo />
        </Suspense>
      ),
      qrDataCatcher: (passport, data) => {
        if (!passport.login) return;
        const [location, spiesCount, iterations, memberStrList] = (data.value as OfflineGameShare) || [];
        const members = memberStrList.match(/\.|.{0,32}/g);
        if (!members) return;
        const md5passport = mylib.md5(passport.login);
        const memberi = members.indexOf(md5passport);
        if (memberi < 0) return;
        else {
          const newMembers = [...members];
          newMembers[memberi] = '.';

          gamerMolecule.set('offlineSpyGame', {
            iterations,
            location: memberi < spiesCount ? SPY_ROLE : unsecretSpyRole(location),
            reshareData: [location, spiesCount, iterations, newMembers.join('')],
          });
          gamerMolecule.set('currentOfflineGameName', 'spy');
        }
      },
    },
  },
];

const gamerNavigation = new NavigationConfig<GamerStoraged, GamerNavData>('gamer', {
  title: 'Игрок',
  root: content => (
    <Suspense>
      <LazyGamerApp content={content} />
    </Suspense>
  ),
  rootPhase: 'gamer',
  routes: [
    {
      phase: ['gamer'],
      iconSelfPack: iconPackOfGameController03,
      title: 'Игрок',
      node: (
        <Suspense>
          <LazyGamer />
        </Suspense>
      ),
      next: [
        {
          phase: ['room'],
          node: config => (
            <Suspense>
              <LazyTheGamerRoom config={config} />
            </Suspense>
          ),
          next: [
            {
              phase: ['needChooseGame'],
              node: null,
            },
            ...gamerRoomGames,
          ],
        },
        {
          phase: ['offlineRoom'],
          node: config => (
            <Suspense>
              <LazyGamerOfflineRoom config={config} />
            </Suspense>
          ),
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
      phase: ['passport'],
      iconSelfPack: iconPackOfPassport,
      title: 'Паспорт',
      node: (
        <Suspense>
          <LazyTheGamerPassport />
        </Suspense>
      ),
    },
  ],
  lazies: [
    <LazySpyOfflineRoomContent />,
    <LazySpyCurrentOfflineGameInfo />,
    <LazyGamerApp content />,
    <LazyGamer />,
    <LazyTheGamerRoom config={fakeConfig} />,
    <LazyGamerOfflineRoom config={fakeConfig} />,
    <LazyTheGamerPassport />,
  ],
});

const actions: UseNavAction[] = [];

export default function useGamerNav() {
  return useNavConfigurer<GamerStoraged, GamerNavData>('gamer', actions, gamerNavigation);
}
