import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../app/App.model";
import { setCurrentApp } from "../components/index/Index.store";
import navConfigurers from "../shared/navConfigurers";
import { RootState } from "../shared/store";
import { soki } from "../soki";
import { MyLib } from "./my-lib/MyLib";
import { JumpByLinkAlt, NavRouteVariated } from "./nav-configurer/Navigation.model";
import useNavConfigurer from "./nav-configurer/useNavConfigurer";

const appsSelector = (state: RootState) => state.index.apps;
const currentAppSelector = (state: RootState) => state.index.currentApp;

export default function useApps<NavData>() {
    const dispatch = useDispatch();
    const apps = useSelector(appsSelector);
    const currentAppName = useSelector(currentAppSelector);

    const currentApp = apps.find((app) => app.name === currentAppName);
    const appConfigs = {} as Record<AppName, ReturnType<typeof useNavConfigurer>>;

    MyLib.entries(navConfigurers).forEach(([name, config]) => (appConfigs[name] = config()));

    const ret = {
        currentApp,
        apps,
        appConfigs,
        jumpToApp: <Key extends keyof NavData>(
            appName: AppName,
            key?: Key,
            value?: NavData[Key]
        ) => {
            const jump = (phase?: NavRouteVariated<NavData>) => {
                soki.setAppName(appName);
                soki.onAppChange(appName);
                dispatch(setCurrentApp(appName));
                const rootPhase = appConfigs[appName].nav.rootPhase;
                if (rootPhase || phase) {
                    const routing = appConfigs[appName].navigate(phase ?? [rootPhase!]);
                    appConfigs.index.navigate(null, false, () => routing);
                }
            };

            if (key === undefined) {
                jump();
                return;
            }

            const alt: JumpByLinkAlt = {
                Reject: ['REJECT'],
                RootPhase: ['ROOT_PHASE']
            };

            const jumpRoute = appConfigs[appName].nav.jumpByLink?.(key as never, value as never, alt);

            if (jumpRoute === alt.Reject) return;
            else if (jumpRoute === alt.RootPhase) jump();
            else jump(jumpRoute);
        },
    };
    return ret;
}
