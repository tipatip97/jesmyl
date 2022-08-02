import { useState } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import QRCode from "../../../../../complect/qr-code/QRCode";
import useLeaderContexts from "../contexts/useContexts";
import "./Templates.scss";

export default function QRQuest() {
  const { ccontext } = useLeaderContexts();

  return (
    <div className="qr-quest print-template-page full-container for-print break-inside-avoid">
      {ccontext?.groups?.map((group) => {
        const { qrText, color, initQrPoint } = group.getFieldValues();
        if (!qrText) return null;

        return (
          <>
            <div
              key={color}
              className="qr-code-wrapper relative flex center full-width full-height for-print break-inside-avoid"
            >
              <div className="flex center full-width margin-big-gap relative">
                <QRCode className="qr-code full-width" text={qrText} />
                <div
                  className={`absolute full-fill fade-03`}
                  style={{ background: color }}
                />
              </div>
            </div>
            <div
              key={color + ":::"}
              className="qr-code-wrapper relative flex center full-width full-height for-print break-inside-avoid"
            >
              <div className=" full-width margin-big-gap relative">
                <div
                  className={`relative flex text-center margin-auto padding-giant-gap strong-square-50vmin`}
                >
                  {initQrPoint}
                  <div
                    className="absolute full-fill fade-03"
                    style={{ background: color, color: "black" }}
                  ></div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
