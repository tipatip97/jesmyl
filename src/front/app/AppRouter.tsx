import { useEffect, useMemo } from "react";
import onBackButton from "../complect/back-button-listener";
import useIndexNav from "../components/index/complect/useIndexNav";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppRouter({ appName }: { appName: AppName }) {
  const {
    route: indexRoute,
    goBack: indexGoBack,
    nav: indexNav,
  } = useIndexNav();
  const { route, nav, goBack, navigateToRoot } =
    navConfigurers[appName || "index"]();

  onBackButton.listen("app-router-listener", () => {
    if (!appName || appName === "index") indexGoBack();
    goBack();
  });
  useEffect(() => () => onBackButton.mute("app-router-listener"), []);

  const appContent = useMemo(
    () => indexRoute != null ? null : nav.findContent(route, () => navigateToRoot()),
    [indexRoute, route, nav]
  );
  const indexContent = useMemo(
    () => indexRoute == null ? null : indexNav.findContent(indexRoute),
    [indexRoute, indexNav]
  );

  return indexRoute != null
    ? indexNav.nav.root(indexContent)
    : nav.nav.root(appContent);
}
