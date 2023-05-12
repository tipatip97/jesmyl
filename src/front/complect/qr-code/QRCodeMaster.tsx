import { Html5Qrcode } from "html5-qrcode";
import { renderApplication } from "../../..";
import { SokiAppName } from "../../../back/complect/soki/soki.model";
import { AppName } from "../../app/App.model";
import LinkCoder from "../link-coder/LinkCoder";
import mylib from "../my-lib/MyLib";
import './QRCode.scss';
import { QRCodeReaderData, QRMasterConnectData, QRMasterControllerData } from "./QRCodeMaster.model";
import QRCodeMasterApplication from "./QRCodeMasterApplication";

export const qrCodePassphraseSign = ':J';
export const qrCodeMasterContainerId = "qr-code-master";

let controller: (data: QRMasterControllerData) => TimeOut = () => undefined;

setTimeout(() => renderApplication(<QRCodeMasterApplication controller={(top: (data: QRMasterControllerData) => TimeOut) => controller = top} />, document.querySelector('#qr-code-application-container')));

const hrefUrl = new URL(window.location.href);
export const jesmylHostName = `${hrefUrl.protocol}//${hrefUrl.host}`;

interface Attrs {
    appName: SokiAppName,
    key: string,
    value: any,
}

export const crossApplicationLinkCoder = new LinkCoder<Attrs>(jesmylHostName, 'value', {
    appName: 'a',
    key: 'k',
    value: 'v',
});

class QrCodeMaster {
    private qr?: Html5Qrcode;

    shareData(appName: AppName, key: string, value: unknown, externalData?: boolean | string) {
        try {
            if (externalData) {
                var link = crossApplicationLinkCoder.encode({
                    appName,
                    key,
                    value
                });

                controller({
                    ok: true,
                    type: 'showQRs',
                    value: [link],
                    linkValue: externalData === true ? null : externalData,
                    isExt: true,
                });
                return;
            }

            const valueStr = JSON.stringify(value);
            const len = valueStr.length;
            const connectionNumber = Date.now();
            const partMapper = <Data,>(data: Data, parti: number, partCount: number): QRMasterConnectData<Data> => [qrCodePassphraseSign, appName, key, connectionNumber, partCount, parti, data];

            if (len > 150) {
                const parts: QRMasterConnectData<string>[] = valueStr
                    .match(/(.{0,100})/g)
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
                value: [JSON.stringify(partMapper<unknown>(value, 0, 1))],
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
            let currKey: string;
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
                        if (decodedText.startsWith(jesmylHostName)) {
                            const decoded = crossApplicationLinkCoder.decode(decodedText);
                            if (decoded) {
                                const { appName, value, key } = decoded;

                                res({
                                    appName,
                                    key,
                                    value,
                                    isExternalLink: true,
                                } as QRCodeReaderData<Data, Key>);
                            }
                            this.closeReader();
                            return;
                        }
                        const [passphrase, appName, key, connectionNumber, count, part, value]: QRMasterConnectData<unknown> = JSON.parse(decodedText);
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
                                key,
                                value,
                            } as QRCodeReaderData<Data, Key>);
                            this.closeReader();
                        } else {
                            if (currAppName !== appName || currKey !== key || currCount !== count || connectionNumber !== currConnectionNumber) {
                                currAppName = appName;
                                currConnectionNumber = connectionNumber;
                                currKey = key;
                                currCount = count;
                                dataParts = [];
                                partsToLoad = 0;
                            }

                            if (mylib.isStr(value)) {
                                if (dataParts[part] === undefined) {
                                    partsLoaded++;
                                    dataParts[part] = value;

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
                                    key,
                                    value: JSON.parse(dataParts.join(''))
                                } as QRCodeReaderData<Data, Key>);
                                this.closeReader();
                            }
                        }
                    } catch (e) { }
                },
                () => { }
            )
                .catch(() => { });
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
