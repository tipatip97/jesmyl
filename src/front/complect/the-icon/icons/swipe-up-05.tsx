import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5004 8H11.5004C12.605 8 13.5004 8.89543 13.5004 10M13.5004 10V11M13.5004 10C13.5004 9.44772 13.9481 9 14.5004 9C15.605 9 16.5004 9.89543 16.5004 11M16.5004 11V12M16.5004 11C16.5004 10.4765 16.9705 10.0783 17.4868 10.1644L17.8292 10.2215C18.7936 10.3822 19.5004 11.2166 19.5004 12.1943L19.5 13.6668C19.5 15.8402 19.5 16.9269 19.1689 17.792C18.9769 18.2939 18.4703 18.9339 18.0652 19.3964C17.7148 19.7964 17.5 20.3038 17.5 20.8356V22.0002M10.5002 10V3.5C10.5002 2.67157 9.82864 2 9.00021 2C8.17178 2 7.50021 2.67157 7.50021 3.5L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L6.93707 18.6471C7.62579 19.5269 8 20.8829 8 22.0002',
  d2: 'M18.5 2L18.5 8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5',
  d3: 'M11.5004 8H10.5002V3.5C10.5002 2.67157 9.82864 2 9.00021 2C8.17178 2 7.50021 2.67157 7.50021 3.5L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L6.93707 18.6471C7.62579 19.5269 8 20.8829 8 22.0002H17.5V20.8356C17.5 20.3038 17.7148 19.7964 18.0652 19.3964C18.4703 18.9339 18.9769 18.2939 19.1689 17.792C19.5 16.9269 19.5 15.8402 19.5 13.6668L19.5004 12.1943C19.5004 11.2166 18.7936 10.3822 17.8292 10.2215L17.4868 10.1644C16.9705 10.0783 16.5004 10.4765 16.5004 11C16.5004 9.89543 15.605 9 14.5004 9C13.9481 9 13.5004 9.44772 13.5004 10C13.5004 8.89543 12.605 8 11.5004 8Z',
  d4: 'M7.26694 2.6608L7.26694 13.7586C7.26694 13.9281 7.16238 14.0809 7.00207 14.1457C6.84177 14.2104 6.65733 14.1744 6.53487 14.0543L4.68315 12.2389C4.0515 11.6197 3.01146 11.676 2.45317 12.3601C2.2448 12.6155 2.13515 12.9225 2.125 13.2323C2.12939 13.3788 2.14691 13.525 2.17758 13.6691C2.20828 13.779 2.25225 13.8862 2.30952 13.9883L6.22041 19.2344C6.46287 19.5442 6.67112 19.9491 6.82738 20.4055L6.8374 20.4348C7.01032 20.9398 7.15389 21.3591 7.28829 21.6732C7.41395 21.967 7.59118 22.324 7.9061 22.549C8.19726 22.7571 8.52672 22.8208 8.81694 22.8485C9.0973 22.8752 9.4454 22.8752 9.83985 22.8752L16.241 22.8752C16.3607 22.8753 16.4851 22.8754 16.5995 22.8606C17.387 22.7582 18.0069 22.1383 18.1093 21.3507C18.1242 21.2364 18.124 21.0803 18.1239 20.9606C18.1239 20.6328 18.2571 20.2965 18.5032 20.0155C18.9013 19.5611 19.497 18.8286 19.7433 18.185C19.9472 17.6521 20.0374 17.0794 20.081 16.3925C20.1239 15.7173 20.1239 14.8825 20.1239 13.8178L20.1243 12.3193C20.1243 10.9749 19.1524 9.82767 17.8264 9.60667C17.6832 9.5828 17.5529 9.69323 17.5529 9.8384V12.1253C17.5529 12.3566 17.361 12.5441 17.1243 12.5441C16.8876 12.5441 16.6957 12.3566 16.6957 12.1253V9.79485C16.6957 9.70467 16.6957 9.65958 16.6821 9.61592C16.6685 9.57226 16.6444 9.53741 16.5962 9.46772C16.2038 8.9006 15.7768 8.51839 14.7243 8.41863C14.4552 8.39312 14.3206 8.38037 14.2225 8.46964C14.1244 8.5589 14.1244 8.7035 14.1244 8.99271V11.0084C14.1244 11.2397 13.9325 11.4272 13.6958 11.4272C13.4591 11.4272 13.2673 11.2397 13.2673 11.0084V8.38791C13.2673 8.25708 13.2673 8.19166 13.2371 8.12958C13.2069 8.06749 13.1621 8.03223 13.0723 7.96171C12.6048 7.5942 12.0152 7.375 11.3743 7.375C11.2585 7.3806 11.0801 7.41955 10.9149 7.50084C10.8292 7.54303 10.7863 7.56412 10.741 7.63692C10.6957 7.70971 10.6957 7.77697 10.6957 7.9115V9.89151C10.6957 10.1228 10.5038 10.3103 10.2671 10.3103C10.0304 10.3103 9.83854 10.1228 9.83854 9.89151L9.83854 2.6608C9.83854 1.95067 9.26287 1.375 8.55274 1.375C7.84262 1.375 7.26694 1.95067 7.26694 2.6608Z',
  d5: 'M19.6309 8.12504C19.6309 8.67732 19.1831 9.12504 18.6309 9.12504C18.0786 9.12504 17.6309 8.67732 17.6309 8.12504L17.6309 5.625L17.0366 5.62502C16.861 5.62514 16.6453 5.6253 16.4689 5.60323L16.4655 5.60281C16.3391 5.58704 15.763 5.51521 15.4887 4.94961C15.2137 4.38279 15.5157 3.88265 15.581 3.77444L15.9201 3.30595C16.2147 2.93013 16.6204 2.41567 17.0009 2.02466C17.1907 1.82955 17.408 1.62831 17.6389 1.46947C17.8441 1.32826 18.1943 1.125 18.625 1.125C19.0557 1.125 19.4059 1.32826 19.6111 1.46947C19.842 1.62831 20.0593 1.82955 20.2491 2.02466C20.6296 2.41567 21.0352 2.93012 21.3299 3.30595L21.669 3.77444C21.7343 3.88265 22.0363 4.38279 21.7613 4.94961C21.487 5.51521 20.9109 5.58704 20.7845 5.60281L20.7811 5.60323C20.6047 5.6253 20.389 5.62514 20.2134 5.62502L19.6309 5.625L19.6309 8.12504Z',
  d6: 'M8.0033 21.9995L8.00328 19.9949L3.60044 14.1223C3.57645 14.0884 3.55141 14.0551 3.52586 14.022C3.20654 13.609 2.95007 13.1116 3.00962 12.5929C3.10145 11.793 3.69425 11.1341 4.46223 11.0222C4.91259 10.9565 5.52412 11.0879 5.93669 11.4669L8.03427 13.5917L8.00328 11.8684L8.00328 3.56523C8.00328 2.70104 8.67772 2.00049 9.50968 2.00049C10.3416 2.00049 11.0161 2.70105 11.0161 3.56523V11.985M11.0161 8.50651L12.7057 8.53491C13.5331 8.65984 13.943 9.23374 13.982 9.94818L14.0015 12.5093M13.9028 9.50312H15.4536C16.3046 9.47189 17.0229 10.198 16.9955 11.0413M16.9955 11.0413V13.0168M16.9955 11.0413H18.5969C19.3977 11.0598 19.975 11.7266 19.975 12.5587L19.9974 14.9688C19.9654 15.6504 19.9879 16.776 19.7464 17.5803C19.6956 17.7496 19.6096 17.9052 19.5139 18.0538L19.3141 18.364L18.8771 18.9353L18.0017 20.0011V21.9984',
  d7: 'M18.499 8.00049V2.69474M15.999 4.50049L18.499 2.00049L20.999 4.50049',
  d8: 'M17.64 11.2758V13.1139H16.8455V10.8859C16.8455 10.1784 16.2611 9.60485 15.5402 9.60485H14.1782C14.235 10.0748 14.235 10.6647 14.235 11.3913V12.5569H13.4405V11.42C13.4405 10.6213 13.4396 10.0615 13.3817 9.63846C13.3253 9.22666 13.2214 9.00338 13.0582 8.84318C12.895 8.683 12.6675 8.58103 12.2479 8.52567C11.8906 8.47853 11.4377 8.46989 10.8298 8.46832V11.9999H10.0353L10.0353 2.53108C10.0353 1.82356 9.45087 1.25 8.73 1.25C8.00913 1.25 7.42476 1.82356 7.42476 2.53107L7.42501 14.5965L4.34039 11.6407C3.66421 11.0798 2.64914 11.1763 2.09522 11.8566C1.63213 12.4253 1.63525 13.2344 2.10271 13.7996L2.11262 13.8116L7.42499 20.7821V22.7498L17.98 22.75V20.7821C18.2012 20.512 19.3791 19.0935 19.5609 18.8449C19.7524 18.5829 19.8671 18.3983 19.9005 18.3127C20.068 17.883 20.1581 17.3835 20.2038 16.6762C20.2498 15.9657 20.25 15.0722 20.25 13.8567C20.25 13.2394 20.2495 12.8068 20.2137 12.4736C20.1786 12.1473 20.1134 11.9615 20.0139 11.822C19.9266 11.6997 19.8182 11.5932 19.6935 11.5076C19.5514 11.4099 19.3621 11.3459 19.0296 11.3115C18.6937 11.2767 18.2586 11.2758 17.64 11.2758Z',
  d9: 'M19.043 1.25L22.2502 4.45711L20.8359 5.87132L20.043 5.07843L20.043 8.66421H18.043L18.043 5.07843L17.2502 5.87132L15.8359 4.45711L19.043 1.25Z',
};

export const IconSwipeUp05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-stroke-rounded IconSwipeUp05StrokeRounded"
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

export const IconSwipeUp05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-duotone-rounded IconSwipeUp05DuotoneRounded"
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

export const IconSwipeUp05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-twotone-rounded IconSwipeUp05TwotoneRounded"
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

export const IconSwipeUp05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-solid-rounded IconSwipeUp05SolidRounded"
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

export const IconSwipeUp05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-bulk-rounded IconSwipeUp05BulkRounded"
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

export const IconSwipeUp05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-stroke-sharp IconSwipeUp05StrokeSharp"
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

export const IconSwipeUp05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-05-solid-sharp IconSwipeUp05SolidSharp"
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

export const iconPackOfSwipeUp05: TheIconSelfPack = {
  name: 'SwipeUp05',
  StrokeRounded: IconSwipeUp05StrokeRounded,
  DuotoneRounded: IconSwipeUp05DuotoneRounded,
  TwotoneRounded: IconSwipeUp05TwotoneRounded,
  SolidRounded: IconSwipeUp05SolidRounded,
  BulkRounded: IconSwipeUp05BulkRounded,
  StrokeSharp: IconSwipeUp05StrokeSharp,
  SolidSharp: IconSwipeUp05SolidSharp,
};