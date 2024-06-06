import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 7.5C6.71663 5.40983 8.72856 4 10.9947 4H13.0053C15.2714 4 17.2834 5.40983 18 7.5H6Z',
  d2: 'M18 18.5C17.2834 20.5902 15.2714 22 13.0053 22L10.9947 22C8.72855 22 6.71663 20.5902 6 18.5L18 18.5Z',
  d3: 'M6 7.5H5L6 8.5M18 7.5H19L18 8.5',
  d4: 'M18 18.5L19 18.5L18 17.5M6 18.5L5 18.5L6 17.5',
  d5: 'M21 11L22 10.5M21 15L22 15.5',
  d6: 'M3 11L2 10.5M3 15L2 15.5',
  d7: 'M12 12V14',
  d8: 'M12 2V4',
  d9: 'M5.18627 17.9188C5.37399 17.656 5.67706 17.5 6.00001 17.5L18 17.5C18.323 17.5 18.626 17.656 18.8137 17.9188C19.0015 18.1816 19.0507 18.5188 18.946 18.8243C18.086 21.3326 15.6839 23 13.0053 23L10.9947 23C8.31616 23 5.91404 21.3326 5.05406 18.8243C4.94932 18.5188 4.99856 18.1816 5.18627 17.9188ZM7.70307 19.5C8.49323 20.4258 9.68617 21 10.9947 21L13.0053 21C14.3138 21 15.5068 20.4259 16.2969 19.5L7.70307 19.5Z',
  d10: 'M22.8942 10.053C22.6472 9.55903 22.0465 9.3588 21.5526 9.60579L20.5526 10.1058C20.0586 10.3528 19.8584 10.9535 20.1054 11.4474C20.3523 11.9414 20.953 12.1416 21.447 11.8946L22.447 11.3946C22.941 11.1477 23.1412 10.547 22.8942 10.053ZM20.1054 14.553C19.8584 15.047 20.0586 15.6477 20.5526 15.8946L21.5526 16.3946C22.0465 16.6416 22.6472 16.4414 22.8942 15.9474C23.1412 15.4535 22.941 14.8528 22.447 14.6058L21.447 14.1058C20.953 13.8588 20.3523 14.059 20.1054 14.553Z',
  d11: 'M1.10579 10.0528C1.35278 9.55878 1.95345 9.35856 2.44743 9.60555L3.44743 10.1055C3.94141 10.3525 4.14164 10.9532 3.89465 11.4472C3.64766 11.9412 3.04698 12.1414 2.55301 11.8944L1.55301 11.3944C1.05903 11.1474 0.858803 10.5467 1.10579 10.0528ZM3.89465 14.5528C4.14164 15.0467 3.94141 15.6474 3.44743 15.8944L2.44743 16.3944C1.95345 16.6414 1.35278 16.4412 1.10579 15.9472C0.858803 15.4532 1.05903 14.8525 1.55301 14.6055L2.55301 14.1055C3.04698 13.8586 3.64766 14.0588 3.89465 14.5528Z',
  d12: 'M5.00002 6.75C4.69668 6.75 4.4232 6.93273 4.30711 7.21299C4.19103 7.49324 4.25519 7.81583 4.46969 8.03033L5.25002 8.81066L5.25002 17.1893L4.46969 17.9697C4.25519 18.1842 4.19103 18.5068 4.30711 18.787C4.4232 19.0673 4.69667 19.25 5.00002 19.25L19 19.25C19.3034 19.25 19.5768 19.0673 19.6929 18.787C19.809 18.5068 19.7449 18.1842 19.5304 17.9697L18.75 17.1893V8.81066L19.5304 8.03033C19.7449 7.81583 19.809 7.49324 19.6929 7.21299C19.5768 6.93273 19.3034 6.75 19 6.75L5.00002 6.75ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V12Z',
  d13: 'M10.9947 3C8.31616 3 5.91404 4.66741 5.05406 7.17568C4.94932 7.48117 4.99856 7.81844 5.18627 8.08124C5.37399 8.34403 5.67706 8.5 6.00001 8.5L18 8.5C18.323 8.5 18.626 8.34403 18.8137 8.08124C19.0015 7.81844 19.0507 7.48117 18.946 7.17568C18.086 4.66741 15.6839 3 13.0053 3H13V2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3H10.9947ZM12 5H13.0053C14.3138 5 15.5068 5.57415 16.2969 6.5L7.70307 6.5C8.49323 5.57415 9.68617 5 10.9947 5H12Z',
  d14: 'M5.21777 19.25L7.64888 19.25C8.27872 20.1601 9.79514 21 10.9944 21L13.0049 21C14.2042 21 16.1406 20.1601 16.8406 19.25L18.7816 19.25C17.8075 21.5195 15.5289 23 13.0049 23H10.9944C8.4704 23 6.19187 21.5195 5.21777 19.25ZM5.21777 6.75C6.19187 4.48052 8.4704 3 10.9944 3H10.9997V2C10.9997 1.44772 11.4474 1 11.9997 1C12.552 1 12.9997 1.44772 12.9997 2V3H13.0049C15.5289 3 17.8075 4.48052 18.7816 6.75H16.3505C15.7206 5.83992 14.2042 5 13.0049 5H11.9997H10.9944C9.79514 5 8.27872 5.83992 7.64888 6.75H5.21777Z',
  d15: 'M4.30711 7.21299C4.4232 6.93273 4.69668 6.75 5.00002 6.75H19C19.3034 6.75 19.5768 6.93273 19.6929 7.21299C19.809 7.49324 19.7449 7.81583 19.5304 8.03033L18.75 8.81066V17.1893L19.5304 17.9697C19.7449 18.1842 19.809 18.5068 19.6929 18.787C19.5768 19.0673 19.3034 19.25 19 19.25L5.00002 19.25C4.69667 19.25 4.4232 19.0673 4.30711 18.787C4.19103 18.5068 4.25519 18.1842 4.46969 17.9697L5.25002 17.1893V8.81066L4.46969 8.03033C4.25519 7.81583 4.19103 7.49324 4.30711 7.21299Z',
  d16: 'M12 11C12.5523 11 13 11.4477 13 12V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V12C11 11.4477 11.4477 11 12 11Z',
  d17: 'M6 7.5H4.5L6 9M18 7.5H19.5L18 9',
  d18: 'M18 18.5L19.5 18.5L18 17M6 18.5H4.5L6 17',
  d19: 'M20.5 11.5L22 10M20.5 14.5L22 16',
  d20: 'M3.5 11.5L2 10M3.5 14.5L2 16',
  d21: 'M12 11V15',
  d22: 'M5.25293 16.6894L3.97262 17.9697C3.75812 18.1842 3.69396 18.5068 3.81004 18.7871C3.92613 19.0673 4.1996 19.2501 4.50295 19.2501H5.49422C6.45112 21.3697 8.60776 22.75 10.9977 22.75H13.0082C15.3981 22.75 17.5547 21.3697 18.5116 19.2501L19.503 19.2501C19.8063 19.2501 20.0798 19.0673 20.1959 18.7871C20.3119 18.5068 20.2478 18.1842 20.0333 17.9697L18.7529 16.6894V9.31068L20.0333 8.03033C20.2478 7.81583 20.3119 7.49324 20.1959 7.21299C20.0798 6.93273 19.8063 6.75 19.503 6.75H18.5117C17.5548 4.63036 15.3981 3.25 13.0082 3.25H13.0029V1.25H11.0029V3.25H10.9977C8.60774 3.25 6.45108 4.63037 5.4942 6.75H4.50295C4.1996 6.75 3.92613 6.93273 3.81004 7.21299C3.69396 7.49324 3.75812 7.81583 3.97262 8.03033L5.25293 9.31064V16.6894ZM16.8002 19.25H7.20215C8.01674 20.4712 9.43027 21.25 10.9959 21.25H13.0064C14.572 21.25 15.9856 20.4712 16.8002 19.25ZM7.20215 6.75C8.01674 5.52877 9.43027 4.75 10.9959 4.75H13.0064C14.572 4.75 15.9856 5.52877 16.8002 6.75H7.20215ZM11.0029 11V15H13.0029V11H11.0029Z',
  d23: 'M22.5 10.5304L21.0043 12.0304L19.9467 10.9697L21.4424 9.46973L22.5 10.5304ZM21.4424 16.5304L19.9467 15.0304L21.0043 13.9697L22.5 15.4697L21.4424 16.5304Z',
  d24: 'M2.55761 9.46973L4.05328 10.9697L2.99568 12.0304L1.5 10.5304L2.55761 9.46973ZM1.5 15.4697L2.99568 13.9697L4.05328 15.0304L2.55761 16.5304L1.5 15.4697Z',
};

