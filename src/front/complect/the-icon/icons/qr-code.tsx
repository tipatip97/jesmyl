import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 6C3 4.58579 3 3.87868 3.43934 3.43934C3.87868 3 4.58579 3 6 3C7.41421 3 8.12132 3 8.56066 3.43934C9 3.87868 9 4.58579 9 6C9 7.41421 9 8.12132 8.56066 8.56066C8.12132 9 7.41421 9 6 9C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z',
  d2: 'M3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15C7.41421 15 8.12132 15 8.56066 15.4393C9 15.8787 9 16.5858 9 18C9 19.4142 9 20.1213 8.56066 20.5607C8.12132 21 7.41421 21 6 21C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18Z',
  d3: 'M3 12L9 12',
  d4: 'M12 3V8',
  d5: 'M15 6C15 4.58579 15 3.87868 15.4393 3.43934C15.8787 3 16.5858 3 18 3C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9C16.5858 9 15.8787 9 15.4393 8.56066C15 8.12132 15 7.41421 15 6Z',
  d6: 'M21 12H15C13.5858 12 12.8787 12 12.4393 12.4393C12 12.8787 12 13.5858 12 15M12 17.7692V20.5385M15 15V16.5C15 17.9464 15.7837 18 17 18C17.5523 18 18 18.4477 18 19M16 21H15M18 15C19.4142 15 20.1213 15 20.5607 15.44C21 15.8799 21 16.5881 21 18.0043C21 19.4206 21 20.1287 20.5607 20.5687C20.24 20.8898 19.7767 20.9766 19 21',
  d7: 'M5.9384 2L6.00001 2.00001L6.06161 2C6.71574 1.99994 7.30346 1.99989 7.77916 2.06384C8.29852 2.13367 8.83134 2.2958 9.26777 2.73224C9.70421 3.16868 9.86635 3.70149 9.93617 4.22085C10.0001 4.69656 10.0001 5.28427 10 5.9384L10 6.00001L10 6.06162C10.0001 6.71574 10.0001 7.30346 9.93617 7.77916C9.86635 8.29852 9.70421 8.83134 9.26777 9.26777C8.83134 9.70421 8.29852 9.86635 7.77916 9.93617C7.30346 10.0001 6.71574 10.0001 6.06162 10L6.00001 10L5.9384 10C5.28427 10.0001 4.69656 10.0001 4.22085 9.93617C3.70149 9.86635 3.16868 9.70421 2.73224 9.26777C2.2958 8.83134 2.13367 8.29852 2.06384 7.77916C1.99989 7.30346 1.99994 6.71574 2 6.06161L2.00001 6.00001L2 5.9384C1.99994 5.28428 1.99989 4.69656 2.06384 4.22085C2.13367 3.70149 2.2958 3.16868 2.73224 2.73224C3.16868 2.2958 3.70149 2.13367 4.22085 2.06384C4.69656 1.99989 5.28428 1.99994 5.9384 2Z',
  d8: 'M5.9384 14L6.00001 14L6.06161 14C6.71574 13.9999 7.30346 13.9999 7.77916 14.0638C8.29852 14.1337 8.83134 14.2958 9.26777 14.7322C9.70421 15.1687 9.86635 15.7015 9.93617 16.2209C10.0001 16.6966 10.0001 17.2843 10 17.9384L10 18L10 18.0616C10.0001 18.7157 10.0001 19.3035 9.93617 19.7792C9.86635 20.2985 9.70421 20.8313 9.26777 21.2678C8.83134 21.7042 8.29852 21.8663 7.77916 21.9362C7.30346 22.0001 6.71574 22.0001 6.06162 22L6.00001 22L5.9384 22C5.28427 22.0001 4.69656 22.0001 4.22085 21.9362C3.70149 21.8663 3.16868 21.7042 2.73224 21.2678C2.2958 20.8313 2.13367 20.2985 2.06384 19.7792C1.99989 19.3035 1.99994 18.7157 2 18.0616L2.00001 18L2 17.9384C1.99994 17.2843 1.99989 16.6966 2.06384 16.2209C2.13367 15.7015 2.2958 15.1687 2.73224 14.7322C3.16868 14.2958 3.70149 14.1337 4.22085 14.0638C4.69656 13.9999 5.28428 13.9999 5.9384 14Z',
  d9: 'M2 12C2 11.4477 2.44772 11 3 11L9 11C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13L3 13C2.44772 13 2 12.5523 2 12Z',
  d10: 'M12 2C12.5523 2 13 2.44772 13 3V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V3C11 2.44772 11.4477 2 12 2Z',
  d11: 'M17.9384 2L18 2.00001L18.0616 2C18.7157 1.99994 19.3035 1.99989 19.7792 2.06384C20.2985 2.13367 20.8313 2.2958 21.2678 2.73224C21.7042 3.16868 21.8663 3.70149 21.9362 4.22085C22.0001 4.69656 22.0001 5.28427 22 5.9384L22 6.00001L22 6.06162C22.0001 6.71574 22.0001 7.30346 21.9362 7.77916C21.8663 8.29852 21.7042 8.83134 21.2678 9.26777C20.8313 9.70421 20.2985 9.86635 19.7792 9.93617C19.3035 10.0001 18.7157 10.0001 18.0616 10L18 10L17.9384 10C17.2843 10.0001 16.6966 10.0001 16.2209 9.93617C15.7015 9.86635 15.1687 9.70421 14.7322 9.26777C14.2958 8.83134 14.1337 8.29852 14.0638 7.77916C13.9999 7.30346 13.9999 6.71574 14 6.06161L14 6.00001L14 5.9384C13.9999 5.28428 13.9999 4.69656 14.0638 4.22085C14.1337 3.70149 14.2958 3.16868 14.7322 2.73224C15.1687 2.2958 15.7015 2.13367 16.2209 2.06384C16.6966 1.99989 17.2843 1.99994 17.9384 2Z',
  d12: 'M14.9384 11C14.9589 11 14.9794 11 15 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15C14.2646 13 13.8137 13.0021 13.4873 13.046C13.2005 13.0846 13.1526 13.1394 13.1469 13.1459C13.1467 13.1462 13.1466 13.1463 13.1465 13.1465C13.1463 13.1466 13.1462 13.1467 13.1459 13.1469C13.1394 13.1526 13.0846 13.2005 13.046 13.4873C13.0021 13.8137 13 14.2646 13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.9794 11 14.9589 11 14.9384C10.9999 14.2843 10.9999 13.6966 11.0638 13.2209C11.1337 12.7015 11.2958 12.1687 11.7322 11.7322C12.1687 11.2958 12.7015 11.1337 13.2209 11.0638C13.6966 10.9999 14.2843 10.9999 14.9384 11ZM19.5125 16.0461C19.1862 16.0021 18.7354 16 18 16C17.4477 16 17 15.5523 17 15C17 14.4477 17.4477 14 18 14C18.0206 14 18.0412 14 18.0617 14C18.7157 13.9999 19.3036 13.9999 19.7794 14.0639C20.299 14.1339 20.8319 14.2964 21.2683 14.7334C21.7045 15.1702 21.8664 15.7033 21.9362 16.223C22.0001 16.6992 22.0001 17.2876 22 17.9428C22 17.9632 22 17.9838 22 18.0043C22 18.0249 22 18.0455 22 18.0659C22.0001 18.7211 22.0001 19.3095 21.9362 19.7857C21.8664 20.3054 21.7045 20.8385 21.2683 21.2753C20.64 21.9045 19.7921 21.9766 19.0302 21.9996C18.4781 22.0162 18.0171 21.5822 18.0005 21.0302C17.9838 20.4781 18.4178 20.0171 18.9698 20.0005C19.3416 19.9892 19.5612 19.9636 19.7034 19.9272C19.8181 19.8979 19.8442 19.8712 19.8522 19.863C19.8525 19.8627 19.8528 19.8624 19.8531 19.8621C19.8532 19.862 19.8534 19.8618 19.8536 19.8616C19.8604 19.8556 19.9154 19.8071 19.954 19.5196C19.9979 19.1925 20 18.7407 20 18.0043C20 17.268 19.9979 16.8162 19.954 16.4891C19.9154 16.2016 19.8604 16.1531 19.8536 16.1471C19.8534 16.1469 19.8532 16.1467 19.8531 16.1466C19.8529 16.1465 19.8528 16.1463 19.8526 16.146C19.8468 16.1395 19.799 16.0846 19.5125 16.0461ZM15 14C15.5523 14 16 14.4477 16 15V16.5C16 16.7576 16.0333 16.8814 16.051 16.9279C16.0822 16.9397 16.152 16.9601 16.2866 16.9753C16.468 16.9958 16.6924 17 17 17C18.1046 17 19 17.8954 19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C16.6995 19 16.3698 18.9975 16.0621 18.9627C15.7549 18.928 15.3946 18.8543 15.0565 18.6656C14.2542 18.2178 14 17.394 14 16.5V15C14 14.4477 14.4477 14 15 14ZM12 16.7692C12.5523 16.7692 13 17.217 13 17.7692V20.5385C13 21.0908 12.5523 21.5385 12 21.5385C11.4477 21.5385 11 21.0908 11 20.5385V17.7692C11 17.217 11.4477 16.7692 12 16.7692ZM14 21C14 20.4477 14.4477 20 15 20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H15C14.4477 22 14 21.5523 14 21Z',
  d13: 'M3.00873 11.9902H9.00278',
  d14: 'M11.9999 3.00195V7.99558',
  d15: 'M8.93144 3.01855H3.10003C3.04485 3.01855 3.00013 3.06327 3.00012 3.11842L2.99994 8.92085C2.99994 8.97601 3.04467 9.02073 3.09984 9.02073H8.93144C8.98661 9.02073 9.03134 8.97601 9.03134 8.92086V3.11843C9.03134 3.06327 8.98662 3.01855 8.93144 3.01855Z',
  d16: 'M8.93144 14.96H3.10003C3.04485 14.96 3.00013 15.0047 3.00012 15.0598L2.99994 20.8623C2.99994 20.9174 3.04467 20.9621 3.09984 20.9621H8.93144C8.98661 20.9621 9.03134 20.9174 9.03134 20.8623V15.0598C9.03134 15.0047 8.98662 14.96 8.93144 14.96Z',
  d17: 'M20.9861 11.9893H12.0784C12.0232 11.9893 11.9785 12.034 11.9785 12.0891V14.9851M11.9974 17.0043V19.9654M13.9957 20.9988H15.9849M17.9862 20.9749H20.8872C20.9424 20.9749 20.9871 20.9301 20.9871 20.875V15.0824C20.9871 15.0272 20.9424 14.9825 20.8872 14.9825H17.994M14.9891 14.9825V17.4793H17.994V18.9787',
  d18: 'M20.9002 3.01855H15.0688C15.0136 3.01855 14.9689 3.06332 14.9689 3.11855L14.9687 8.92838C14.9687 8.98361 15.0134 9.02839 15.0686 9.02839H20.9002C20.9554 9.02839 21.0001 8.98362 21.0001 8.92839V3.11855C21.0001 3.06333 20.9554 3.01855 20.9002 3.01855Z',
  d19: 'M17.7496 15.75V13.75H20.7495C21.3018 13.75 21.7496 14.1977 21.7496 14.75V20.75C21.7496 21.3023 21.3019 21.75 20.7496 21.75H17.7496V19.75H19.7496V15.75H17.7496ZM13.7496 14.75H15.7496V16.25H18.7496V18.75H16.7496V18.25H13.7496V14.75ZM13.7496 19.75H15.7496V21.75H13.7496V19.75Z',
  d20: 'M12.9996 13L21.7496 13L21.7496 11L11.9996 11.0001C11.4473 11.0001 10.9996 11.4478 10.9996 12L10.9996 15L12.9996 15L12.9996 13ZM10.9996 20V17H12.9996V20H10.9996Z',
  d21: 'M2.25 9V2.25H9V9H2.25Z',
  d22: 'M15 9V2.25H21.75V9H15Z',
  d23: 'M2.25 21.75V15H9V21.75H2.25Z',
  d24: 'M9 13L2.25 13L2.25 11L9 11L9 13Z',
  d25: 'M11 9V2.25H13V9H11Z',
};

export const IconQrCodeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-stroke-rounded IconQrCodeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-duotone-rounded IconQrCodeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-twotone-rounded IconQrCodeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-solid-rounded IconQrCodeSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-bulk-rounded IconQrCodeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-stroke-sharp IconQrCodeStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCodeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-solid-sharp IconQrCodeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQrCode: TheIconSelfPack = {
  name: 'QrCode',
  StrokeRounded: IconQrCodeStrokeRounded,
  DuotoneRounded: IconQrCodeDuotoneRounded,
  TwotoneRounded: IconQrCodeTwotoneRounded,
  SolidRounded: IconQrCodeSolidRounded,
  BulkRounded: IconQrCodeBulkRounded,
  StrokeSharp: IconQrCodeStrokeSharp,
  SolidSharp: IconQrCodeSolidSharp,
};