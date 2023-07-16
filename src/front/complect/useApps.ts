import { useDispatch } from "react-redux";
import { AppName } from "../app/App.model";
import di from "../components/index/Index.store";
import { RoutePathVariated } from "../components/router/Router.model";
import navConfigurers, { NavDataRegister } from "../shared/navConfigurers";
import { soki } from "../soki";
import { MyLib } from "./my-lib/MyLib";
import { JumpByLinkAlt } from "./nav-configurer/Navigation.model";
import useNavConfigurer from "./nav-configurer/useNavConfigurer";


export default function useApps() {
    const dispatch = useDispatch();
    const appConfigs = {} as Record<AppName, ReturnType<typeof useNavConfigurer>>;

    MyLib.entries(navConfigurers).forEach(([name, config]) => (appConfigs[name] = config()));

    const ret = {
        appConfigs,
        jumpToApp: <
            GAppName extends AppName,
            NavData extends NavDataRegister[GAppName],
            Key extends keyof NavData,
        >(
            appName: GAppName,
            key?: Key,
            value?: NavData[Key]
        ) => {
            const jump = (phase?: RoutePathVariated<NavData>) => {
                if (appName !== 'index') {
                    soki.onAppChange(appName);
                    dispatch(di.currentApp(appName));
                }
                const rootPhase = appConfigs[appName].nav.nav.rootPhase;
                if (rootPhase || phase) {
                    appConfigs[appName].navigate(phase ?? [rootPhase!]);
                    if (appName !== 'index') appConfigs.index.navigate(null, false);
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

            const jumpRoute = appConfigs[appName].nav.nav.jumpByLink?.[key]?.(value, key, alt);

            if (jumpRoute === alt.Reject) return;
            else if (jumpRoute === alt.RootPhase) jump();
            else jump(jumpRoute);
        },
    };
    return ret;
}
