import { ReactNode, useState } from "react";
import QRCode from "./QRCode";
import { qrCodeMaster, qrCodeMasterContainerId } from "./QRCodeMaster";
import { QRMasterControllerData } from "./QRCodeMaster.model";

export let qrCodeMasterSwitchOpenState: (isOpen?: boolean) => void;
let slideQRCodeTimeout: TimeOut;
const qrReaderReadAreaSize = Math.min(window.innerHeight, window.innerWidth) * .9;
let tsInterval = 100;

export default function QRCodeMasterApplication({ controller }: { controller: (ctrl: (data: QRMasterControllerData) => TimeOut) => void }) {
    const [isOpenReader, setIsOpenReader] = useState(false);
    const [isOpenQRSlider, setIsOpenQRSlider] = useState(false);
    const [qrNodes, setQrNodes] = useState<ReactNode[]>([]);
    const [currentQr, setCurrentQr] = useState(0);

    controller((event) => {
        if (event.ok) {
            switch (event.type) {
                case 'openReader':
                    setIsOpenReader((isOpen) => {
                        const open = event.value ?? !isOpen;
                        if (!open) clearTimeout(slideQRCodeTimeout);

                        return open;
                    })
                    break;
                case 'showQRs': {
                    const nodes = event.value.map((qr) => <QRCode text={qr} />) || [];
                    setQrNodes(nodes);
                    setIsOpenQRSlider(true);

                    if (nodes.length > 1) {
                        let currQr = 0;
                        const slideQRCode = (ts: number) => {
                            if (++currQr >= nodes.length) currQr = 0;
                            setCurrentQr(currQr);
                            slideQRCodeTimeout = setTimeout(() => slideQRCode(ts + 1), ts);
                        };
                        slideQRCode(tsInterval);
                    } else if (nodes.length === 1) setCurrentQr(0);
                    break;
                }
            }
        }

        return slideQRCodeTimeout;
    });

    return (
        <>
            <div
                className={`qr-code-screen${isOpenReader ? ' open-reader' : ''}${isOpenQRSlider ? ' open-slider' : ''}`}
                onClick={() => {
                    if (isOpenQRSlider) {
                        clearTimeout(slideQRCodeTimeout);
                        setIsOpenQRSlider(false);
                    }
                    if (isOpenReader) {
                        qrCodeMaster.closeReader();
                    }
                }}
            >
                <div style={{ width: `${qrReaderReadAreaSize}px` }} id={qrCodeMasterContainerId}></div>
                {isOpenQRSlider && <div className="qr-code-slider">{qrNodes[currentQr]}</div>}
            </div>
        </>
    );
}