import { soki } from "../../soki";

export default function useService() {
    return <ReturnValue, Value = unknown>(key: string, value?: Value) => {
        const requestId = Date.now() + Math.random();

        soki.send({ service: { requestId, key, value } });

        return new Promise<ReturnValue>((resolve, reject) => {
            soki.watch("service")((res) => {
                if (res && res.requestId === requestId && res.key === key) {
                    resolve(res.value);
                }
            }, (res) => res && res.requestId === requestId && reject());
        });
    };
}
