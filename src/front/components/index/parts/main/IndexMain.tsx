import { Link, Route, Routes } from 'react-router-dom';
import { appNames } from '../../../../app/App.model';
import { routingApps } from '../../../../app/routing-apps';
import { useBottomPopup } from '../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import BrutalScreen from '../../../../complect/brutal-screen/BrutalScreen';
import useFullContent from '../../../../complect/fullscreen-content/useFullContent';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import ScheduleWidgetAlarm from '../../../../complect/schedule-widget/alarm/Alarm';
import { scheduleWidgetListPageRoute } from '../../../../complect/schedule-widget/general/ListPageRoute';
import { IconComputerSettingsStrokeRounded } from '../../../../complect/the-icon/icons/computer-settings';
import { IconInformationCircleStrokeRounded } from '../../../../complect/the-icon/icons/information-circle';
import { IconRefreshStrokeRounded } from '../../../../complect/the-icon/icons/refresh';
import { IconSettings02StrokeRounded } from '../../../../complect/the-icon/icons/settings-02';
import { checkIsThereNewSW } from '../../../../serviceWorkerRegistration';
import { useAuth, useCurrentApp } from '../../molecules';
import useConnectionState from '../../useConnectionState';
import IndexActions from '../actions/Actions';
import IndexAbout from '../IndexAbout';
import IndexAuthorization from '../login/IndexAuthorization';
import { IndexTelegramInlineAuthButton } from '../login/IndexTelegramInlineAuthButton';
import IndexSettings from '../settings/Settings';
import { AppFace } from './AppFace';
import { IndexProfileInfo } from './ProfileInfo';
import { UserMore } from './UserMore';

const isNNull = (it: unknown) => it !== null;

export default function IndexMain() {
  const currentAppName = useCurrentApp();

  const [aboutNode, openAbout] = useFullContent(() => <IndexAbout />);
  const [popupNode, openPopup] = useBottomPopup(UserMore);

  const auth = useAuth();
  const connectionNode = useConnectionState();
  const appList = appNames
    .map(appName => {
      const config = routingApps[appName];
      if (currentAppName === appName || appName === 'index') return null;

      if (config == null || auth == null) return null!;

      return (
        <AppFace
          key={appName}
          config={config}
        />
      );
    })
    .filter(isNNull);

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <PhaseContainerConfigurer
              className="relative"
              withoutBackButton
              headTitle={(currentAppName && routingApps[currentAppName]?.title) || 'Другое'}
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
                  <ScheduleWidgetAlarm isForceShow={auth.level >= 50} />
                  {!auth.nick && <IndexTelegramInlineAuthButton />}
                  <Link
                    to="settings"
                    className="full-width"
                  >
                    <BrutalItem
                      icon={<IconSettings02StrokeRounded />}
                      title="Настройки"
                    />
                  </Link>
                  <Link
                    to="actions"
                    className="full-width"
                  >
                    <BrutalItem
                      icon={<IconComputerSettingsStrokeRounded />}
                      title="Взаимодействие"
                    />
                  </Link>
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
                  {!appList.length || (
                    <BrutalScreen>
                      <div className="title">Другие программы</div>
                      {appList}
                    </BrutalScreen>
                  )}
                </>
              }
            />

            {currentAppName && routingApps[currentAppName]?.footer}
          </>
        }
      />

      <Route
        path="actions/*"
        element={<IndexActions />}
      />

      <Route
        path="login/*"
        element={<IndexAuthorization />}
      />

      <Route
        path="settings/*"
        element={<IndexSettings />}
      />
      {scheduleWidgetListPageRoute}
    </Routes>
  );
}
