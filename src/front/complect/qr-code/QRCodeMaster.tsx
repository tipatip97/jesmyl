import { Html5Qrcode } from "html5-qrcode";
import { renderApplication } from "../../..";
import { AppName } from "../../app/App.model";
import modalService from "../modal/Modal.service";
import mylib from "../my-lib/MyLib";
import './QRCode.scss';
import { QRCodeReaderData, QRMasterConnectData, QRMasterControllerData } from "./QRCodeMaster.model";
import QRCodeMasterApplication from "./QRCodeMasterApplication";

export const qrCodePassphraseSign = ':J';
export const qrCodeMasterContainerId = "qr-code-master";

let controller: (data: QRMasterControllerData) => TimeOut = () => undefined;

setTimeout(() => renderApplication(<QRCodeMasterApplication controller={(top: (data: QRMasterControllerData) => TimeOut) => controller = top} />, document.querySelector('#qr-code-application-container')));

class QrCodeMaster {
    private qr?: Html5Qrcode;

    generateParts(appName: AppName, dataName: string, data: unknown) {
        try {
            const dataString = JSON.stringify(data);
            const len = dataString.length;
            const connectionNumber = Date.now();
            const partMapper = <Data,>(data: Data, parti: number, partCount: number): QRMasterConnectData<Data> => [qrCodePassphraseSign, appName, dataName, connectionNumber, partCount, parti, data];

            if (len > 100) {
                const parts: QRMasterConnectData<string>[] = dataString
                    .match(/(.{0,50})/g)
                    ?.filter((part) => part)
                    .map((part, parti, parta) => partMapper(part, parti, parta.length)) || [];
                if (parts) {
                    let max = 0;
                    const strings = parts.map((data) => {
                        const string = JSON.stringify(data);
                        if (max < string.length) max = string.length;
                        return string;
                    }).map((string) => string.padEnd(max + 1, ' '));
                    controller({
                        ok: true,
                        type: 'showQRs',
                        value: strings,
                    });
                } else {
                    controller({
                        ok: false,
                        errorMessage: 'Неизвестная ошибка #8432384625',
                    });
                }
            } else controller({
                ok: true,
                type: 'showQRs',
                value: [JSON.stringify(partMapper<unknown>(data, 0, 1))],
            });
        } catch (e) {
            controller({
                ok: false,
                errorMessage: 'Неудалось распознать данные для передачи',
            });
        }
    }

    read<Data, Key extends keyof Data>(facingMode: 'user' | 'environment' = 'environment') {
        controller({
            ok: true,
            type: 'openReader',
            value: true,
        });
        return new Promise<QRCodeReaderData<Data, Key>>((res) => {
            this.qr = new Html5Qrcode(qrCodeMasterContainerId);
            const vmin = Math.min(window.innerHeight, window.innerWidth);
            const size = vmin * .5;
            let currAppName: AppName;
            let currDataName: string;
            let currCount: number;
            let currConnectionNumber: number;
            let dataParts: string[] = [];
            let partsLoaded = 0;
            let partsToLoad = 0;

            this.qr.start(
                { facingMode },
                {
                    fps: 10,
                    qrbox: { width: size, height: size }
                },
                (decodedText) => {
                    try {
                        const [passphrase, appName, dataName, connectionNumber, count, part, data]: QRMasterConnectData<unknown> = JSON.parse(decodedText);
                        if (qrCodePassphraseSign !== passphrase) return;

                        if (partsToLoad === 0) {
                            partsToLoad = count;
                            controller({
                                ok: true,
                                type: 'partsToLoad',
                                value: count,
                            });
                        }

                        if (count === 1) {
                            res({
                                appName,
                                dataName,
                                value: data,
                            } as QRCodeReaderData<Data, Key>);
                            this.closeReader();
                        } else {
                            if (currAppName !== appName || currDataName !== dataName || currCount !== count || connectionNumber !== currConnectionNumber) {
                                currAppName = appName;
                                currConnectionNumber = connectionNumber;
                                currDataName = dataName;
                                currCount = count;
                                dataParts = [];
                                partsToLoad = 0;
                            }

                            if (mylib.isStr(data)) {
                                if (dataParts[part] === undefined) {
                                    partsLoaded++;
                                    dataParts[part] = data;

                                    controller({
                                        ok: true,
                                        type: 'partsLoaded',
                                        value: partsLoaded,
                                    });
                                }
                            }

                            if (dataParts.filter(data => data).length >= count) {
                                res({
                                    appName,
                                    dataName,
                                    value: JSON.parse(dataParts.join(''))
                                } as QRCodeReaderData<Data, Key>);
                                this.closeReader();
                            }
                        }
                    } catch (e) { }
                },
                () => { }
            )
                .catch((error) => {
                    modalService.alert('' + error);
                });
        });
    }

    closeReader() {
        clearTimeout(controller({
            ok: true,
            type: 'openReader',
            value: false,
        }));
        this.qr?.stop();
    }
}

export const qrCodeMaster = new QrCodeMaster();
