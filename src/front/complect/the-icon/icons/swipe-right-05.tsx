import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0004 8H11.0004C12.105 8 13.0004 8.89543 13.0004 10M13.0004 10V11M13.0004 10C13.0004 9.44772 13.4481 9 14.0004 9C15.105 9 16.0004 9.89543 16.0004 11M16.0004 11V12M16.0004 11C16.0004 10.4765 16.4705 10.0783 16.9868 10.1644L17.3292 10.2215C18.2936 10.3822 19.0004 11.2166 19.0004 12.1943L19 13.6668C19 15.8402 19 16.9269 18.6689 17.792C18.4769 18.2939 17.9703 18.9339 17.5652 19.3964C17.2148 19.7964 17 20.3038 17 20.8356V22.0002M10.0002 10V3.5C10.0002 2.67157 9.32864 2 8.50021 2C7.67178 2 7.00021 2.67157 7.00021 3.5L7 13.4624L5.3797 11.837C4.66877 11.1239 3.49772 11.1889 2.86965 11.9765C2.38907 12.5791 2.3758 13.4315 2.83738 14.0489L6.43707 18.6471C7.12579 19.5269 7.5 20.8829 7.5 22.0002',
  d2: 'M21.5 4.5L15.5 4.5M21.5 4.5C21.5 3.79977 19.5057 2.49153 19 2M21.5 4.5C21.5 5.20023 19.5057 6.50847 19 7',
  d3: 'M11.0004 8H10.0002V3.5C10.0002 2.67157 9.32864 2 8.50021 2C7.67178 2 7.00021 2.67157 7.00021 3.5L7 13.4624L5.3797 11.837C4.66877 11.1239 3.49772 11.1889 2.86965 11.9765C2.38907 12.5791 2.3758 13.4315 2.83738 14.0489L6.43707 18.6471C7.12579 19.5269 7.5 20.8829 7.5 22.0002H17V20.8356C17 20.3038 17.2148 19.7964 17.5652 19.3964C17.9703 18.9339 18.4769 18.2939 18.6689 17.792C19 16.9269 19 15.8402 19 13.6668L19.0004 12.1943C19.0004 11.2166 18.2936 10.3822 17.3292 10.2215L16.9868 10.1644C16.4705 10.0783 16.0004 10.4765 16.0004 11C16.0004 9.89543 15.105 9 14.0004 9C13.4481 9 13.0004 9.44772 13.0004 10C13.0004 8.89543 12.105 8 11.0004 8Z',
  d4: 'M6.76694 2.6608L6.76694 13.7586C6.76694 13.9281 6.66238 14.0809 6.50207 14.1457C6.34177 14.2104 6.15733 14.1744 6.03487 14.0543L4.18315 12.2389C3.5515 11.6197 2.51146 11.676 1.95317 12.3601C1.7448 12.6155 1.63515 12.9225 1.625 13.2323C1.62939 13.3788 1.64691 13.525 1.67758 13.6691C1.70828 13.779 1.75225 13.8862 1.80952 13.9883L5.72041 19.2344C5.96287 19.5442 6.17112 19.9491 6.32738 20.4055L6.3374 20.4348C6.51032 20.9398 6.65389 21.3591 6.78829 21.6732C6.91395 21.967 7.09118 22.324 7.4061 22.549C7.69726 22.7571 8.02672 22.8208 8.31694 22.8485C8.5973 22.8752 8.9454 22.8752 9.33985 22.8752L15.741 22.8752C15.8607 22.8753 15.9851 22.8754 16.0995 22.8606C16.887 22.7582 17.5069 22.1383 17.6093 21.3507C17.6242 21.2364 17.624 21.0803 17.6239 20.9606C17.6239 20.6328 17.7571 20.2965 18.0032 20.0155C18.4013 19.5611 18.997 18.8286 19.2433 18.185C19.4472 17.6521 19.5374 17.0794 19.581 16.3925C19.6239 15.7173 19.6239 14.8825 19.6239 13.8178L19.6243 12.3193C19.6243 10.9749 18.6524 9.82767 17.3264 9.60667C17.1832 9.5828 17.0529 9.69323 17.0529 9.8384V12.1253C17.0529 12.3566 16.861 12.5441 16.6243 12.5441C16.3876 12.5441 16.1957 12.3566 16.1957 12.1253V9.79485C16.1957 9.70467 16.1957 9.65958 16.1821 9.61592C16.1685 9.57226 16.1444 9.53741 16.0962 9.46772C15.7038 8.9006 15.2768 8.51839 14.2243 8.41863C13.9552 8.39312 13.8206 8.38037 13.7225 8.46964C13.6244 8.5589 13.6244 8.7035 13.6244 8.99271V11.0084C13.6244 11.2397 13.4325 11.4272 13.1958 11.4272C12.9591 11.4272 12.7673 11.2397 12.7673 11.0084V8.38791C12.7673 8.25708 12.7673 8.19166 12.7371 8.12958C12.7069 8.06749 12.6621 8.03223 12.5723 7.96171C12.1048 7.5942 11.5152 7.375 10.8743 7.375C10.7585 7.3806 10.5801 7.41955 10.4149 7.50084C10.3292 7.54303 10.2863 7.56412 10.241 7.63692C10.1957 7.70971 10.1957 7.77697 10.1957 7.9115V9.89151C10.1957 10.1228 10.0038 10.3103 9.7671 10.3103C9.53042 10.3103 9.33854 10.1228 9.33854 9.89151L9.33854 2.6608C9.33854 1.95067 8.76287 1.375 8.05274 1.375C7.34262 1.375 6.76694 1.95067 6.76694 2.6608Z',
  d5: 'M15.375 5.38086C14.8227 5.38086 14.375 4.93314 14.375 4.38086C14.375 3.82857 14.8227 3.38086 15.375 3.38086L17.875 3.38086L17.875 2.7866C17.8749 2.61096 17.8747 2.39531 17.8968 2.21887L17.8972 2.21553C17.913 2.08908 17.9848 1.51304 18.5504 1.23868C19.1173 0.963717 19.6174 1.26565 19.7256 1.33097L20.1941 1.67011C20.5699 1.96475 21.0844 2.37045 21.4754 2.75088C21.6705 2.94071 21.8717 3.15797 22.0306 3.38888C22.1718 3.59414 22.375 3.94433 22.375 4.375C22.375 4.80567 22.1718 5.15586 22.0306 5.36112C21.8717 5.59203 21.6705 5.80929 21.4754 5.99912C21.0844 6.37955 20.5699 6.78525 20.1941 7.07988L19.7256 7.41903C19.6174 7.48435 19.1172 7.78628 18.5504 7.51132C17.9848 7.23696 17.913 6.66092 17.8972 6.53447L17.8968 6.53113C17.8747 6.35469 17.8749 6.13903 17.875 5.9634L17.875 5.38086L15.375 5.38086Z',
  d6: 'M7.00428 21.9995L7.00426 19.9949L2.60142 14.1223C2.57742 14.0884 2.55238 14.0551 2.52683 14.022C2.20752 13.609 1.95105 13.1116 2.01059 12.5929C2.10242 11.793 2.69523 11.1341 3.46321 11.0222C3.91357 10.9565 4.5251 11.0879 4.93767 11.4669L7.03525 13.5917L7.00426 11.8684L7.00426 3.56523C7.00426 2.70104 7.6787 2.00049 8.51066 2.00049C9.34262 2.00049 10.017 2.70105 10.017 3.56523V11.985M10.5965 8.48806L11.7067 8.53491C12.5341 8.65984 12.9439 9.23374 12.983 9.94818L13.0025 12.5093M13.3537 9.50312H14.4546C15.3056 9.47189 16.0238 10.198 15.9965 11.0413V13.0168M16.6026 11.0184L17.5979 11.0413C18.3987 11.0598 18.9759 11.7266 18.9759 12.5587L18.9984 14.9688C18.9664 15.6504 18.9889 16.776 18.7474 17.5803C18.6966 17.7496 18.6106 17.9052 18.5149 18.0538L18.3151 18.364L17.878 18.9353L17.0027 20.0011V21.9984',
  d7: 'M15.998 4.50049H21.4326M19.498 2.00049L21.998 4.50049L19.498 7.00049',
  d8: 'M17.64 11.2758V13.1139H16.8455V10.8859C16.8455 10.1784 16.2611 9.60485 15.5402 9.60485H14.1782C14.235 10.0748 14.235 10.6647 14.235 11.3913V12.5569H13.4405V11.42C13.4405 10.6213 13.4396 10.0615 13.3817 9.63846C13.3253 9.22666 13.2214 9.00338 13.0582 8.84318C12.895 8.683 12.6675 8.58103 12.2479 8.52567C11.8906 8.47853 11.4377 8.46989 10.8298 8.46832V11.9999H10.0353L10.0353 2.53108C10.0353 1.82356 9.45087 1.25 8.73 1.25C8.00913 1.25 7.42476 1.82356 7.42476 2.53107L7.42501 14.5965L4.34039 11.6407C3.66421 11.0798 2.64914 11.1763 2.09522 11.8566C1.63213 12.4253 1.63525 13.2344 2.10271 13.7996L2.11262 13.8116L7.42499 20.7821V22.7498L17.98 22.75V20.7821C18.2012 20.512 19.3791 19.0935 19.5609 18.8449C19.7524 18.5829 19.8671 18.3983 19.9005 18.3127C20.068 17.883 20.1581 17.3835 20.2038 16.6762C20.2498 15.9657 20.25 15.0722 20.25 13.8567C20.25 13.2394 20.2495 12.8068 20.2137 12.4736C20.1786 12.1473 20.1134 11.9615 20.0139 11.822C19.9266 11.6997 19.8182 11.5932 19.6935 11.5076C19.5514 11.4099 19.3621 11.3459 19.0296 11.3115C18.6937 11.2767 18.2586 11.2758 17.64 11.2758Z',
  d9: 'M18.4217 6.45711L17.6288 7.25L19.043 8.66421L22.2502 5.45711L19.043 2.25L17.6288 3.66421L18.4217 4.45711L14.8359 4.45711V6.45711H18.4217Z',
};

export const IconSwipeRight05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-stroke-rounded IconSwipeRight05StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-duotone-rounded IconSwipeRight05DuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconSwipeRight05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-twotone-rounded IconSwipeRight05TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-solid-rounded IconSwipeRight05SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-bulk-rounded IconSwipeRight05BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-stroke-sharp IconSwipeRight05StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-05-solid-sharp IconSwipeRight05SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeRight05: TheIconSelfPack = {
  name: 'SwipeRight05',
  StrokeRounded: IconSwipeRight05StrokeRounded,
  DuotoneRounded: IconSwipeRight05DuotoneRounded,
  TwotoneRounded: IconSwipeRight05TwotoneRounded,
  SolidRounded: IconSwipeRight05SolidRounded,
  BulkRounded: IconSwipeRight05BulkRounded,
  StrokeSharp: IconSwipeRight05StrokeSharp,
  SolidSharp: IconSwipeRight05SolidSharp,
};