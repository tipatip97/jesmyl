import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795',
  d2: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d3: 'M8 17.6579L8.32669 17.4C9.00235 16.8667 9.79765 16.8667 10.4733 17.4L10.7267 17.6C11.4024 18.1333 12.1976 18.1333 12.8733 17.6L13.1267 17.4C13.8024 16.8667 14.5976 16.8667 15.2733 17.4L15.5267 17.6C15.6792 17.7204 15.8378 17.8136 15.9998 17.8796M14 21.6L14.2693 21.4C14.9875 20.8667 15.8328 20.8667 16.5509 21.4L16.8202 21.6C17.5384 22.1333 18.3837 22.1333 19.1018 21.6L19.3712 21.4C20.0893 20.8667 20.9346 20.8667 21.6528 21.4L22 21.6579M10 21.6L9.73069 21.4C9.01254 20.8667 8.16723 20.8667 7.44908 21.4L7.17977 21.6C6.46161 22.1333 5.61631 22.1333 4.89815 21.6L4.62885 21.4C3.91069 20.8667 3.06539 20.8667 2.34723 21.4L2 21.6579',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M9.39809 17.875C9.07615 17.875 8.61767 18.3178 8.61767 18.3178C8.18416 18.66 7.55534 18.586 7.21316 18.1525C6.87097 17.7189 6.945 17.0901 7.37851 16.7479C7.37851 16.7479 8.31834 15.875 9.39809 15.875C10.5097 15.875 11.3444 16.6901 11.3444 16.6901C11.3444 16.6901 11.5644 16.875 11.7981 16.875C12.0317 16.875 12.2518 16.6901 12.2518 16.6901C12.2518 16.6901 13.248 15.875 14.1981 15.875C15.3027 15.875 16.3754 16.8287 16.3754 16.8287C16.3754 16.8287 17.2419 17.3522 16.9238 18.1322C16.7153 18.6436 16.1317 18.8891 15.6203 18.6806C15.3647 18.5764 15.1254 18.4338 14.9052 18.2599C14.9052 18.2599 14.5114 17.875 14.1981 17.875C13.8847 17.875 13.491 18.2599 13.491 18.2599C12.9999 18.6476 12.4186 18.875 11.7981 18.875C11.1776 18.875 10.5963 18.6476 10.1052 18.2599C10.1052 18.2599 9.72003 17.875 9.39809 17.875Z',
  d6: 'M3.40004 21.875C3.0781 21.875 2.61962 22.3178 2.61962 22.3178C2.18612 22.66 1.55729 22.586 1.21511 22.1525C0.872923 21.7189 0.946953 21.0901 1.38046 20.7479C1.38046 20.7479 2.32029 19.875 3.40004 19.875C4.5117 19.875 5.34631 20.6901 5.34631 20.6901C5.34631 20.6901 5.56638 20.875 5.80004 20.875C6.0337 20.875 6.25377 20.6901 6.25377 20.6901C6.25377 20.6901 7.24998 19.875 8.20004 19.875C9.30467 19.875 10.3774 20.8287 10.3774 20.8287C10.3774 20.8287 11.2438 21.3522 10.9258 22.1322C10.7173 22.6436 10.1337 22.8891 9.62225 22.6806C9.36665 22.5764 9.12737 22.4338 8.90715 22.2599C8.90715 22.2599 8.51339 21.875 8.20004 21.875C7.8867 21.875 7.49294 22.2599 7.49294 22.2599C7.00184 22.6476 6.42051 22.875 5.80004 22.875C5.17958 22.875 4.59824 22.6476 4.10715 22.2599C4.10715 22.2599 3.72198 21.875 3.40004 21.875Z',
  d7: 'M15.4021 21.875C15.0802 21.875 14.6217 22.3178 14.6217 22.3178C14.1882 22.66 13.5594 22.586 13.2172 22.1525C12.875 21.7189 12.949 21.0901 13.3826 20.7479C13.3826 20.7479 14.3224 19.875 15.4021 19.875C16.5138 19.875 17.3484 20.6901 17.3484 20.6901C17.3484 20.6901 17.5685 20.875 17.8021 20.875C18.0358 20.875 18.2559 20.6901 18.2559 20.6901C18.2559 20.6901 19.2521 19.875 20.2021 19.875C21.3068 19.875 22.3795 20.8287 22.3795 20.8287C22.3795 20.8287 23.2459 21.3522 22.9279 22.1322C22.7194 22.6436 22.1357 22.8891 21.6243 22.6806C21.3687 22.5764 21.1295 22.4338 20.9092 22.2599C20.9092 22.2599 20.5155 21.875 20.2021 21.875C19.8888 21.875 19.495 22.2599 19.495 22.2599C19.0039 22.6476 18.4226 22.875 17.8021 22.875C17.1817 22.875 16.6003 22.6476 16.1092 22.2599C16.1092 22.2599 15.7241 21.875 15.4021 21.875Z',
  d8: 'M5.46021 7.58419C3.03302 8.2582 1.25195 10.4833 1.25195 13.125C1.25195 15.4299 2.60811 17.418 4.56601 18.335C4.99094 18.534 5.20341 18.6336 5.3417 18.5475C5.47998 18.4614 5.48616 18.1365 5.4985 17.4868C5.51185 16.7847 5.81943 16.0936 6.39789 15.6121L6.40473 15.6065L6.41203 15.6008C6.47788 15.5499 6.98595 15.1584 7.22129 15.0195C7.69847 14.738 8.47601 14.375 9.39815 14.375C10.3144 14.375 11.0662 14.7068 11.5467 14.9885C11.661 15.0554 11.7181 15.0889 11.7684 15.0987C11.8086 15.1065 11.8377 15.1068 11.8781 15.0996C11.9285 15.0906 11.9851 15.0587 12.0983 14.9948L12.1418 14.9704C12.5846 14.7252 13.3413 14.375 14.1982 14.375C15.1448 14.375 15.9666 14.7685 16.4603 15.0581C16.7089 15.2041 17.3575 15.6876 17.4373 15.7473L17.4456 15.7536L17.4533 15.7597C17.5906 15.8707 17.7776 16.0406 17.955 16.2696C18.213 16.6029 18.4726 17.2022 18.4539 17.8978C18.4413 18.3714 18.4349 18.6082 18.5624 18.7011C18.6898 18.7939 18.8543 18.7361 19.1833 18.6204C19.3324 18.568 19.4854 18.5034 19.6331 18.4244C21.4707 17.6072 22.752 15.7657 22.752 13.625C22.752 11.1535 21.0442 9.08089 18.7443 8.52286C18.5009 8.4638 18.3792 8.43427 18.3167 8.36328C18.2542 8.2923 18.2405 8.16962 18.2131 7.92426C17.8648 4.80234 15.2168 2.375 12.002 2.375C9.07867 2.375 6.62467 4.38153 5.94126 7.09283C5.89186 7.28884 5.86716 7.38684 5.81067 7.4447C5.75419 7.50255 5.6562 7.52976 5.46021 7.58419Z',
  d9: 'M3 5.98179C3 4.40086 4.27641 3.125 5.84388 3.125C6.62464 3.125 7.33286 3.44055 7.84816 3.95496C8.35291 3.50564 8.93099 3.13694 9.56222 2.86906C8.67534 1.80514 7.33934 1.125 5.84388 1.125C3.16552 1.125 1 3.30262 1 5.98179C1 7.37566 1.58642 8.63295 2.52367 9.51808C2.94758 8.99248 3.46215 8.54304 4.04365 8.19351C3.40556 7.66874 3 6.87328 3 5.98179Z',
  d10: 'M18.7776 19.8472C19.8498 19.0509 21.1795 19.0509 22.2517 19.8472L21.0592 21.4528C20.6951 21.1824 20.3342 21.1824 19.9701 21.4528L19.7007 21.6528C18.6286 22.4491 17.2989 22.4491 16.2267 21.6528L15.9574 21.4528C15.5932 21.1824 15.2324 21.1824 14.8682 21.4528L13.6758 19.8472C14.7479 19.0509 16.0777 19.0509 17.1498 19.8472L17.4191 20.0472C17.7833 20.3176 18.1442 20.3176 18.5083 20.0472L18.7776 19.8472Z',
  d11: 'M6.85575 19.8472C7.92791 19.0509 9.25764 19.0509 10.3298 19.8472L9.13737 21.4528C8.77322 21.1824 8.41233 21.1824 8.04818 21.4528L7.77887 21.6528C6.70671 22.4491 5.37699 22.4491 4.30483 21.6528L4.03552 21.4528C3.67137 21.1824 3.31048 21.1824 2.94633 21.4528L1.75391 19.8472C2.82607 19.0509 4.15579 19.0509 5.22795 19.8472L5.49726 20.0472C5.86141 20.3176 6.22229 20.3176 6.58644 20.0472L6.85575 19.8472Z',
  d12: 'M12.8167 15.8472C13.8888 15.0509 15.2186 15.0509 16.2907 15.8472L15.0983 17.4528C14.7342 17.1824 14.3733 17.1824 14.0091 17.4528L13.7398 17.6528C12.6676 18.4491 11.3379 18.4491 10.2658 17.6528L9.99646 17.4528C9.63231 17.1824 9.27142 17.1824 8.90727 17.4528L7.71484 15.8472C8.787 15.0509 10.1167 15.0509 11.1889 15.8472L11.4582 16.0472C11.8223 16.3176 12.1832 16.3176 12.5474 16.0472L12.8167 15.8472Z',
  d13: 'M2.68308 9.70164C1.80115 8.86245 1.25 7.67454 1.25 6.35826C1.25 3.81619 3.30471 1.75 5.84601 1.75C7.23857 1.75 8.48541 2.37157 9.32672 3.3489C10.1372 2.96484 11.0435 2.75 12 2.75C15.3858 2.75 18.1428 5.44224 18.2469 8.80273C20.7927 9.16534 22.75 11.3541 22.75 14C22.75 15.4924 22.1273 16.8393 21.1276 17.7952C20.0442 17.6356 18.9247 17.8987 17.9607 18.5845C17.5363 18.2826 17.0817 18.0626 16.6134 17.9245L18.3863 15.5373L17.182 14.6429C15.6056 13.4722 13.5909 13.4527 11.9998 14.5845C10.4087 13.4527 8.394 13.4722 6.81752 14.6429L5.61328 15.5373L7.38617 17.9245C6.91782 18.0626 6.46326 18.2826 6.03885 18.5845C5.15491 17.9557 4.14021 17.6823 3.14255 17.7642C1.9802 16.712 1.25 15.1913 1.25 13.5C1.25 12.044 1.79103 10.7146 2.68308 9.70164ZM3.14766 6.35826C3.14766 4.85823 4.35875 3.64766 5.84601 3.64766C6.58272 3.64766 7.25136 3.94376 7.7396 4.42707C6.77854 5.32293 6.1002 6.51824 5.853 7.86454C5.25587 7.98547 4.69233 8.19886 4.17797 8.48912C3.54949 7.99188 3.14766 7.22264 3.14766 6.35826Z',
};

