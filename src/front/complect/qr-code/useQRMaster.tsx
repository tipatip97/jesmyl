import { Html5Qrcode } from 'html5-qrcode';
import { useCallback, useMemo, useState } from 'react';
import { makeSharedLink } from '../../../back/complect/link-coder/linkMaker';
import { AppName, appNames } from '../../app/App.model';
import useToast from '../modal/useToast';
import mylib from '../my-lib/MyLib';
import { NavigationConfig } from '../nav-configurer/Navigation';
import Portal from '../popups/[complect]/Portal';
import useApps from '../useApps';
import { QRCodeReaderData, QRMasterConnectData, QRMasterControllerData } from './QRCodeMaster.model';
import { QRCodeMasterApplication } from './QRCodeMasterApplication';

export const qrCodePassphraseSign = ':J';
export const qrCodeMasterContainerId = 'qr-code-master';

let controller: (data: QRMasterControllerData) => TimeOut = () => undefined;

const hrefUrl = new URL(window.location.href);
export const jesmylHostName = `${hrefUrl.protocol}//${hrefUrl.host}`;

export const crossApplicationLinkCoder = makeSharedLink(jesmylHostName);

export default function useQRMaster() {
  const [errorToastNode, errorToast] = useToast({ mood: 'ko' });
  const { jumpToApp } = useApps(errorToast);
  const [qr, setQr] = useState<Html5Qrcode | undefined>();
  const [openError, setOpenError] = useState('');
  const [toastNode, toast] = useToast();
  const qrNode = useMemo(() => {
    return (
      <>
        {toastNode}
        {errorToastNode}
        <Portal>
          <QRCodeMasterApplication
            controller={top => (controller = top)}
            openError={openError}
          />
        </Portal>
      </>
    );
  }, [errorToastNode, openError, toastNode]);

  const shareData = useCallback((appName: AppName, key: string, value: unknown, externalData?: boolean | string) => {
    try {
      if (externalData) {
        const link = crossApplicationLinkCoder.encode({
          appName,
          key,
          value,
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
      const partMapper = <Data,>(data: Data, parti: number, partCount: number): QRMasterConnectData<Data> => [
        qrCodePassphraseSign,
        appName,
        key,
        connectionNumber,
        partCount,
        parti,
        data,
      ];

      if (len > 150) {
        const parts: QRMasterConnectData<string>[] =
          valueStr
            .match(/(.{0,100})/g)
            ?.filter(part => part)
            .map((part, parti, parta) => partMapper(part, parti, parta.length)) || [];
        if (parts) {
          let max = 0;
          const strings = parts
            .map(data => {
              const string = JSON.stringify(data);
              if (max < string.length) max = string.length;
              return string;
            })
            .map(string => string.padEnd(max + 1, ' '));
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
      } else
        controller({
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
  }, []);

  const shareQrData = useCallback(
    <Store, NavData, DataName extends keyof NavData>(
      nav: NavigationConfig<Store, NavData>,
      dataName: DataName,
      value: NavData[DataName],
      externalData?: boolean | string,
    ) => {
      shareData(nav.appName, dataName as never, value, externalData);
    },
    [shareData],
  );

  const closeReader = useCallback(() => {
    clearTimeout(
      controller({
        ok: true,
        type: 'openReader',
        value: false,
      }),
    );
    qr?.stop();
  }, [qr]);

  const read = useCallback(
    <Data, Key extends keyof Data>(facingMode: 'user' | 'environment' = 'environment') => {
      controller({
        ok: true,
        type: 'openReader',
        value: true,
      });
      return new Promise<QRCodeReaderData<Data, Key>>(res => {
        const qr = new Html5Qrcode(qrCodeMasterContainerId);
        setQr(qr);
        const vmin = Math.min(window.innerHeight, window.innerWidth);
        const size = vmin * 0.5;
        let currAppName: AppName;
        let currKey: string;
        let currCount: number;
        let currConnectionNumber: number;
        let dataParts: string[] = [];
        let partsLoaded = 0;
        let partsToLoad = 0;

        qr.start(
          { facingMode },
          {
            fps: 10,
            qrbox: { width: size, height: size },
          },
          decodedText => {
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
                closeReader();
                return;
              }
              const [passphrase, appName, key, connectionNumber, count, part, value]: QRMasterConnectData<unknown> =
                JSON.parse(decodedText);
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
                closeReader();
              } else {
                if (
                  currAppName !== appName ||
                  currKey !== key ||
                  currCount !== count ||
                  connectionNumber !== currConnectionNumber
                ) {
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
                    value: JSON.parse(dataParts.join('')),
                  } as QRCodeReaderData<Data, Key>);
                  closeReader();
                }
              }
            } catch (error) {
              console.error(error);
              qr.stop();
              if (!(error instanceof Error)) return;
              setOpenError('' + (error.message || error));
            }
          },
          error => {
            console.error(error);
            qr.stop();
            setOpenError('' + error);
          },
        ).catch(error => {
          console.error(error);
          qr.stop();
          setOpenError('' + (error.message || error.stack || error));
        });
      });
    },
    [closeReader],
  );

  const readQR: <Ret>(callback?: (data: QRCodeReaderData<unknown, never>) => Ret | null) => Promise<Ret | null> =
    useCallback(
      callback => {
        return new Promise((resolve, reject) =>
          read().then(data => {
            if (data.appName === 'index' || appNames.some(appName => appName === data.appName)) {
              if (callback) resolve(callback(data));
              else {
                resolve(null);
                jumpToApp(data.appName, data.key, data.value);
              }
            } else {
              reject();
              toast('Ссылка на неизвестное приложение!', { mood: 'ko' });
            }
          }),
        );
      },
      [jumpToApp, read, toast],
    );

  return useMemo(() => {
    return {
      qrNode,
      shareQrData,
      readQR,
      shareData,
      read,
      closeReader,
    };
  }, [closeReader, qrNode, read, readQR, shareData, shareQrData]);
}
