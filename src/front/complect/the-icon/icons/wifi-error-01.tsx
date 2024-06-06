import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5 9.99773C14.7324 6.66547 9.5 6.66547 5.5 9.99773',
  d2: 'M2 6.99872C8.31579 1.66712 15.6842 1.66711 22 6.99861',
  d3: 'M11.9929 14.9854V16.4966M11.9929 18.4674V18.4985M12.1439 12.0076C12.4929 11.9943 13.3745 12.1632 14.2344 13.6826L16.3879 17.3744C17.2104 18.5923 17.6149 20.778 14.5868 20.9419L11.9995 21.0003L9.38361 20.9261C6.35557 20.7622 6.82158 18.5939 7.58254 17.3586L9.73603 13.6669C10.596 12.1474 11.4776 11.9786 11.8266 11.9919L12.1439 12.0076Z',
  d4: 'M16.4322 20.3691C15.7899 21 14.5266 21 12 21C9.4734 21 8.2101 21 7.56781 20.3691C7.33978 20.1451 7.1691 19.8753 7.06872 19.5802C6.786 18.749 7.39093 17.7084 8.6008 15.6272C9.90305 13.387 10.5542 12.2669 11.4943 12.056C11.8267 11.9813 12.1733 11.9813 12.5057 12.056C13.4458 12.2669 14.097 13.387 15.3992 15.6272C16.6091 17.7084 17.214 18.749 16.9313 19.5802C16.8309 19.8753 16.6602 20.1451 16.4322 20.3691Z',
  d5: 'M16.4322 20.3691L16.9578 20.9041V20.9041L16.4322 20.3691ZM15.3992 15.6272L16.0476 15.2502V15.2502L15.3992 15.6272ZM16.9313 19.5802L16.2212 19.3387V19.3387L16.9313 19.5802ZM8.6008 15.6272L9.2492 16.0041L8.6008 15.6272ZM7.06872 19.5802L6.35868 19.8217L6.35868 19.8217L7.06872 19.5802ZM7.56781 20.3691L8.09338 19.834L8.09338 19.834L7.56781 20.3691ZM11.4943 12.056L11.6585 12.7878L11.6585 12.7878L11.4943 12.056ZM12.5057 12.056L12.3415 12.7878L12.3415 12.7878L12.5057 12.056ZM12 17.75C11.5858 17.75 11.25 18.0858 11.25 18.5C11.25 18.9142 11.5858 19.25 12 19.25V17.75ZM12.009 19.25C12.4232 19.25 12.759 18.9142 12.759 18.5C12.759 18.0858 12.4232 17.75 12.009 17.75V19.25ZM12.7502 15C12.7502 14.5858 12.4144 14.25 12.0002 14.25C11.586 14.25 11.2502 14.5858 11.2502 15H12.7502ZM11.2502 16.5C11.2502 16.9142 11.586 17.25 12.0002 17.25C12.4144 17.25 12.7502 16.9142 12.7502 16.5H11.2502ZM12 21.75C13.2451 21.75 14.2422 21.7511 15.0053 21.6666C15.7639 21.5825 16.4522 21.4008 16.9578 20.9041L15.9066 19.834C15.7699 19.9683 15.5054 20.102 14.8401 20.1757C14.1793 20.2489 13.2815 20.25 12 20.25V21.75ZM14.7508 16.0041C15.366 17.0623 15.7908 17.7958 16.0354 18.3675C16.2805 18.9401 16.2715 19.1908 16.2212 19.3387L17.6413 19.8217C17.8737 19.1385 17.7037 18.4533 17.4145 17.7774C17.1249 17.1007 16.6423 16.2733 16.0476 15.2502L14.7508 16.0041ZM16.9578 20.9041C17.2672 20.6002 17.5022 20.2306 17.6413 19.8217L16.2212 19.3387C16.1596 19.52 16.0533 19.69 15.9066 19.834L16.9578 20.9041ZM7.9524 15.2502C7.3577 16.2733 6.87509 17.1007 6.58553 17.7774C6.29628 18.4533 6.12627 19.1385 6.35868 19.8217L7.77877 19.3387C7.72845 19.1908 7.71955 18.9401 7.96456 18.3675C8.20924 17.7958 8.63404 17.0623 9.2492 16.0041L7.9524 15.2502ZM12 20.25C10.7185 20.25 9.82067 20.2489 9.15987 20.1757C8.49464 20.102 8.23008 19.9683 8.09338 19.834L7.04224 20.9041C7.54784 21.4008 8.23607 21.5825 8.99472 21.6666C9.75779 21.7511 10.7549 21.75 12 21.75V20.25ZM6.35868 19.8217C6.49776 20.2306 6.73284 20.6002 7.04224 20.9041L8.09338 19.834C7.94671 19.69 7.84044 19.52 7.77877 19.3387L6.35868 19.8217ZM9.2492 16.0041C9.91033 14.8668 10.3725 14.0743 10.7817 13.5327C11.1899 12.9926 11.4506 12.8344 11.6585 12.7878L11.3301 11.3242C10.5978 11.4885 10.063 11.9958 9.58495 12.6285C9.10799 13.2597 8.59352 14.1474 7.9524 15.2502L9.2492 16.0041ZM16.0476 15.2502C15.4065 14.1474 14.892 13.2597 14.4151 12.6285C13.937 11.9958 13.4022 11.4885 12.6699 11.3242L12.3415 12.7878C12.5494 12.8344 12.8101 12.9926 13.2183 13.5327C13.6275 14.0743 14.0897 14.8668 14.7508 16.0041L16.0476 15.2502ZM11.6585 12.7878C11.8828 12.7374 12.1172 12.7374 12.3415 12.7878L12.6699 11.3242C12.2293 11.2253 11.7707 11.2253 11.3301 11.3242L11.6585 12.7878ZM12 19.25H12.009V17.75H12V19.25ZM11.2502 15V16.5H12.7502V15H11.2502Z',
  d6: 'M18.5 10C14.7324 6.66667 9.5 6.66667 5.5 10',
  d7: 'M2 7C8.31579 1.66669 15.6842 1.66668 22 6.99989',
  d8: 'M11.3302 11.3242C11.7708 11.2253 12.2295 11.2253 12.6701 11.3242C13.4023 11.4885 13.9371 11.9958 14.4152 12.6285C14.8857 13.2512 15.3927 14.1234 16.0218 15.2056L16.074 15.2954C16.6566 16.2976 17.1293 17.1107 17.4146 17.7774C17.7038 18.4533 17.8739 19.1385 17.6414 19.8217C17.5024 20.2306 17.2673 20.6002 16.9579 20.9041C16.4523 21.4008 15.7641 21.5825 15.0054 21.6666C14.2521 21.75 13.2706 21.75 12.0477 21.75H11.9526C10.7296 21.75 9.74817 21.75 8.99484 21.6666C8.2362 21.5825 7.54796 21.4008 7.04237 20.9041C6.73297 20.6002 6.49789 20.2306 6.3588 19.8217C6.1264 19.1385 6.29641 18.4533 6.58565 17.7774C6.87095 17.1107 7.34363 16.2976 7.92628 15.2954L7.97844 15.2057C8.60754 14.1234 9.11456 13.2512 9.58507 12.6285C10.0631 11.9958 10.598 11.4885 11.3302 11.3242ZM12.0003 14.25C12.4145 14.25 12.7503 14.5858 12.7503 15V16.5C12.7503 16.9142 12.4145 17.25 12.0003 17.25C11.5861 17.25 11.2503 16.9142 11.2503 16.5V15C11.2503 14.5858 11.5861 14.25 12.0003 14.25ZM11.2501 18.5C11.2501 18.0858 11.5859 17.75 12.0001 17.75H12.0091C12.4233 17.75 12.7591 18.0858 12.7591 18.5C12.7591 18.9142 12.4233 19.25 12.0091 19.25H12.0001C11.5859 19.25 11.2501 18.9142 11.2501 18.5Z',
  d9: 'M22.6452 6.23585C19.3379 3.44312 15.695 1.99998 12 2C8.30506 2.00002 4.6621 3.44319 1.35484 6.23597C0.93288 6.59229 0.879668 7.22322 1.23599 7.64518C1.59231 8.06714 2.22324 8.12035 2.6452 7.76403C5.65374 5.2235 8.85288 4.00001 12 4C15.1472 3.99999 18.3463 5.22345 21.3548 7.76393C21.7768 8.12024 22.4077 8.06703 22.7641 7.64506C23.1204 7.22309 23.0672 6.59217 22.6452 6.23585Z',
  d10: 'M19.1626 9.25105C15.0058 5.57336 9.21913 5.59903 4.85984 9.23178C4.43556 9.58534 4.37824 10.2159 4.7318 10.6402C5.08536 11.0645 5.71593 11.1218 6.14021 10.7682C9.78091 7.7343 14.459 7.75997 17.8374 10.749C18.251 11.1149 18.883 11.0763 19.249 10.6626C19.6149 10.249 19.5763 9.61701 19.1626 9.25105Z',
  d11: 'M12 11L12.6431 10.6141C12.5076 10.3882 12.2634 10.25 12 10.25C11.7366 10.25 11.4924 10.3882 11.3569 10.6141L12 11ZM18 21V21.75C18.2702 21.75 18.5195 21.6047 18.6526 21.3695C18.7858 21.1344 18.7821 20.8458 18.6431 20.6141L18 21ZM6 21L5.35688 20.6141C5.21786 20.8458 5.21422 21.1344 5.34735 21.3695C5.48048 21.6047 5.7298 21.75 6 21.75V21ZM11.3569 11.3859L17.3569 21.3859L18.6431 20.6141L12.6431 10.6141L11.3569 11.3859ZM18 20.25H6V21.75H18V20.25ZM6.64312 21.3859L12.6431 11.3859L11.3569 10.6141L5.35688 20.6141L6.64312 21.3859Z',
  d12: 'M12 18.5H12.009M12 15.5V16.5',
  d13: 'M22 5.96401C18.8671 3.51354 15.4562 2.24998 11.9999 2.25C8.54366 2.25002 5.1329 3.51356 2 5.96401L3.31491 7.47465C6.12597 5.3001 9.08526 4.25001 11.9999 4.25C14.9146 4.24999 17.8739 5.30004 20.6849 7.47454L22 5.96401Z',
  d14: 'M17.7105 10.8911L19.0236 9.38285C14.916 5.85646 9.27455 5.88752 4.97802 9.38533L6.29179 10.8947C9.86432 8.02147 14.3903 8.04996 17.7105 10.8911Z',
  d15: 'M12.6431 10.6141C12.5076 10.3882 12.2634 10.25 12 10.25C11.7366 10.25 11.4924 10.3882 11.3569 10.6141L5.35688 20.6141C5.21786 20.8458 5.21422 21.1344 5.34735 21.3695C5.48048 21.6047 5.7298 21.75 6 21.75H18C18.2702 21.75 18.5195 21.6047 18.6526 21.3695C18.7858 21.1344 18.7821 20.8458 18.6431 20.6141L12.6431 10.6141ZM12.75 17.5V14.5H11.25V17.5H12.75ZM12.759 18.5H11.25V20H12.759V18.5Z',
};

export const IconWifiError01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-stroke-rounded IconWifiError01StrokeRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconWifiError01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-duotone-rounded IconWifiError01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconWifiError01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-twotone-rounded IconWifiError01TwotoneRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconWifiError01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-solid-rounded IconWifiError01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-bulk-rounded IconWifiError01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconWifiError01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-stroke-sharp IconWifiError01StrokeSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-01-solid-sharp IconWifiError01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiError01: TheIconSelfPack = {
  name: 'WifiError01',
  StrokeRounded: IconWifiError01StrokeRounded,
  DuotoneRounded: IconWifiError01DuotoneRounded,
  TwotoneRounded: IconWifiError01TwotoneRounded,
  SolidRounded: IconWifiError01SolidRounded,
  BulkRounded: IconWifiError01BulkRounded,
  StrokeSharp: IconWifiError01StrokeSharp,
  SolidSharp: IconWifiError01SolidSharp,
};