import QRCodeGenerator from 'qrcode';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export default function QRCode({ text, ...props }: HTMLAttributes<HTMLCanvasElement> & { text: string }) {
  return (
    <StyledCanvas
      {...props}
      className={`qr-code power up ${props.className || ''}`}
      ref={element => {
        if (!element) return;

        QRCodeGenerator.toCanvas(element, text, error => {
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

const StyledCanvas = styled.canvas`
  &.qr-code {
    filter: contrast(10);
  }
`;
