import EvaIcon from "../complect/eva-icon/EvaIcon";
import { ExerStorage } from "../complect/exer/Exer.model";
import {
  INavigationConfig,
  NavPhasePoint,
} from "../complect/nav-configurer/Navigation.model";
import useQRMaster from "../complect/qr-code/useQRMaster";
import useIndexNav from "../components/index/complect/useIndexNav";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppFooter({ app }: { app: AppName }) {
  const { nav, route, navigate } = navConfigurers[app]();
  const {
    route: indexRoute,
    navigate: indexNavigate,
    nav: indexNav,
  } = useIndexNav();
  const { qrData } = useQRMaster(app);

  const [indexPhase] = indexRoute || [];

  const putItems = <Storage extends ExerStorage, NavData>(
    nav: INavigationConfig<Storage, NavData>,
    onClick: (phase: NavPhasePoint) => void,
    setIsActive: (phase: NavPhasePoint) => boolean
  ) => {
    return nav.routes.map((props) => {
      if (!props) return null;
      const { phase, title, icon, accessRule, markBadge } = props;
      if (
        accessRule != null &&
        nav.exer &&
        !nav.exer.actionAccessedOrNull(accessRule)
      )
        return null;
      const isActive = setIsActive(phase);
      const badge = markBadge?.(qrData as never);

      return (
        <div
          key={`main-footer-item_${icon}`}
          className={`footer-item ${isActive ? "active" : ""}`}
          onClick={() => onClick(phase)}
        >
          <div
            className="icon-container"
            attr-mark-badge={badge === true || badge === 0 ? 0 : badge || null}
          >
            <EvaIcon name={`${icon}${isActive ? "" : "-outline"}` as never} />
          </div>
          <div className="title">{title}</div>
        </div>
      );
    });
  };

  return (
    <div className="footer">
      {putItems(
        nav,
        (phase) => {
          navigate(phase);
          if (indexRoute) setTimeout(() => indexNavigate(null));
        },
        ([phase]) => indexPhase == null && route?.[0] === phase
      )}
      {putItems(
        indexNav,
        () => {
          indexNavigate(["other"]);
          navigate(null);
        },
        () => indexPhase != null
      )}
    </div>
  );
}
