import { AppName } from "../../app/App.model";
import { qrCodePassphraseSign } from "./useQRMaster";

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
    linkValue?: string | null,
    isExt?: boolean,
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
    key: Key,
    value: Data[Key],
    isExternalLink?: boolean,
}
