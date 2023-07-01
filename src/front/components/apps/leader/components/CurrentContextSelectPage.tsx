import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import PhaseLeaderContainer from "../phase-container/PhaseLeaderContainer";
import useLeaderNav from "../useLeaderNav";
import useLeaderContext from "./contexts/useContexts";

export function CurrentContextSelectPage() {
    const { contexts } = useLeaderContext();
    const { setAppRouteData } = useLeaderNav();

    return <PhaseLeaderContainer
        topClass="CurrentContextSelectPage"
        withoutBackButton
        headTitle="Выбор контекста"
        content={contexts?.list?.map((schedule) => {
            return <BrutalItem
                key={schedule.w}
                title={schedule.name}
                icon="calendar-outline"
                onClick={() => setAppRouteData({ contextw: schedule.w })}
            />
        })}
    />
}
