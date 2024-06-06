import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.50042 8H10.5004C11.605 8 12.5004 8.89543 12.5004 10M12.5004 10V11M12.5004 10C12.5004 9.44772 12.9481 9 13.5004 9C14.605 9 15.5004 9.89543 15.5004 11M15.5004 11V12M15.5004 11C15.5004 10.4765 15.9705 10.0783 16.4868 10.1644L16.8292 10.2215C17.7936 10.3822 18.5004 11.2166 18.5004 12.1943L18.5 13.6668C18.5 15.8402 18.5 16.9269 18.1689 17.792C17.9769 18.2939 17.4703 18.9339 17.0652 19.3964C16.7148 19.7964 16.5 20.3038 16.5 20.8356V22.0002M9.50021 10V3.5C9.50021 2.67157 8.82864 2 8.00021 2C7.17178 2 6.50021 2.67157 6.50021 3.5L6.5 13.4624L4.8797 11.837C4.16877 11.1239 2.99772 11.1889 2.36965 11.9765C1.88907 12.5791 1.8758 13.4315 2.33738 14.0489L5.93707 18.6471C6.62579 19.5269 7 20.8829 7 22.0002',
  d2: 'M15 4.5L21 4.5M15 4.5C15 3.79977 16.9943 2.49153 17.5 2M15 4.5C15 5.20023 16.9943 6.50847 17.5 7',
  d3: 'M10.5004 8L9.50021 8V3.5C9.50021 2.67157 8.82864 2 8.00021 2C7.17178 2 6.50021 2.67157 6.50021 3.5L6.5 13.4624L4.8797 11.837C4.16877 11.1239 2.99772 11.1889 2.36965 11.9765C1.88907 12.5791 1.8758 13.4315 2.33738 14.0489L5.93707 18.6471C6.62579 19.5269 7 20.8829 7 22.0002L16.5 22.0002V20.8356C16.5 20.3038 16.7148 19.7964 17.0652 19.3964C17.4703 18.9339 17.9769 18.2939 18.1689 17.792C18.5 16.9269 18.5 15.8402 18.5 13.6668L18.5004 12.1943C18.5004 11.2166 17.7936 10.3822 16.8292 10.2215L16.4868 10.1644C15.9705 10.0783 15.5004 10.4765 15.5004 11C15.5004 9.89543 14.605 9 13.5004 9C12.9481 9 12.5004 9.44772 12.5004 10C12.5004 8.89543 11.605 8 10.5004 8Z',
  d4: 'M6.76694 2.6608L6.76694 13.7586C6.76694 13.9281 6.66238 14.0809 6.50207 14.1457C6.34177 14.2104 6.15733 14.1744 6.03487 14.0543L4.18315 12.2389C3.5515 11.6197 2.51146 11.676 1.95317 12.3601C1.7448 12.6155 1.63515 12.9225 1.625 13.2323C1.62939 13.3788 1.64691 13.525 1.67758 13.6691C1.70828 13.779 1.75225 13.8862 1.80952 13.9883L5.72041 19.2344C5.96287 19.5442 6.17112 19.9491 6.32738 20.4055L6.3374 20.4348C6.51032 20.9398 6.65389 21.3591 6.78829 21.6732C6.91395 21.967 7.09118 22.324 7.4061 22.549C7.69726 22.7571 8.02672 22.8208 8.31694 22.8485C8.5973 22.8752 8.9454 22.8752 9.33985 22.8752L15.741 22.8752C15.8607 22.8753 15.9851 22.8754 16.0995 22.8606C16.887 22.7582 17.5069 22.1383 17.6093 21.3507C17.6242 21.2364 17.624 21.0803 17.6239 20.9606C17.6239 20.6328 17.7571 20.2965 18.0032 20.0155C18.4013 19.5611 18.997 18.8286 19.2433 18.185C19.4472 17.6521 19.5374 17.0794 19.581 16.3925C19.6239 15.7173 19.6239 14.8825 19.6239 13.8178L19.6243 12.3193C19.6243 10.9749 18.6524 9.82767 17.3264 9.60667C17.1832 9.5828 17.0529 9.69323 17.0529 9.8384V12.1253C17.0529 12.3566 16.861 12.5441 16.6243 12.5441C16.3876 12.5441 16.1957 12.3566 16.1957 12.1253V9.79485C16.1957 9.70467 16.1957 9.65958 16.1821 9.61592C16.1685 9.57226 16.1444 9.53741 16.0962 9.46772C15.7038 8.9006 15.2768 8.51839 14.2243 8.41863C13.9552 8.39312 13.8206 8.38037 13.7225 8.46964C13.6244 8.5589 13.6244 8.7035 13.6244 8.99271V11.0084C13.6244 11.2397 13.4325 11.4272 13.1958 11.4272C12.9591 11.4272 12.7673 11.2397 12.7673 11.0084V8.38791C12.7673 8.25708 12.7673 8.19166 12.7371 8.12958C12.7069 8.06749 12.6621 8.03223 12.5723 7.96171C12.1048 7.5942 11.5152 7.375 10.8743 7.375C10.7585 7.3806 10.5801 7.41955 10.4149 7.50084C10.3292 7.54303 10.2863 7.56412 10.241 7.63692C10.1957 7.70971 10.1957 7.77697 10.1957 7.9115V9.89151C10.1957 10.1228 10.0038 10.3103 9.7671 10.3103C9.53042 10.3103 9.33854 10.1228 9.33854 9.89151L9.33854 2.6608C9.33854 1.95067 8.76287 1.375 8.05274 1.375C7.34262 1.375 6.76694 1.95067 6.76694 2.6608Z',
  d5: 'M21.375 5.38086C21.9273 5.38086 22.375 4.93314 22.375 4.38086C22.375 3.82857 21.9273 3.38086 21.375 3.38086L18.875 3.38086L18.875 2.7866C18.8751 2.61096 18.8753 2.39531 18.8532 2.21887L18.8528 2.21553C18.837 2.08908 18.7652 1.51304 18.1996 1.23868C17.6327 0.963717 17.1326 1.26565 17.0244 1.33097L16.5559 1.67011C16.1801 1.96475 15.6656 2.37045 15.2746 2.75088C15.0795 2.94071 14.8783 3.15797 14.7194 3.38888C14.5782 3.59414 14.375 3.94433 14.375 4.375C14.375 4.80567 14.5782 5.15586 14.7194 5.36112C14.8783 5.59203 15.0795 5.80929 15.2746 5.99912C15.6656 6.37955 16.1801 6.78525 16.5559 7.07988L17.0244 7.41903C17.1326 7.48435 17.6328 7.78628 18.1996 7.51132C18.7652 7.23696 18.837 6.66092 18.8528 6.53447L18.8532 6.53113C18.8753 6.35469 18.8751 6.13903 18.875 5.9634L18.875 5.38086L21.375 5.38086Z',
  d6: 'M7.00428 22L7.00426 19.9954L2.60142 14.1228C2.57742 14.0889 2.55238 14.0556 2.52683 14.0225C2.20752 13.6095 1.95105 13.112 2.01059 12.5934C2.10242 11.7935 2.69523 11.1346 3.46321 11.0227C3.91357 10.957 4.5251 11.0883 4.93767 11.4674L7.03525 13.5922L7.00426 11.8688L7.00426 3.56571C7.00426 2.70153 7.6787 2.00098 8.51066 2.00098C9.34262 2.00098 10.017 2.70153 10.017 3.56572V11.9855M10.5965 8.48855L11.7067 8.5354C12.5341 8.66033 12.9439 9.23423 12.983 9.94867L13.0025 12.5097M13.3537 9.50361H14.4546C15.3056 9.47238 16.0238 10.1985 15.9965 11.0418V13.0173M16.6026 11.0189L17.5979 11.0418C18.3987 11.0602 18.9759 11.7271 18.9759 12.5591L18.9984 14.9693C18.9664 15.6509 18.9889 16.7765 18.7474 17.5807C18.6966 17.75 18.6106 17.9057 18.5149 18.0543L18.3151 18.3645L17.878 18.9358L17.0027 20.0016V21.9989',
  d7: 'M21.998 4.5H16.7071M18.498 2L15.998 4.5L18.498 7',
  d8: 'M17.64 11.2758V13.1139H16.8455V10.8859C16.8455 10.1784 16.2611 9.60485 15.5402 9.60485H14.1782C14.235 10.0748 14.235 10.6647 14.235 11.3913V12.5569H13.4405V11.42C13.4405 10.6213 13.4396 10.0615 13.3817 9.63846C13.3253 9.22666 13.2214 9.00338 13.0582 8.84318C12.895 8.683 12.6675 8.58103 12.2479 8.52567C11.8906 8.47853 11.4377 8.46989 10.8298 8.46832V11.9999H10.0353L10.0353 2.53108C10.0353 1.82356 9.45087 1.25 8.73 1.25C8.00913 1.25 7.42476 1.82356 7.42476 2.53107L7.42501 14.5965L4.34039 11.6407C3.66421 11.0798 2.64914 11.1763 2.09522 11.8566C1.63213 12.4253 1.63525 13.2344 2.10271 13.7996L2.11262 13.8116L7.42499 20.7821V22.7498L17.98 22.75V20.7821C18.2012 20.512 19.3791 19.0935 19.5609 18.8449C19.7524 18.5829 19.8671 18.3983 19.9005 18.3127C20.068 17.883 20.1581 17.3835 20.2038 16.6762C20.2498 15.9657 20.25 15.0722 20.25 13.8567C20.25 13.2394 20.2495 12.8068 20.2137 12.4736C20.1786 12.1473 20.1134 11.9615 20.0139 11.822C19.9266 11.6997 19.8182 11.5932 19.6935 11.5076C19.5514 11.4099 19.3621 11.3459 19.0296 11.3115C18.6937 11.2767 18.2586 11.2758 17.64 11.2758Z',
  d9: 'M18.6644 6.45711L19.4573 7.25L18.043 8.66421L14.8359 5.45711L18.043 2.25L19.4573 3.66421L18.6644 4.45711L22.2502 4.45711V6.45711H18.6644Z',
};

