import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import onBackButton from "../complect/back-button-listener";
import useIndexNav from "../components/index/complect/useIndexNav";
import useAuth from "../components/index/useAuth";
import navConfigurers from "../shared/navConfigurers";
import { RootState } from "../shared/store";
import { AppName } from "./App.model";

const routerStoreSelector = (state: RootState) => state.router;

export default function AppRouter({ appName }: { appName: AppName }) {
  const index = useIndexNav();
  const app = navConfigurers[appName || "index"]();
  const auth = useAuth();
  const routerStore = useSelector(routerStoreSelector);

  onBackButton.listen("app-router-listener", () => {
    if (!appName || appName === "index") index.goBack();
    app.goBack();
  });
  useEffect(() => () => onBackButton.mute("app-router-listener"), []);

  const appContent = useMemo(
    () => index.route != null ? null : app.nav.findContent(auth, app.route, () => app.navigateToRoot(), routerStore.isReady),
    [index.route, app, auth, routerStore.isReady]
  );

  const indexContent = useMemo(
    () => index.route == null ? null : index.nav.findContent(auth, index.route),
    [index.route, index.nav, auth]
  );

  return index.route != null
    ? index.nav.nav.root(indexContent)
    : app.nav.nav.root(appContent);
}
