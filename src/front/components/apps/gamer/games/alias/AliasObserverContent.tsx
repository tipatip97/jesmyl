import GamerAliasTimer from "./AliasTimer";
import useAliasState from "./useAliasState";

export default function AliasObserverContent() {
    const { takeSpeaker } = useAliasState();

    return <>
        <GamerAliasTimer />
        Спикер - {takeSpeaker()?.name}
    </>;
}