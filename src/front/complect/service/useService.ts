import { soki } from "../../soki";

export default function useService() {
    return <ReturnValue, Value = unknown>(key: string, value?: Value) => {

        return new Promise<ReturnValue>((resolve, reject) => {
            soki.send({ service: { key, value } })
                .on(
                    ({ service }) => {
                        if (service && service.key === key) {
                            if (service.errorMessage) reject(service.errorMessage);
                            else resolve(service.value);
                        }
                    },
                    reject
                );
        });
    };
}
