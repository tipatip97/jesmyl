import EvaIcon from "../complect/eva-icon/EvaIcon";
import { INavigationConfig, NavPhasePoint } from "../complect/nav-configurer/Navigation.model";
import { cmExer } from "../components/apps/cm/Cm.store";
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

  const putItems = (
    nav: INavigationConfig,
    onClick: (phase: NavPhasePoint) => void,
    setIsActive: (phase: NavPhasePoint) => boolean
  ) => {
    return nav.routes.map((props) => {
      if (!props) return null;
      const { phase, title, icon, accessRule } = props;
      if (accessRule != null && !cmExer.isActionAccessed(accessRule))
        return null;
      const isActive = setIsActive(phase);

      return (
        <div
          key={`main-footer-item_${icon}`}
          className={`footer-item ${isActive ? "active" : ""}`}
          onClick={() => onClick(phase)}
        >
          <div className="icon-container">
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
          indexNavigate(null);
        },
        ([phase]) => indexPhase == null && route?.[0] === phase
      )}
      {putItems(
        indexNav,
        () => {
          indexNavigate(["other"]);
        },
        () => indexPhase != null
      )}
    </div>
  );
}
