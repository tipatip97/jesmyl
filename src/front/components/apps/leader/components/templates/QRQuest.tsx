import React from "react";
import QRCode from "../../../../../complect/qr-code/QRCode";
import { LeaderCleans } from "../LeaderCleans";
import { useLeaderCcontext } from "../contexts/useContexts";
import PrintableTemplate from "./PrintableTemplate";

export default function QRQuest() {
  const ccontext = useLeaderCcontext();

  if (!ccontext) return <>Нет контекста</>;

  return (
    <PrintableTemplate
      noder={(page) =>
        ccontext.groups?.map((group) => {
          const { qrText, color, initQrPoint } = LeaderCleans.getContextFieldValues(ccontext, group.fields);
          if (!qrText) return null;

          return (
            <React.Fragment key={color}>
              {page(
                <div className="relative flex center full-width full-height">
                  <div className="flex center full-width margin-big-gap relative">
                    <QRCode className="qr-code full-width" text={qrText} />
                    <div
                      className={`absolute full-fill fade-03`}
                      style={{ background: color }}
                    />
                  </div>
                </div>
              )}
              {page(
                <div className="relative flex center full-width full-height">
                  <div className="full-width margin-big-gap relative">
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
              )}
            </React.Fragment>
          );
        })
      }
    />
  );
}
