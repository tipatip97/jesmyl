import { AppName } from "../../app/App.model";
import { qrCodePassphraseSign } from "./QRCodeMaster";

export type QRMasterConnectData<Data> = [typeof qrCodePassphraseSign, AppName, string, number, number, number, string | Data];

export type QRMasterControllerData = ({
    ok: true,
} & ({
    type: 'openReader',
    value?: boolean,
} | {
    type: 'openSlider',
    value?: boolean,
} | {
    type: 'showQRs',
    value: string[],
})) | {
    ok: false,
    errorMessage: string,
};

export interface QRCodeReaderData<Value> {
    appName: AppName,
    dataName: string,
    value: Value,
}
