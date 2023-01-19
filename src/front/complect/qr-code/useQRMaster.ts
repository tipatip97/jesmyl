import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../../app/App.model";
import { updateQRDataStore } from "../../components/index/Index.store";
import { RootState } from "../../shared/store";
import modalService from "../modal/Modal.service";
import { qrCodeMaster } from "./QRCodeMaster";

const appsSelector = (state: RootState) => state.index.apps;
const qrDataStoreSelector = (state: RootState) => state.index.qrDataStore;

export default function useQRMaster<Data>(appName?: AppName) {
    const dispatch = useDispatch();
    const apps = useSelector(appsSelector);
    const qrDataStore = useSelector(qrDataStoreSelector);

    const ret = {
        qrDataStore,
        qrData: appName && qrDataStore?.[appName] as Data,
        clearQRData: (dataName: keyof Data) => {
            if (appName && ret.qrData?.[dataName] !== undefined) {
                const appStore = {
                    ...qrDataStore?.[appName],
                } as Data;

                delete appStore[dataName];

                const newStore = {
                    ...qrDataStore,
                    [appName]: appStore,
                };

                if (!Object.keys(appStore!).length) delete newStore[appName];

                dispatch(updateQRDataStore(newStore));
            }
        },
        readQR: () => {
            qrCodeMaster.read()
                .then((data) => {
                    const app = apps.find(({ name }) => name === data.appName);
                    if (app) {
                        dispatch(updateQRDataStore({
                            ...qrDataStore,
                            [data.appName]: {
                                ...qrDataStore?.[data.appName],
                                [data.dataName]: data.value,
                            }
                        }));
                    } else modalService.alert('Ссылка на неизвестное приложение!');
                })
        },
    };
    return ret;
}