export const IconSwipeLeft05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-stroke-rounded IconSwipeLeft05StrokeRounded"
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

export const IconSwipeLeft05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-duotone-rounded IconSwipeLeft05DuotoneRounded"
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

export const IconSwipeLeft05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-twotone-rounded IconSwipeLeft05TwotoneRounded"
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

export const IconSwipeLeft05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-solid-rounded IconSwipeLeft05SolidRounded"
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

export const IconSwipeLeft05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-bulk-rounded IconSwipeLeft05BulkRounded"
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

export const IconSwipeLeft05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-stroke-sharp IconSwipeLeft05StrokeSharp"
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

export const IconSwipeLeft05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-05-solid-sharp IconSwipeLeft05SolidSharp"
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

export const iconPackOfSwipeLeft05: TheIconSelfPack = {
  name: 'SwipeLeft05',
  StrokeRounded: IconSwipeLeft05StrokeRounded,
  DuotoneRounded: IconSwipeLeft05DuotoneRounded,
  TwotoneRounded: IconSwipeLeft05TwotoneRounded,
  SolidRounded: IconSwipeLeft05SolidRounded,
  BulkRounded: IconSwipeLeft05BulkRounded,
  StrokeSharp: IconSwipeLeft05StrokeSharp,
  SolidSharp: IconSwipeLeft05SolidSharp,
};