export const IconLanternStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-stroke-rounded IconLanternStrokeRounded"
    >
      <rect 
        x="6" 
        y="7.5" 
        width="12" 
        height="11" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-duotone-rounded IconLanternDuotoneRounded"
    >
      <rect 
        opacity="var(--icon-opacity)" 
        x="6" 
        y="7.5" 
        width="12" 
        height="11" 
        fill="var(--icon-fill)"></rect>
      <rect 
        x="6" 
        y="7.5" 
        width="12" 
        height="11" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-twotone-rounded IconLanternTwotoneRounded"
    >
      <rect 
        x="6" 
        y="7.5" 
        width="12" 
        height="11" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-solid-rounded IconLanternSolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-bulk-rounded IconLanternBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-stroke-sharp IconLanternStrokeSharp"
    >
      <rect 
        x="6" 
        y="7.5" 
        width="12" 
        height="11" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLanternSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lantern-solid-sharp IconLanternSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLantern: TheIconSelfPack = {
  name: 'Lantern',
  StrokeRounded: IconLanternStrokeRounded,
  DuotoneRounded: IconLanternDuotoneRounded,
  TwotoneRounded: IconLanternTwotoneRounded,
  SolidRounded: IconLanternSolidRounded,
  BulkRounded: IconLanternBulkRounded,
  StrokeSharp: IconLanternStrokeSharp,
  SolidSharp: IconLanternSolidSharp,
};