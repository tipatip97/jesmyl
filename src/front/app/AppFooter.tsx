import EvaIcon from "../complect/eva-icon/EvaIcon";
import { ExerStorage } from "../complect/exer/Exer.model";
import {
  INavigationConfig,
  NavPhasePoint
} from "../complect/nav-configurer/Navigation.model";
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

  const [indexPhase] = indexRoute || [];

  const putItems = <Storage extends ExerStorage, NavData>(
    nav: INavigationConfig<Storage, NavData>,
    onClick: (phase: NavPhasePoint) => void,
    setIsActive: (phase: NavPhasePoint) => boolean
  ) => {
    return nav.routes.map((props) => {
      if (!props) return null;
      const { phase, title, icon, accessRule } = props;
      if (
        accessRule != null &&
        nav.exer &&
        !nav.exer.actionAccessedOrNull(accessRule)
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
        nav,
        (phase) => {
          navigate(phase, false, true);
          if (indexRoute) setTimeout(() => indexNavigate(null, false, true));
        },
        ([phase]) => indexPhase == null && route?.[0] === phase
      )}
      {putItems(
        indexNav,
        () => {
          indexNavigate(["other"], false, true);
          navigate(null, false, true);
        },
        () => indexPhase != null
      )}
    </div>
  );
}
