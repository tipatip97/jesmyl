import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 4.8H9C10.6569 4.8 12 6.41177 12 8.4C12 10.3882 10.6569 12 9 12M9 12C10.6569 12 12 13.6118 12 15.6C12 17.5882 10.6569 19.2 9 19.2H2M9 12H3M2.83333 4.8V19.2M4.5 3V4.8M8.66667 3V4.8M4.5 19.2V21M8.66667 19.2V21',
  d2: 'M14.5 12H22M14.5 12C14.5 12.7002 16.4943 14.0085 17 14.5M14.5 12C14.5 11.2998 16.4943 9.99153 17 9.5',
  d3: 'M9 4.79688H2.83333V19.1969H9C10.6569 19.1969 12 17.5851 12 15.5969C12 13.6086 10.6569 11.9969 9 11.9969C10.6569 11.9969 12 10.3851 12 8.39687C12 6.40865 10.6569 4.79688 9 4.79688Z',
  d4: 'M2 4.7998H9C10.6569 4.7998 12 6.41158 12 8.3998C12 10.388 10.6569 11.9998 9 11.9998M9 11.9998C10.6569 11.9998 12 13.6116 12 15.5998C12 17.588 10.6569 19.1998 9 19.1998H2M9 11.9998H3M2.83333 4.7998V19.1998',
  d5: 'M4.5 3V4.8M8.66667 3V4.8M4.5 19.2V21M8.66667 19.2V21',
  d6: 'M4.5 2C5.05228 2 5.5 2.44772 5.5 3V3.8H7.66667V3C7.66667 2.44772 8.11438 2 8.66667 2C9.21895 2 9.66667 2.44772 9.66667 3V3.8609C11.6718 4.23411 13 6.26643 13 8.4C13 9.78455 12.4407 11.1265 11.5 12C12.4407 12.8735 13 14.2155 13 15.6C13 17.7336 11.6718 19.7659 9.66667 20.1391V21C9.66667 21.5523 9.21895 22 8.66667 22C8.11438 22 7.66667 21.5523 7.66667 21V20.2H5.5V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20.2H2C1.44772 20.2 1 19.7523 1 19.2C1 18.7045 1.36038 18.2932 1.83333 18.2138V5.78617C1.36038 5.70683 1 5.2955 1 4.8C1 4.24772 1.44772 3.8 2 3.8H3.5V3C3.5 2.44772 3.94772 2 4.5 2ZM3.83333 5.8V11H9C9.9416 11 11 10.0144 11 8.4C11 6.7856 9.9416 5.8 9 5.8H3.83333ZM9 13H3.83333V18.2H9C9.9416 18.2 11 17.2144 11 15.6C11 13.9856 9.9416 13 9 13Z',
  d7: 'M22 13.0059C22.5523 13.0059 23 12.5581 23 12.0059C23 11.4536 22.5523 11.0059 22 11.0059L18.5 11.0059L18.5 10.4116C18.5001 10.236 18.5003 10.0203 18.4782 9.84387L18.4778 9.84053C18.462 9.71408 18.3902 9.13804 17.8246 8.86368C17.2577 8.58872 16.7576 8.89065 16.6494 8.95597L16.6454 8.95841C16.4924 9.05062 16.3215 9.18477 16.1809 9.29511L16.1507 9.31885C15.7748 9.61348 15.2906 9.99545 14.8996 10.3759C14.7045 10.5657 14.5033 10.783 14.3444 11.0139C14.2032 11.2191 14 11.5693 14 12C14 12.4307 14.2032 12.7809 14.3444 12.9861C14.5033 13.217 14.7045 13.4343 14.8996 13.6241C15.2906 14.0046 15.7748 14.3865 16.1507 14.6812L16.1809 14.7049C16.3215 14.8152 16.4923 14.9494 16.6454 15.0416L16.6494 15.044C16.7576 15.1093 17.2578 15.4113 17.8246 15.1363C18.3902 14.862 18.462 14.2859 18.4778 14.1595L18.4782 14.1561C18.5003 13.9797 18.5001 13.764 18.5 13.5884L18.5 13.0059L22 13.0059Z',
  d8: 'M1 4.80078C1 4.2485 1.44772 3.80078 2 3.80078H9C11.3721 3.80078 13 6.03873 13 8.40078C13 9.78533 12.4407 11.1272 11.5 12.0008C12.4407 12.8743 13 14.2162 13 15.6008C13 17.9628 11.3721 20.2008 9 20.2008H2C1.44772 20.2008 1 19.7531 1 19.2008C1 18.7053 1.36038 18.294 1.83333 18.2146V5.78695C1.36038 5.70761 1 5.29628 1 4.80078ZM3.83333 5.80078V11.0008H9C9.9416 11.0008 11 10.0152 11 8.40078C11 6.78638 9.9416 5.80078 9 5.80078H3.83333ZM9 13.0008H3.83333V18.2008H9C9.9416 18.2008 11 17.2152 11 15.6008C11 13.9864 9.9416 13.0008 9 13.0008Z',
  d9: 'M5.5 3C5.5 2.44772 5.05228 2 4.5 2C3.94772 2 3.5 2.44772 3.5 3V3.7998H5.5V3Z',
  d10: 'M4.51996 5.7998H4.48004C4.48668 5.79993 4.49333 5.8 4.5 5.8C4.50667 5.8 4.51332 5.79993 4.51996 5.7998Z',
  d11: 'M8.68663 5.7998C8.67999 5.79993 8.67334 5.8 8.66667 5.8C8.66 5.8 8.65334 5.79993 8.6467 5.7998H8.68663Z',
  d12: 'M9.66667 3.86071C9.45194 3.82074 9.22945 3.7998 9 3.7998H7.66667V3C7.66667 2.44772 8.11438 2 8.66667 2C9.21895 2 9.66667 2.44772 9.66667 3V3.86071Z',
  d13: 'M7.66667 20.1998H9C9.22945 20.1998 9.45194 20.1789 9.66667 20.1389V21C9.66667 21.5523 9.21895 22 8.66667 22C8.11438 22 7.66667 21.5523 7.66667 21V20.1998Z',
  d14: 'M3.5 20.1998H5.5V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20.1998Z',
  d15: 'M22 13.0059C22.5523 13.0059 23 12.5581 23 12.0059C23 11.4536 22.5523 11.0059 22 11.0059L18.5 11.0059L18.5 10.4116C18.5001 10.236 18.5003 10.0203 18.4782 9.84387L18.4778 9.84053C18.462 9.71408 18.3902 9.13804 17.8246 8.86368C17.2578 8.58872 16.7576 8.89065 16.6494 8.95597L16.6454 8.95841C16.4924 9.05062 16.3215 9.18477 16.181 9.29511L16.1507 9.31885C15.7749 9.61348 15.2907 9.99545 14.8997 10.3759C14.7046 10.5657 14.5033 10.783 14.3445 11.0139C14.2033 11.2191 14 11.5693 14 12C14 12.4307 14.2033 12.7809 14.3445 12.9861C14.5033 13.217 14.7046 13.4343 14.8997 13.6241C15.2907 14.0046 15.7749 14.3865 16.1507 14.6812L16.1809 14.7049C16.3215 14.8152 16.4924 14.9494 16.6454 15.0416L16.6494 15.044C16.7576 15.1093 17.2578 15.4113 17.8246 15.1363C18.3902 14.862 18.462 14.2859 18.4778 14.1595L18.4782 14.1561C18.5003 13.9797 18.5001 13.764 18.5 13.5884L18.5 13.0059L22 13.0059Z',
  d16: 'M2 4.8H9.27273C10.779 4.8 12 6.41177 12 8.4C12 10.3882 10.779 12 9.27273 12M9.27273 12C10.779 12 12 13.6118 12 15.6C12 17.5882 10.779 19.2 9.27273 19.2H2M9.27273 12H3.81818M3.66667 4.8V19.2M5.18182 3V4.8M8.9697 3V4.8M5.18182 19.2V21M8.9697 19.2V21',
  d17: 'M22.5 12L14.8904 12M17.5 15L14.5 12L17.5 9',
  d18: 'M3.43182 3.8V3H5.43182V3.8H7.2197V3H9.2197V3.87883C10.0478 4.06926 10.7463 4.58791 11.2483 5.25056C11.8852 6.09126 12.25 7.20808 12.25 8.4C12.25 9.59192 11.8852 10.7087 11.2483 11.5494C11.1276 11.7088 10.9955 11.8599 10.8529 12C10.9955 12.1401 11.1276 12.2912 11.2483 12.4506C11.8852 13.2913 12.25 14.4081 12.25 15.6C12.25 16.7919 11.8852 17.9087 11.2483 18.7494C10.7463 19.4121 10.0478 19.9307 9.2197 20.1212V21H7.2197V20.2H5.43182V21H3.43182V20.2H1.25V18.2H1.91667V5.8H1.25V3.8H3.43182ZM3.91667 5.8V11H8.52273C8.89483 11 9.30442 10.8033 9.65411 10.3417C10.0043 9.87949 10.25 9.1963 10.25 8.4C10.25 7.6037 10.0043 6.92051 9.65411 6.45827C9.30442 5.99668 8.89483 5.8 8.52273 5.8H3.91667ZM8.52273 13H3.91667V18.2H8.52273C8.89483 18.2 9.30442 18.0033 9.65411 17.5417C10.0043 17.0795 10.25 16.3963 10.25 15.6C10.25 14.8037 10.0043 14.1205 9.65411 13.6583C9.30442 13.1967 8.89483 13 8.52273 13Z',
  d19: 'M17.043 8.29297L18.4573 9.70718L17.1644 11.0001L22.7502 11.0001V13.0001L17.1644 13.0001L18.4573 14.293L17.043 15.7072L13.3359 12.0001L17.043 8.29297Z',
};

export const IconBitcoinReceiveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-stroke-rounded IconBitcoinReceiveStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-duotone-rounded IconBitcoinReceiveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-twotone-rounded IconBitcoinReceiveTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-solid-rounded IconBitcoinReceiveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-bulk-rounded IconBitcoinReceiveBulkRounded"
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-stroke-sharp IconBitcoinReceiveStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receive-solid-sharp IconBitcoinReceiveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinReceive: TheIconSelfPack = {
  name: 'BitcoinReceive',
  StrokeRounded: IconBitcoinReceiveStrokeRounded,
  DuotoneRounded: IconBitcoinReceiveDuotoneRounded,
  TwotoneRounded: IconBitcoinReceiveTwotoneRounded,
  SolidRounded: IconBitcoinReceiveSolidRounded,
  BulkRounded: IconBitcoinReceiveBulkRounded,
  StrokeSharp: IconBitcoinReceiveStrokeSharp,
  SolidSharp: IconBitcoinReceiveSolidSharp,
};