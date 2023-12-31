import { useSelector } from 'react-redux';
import { appNames } from '../../../../app/App.model';
import { useBottomPopup } from '../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import BrutalScreen from '../../../../complect/brutal-screen/BrutalScreen';
import EvaIcon from '../../../../complect/eva-icon/EvaIcon';
import useFullscreenContent from '../../../../complect/fullscreen-content/useFullscreenContent';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import ScheduleWidgetAlarm from '../../../../complect/schedule-widget/alarm/Alarm';
import useApps from '../../../../complect/useApps';
import navConfigurers from '../../../../shared/navConfigurers';
import { RootState } from '../../../../shared/store';
import PhaseIndexContainer from '../../complect/PhaseIndexContainer';
import useAuth from '../../useAuth';
import useConnectionState from '../../useConnectionState';
import IndexAbout from '../IndexAbout';
import './IndexMain.scss';
import { UserMore } from './UserMore';
import { IndexProfileInfo } from './ProfileInfo';

const isNNull = (it: unknown) => it !== null;
const currentAppSelector = (state: RootState) => state.index.currentApp;

export default function IndexMain() {
  const currentAppName = useSelector(currentAppSelector);
  const { openFullscreenContent } = useFullscreenContent();
  const { goTo } = navConfigurers.index();
  const [popupNode, openPopup] = useBottomPopup(UserMore);
  const { appConfigs, jumpToApp } = useApps();

  const auth = useAuth();
  const { readQR, qrNode } = useQRMaster();
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
        <div
          key={appName}
          className="item flex"
          onClick={() => jumpToApp(nav.appName)}
        >
          <EvaIcon
            name={nav.nav.logo || 'cube-outline'}
            className="margin-big-gap"
          />
          <div className="app-title-label">{nav.nav.title}</div>
        </div>
      );
    })
    .filter(isNNull);

  return (
    <PhaseIndexContainer
      className="index-main"
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
          {qrNode}
          <ScheduleWidgetAlarm
            onGoTo={() => goTo('schedules')}
            isForceShow={auth.level >= 50}
          />
          {!auth.nick && (
            <BrutalItem
              icon="person-outline"
              title="Авторизоваться"
              onClick={() => goTo('login')}
            />
          )}
          <BrutalItem
            icon="settings-2-outline"
            title="Настройки"
            onClick={() => goTo('settings')}
          />
          <BrutalItem
            icon="qr-code"
            title="Читать QR"
            onClick={() => readQR()}
          />
          <BrutalItem
            icon="info-outline"
            title="О приложении"
            onClick={() => openFullscreenContent(<IndexAbout />, true)}
          />
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
