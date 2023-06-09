import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import useLeaderNav from "../useLeaderNav";
import useLeaderContext from "./contexts/useContexts";

export default function CurrentContextSelect() {
    const { contexts } = useLeaderContext();
    const { setAppRouteData } = useLeaderNav();

    return <>
        <h2 className="padding-giant-gap-h flex center">Выбор контекста</h2>
        <div >
            {contexts?.list?.map(({ name, w }) => {
                return <BrutalItem
                    key={w}
                    title={name}
                    icon="calendar-outline"
                    onClick={() => setAppRouteData({ contextw: w })}
                />
            })}
        </div>
    </>;
}
