import QRCodeGenerator from "qrcode";
import { HTMLAttributes } from "react";

export default function QRCode(
  props: HTMLAttributes<HTMLCanvasElement> & { text: string }
) {
  return (
    <canvas
      {...props}
      className={`qr-code ${props.className || ""}`}
      ref={(element) => {
        if (!element) return;

        QRCodeGenerator.toCanvas(element, props.text, (error) => {
          if (error) console.error(error);
          else {
            element.style.width = null as never;
            element.style.height = null as never;
          }
        });
      }}
    />
  );
}
