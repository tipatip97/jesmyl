import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.947 6.29018 21.9976 8.05974 21.9999 11.5',
  d2: 'M20.5 14H15.5C14.6716 14 14 14.6716 14 15.5V18.5C14 19.3284 14.6716 20 15.5 20H20.5C21.3284 20 22 19.3284 22 18.5V15.5C22 14.6716 21.3284 14 20.5 14Z',
  d3: 'M11 9.5V12C11.0475 12.5744 10.6034 13.0238 10 13H7.5M6 8L10 12',
  d4: 'M3.81506 5.17157C2.35059 6.34315 2.35059 8.22876 2.35059 12C2.35059 15.7712 2.35059 17.6569 3.81506 18.8284C5.27952 20 7.63654 20 12.3506 20C13.7396 20 14.924 20 15.9412 19.97C15.4032 19.9266 15.0498 19.8205 14.7899 19.5607C14.3506 19.1213 14.3506 18.4142 14.3506 17C14.3506 15.5858 14.3506 14.8787 14.7899 14.4393C15.2293 14 15.9364 14 17.3506 14H19.3506C20.7648 14 21.4719 14 21.9113 14.4393C22.1219 14.65 22.2316 14.9223 22.2887 15.3046C22.3506 14.3989 22.3506 13.3139 22.3506 12C22.3506 8.22876 22.3506 6.34315 20.8861 5.17157C19.4217 4 17.0646 4 12.3506 4C7.63654 4 5.27952 4 3.81506 5.17157Z',
  d5: 'M11.8506 20H10.3506C6.57935 20 4.69374 20 3.52216 18.8284C2.35059 17.6569 2.35059 15.7712 2.35059 12C2.35059 8.22876 2.35059 6.34315 3.52216 5.17157C4.69374 4 6.57935 4 10.3506 4H14.3506C18.1218 4 20.0075 4 21.179 5.17157C22.2976 6.29018 22.3482 8.05974 22.3505 11.5',
  d6: 'M11.3486 9.5V12C11.3961 12.5744 10.952 13.0238 10.3486 13H7.84863M6.34863 8L10.3486 12',
  d7: 'M20.8506 14H15.8506C15.0222 14 14.3506 14.6716 14.3506 15.5V18.5C14.3506 19.3284 15.0222 20 15.8506 20H20.8506C21.679 20 22.3506 19.3284 22.3506 18.5V15.5C22.3506 14.6716 21.679 14 20.8506 14Z',
  d8: 'M10.9707 9.50568V12C11.0182 12.5744 10.5741 13.0238 9.9707 13H7.4707M5.9707 8L10.7209 12.7182',
  d9: 'M14.0261 3.25C15.8081 3.24997 17.2445 3.24995 18.3742 3.40105C19.5471 3.55792 20.5346 3.89353 21.3189 4.67379C22.0672 5.41822 22.4091 6.34722 22.5757 7.44606C22.7381 8.51648 22.7489 9.37525 22.75 11.0271C22.7504 11.5641 22.3131 11.9996 21.7734 12C21.2336 12.0004 20.7958 11.5654 20.7954 11.0284C20.7943 9.33561 20.7793 8.63405 20.6431 7.73621C20.5112 6.86679 20.2817 6.39182 19.9368 6.04872C19.5762 5.68995 19.0699 5.45604 18.1137 5.32815C17.1295 5.19651 15.825 5.19445 13.9546 5.19445H10.0455C8.1751 5.19445 6.87061 5.19651 5.88636 5.32815C4.93023 5.45604 4.4239 5.68995 4.06327 6.04872C3.70264 6.40748 3.46751 6.91119 3.33896 7.86238C3.20663 8.84154 3.20456 10.1393 3.20456 12C3.20456 13.8607 3.20663 15.1585 3.33896 16.1376C3.46751 17.0888 3.70264 17.5925 4.06327 17.9513C4.4239 18.3101 4.93023 18.544 5.88636 18.6718C6.87061 18.8035 8.1751 18.8056 10.0455 18.8056H11.0227C11.5625 18.8056 12 19.2408 12 19.7778C12 20.3147 11.5625 20.75 11.0227 20.75H9.97402C8.19199 20.75 6.75562 20.75 5.62592 20.599C4.45305 20.4421 3.46551 20.1065 2.68119 19.3262C1.89687 18.546 1.55952 17.5635 1.40184 16.3967C1.24995 15.2729 1.24997 13.8439 1.25 12.0712V12.0711V11.9289V11.9288C1.24997 10.1561 1.24995 8.72713 1.40184 7.60329C1.55952 6.43648 1.89687 5.45405 2.68119 4.67379C3.46551 3.89353 4.45305 3.55792 5.62592 3.40105C6.75561 3.24995 8.19197 3.24997 9.97398 3.25H9.974H14.0261H14.0261Z',
  d10: 'M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L9.22312 9.8089L10.325 8.70711C10.4719 8.59393 10.6518 8.52026 10.8502 8.50353C11.4005 8.45713 11.8843 8.86565 11.9307 9.41598C11.9995 10.0156 11.9964 10.5533 11.9995 10.954C12.0026 11.3487 11.9924 11.7884 11.9475 12.1729C11.9252 12.3639 11.8912 12.5698 11.8351 12.7622C11.7876 12.925 11.687 13.2157 11.4513 13.4513C11.2157 13.687 10.925 13.7876 10.7623 13.8351C10.5699 13.8912 10.3639 13.9252 10.173 13.9475C9.78842 13.9924 9.34871 14.0026 8.95399 13.9995C8.55327 13.9964 7.96484 13.9995 7.416 13.9307C6.86567 13.8843 6.45714 13.4006 6.50353 12.8502C6.52027 12.6517 6.59393 12.4716 6.70711 12.3247L7.80884 11.223L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z',
  d11: 'M16.9506 13.25L17 13.25L19.0494 13.25H19.0494C19.7143 13.25 20.2871 13.2499 20.7458 13.3116C21.2375 13.3777 21.7087 13.5268 22.091 13.909C22.4732 14.2913 22.6223 14.7625 22.6884 15.2542C22.7501 15.7129 22.75 16.2858 22.75 16.9506V16.9506V17.0494V17.0494C22.75 17.7142 22.7501 18.2871 22.6884 18.7458C22.6223 19.2375 22.4732 19.7087 22.091 20.091C21.7087 20.4732 21.2375 20.6223 20.7458 20.6884C20.2871 20.7501 19.7142 20.75 19.0494 20.75H16.9506C16.2858 20.75 15.7129 20.7501 15.2542 20.6884C14.7625 20.6223 14.2913 20.4732 13.909 20.091C13.5268 19.7087 13.3777 19.2375 13.3116 18.7458C13.2499 18.2871 13.25 17.7143 13.25 17.0494V17.0494L13.25 17L13.25 16.9506V16.9506C13.25 16.2857 13.2499 15.7129 13.3116 15.2542C13.3777 14.7625 13.5268 14.2913 13.909 13.909C14.2913 13.5268 14.7625 13.3777 15.2542 13.3116C15.7129 13.2499 16.2857 13.25 16.9506 13.25H16.9506Z',
  d12: 'M11 20H2V4H21.9999V11.5',
  d13: 'M14 14H22V20H14V14Z',
  d14: 'M5.98145 7.98682L10.4592 12.4709M7.48536 13.0129H11.0004L11.0008 9.4497',
  d15: 'M1.25 4.22222C1.25 3.68528 1.68754 3.25 2.22727 3.25H21.7726C22.3124 3.25 22.7499 3.68528 22.7499 4.22222V11.5139H20.7953V5.19444H3.20455V18.8056H11.0227V20.75H2.22727C1.68754 20.75 1.25 20.3147 1.25 19.7778V4.22222Z',
  d16: 'M6.82738 7.42383L10.0454 10.6253V8.5974H12V13.9446H6.62498V12.0002H8.66337L5.44531 8.79876L6.82738 7.42383Z',
  d17: 'M13.9766 13.9722H22.7493V20.7499H13.9766V13.9722Z',
};

export const IconPictureInPictureOnStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-stroke-rounded IconPictureInPictureOnStrokeRounded"
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

export const IconPictureInPictureOnDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-duotone-rounded IconPictureInPictureOnDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureOnTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-twotone-rounded IconPictureInPictureOnTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureOnSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-solid-rounded IconPictureInPictureOnSolidRounded"
    >
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

export const IconPictureInPictureOnBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-bulk-rounded IconPictureInPictureOnBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureOnStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-stroke-sharp IconPictureInPictureOnStrokeSharp"
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureOnSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-on-solid-sharp IconPictureInPictureOnSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPictureInPictureOn: TheIconSelfPack = {
  name: 'PictureInPictureOn',
  StrokeRounded: IconPictureInPictureOnStrokeRounded,
  DuotoneRounded: IconPictureInPictureOnDuotoneRounded,
  TwotoneRounded: IconPictureInPictureOnTwotoneRounded,
  SolidRounded: IconPictureInPictureOnSolidRounded,
  BulkRounded: IconPictureInPictureOnBulkRounded,
  StrokeSharp: IconPictureInPictureOnStrokeSharp,
  SolidSharp: IconPictureInPictureOnSolidSharp,
};