export const IconSunCloudSlowWind01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-stroke-rounded IconSunCloudSlowWind01StrokeRounded"
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

export const IconSunCloudSlowWind01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-duotone-rounded IconSunCloudSlowWind01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconSunCloudSlowWind01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-twotone-rounded IconSunCloudSlowWind01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudSlowWind01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-solid-rounded IconSunCloudSlowWind01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSunCloudSlowWind01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-bulk-rounded IconSunCloudSlowWind01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudSlowWind01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-stroke-sharp IconSunCloudSlowWind01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudSlowWind01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-slow-wind-01-solid-sharp IconSunCloudSlowWind01SolidSharp"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudSlowWind01: TheIconSelfPack = {
  name: 'SunCloudSlowWind01',
  StrokeRounded: IconSunCloudSlowWind01StrokeRounded,
  DuotoneRounded: IconSunCloudSlowWind01DuotoneRounded,
  TwotoneRounded: IconSunCloudSlowWind01TwotoneRounded,
  SolidRounded: IconSunCloudSlowWind01SolidRounded,
  BulkRounded: IconSunCloudSlowWind01BulkRounded,
  StrokeSharp: IconSunCloudSlowWind01StrokeSharp,
  SolidSharp: IconSunCloudSlowWind01SolidSharp,
};