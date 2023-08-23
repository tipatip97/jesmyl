import { appNames } from "../../app/App.model";
import modalService from "../modal/Modal.service";
import useApps from "../useApps";
import { qrCodeMaster } from "./QRCodeMaster";
import { QRCodeReaderData } from "./QRCodeMaster.model";

export default function useQRMaster() {
    const { jumpToApp } = useApps();

    const ret = {
        readQR: <Ret>(callback?: (data: QRCodeReaderData<unknown, never>) => Ret | null): Promise<Ret | null> => {
            return new Promise((resolve, reject) =>
                qrCodeMaster.read()
                    .then((data) => {
                        if (data.appName === 'index' || appNames.some((appName) => appName === data.appName)) {
                            if (callback) resolve(callback(data));
                            else {
                                resolve(null);
                                jumpToApp(data.appName, data.key, data.value);
                            }
                        } else {
                            reject();
                            modalService.alert('Ссылка на неизвестное приложение!');
                        }
                    })
            );
        },
    };
    return ret;
}
