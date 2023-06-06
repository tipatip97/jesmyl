import { useEffect, useState } from "react";
import EvaIcon from "../../complect/eva-icon/EvaIcon";
import { ThrowEvent } from "../../complect/eventer/ThrowEvent";
import { soki } from "../../soki";

export default function useConnectionState() {
    const [isConnected, setIsConnected] = useState(true);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => soki.onConnect(setIsConnected), []);
    useEffect(() => ThrowEvent.listenIsOnline(setIsOnline), []);

    return isOnline
        ? isConnected
            ? null
            : <EvaIcon name="loader-outline" className="rotate" />
        : <EvaIcon name="alert-triangle" className="color--ko" />;
}
