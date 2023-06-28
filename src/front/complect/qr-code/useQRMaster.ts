import modalService from "../modal/Modal.service";
import useApps from "../useApps";
import { qrCodeMaster } from "./QRCodeMaster";
import { QRCodeReaderData } from "./QRCodeMaster.model";

export default function useQRMaster() {
    const { apps, jumpToApp } = useApps();

    const ret = {
        readQR: (callback?: (data: QRCodeReaderData<unknown, never>) => void) => {
            qrCodeMaster.read()
                .then((data) => {
                    if (data.appName === 'index' || apps.some(({ name }) => name === data.appName)) {
                        if (callback) callback(data);
                        else jumpToApp(data.appName, data.key, data.value);
                    } else modalService.alert('Ссылка на неизвестное приложение!');
                })
        },
    };
    return ret;
}
