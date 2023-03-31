import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import AliasGameRound from "./AliasGameRound";
import AliasRoomInitialManagerContent from "./AliasRoomInitialManagerContent";
import useAliasState from "./useAliasState";

export default function AliasRoomContent() {
    const { memberPossibilities, state } = useAliasState();
    const myPossibilities = memberPossibilities();

    return <>
        {state?.speaker != null
            ? <AliasGameRound />
            : <>
                <GamerRoomMemberList />
                {myPossibilities.isManager && <AliasRoomInitialManagerContent />}
            </>}
    </>;
}