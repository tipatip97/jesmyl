import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 3L2 3',
  d2: 'M5 14C5.5985 13.2925 6.76719 11.3937 7 9',
  d3: 'M19 14C18.4015 13.2925 17.2328 11.3937 17 9',
  d4: 'M3 3V14.625M3 14.625V16.75C3 18.7535 3 19.7552 3.58579 20.3776C4.17157 21 5.11438 21 7 21H8C8 19.5311 7.6 16.0778 6 14.0154M3 14.625C4.14794 14.5482 5.14101 14.3343 6 14.0154M6 14.0154C9.88075 12.5749 12.0001 7.21447 12 3',
  d5: 'M21 3V14.625M21 14.625V16.75C21 18.7535 21 19.7552 20.4142 20.3776C19.8284 21 18.8856 21 17 21H16C16 19.5311 16.4 16.0778 18 14.0154M21 14.625C19.8521 14.5482 18.859 14.3343 18 14.0154M18 14.0154C14.1192 12.5749 11.9999 7.21447 12 3',
  d6: 'M21 14.625V3H12C11.9999 7.21447 14.1192 12.5749 18 14.0154C18.859 14.3343 19.8521 14.5482 21 14.625Z',
  d7: 'M3 14.625V3H12C12.0001 7.21447 9.88075 12.5749 6 14.0154C5.14101 14.3343 4.14794 14.5482 3 14.625Z',
  d8: 'M3 14.625V3H12C12.0001 7.21447 9.88075 12.5749 6 14.0154M3 14.625V16.75C3 18.7535 3 19.7552 3.58579 20.3776C4.17157 21 5.11438 21 7 21H8C8 19.5311 7.6 16.0778 6 14.0154M3 14.625C4.14794 14.5482 5.14101 14.3343 6 14.0154',
  d9: 'M21 14.625V3H12C11.9999 7.21447 14.1192 12.5749 18 14.0154M21 14.625V16.75C21 18.7535 21 19.7552 20.4142 20.3776C19.8284 21 18.8856 21 17 21H16C16 19.5311 16.4 16.0778 18 14.0154M21 14.625C19.8521 14.5482 18.859 14.3343 18 14.0154',
  d10: 'M23 3.125C23 3.67728 22.5523 4.125 22 4.125L2 4.125C1.44771 4.125 1 3.67728 1 3.125C1 2.57272 1.44771 2.125 2 2.125L22 2.125C22.5523 2.125 23 2.57272 23 3.125Z',
  d11: 'M7.90326 16.1942C7.80611 15.9167 7.75753 15.778 7.63817 15.7255C7.51881 15.673 7.37106 15.7365 7.07556 15.8635C6.95093 15.917 6.8244 15.9677 6.69598 16.0154C5.63725 16.4084 4.45239 16.6573 3.13349 16.7455C2.93783 16.7586 2.74336 16.7427 2.55581 16.7C2.40623 16.6659 2.25 16.7715 2.25 16.9249C2.24998 17.8841 2.24996 18.6749 2.32916 19.3008C2.4119 19.9547 2.59245 20.5414 3.03964 21.0166C3.49287 21.4981 4.06298 21.6987 4.6994 21.7896C5.29724 21.875 6.04916 21.875 6.94538 21.8749L8 21.8749C8.41421 21.8749 8.75 21.5392 8.75 21.1249C8.75 20.3363 8.64413 19.0493 8.33093 17.6872C8.2191 17.2008 8.07876 16.6956 7.90326 16.1942Z',
  d12: 'M7.74805 9.18029C7.77857 8.7672 7.46844 8.40759 7.05535 8.37707C6.64226 8.34655 6.28265 8.65669 6.25213 9.06977C6.02952 12.083 4.90765 14.4635 4.36912 15.3016C4.35039 15.3308 4.3212 15.3522 4.287 15.3578C3.89277 15.4223 3.4807 15.4695 3.05006 15.4983C2.84292 15.5122 2.63929 15.4396 2.48767 15.2977C2.33605 15.1559 2.25 14.9576 2.25 14.75L2.25 3.125C2.25 2.71078 2.58579 2.375 3 2.375L12 2.375C12.4142 2.375 12.75 2.71078 12.75 3.12499C12.75 5.34557 12.1945 7.85358 11.1273 10.0061C10.2967 11.6813 9.1272 13.1961 7.61447 14.1654C7.12208 14.4809 6.87589 14.6387 6.70815 14.5065C6.54042 14.3742 6.64516 14.0724 6.85465 13.4688C7.26734 12.2797 7.62746 10.8126 7.74805 9.18029Z',
  d13: 'M16.0967 16.1942C16.1939 15.9167 16.2425 15.778 16.3618 15.7255C16.4812 15.673 16.6289 15.7365 16.9244 15.8635C17.0491 15.917 17.1756 15.9677 17.304 16.0154C18.3627 16.4084 19.5476 16.6573 20.8665 16.7455C21.0622 16.7586 21.2566 16.7427 21.4442 16.7C21.5938 16.6659 21.75 16.7715 21.75 16.9249C21.75 17.8841 21.75 18.6749 21.6708 19.3008C21.5881 19.9547 21.4075 20.5414 20.9604 21.0166C20.5071 21.4981 19.937 21.6987 19.3006 21.7896C18.7028 21.875 17.9508 21.875 17.0546 21.8749L16 21.8749C15.5858 21.8749 15.25 21.5392 15.25 21.1249C15.25 20.3363 15.3559 19.0493 15.6691 17.6872C15.7809 17.2008 15.9212 16.6956 16.0967 16.1942Z',
  d14: 'M16.2519 9.18029C16.2214 8.7672 16.5316 8.40759 16.9446 8.37707C17.3577 8.34655 17.7174 8.65669 17.7479 9.06977C17.9705 12.083 19.0924 14.4635 19.6309 15.3016C19.6496 15.3308 19.6788 15.3522 19.713 15.3578C20.1072 15.4223 20.5193 15.4695 20.9499 15.4983C21.1571 15.5122 21.3607 15.4396 21.5123 15.2977C21.6639 15.1559 21.75 14.9576 21.75 14.75V3.125C21.75 2.71078 21.4142 2.375 21 2.375L12 2.375C11.5858 2.375 11.25 2.71078 11.25 3.12499C11.25 5.34557 11.8055 7.85358 12.8727 10.0061C13.7033 11.6813 14.8728 13.1961 16.3855 14.1654C16.8779 14.4809 17.1241 14.6387 17.2918 14.5065C17.4596 14.3742 17.3548 14.0724 17.1454 13.4688C16.7327 12.2797 16.3725 10.8126 16.2519 9.18029Z',
  d15: 'M7.05535 8.37707C7.46844 8.40759 7.77857 8.7672 7.74805 9.18029C7.62746 10.8126 7.26734 12.2797 6.85465 13.4688C6.64516 14.0724 6.54042 14.3742 6.70815 14.5065C6.87589 14.6387 7.12208 14.4809 7.61447 14.1654C9.1272 13.1961 10.2967 11.6813 11.1273 10.0061C11.4721 9.31063 11.7635 8.57803 12 7.83C12.2365 8.57803 12.5279 9.31063 12.8727 10.0061C13.7033 11.6813 14.8728 13.1961 16.3855 14.1654C16.8779 14.4809 17.1241 14.6387 17.2918 14.5065C17.4596 14.3742 17.3548 14.0724 17.1454 13.4688C16.7327 12.2797 16.3725 10.8126 16.2519 9.18029C16.2214 8.7672 16.5316 8.40759 16.9446 8.37707C17.3577 8.34655 17.7174 8.65669 17.7479 9.06977C17.9705 12.083 19.0924 14.4635 19.6309 15.3016C19.6496 15.3308 19.6788 15.3522 19.713 15.3578C20.1072 15.4223 20.5193 15.4695 20.9499 15.4983C21.1571 15.5122 21.3607 15.4396 21.5123 15.2977C21.6639 15.1559 21.75 14.9576 21.75 14.75V3.125C21.75 2.71078 21.4142 2.375 21 2.375H12L3 2.375C2.58579 2.375 2.25 2.71078 2.25 3.125L2.25 14.75C2.25 14.9576 2.33605 15.1559 2.48767 15.2977C2.63929 15.4396 2.84292 15.5122 3.05006 15.4983C3.4807 15.4695 3.89277 15.4223 4.287 15.3578C4.3212 15.3522 4.35039 15.3308 4.36912 15.3016C4.90765 14.4635 6.02952 12.083 6.25213 9.06977C6.28265 8.65669 6.64226 8.34655 7.05535 8.37707Z',
  d16: 'M22 3.04395H2',
  d17: 'M5 14.5123C5.5985 13.8067 7 11.0218 7 8.03003M19 14.5123C18.4015 13.8067 17 11.0218 17 8.03003',
  d18: 'M4.00407 2.99902L4.00396 14.5374M4.00396 14.5374L4.00391 20.9012C4.00391 20.9563 4.04868 21.001 4.10391 21.001H8.01832C7.8933 18.4409 8.12042 16.9029 6.33055 14.2891M4.00396 14.5374C6.75174 14.2891 11.626 11.8814 11.9275 2.99902',
  d19: 'M19.9615 2.99902L19.9616 14.5374M19.9616 14.5374L19.9617 20.9012C19.9617 20.9563 19.9169 21.001 19.8617 21.001H15.9473C16.0723 18.4409 15.8452 16.9029 17.6351 14.2891M19.9616 14.5374C17.2139 14.2891 12.3396 11.8814 12.0381 2.99902',
  d20: 'M2 2.24976L22 2.24976L22 3.74976L2 3.74976L2 2.24976Z',
  d21: 'M6.67163 14.55C6.75977 14.342 6.84616 14.1238 6.92909 13.8973C7.37539 12.678 7.75035 11.1408 7.75035 9.52978H6.25035C6.25035 10.9187 5.92456 12.2778 5.52049 13.3816C5.22074 14.2005 4.89304 14.8388 4.65278 15.2245C4.43537 15.2841 4.18517 15.3511 4.18517 15.3511L3.25 15.5893V2.99928L12.75 2.99927C12.75 5.21985 12.1945 7.72786 11.1273 9.88039C10.1316 11.8885 8.64886 13.6663 6.67163 14.55Z',
  d22: 'M19.3478 15.2247C19.1075 14.839 18.7797 14.2006 18.4799 13.3814C18.0758 12.2775 17.75 10.9185 17.75 9.52954H16.25C16.25 11.1406 16.625 12.6778 17.0713 13.897C17.1543 14.1237 17.2407 14.3421 17.3289 14.5503C15.3514 13.6666 13.8685 11.8887 12.8727 9.88039C11.8055 7.72786 11.25 5.21985 11.25 2.99927L20.75 2.99928V15.5893L19.8148 15.3511C19.8148 15.3511 19.5651 15.2842 19.3478 15.2247Z',
  d23: 'M16.0548 15.5894C16.4236 15.794 16.8109 15.9738 17.217 16.1245C17.7261 16.3135 19.4357 16.8028 19.4357 16.8028L20.75 17.1377V20.9999C20.75 21.4141 20.4142 21.7499 20 21.7499H15.25L15.25 20.9125C15.2496 19.5225 15.2491 17.4589 16.0548 15.5894Z',
  d24: 'M7.94527 15.5894C7.57639 15.794 7.18911 15.9738 6.78301 16.1245C6.27392 16.3135 4.56432 16.8028 4.56432 16.8028L3.25 17.1377V20.9999C3.25 21.4141 3.58579 21.7499 4 21.7499H8.75L8.75002 20.9125C8.75038 19.5225 8.75093 17.4589 7.94527 15.5894Z',
};

export const IconCurtainsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-stroke-rounded IconCurtainsStrokeRounded"
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

export const IconCurtainsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-duotone-rounded IconCurtainsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCurtainsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-twotone-rounded IconCurtainsTwotoneRounded"
    >
      <path 
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

export const IconCurtainsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-solid-rounded IconCurtainsSolidRounded"
    >
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurtainsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-bulk-rounded IconCurtainsBulkRounded"
    >
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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

export const IconCurtainsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-stroke-sharp IconCurtainsStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurtainsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="curtains-solid-sharp IconCurtainsSolidSharp"
    >
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCurtains: TheIconSelfPack = {
  name: 'Curtains',
  StrokeRounded: IconCurtainsStrokeRounded,
  DuotoneRounded: IconCurtainsDuotoneRounded,
  TwotoneRounded: IconCurtainsTwotoneRounded,
  SolidRounded: IconCurtainsSolidRounded,
  BulkRounded: IconCurtainsBulkRounded,
  StrokeSharp: IconCurtainsStrokeSharp,
  SolidSharp: IconCurtainsSolidSharp,
};