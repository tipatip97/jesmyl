import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9977 12C21 11.5299 21 12.0307 21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C11.6699 21 11.8365 21 12 20.9999',
  d2: 'M2 7H21',
  d3: 'M16.5 2L13.5 7',
  d4: 'M9.5 2L6.5 7',
  d5: 'M15.015 15.3866C16.0876 14.7469 17.0238 15.0047 17.5863 15.4153C17.8169 15.5837 17.9322 15.6679 18 15.6679C18.0678 15.6679 18.1831 15.5837 18.4137 15.4153C18.9762 15.0047 19.9124 14.7469 20.985 15.3866C22.3928 16.2261 22.7113 18.9958 19.4642 21.3324C18.8457 21.7775 18.5365 22 18 22C17.4635 22 17.1543 21.7775 16.5358 21.3324C13.2887 18.9958 13.6072 16.2261 15.015 15.3866Z',
  d6: 'M2 11.5C2 9.6509 2 8.18354 2.09793 7H20.9021C21 8.18354 21 9.6509 21 11.5C21 13.0307 21 14.2998 20.9444 15.3628C19.8888 14.7535 18.969 15.0099 18.4137 15.4153C18.1831 15.5837 18.0678 15.6679 18 15.6679C17.9322 15.6679 17.8169 15.5837 17.5863 15.4153C17.0239 15.0047 16.0876 14.7469 15.015 15.3866C13.6925 16.1753 13.3313 18.6672 15.9842 20.9034C14.8034 21 13.3409 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z',
  d7: 'M11.1525 1.31827C11.2667 1.25339 11.4052 1.253 11.6823 1.25222L11.8881 1.25161C12.8696 1.24865 13.8524 1.24568 14.833 1.28283C15.2678 1.29931 15.4853 1.30755 15.5666 1.45848C15.648 1.60941 15.5338 1.79812 15.3055 2.17554L12.9793 6.02089C12.8368 6.25655 12.7655 6.37438 12.6512 6.43884C12.5368 6.50329 12.3991 6.50329 12.1237 6.50329H8.67267C8.35945 6.50329 8.20283 6.50329 8.14539 6.40183C8.08794 6.30037 8.16852 6.16608 8.32967 5.8975L10.825 1.73861C10.9672 1.50164 11.0383 1.38314 11.1525 1.31827Z',
  d8: 'M8.5907 1.37407C8.53003 1.27195 8.37165 1.27784 8.0549 1.28961C7.36371 1.31529 6.7436 1.3591 6.18802 1.43379C4.81137 1.61888 3.71911 2.00591 2.86091 2.86411C1.99797 3.72705 1.62446 4.88277 1.44949 6.06051C1.41938 6.26319 1.40433 6.36453 1.46417 6.43391C1.524 6.50329 1.62901 6.50329 1.83901 6.50329H5.09742C5.37539 6.50329 5.51438 6.50329 5.6294 6.43782C5.74441 6.37235 5.81537 6.25284 5.95728 6.01382L8.40681 1.8881C8.56985 1.61349 8.65137 1.47619 8.5907 1.37407Z',
  d9: 'M18.6711 1.89702C18.3653 1.77117 18.2124 1.70825 18.0375 1.7651C17.8627 1.82196 17.7656 1.97977 17.5714 2.29539L15.357 5.89365C15.191 6.16349 15.108 6.29841 15.1652 6.40085C15.2224 6.50329 15.3809 6.50329 15.6977 6.50329H21.161C21.371 6.50329 21.476 6.50329 21.5358 6.43391C21.5957 6.36453 21.5806 6.26319 21.5505 6.06051C21.3756 4.88277 21.002 3.72705 20.1391 2.86411C19.7103 2.43532 19.2231 2.12415 18.6711 1.89702Z',
  d10: 'M21.6183 8.61872C21.7352 8.73416 21.7374 8.917 21.7419 9.2827C21.75 9.94706 21.75 10.6667 21.75 11.4458V11.5604C21.75 11.8083 21.75 12.0501 21.7497 12.2861C21.7493 12.6966 21.7491 12.9019 21.6316 12.9918C21.5142 13.0817 21.2941 13.0226 20.8538 12.9043C19.8055 12.6227 18.816 12.75 18.0002 13.0874C16.8568 12.6145 15.3721 12.5543 13.8626 13.4544C12.2483 14.417 11.5499 16.2871 11.8008 18.1058C11.9235 18.995 12.2597 19.8658 12.7951 20.6886C13.1203 21.1883 13.2829 21.4382 13.1979 21.5951C13.1129 21.752 12.8341 21.7523 12.2766 21.7529C12.0426 21.7532 11.8029 21.7532 11.5572 21.7532H11.4428C9.2521 21.7532 7.53144 21.7532 6.18802 21.5726C4.81137 21.3875 3.71911 21.0005 2.86091 20.1423C2.00272 19.2841 1.61568 18.1918 1.43059 16.8152C1.24998 15.4718 1.24999 13.7511 1.25 11.5604V11.446C1.25 10.6669 1.24999 9.94709 1.25811 9.2827C1.26259 8.917 1.26482 8.73416 1.38167 8.61872C1.49853 8.50329 1.68305 8.50329 2.0521 8.50329H20.9479C21.3169 8.50329 21.5015 8.50329 21.6183 8.61872Z',
  d11: 'M18 14.7893C18.7729 14.2397 20.02 13.9381 21.3694 14.7427C22.3758 15.3428 22.8975 16.567 22.7135 17.9007C22.5281 19.2446 21.6457 20.6869 19.9024 21.9412C19.3484 22.3409 18.7813 22.75 18 22.75C17.2187 22.75 16.6516 22.3409 16.0976 21.9412C14.3543 20.6869 13.4719 19.2446 13.2865 17.9007C13.1025 16.567 13.6242 15.3428 14.6306 14.7427C15.98 13.9381 17.2271 14.2397 18 14.7893Z',
  d12: 'M2 6H20',
  d13: 'M16 2L13 6',
  d14: 'M9 2L6 6',
  d15: 'M20 12V2H2V20H11',
  d16: 'M20.7431 15.2896C19.1465 14.457 18 15.6843 18 15.6843C18 15.6843 16.8535 14.457 15.2568 15.2896C13.323 16.298 13.1841 20.2469 18 22C22.816 20.2469 22.677 16.298 20.7431 15.2896Z',
  d17: 'M17.0181 13.9812C17.2033 14.058 17.3654 14.1458 17.5023 14.2317C17.6392 14.1458 17.8013 14.058 17.9865 13.9812C18.6392 13.7106 19.5621 13.5883 20.5922 14.1225C21.9245 14.8132 22.5241 16.43 22.1336 18.0193C21.7344 19.6443 20.3396 21.223 17.7589 22.1571L17.5023 22.25L17.2458 22.1571C14.665 21.223 13.2702 19.6443 12.871 18.0193C12.4805 16.43 13.0801 14.8132 14.4124 14.1225C15.4425 13.5883 16.3654 13.7106 17.0181 13.9812Z',
  d18: 'M8.23164 1.75H2.49854C2.08432 1.75 1.74854 2.08579 1.74854 2.5V5.75H6.05162L8.23164 1.75Z',
  d19: 'M7.75993 5.75H13.0516L15.2316 1.75H9.93994L7.75993 5.75Z',
  d20: 'M16.9399 1.75L14.7599 5.75H21.2485V2.5C21.2485 2.08579 20.9127 1.75 20.4985 1.75H16.9399Z',
  d21: 'M1.74854 7.25H21.2485V12.7729C19.8137 12.0423 18.4721 12.1816 17.5029 12.5592C16.526 12.1786 15.1705 12.04 13.7226 12.7908C11.6548 13.8629 10.894 16.257 11.4149 18.3772C11.6725 19.4257 12.2173 20.4009 13.0254 21.25H2.49854C2.08432 21.25 1.74854 20.9142 1.74854 20.5V7.25Z',
};

export const IconPlayListFavourite01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-stroke-rounded IconPlayListFavourite01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-duotone-rounded IconPlayListFavourite01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-twotone-rounded IconPlayListFavourite01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-solid-rounded IconPlayListFavourite01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-bulk-rounded IconPlayListFavourite01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-stroke-sharp IconPlayListFavourite01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListFavourite01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-favourite-01-solid-sharp IconPlayListFavourite01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfPlayListFavourite01: TheIconSelfPack = {
  name: 'PlayListFavourite01',
  StrokeRounded: IconPlayListFavourite01StrokeRounded,
  DuotoneRounded: IconPlayListFavourite01DuotoneRounded,
  TwotoneRounded: IconPlayListFavourite01TwotoneRounded,
  SolidRounded: IconPlayListFavourite01SolidRounded,
  BulkRounded: IconPlayListFavourite01BulkRounded,
  StrokeSharp: IconPlayListFavourite01StrokeSharp,
  SolidSharp: IconPlayListFavourite01SolidSharp,
};