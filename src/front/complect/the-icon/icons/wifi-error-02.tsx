import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.25 17C8.67265 16.5774 9.16229 16.244 9.6906 16M15.75 17C15.3274 16.5774 14.8377 16.244 14.3094 16',
  d2: 'M18.5 14C17.4308 13.0692 16.2435 12.4025 15 12M5.5 14C6.59299 13.1038 7.778 12.4524 9 12.046',
  d3: 'M2 10.9999C3.92227 9.37665 5.94206 8.13515 8 7.5M22 10.9998C20.0778 9.3766 18.0579 8.13513 16 7.5',
  d4: 'M12 20H12.0118',
  d5: 'M13.5864 4.32708C12.6577 3.89098 11.3422 3.89096 10.4136 4.32708C10.0852 4.48128 9.95517 4.84472 10.0135 5.19151L12 17L13.9865 5.19153C14.0448 4.84473 13.9148 4.48128 13.5864 4.32708Z',
  d6: 'M8.29493 8.45579C8.82265 8.29292 9.11842 7.73308 8.95555 7.20536C8.79268 6.67764 8.23284 6.38187 7.70512 6.54474C5.47863 7.23191 3.34198 8.55811 1.35484 10.2361C0.93288 10.5925 0.879668 11.2234 1.23599 11.6453C1.59231 12.0673 2.22324 12.1205 2.6452 11.7642C4.50261 10.1957 6.40553 9.03892 8.29493 8.45579Z',
  d7: 'M16.2949 6.54474C15.7672 6.38187 15.2074 6.67764 15.0445 7.20536C14.8816 7.73308 15.1774 8.29292 15.7051 8.45579C17.5945 9.03891 19.4975 10.1957 21.3548 11.7641C21.7768 12.1204 22.4077 12.0672 22.7641 11.6452C23.1204 11.2233 23.0672 10.5923 22.6452 10.236C20.6581 8.55804 18.5214 7.23189 16.2949 6.54474Z',
  d8: 'M14.0486 11.6923C14.2187 11.1669 14.7825 10.8788 15.308 11.0489C16.6832 11.494 17.9883 12.229 19.1566 13.246C19.5732 13.6087 19.6169 14.2403 19.2543 14.6569C18.8916 15.0734 18.26 15.1171 17.8434 14.7545C16.8732 13.9099 15.804 13.3116 14.6921 12.9517C14.1666 12.7816 13.8785 12.2178 14.0486 11.6923Z',
  d9: 'M9.94891 11.7306C10.1232 12.2547 9.83969 12.8208 9.31563 12.9951C8.21417 13.3615 7.13633 13.9517 6.13409 14.7735C5.70702 15.1237 5.07693 15.0614 4.72675 14.6343C4.37656 14.2073 4.43888 13.5772 4.86595 13.227C6.0497 12.2563 7.34188 11.5439 8.68441 11.0974C9.20847 10.9231 9.77461 11.2066 9.94891 11.7306Z',
  d10: 'M10.5985 15.581C10.83 16.0823 10.6113 16.6765 10.1099 16.9081C9.68298 17.1053 9.29213 17.3724 8.95713 17.7074C8.5666 18.0979 7.93344 18.0979 7.54292 17.7074C7.15239 17.3168 7.15239 16.6837 7.54292 16.2932C8.05321 15.7829 8.64164 15.3833 9.27131 15.0924C9.77269 14.8608 10.3669 15.0796 10.5985 15.581Z',
  d11: 'M13.4016 15.581C13.6332 15.0796 14.2274 14.8608 14.7287 15.0924C15.3584 15.3833 15.9468 15.7829 16.4571 16.2932C16.8477 16.6837 16.8477 17.3168 16.4571 17.7074C16.0666 18.0979 15.4334 18.0979 15.0429 17.7074C14.7079 17.3724 14.3171 17.1053 13.8901 16.9081C13.3887 16.6765 13.17 16.0823 13.4016 15.581Z',
  d12: 'M13.9061 3.6482C12.7755 3.11728 11.2263 3.11725 10.0957 3.64821C9.38183 3.98346 9.17706 4.73464 9.27485 5.31593L11.2613 17.1244C11.3221 17.4855 11.6347 17.75 12.0009 17.75C12.3671 17.75 12.6798 17.4855 12.7406 17.1244L14.727 5.31595C14.8248 4.73464 14.62 3.98344 13.9061 3.6482Z',
  d13: 'M12 18.5C11.1716 18.5 10.5 19.1716 10.5 20C10.5 20.8284 11.1716 21.5 12 21.5H12.0118C12.8402 21.5 13.5118 20.8284 13.5118 20C13.5118 19.1716 12.8402 18.5 12.0118 18.5H12Z',
  d14: 'M12.0001 17.0001L9.5 4H14.5L12.0001 17.0001Z',
  d15: 'M11.9981 16.5001L9.49805 3.5H14.498L11.9981 16.5001Z',
  d16: 'M8.44356 5.94922C6.22011 6.51467 4.05054 7.61007 2 9.21393L3.31491 10.7246C5.10704 9.33824 6.95941 8.40893 8.82206 7.91737L8.44356 5.94922Z',
  d17: 'M9.29548 10.379C7.78387 10.7932 6.31576 11.5462 4.97802 12.6352L6.29179 14.1446C7.35394 13.2904 8.50037 12.6926 9.67433 12.349L9.29548 10.379Z',
  d18: 'M14.3332 12.3106L14.7122 10.3396C16.2433 10.7431 17.7117 11.5065 19.0236 12.6328L17.7105 14.1411C16.6794 13.2588 15.5321 12.6477 14.3332 12.3106Z',
  d19: 'M10.0483 14.2937C9.16291 14.5685 8.33437 15.036 7.64246 15.6963L8.95744 17.207C9.37739 16.7869 9.88298 16.4765 10.4295 16.2757L10.0483 14.2937Z',
  d20: 'M13.5706 16.2762L13.9518 14.2941C14.8367 14.569 15.6648 15.0364 16.3564 15.6964L15.0413 17.207C14.6217 16.7873 14.1166 16.477 13.5706 16.2762Z',
  d21: 'M15.178 7.9174L15.5565 5.94924C17.7799 6.5147 19.9495 7.61009 22 9.21393L20.6849 10.7245C18.8929 9.33821 17.0406 8.40895 15.178 7.9174Z',
  d22: 'M11 19.4999C11 18.9476 11.4477 18.4999 12 18.4999H12.0118C12.5641 18.4999 13.0118 18.9476 13.0118 19.4999C13.0118 20.0522 12.5641 20.4999 12.0118 20.4999H12C11.4477 20.4999 11 20.0522 11 19.4999Z',
};

export const IconWifiError02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-stroke-rounded IconWifiError02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWifiError02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-duotone-rounded IconWifiError02DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-twotone-rounded IconWifiError02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWifiError02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-solid-rounded IconWifiError02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-bulk-rounded IconWifiError02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-stroke-sharp IconWifiError02StrokeSharp"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiError02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-error-02-solid-sharp IconWifiError02SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfWifiError02: TheIconSelfPack = {
  name: 'WifiError02',
  StrokeRounded: IconWifiError02StrokeRounded,
  DuotoneRounded: IconWifiError02DuotoneRounded,
  TwotoneRounded: IconWifiError02TwotoneRounded,
  SolidRounded: IconWifiError02SolidRounded,
  BulkRounded: IconWifiError02BulkRounded,
  StrokeSharp: IconWifiError02StrokeSharp,
  SolidSharp: IconWifiError02SolidSharp,
};