import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 18.5H12.0118',
  d2: 'M8.5 15.5C10.1286 13.8714 12.502 13.569 14.5 14.5928',
  d3: 'M5.5 12.5001C7 11 8.42668 10.3536 10 10',
  d4: 'M18.5 12.5001C17.0073 11.1795 15.2848 10.2742 13.5 10',
  d5: 'M2 9.49989C3.5 8 4.96138 7.16241 6.5 6.5',
  d6: 'M22 9.49989C18.0717 6.18273 13.7362 4.92879 9.5 5.73808',
  d7: 'M2 2L22 22',
  d8: 'M14.5 14.5928C12.502 13.569 10.1286 13.8714 8.5 15.5M10 9.9999C8.42668 10.3535 7 10.9999 5.5 12.5M6.5 6.50011C4.96138 7.16252 3.5 8.00011 2 9.5M2 2L22 22',
  d9: 'M10.75 18.5C10.75 17.8096 11.307 17.25 11.9941 17.25C12.679 17.25 13.25 17.8119 13.25 18.5C13.25 19.1904 12.693 19.75 12.0059 19.75H11.9941C11.307 19.75 10.75 19.1904 10.75 18.5Z',
  d10: 'M16.4571 16.2071C16.0666 16.5976 15.4334 16.5976 15.0429 16.2071C13.4334 14.5976 10.5666 14.5976 8.95711 16.2071C8.56658 16.5976 7.93342 16.5976 7.54289 16.2071C7.15237 15.8166 7.15237 15.1834 7.54289 14.7929C9.49842 12.8374 12.6201 12.4815 15 13.7254L16.7465 15.5836C16.7276 15.811 16.6311 16.0331 16.4571 16.2071Z',
  d11: 'M10.9757 9.78094C11.0968 10.3198 10.7581 10.8548 10.2193 10.9759C8.84774 11.2841 7.08612 12.3283 6.20714 13.2074C5.81664 13.5979 5.18347 13.598 4.79293 13.2075C4.40238 12.817 4.40235 12.1838 4.79286 11.7932C5.91388 10.6721 8.00562 9.42351 9.78072 9.02455C10.3196 8.90345 10.8546 9.24209 10.9757 9.78094Z',
  d12: 'M14.0503 10.1878C14.2229 9.66317 14.7881 9.37777 15.3127 9.55034C16.6758 9.99872 17.9845 10.7087 19.1629 11.7513C19.5765 12.1173 19.6152 12.7493 19.2492 13.1629C18.8833 13.5765 18.2513 13.6152 17.8376 13.2492C16.8776 12.3998 15.8118 11.8199 14.6878 11.4502C14.1632 11.2776 13.8778 10.7124 14.0503 10.1878Z',
  d13: 'M7.41852 6.10482C7.63691 6.61209 7.40273 7.20036 6.89546 7.41875C5.49542 8.0215 4.07766 9.05455 2.6452 10.2642C2.22324 10.6205 1.59231 10.5673 1.23599 10.1453C0.879668 9.72336 0.93288 9.09244 1.35484 8.73612C2.82807 7.49207 4.42739 6.30384 6.10459 5.58176C6.61186 5.36337 7.20012 5.59755 7.41852 6.10482Z',
  d14: 'M10.3867 4.59212C14.6193 4.10885 18.8516 5.53247 22.6453 8.73597C23.0672 9.09229 23.1204 9.72321 22.7641 10.1452C22.4078 10.5671 21.7769 10.6204 21.3549 10.264C17.9093 7.35444 14.2107 6.16849 10.6135 6.57921C10.0648 6.64186 9.5692 6.24782 9.50655 5.6991C9.4439 5.15038 9.83793 4.65477 10.3867 4.59212Z',
  d15: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d16: 'M8.5 15.5C9.99469 14.0053 12.1166 13.6277 14 14.3671',
  d17: 'M5.5 12.4999C6.83959 11.1603 8.1207 10.5015 9.5 10.124',
  d18: 'M2 9.49974C3.38729 8.11255 4.74154 7.29187 6.15441 6.65234',
  d19: 'M19.5858 21.75L1.5 3.66421L2.91421 2.25L21 20.3358L19.5858 21.75Z',
  d20: 'M12.4999 5.75C15.9573 5.74998 19.3689 7.02591 22.5 9.5L21.0817 10.9253C18.3024 8.78419 15.3793 7.74999 12.4999 7.75C11.8922 7.75 11.2826 7.79608 10.6727 7.8889L8.97837 6.19456C10.1406 5.89923 11.3176 5.75001 12.4999 5.75Z',
  d21: 'M3.91835 10.9253L2.5 9.5C3.74867 8.51336 5.04194 7.71726 6.36492 7.11665L7.88967 8.6414C6.54724 9.16593 5.21708 9.92476 3.91835 10.9253Z',
  d22: 'M9.98647 17.0232C11.4483 15.9922 13.5517 15.9923 15.0135 17.0233L15.641 16.3927L13.5887 14.3405C11.8425 14.0476 9.9804 14.4657 8.56492 15.5947L9.98647 17.0232Z',
  d23: 'M5.71012 12.7259L7.12988 14.1526C8.51673 13.1131 10.0345 12.5016 11.5613 12.3131L9.86272 10.6144C8.41369 11.0053 7.00379 11.7099 5.71012 12.7259Z',
  d24: 'M19.2975 12.7182L17.8819 14.1407C17.1683 13.5761 16.4039 13.1373 15.609 12.8252L13.0439 10.2601C15.2547 10.3583 17.4275 11.1749 19.2975 12.7182Z',
  d25: 'M11.5 19.75C11.5 19.1977 11.9477 18.75 12.5 18.75H12.5118C13.0641 18.75 13.5118 19.1977 13.5118 19.75C13.5118 20.3023 13.0641 20.75 12.5118 20.75H12.5C11.9477 20.75 11.5 20.3023 11.5 19.75Z',
};

export const IconWifiOff02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-stroke-rounded IconWifiOff02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-duotone-rounded IconWifiOff02DuotoneRounded"
    >
      <path 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-twotone-rounded IconWifiOff02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWifiOff02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-solid-rounded IconWifiOff02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWifiOff02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-bulk-rounded IconWifiOff02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWifiOff02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-stroke-sharp IconWifiOff02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
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
        d={d.d4} 
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

export const IconWifiOff02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-off-02-solid-sharp IconWifiOff02SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiOff02: TheIconSelfPack = {
  name: 'WifiOff02',
  StrokeRounded: IconWifiOff02StrokeRounded,
  DuotoneRounded: IconWifiOff02DuotoneRounded,
  TwotoneRounded: IconWifiOff02TwotoneRounded,
  SolidRounded: IconWifiOff02SolidRounded,
  BulkRounded: IconWifiOff02BulkRounded,
  StrokeSharp: IconWifiOff02StrokeSharp,
  SolidSharp: IconWifiOff02SolidSharp,
};