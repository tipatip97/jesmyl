import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import PhaseLeaderContainer from "../phase-container/PhaseLeaderContainer";
import useLeaderNav from "../useLeaderNav";
import useLeaderContext from "./contexts/useContexts";

export function CurrentContextSelectPage() {
    const { contexts } = useLeaderContext();
    const { setAppRouteData, nav } = useLeaderNav();

    return <PhaseLeaderContainer
        topClass="CurrentContextSelectPage"
        withoutBackButton
        headTitle="Выбор контекста"
        content={contexts?.list?.map((context) => {
            if (!nav.nav.useIsCanRead?.(context?.w)) return null;
            return <BrutalItem
                key={context.w}
                title={context.name}
                icon="calendar-outline"
                onClick={() => setAppRouteData({ contextw: context.w })}
            />
        })}
    />
}
