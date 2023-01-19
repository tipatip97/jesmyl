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
} | {
    type: 'partsLoaded',
    value: number,
} | {
    type: 'partsToLoad',
    value: number,
})) | {
    ok: false,
    errorMessage: string,
};

export interface QRCodeReaderData<Data, Key extends keyof Data> {
    appName: AppName,
    dataName: Key,
    value: Data[Key],
}

export type QRCodeDataAppStoreConfigurer = (dataName: string, data: never) => void;
export type QRCodeDataAppStore<Value = unknown> = Record<string, Value>;
export type QRCodeDataStore<Value = unknown> = Partial<Record<AppName, QRCodeDataAppStore<Value>>>;
