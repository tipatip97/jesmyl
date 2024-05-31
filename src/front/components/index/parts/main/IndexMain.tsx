import { useSelector } from 'react-redux';
import { appNames } from '../../../../app/App.model';
import { useBottomPopup } from '../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import BrutalScreen from '../../../../complect/brutal-screen/BrutalScreen';
import IconButton from '../../../../complect/the-icon/IconButton';
import useFullContent from '../../../../complect/fullscreen-content/useFullContent';
import { IconAuthorizedStrokeRounded } from '@icons/authorized';
import { IconComputerSettingsStrokeRounded } from '@icons/computer-settings';
import { IconCubeStrokeRounded } from '@icons/cube';
import { IconInformationCircleStrokeRounded } from '@icons/information-circle';
import { IconRefreshStrokeRounded } from '@icons/refresh';
import { IconSettings02StrokeRounded } from '@icons/settings-02';
import ScheduleWidgetAlarm from '../../../../complect/schedule-widget/alarm/Alarm';
import useApps from '../../../../complect/useApps';
import { checkIsThereNewSW } from '../../../../serviceWorkerRegistration';
import navConfigurers from '../../../../shared/navConfigurers';
import { RootState } from '../../../../shared/store';
import PhaseIndexContainer from '../../complect/PhaseIndexContainer';
import useAuth from '../../useAuth';
import useConnectionState from '../../useConnectionState';
import IndexAbout from '../IndexAbout';
import { IndexProfileInfo } from './ProfileInfo';
import { UserMore } from './UserMore';

const isNNull = (it: unknown) => it !== null;
const currentAppSelector = (state: RootState) => state.index.currentApp;

export default function IndexMain() {
  const currentAppName = useSelector(currentAppSelector);
  const [aboutNode, openAbout] = useFullContent(() => <IndexAbout />);
  const { goTo } = navConfigurers.index();
  const [popupNode, openPopup] = useBottomPopup(UserMore);
  const { appConfigs, jumpToApp } = useApps();

  const auth = useAuth();
  const connectionNode = useConnectionState();
  const appList = appNames
    .map(appName => {
      const navs = appConfigs[appName];
      if (navs?.nav.nav.useIsCanRead?.() === false) return null;
      if (currentAppName === appName || appName === 'index') return null;

      if (navs == null || auth == null) return null!;
      const { nav } = navs;
      if (nav.nav.level !== undefined && nav.nav.level > auth.level) return null!;

      return (
        <IconButton
          key={appName}
          Icon={nav.nav.Icon ?? nav.nav.routes[0]?.iconSelfPack.StrokeRounded ?? IconCubeStrokeRounded}
          className="margin-big-gap-h margin-sm-gap-v flex-max"
          postfix={nav.nav.title}
          onClick={() => jumpToApp(nav.appName)}
        />
      );
    })
    .filter(isNNull);

  return (
    <PhaseIndexContainer
      className="relative"
      withoutBackButton
      headTitle={appConfigs[currentAppName]?.nav.nav.title || 'Другое'}
      head={
        <div className="flex flex-gap">
          {connectionNode}
          {auth.level > 0 && (
            <div
              className="margin-gap-h pointer"
              onClick={openPopup}
            >
              <IndexProfileInfo auth={auth} />
            </div>
          )}
        </div>
      }
      contentClass="flex column"
      content={
        <>
          {popupNode}
          {aboutNode}
          <ScheduleWidgetAlarm
            onGoTo={() => goTo('schedules')}
            isForceShow={auth.level >= 50}
          />
          {!auth.nick && (
            <BrutalItem
              icon={<IconAuthorizedStrokeRounded />}
              title="Авторизоваться"
              onClick={() => goTo('login')}
            />
          )}
          <BrutalItem
            icon={<IconSettings02StrokeRounded />}
            title="Настройки"
            onClick={() => goTo('settings')}
          />
          <BrutalItem
            icon={<IconComputerSettingsStrokeRounded />}
            title="Взаимодействие"
            onClick={() => goTo('actions')}
          />
          <BrutalItem
            icon={<IconInformationCircleStrokeRounded />}
            title="О приложении"
            onClick={() => openAbout(true)}
          />
          {checkIsThereNewSW(reg => (
            <BrutalItem
              icon={<IconRefreshStrokeRounded />}
              title="Обновить"
              onClick={() => {
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                  window.location.reload();
                });

                reg?.waiting?.postMessage({ type: 'SKIP_WAITING' });
              }}
            />
          ))}
          {appList && (
            <BrutalScreen>
              <div className="title">Другие программы</div>
              {appList}
            </BrutalScreen>
          )}
        </>
      }
    />
  );
}
