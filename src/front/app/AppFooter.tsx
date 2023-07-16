import EvaIcon from "../complect/eva-icon/EvaIcon";
import { ExerStorage } from "../complect/exer/Exer.model";
import { INavigationConfig } from "../complect/nav-configurer/Navigation.model";
import useIndexNav from "../components/index/complect/useIndexNav";
import useAuth from "../components/index/useAuth";
import { RoutePhasePoint } from "../components/router/Router.model";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppFooter({ appName }: { appName: AppName }) {
  const { nav, route, navigate } = navConfigurers[appName]();
  const {
    route: indexRoute,
    navigate: indexNavigate,
    nav: indexNav,
  } = useIndexNav();
  const auth = useAuth();

  const [indexPhase] = indexRoute || [];

  const putItems = <Storage extends ExerStorage, NavData>(
    nav: INavigationConfig<Storage, NavData>,
    onClick: (phase: RoutePhasePoint) => void,
    setIsActive: (phase: RoutePhasePoint) => boolean
  ) => {
    return nav.routes.map((props) => {
      if (!props) return null;
      const { phase, title, icon, accessRule } = props;
      if (
        accessRule != null &&
        nav.exer &&
        !nav.exer.actionAccessedOrNull(accessRule, auth)
      )
        return null;
      const isActive = setIsActive(phase);

      return (
        <div
          key={`main-footer-item_${icon}`}
          className={`footer-item ${isActive ? "active" : ""}`}
          onClick={() => onClick(phase)}
        >
          <div
            className="icon-container"
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
        nav.nav,
        (phase) => {
          navigate(phase);
          if (indexRoute) indexNavigate(null, false);
        },
        ([phase]) => indexPhase == null && route?.[0] === phase
      )}
      {putItems(
        indexNav.nav,
        () => {
          indexNavigate(["other"]);
          navigate(null, false);
        },
        () => indexPhase != null
      )}
    </div>
  );
}
