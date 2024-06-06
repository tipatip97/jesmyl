import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z',
  d2: 'M21 4.5L15 4.5M21 4.5C21 3.79977 19.0057 2.49153 18.5 2M21 4.5C21 5.20023 19.0057 6.50847 18.5 7',
  d3: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.36036L14.6078 9.73641L14.6306 9.73982C15.5726 9.88112 16.3158 9.9926 16.9068 10.121C17.5075 10.2515 18.0095 10.4108 18.4506 10.6751C19.7281 11.4404 20.75 12.6633 20.75 14.4736C20.75 15.5606 20.4875 16.3446 19.9726 17.8824C19.6188 18.9448 19.2216 20.1359 18.8418 20.6888C18.218 21.5973 17.2978 22.2605 16.2388 22.565C15.5941 22.7504 14.8759 22.7503 13.7561 22.75L12.4266 22.75H12.4265C10.9341 22.7505 9.97018 22.7507 9.09879 22.3915C8.94285 22.3273 8.79043 22.2547 8.6422 22.1742C7.81393 21.7244 7.20629 20.9761 6.26549 19.8175L2.80732 15.5613C2.06869 14.6522 2.06376 13.3511 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d4: 'M14.75 5.50586C14.1977 5.50586 13.75 5.05814 13.75 4.50586C13.75 3.95357 14.1977 3.50586 14.75 3.50586L17.25 3.50586L17.25 2.9116C17.2499 2.73596 17.2497 2.52031 17.2718 2.34387L17.2722 2.34053C17.288 2.21408 17.3598 1.63804 17.9254 1.36368C18.4923 1.08872 18.9924 1.39065 19.1006 1.45597L19.5691 1.79511C19.9449 2.08975 20.4594 2.49545 20.8504 2.87588C21.0455 3.06571 21.2467 3.28297 21.4056 3.51388C21.5468 3.71914 21.75 4.06933 21.75 4.5C21.75 4.93067 21.5468 5.28086 21.4056 5.48612C21.2467 5.71703 21.0455 5.93429 20.8504 6.12412C20.4594 6.50455 19.9449 6.91025 19.5691 7.20488L19.1006 7.54403C18.9924 7.60935 18.4922 7.91128 17.9254 7.63632C17.3598 7.36196 17.288 6.78592 17.2722 6.65947L17.2718 6.65613C17.2497 6.47969 17.2499 6.26403 17.25 6.0884L17.25 5.50586L14.75 5.50586Z',
  d5: 'M5.89909 12.6642L8.08729 14.5331V4.61282C8.08729 3.68606 8.91936 2.98853 9.86798 2.98853C10.8161 2.98853 11.511 3.73893 11.5118 4.66512V10.497H16.1595C17.74 10.497 19.1422 12.0277 19.025 13.6116V19.2025C19.025 20.7465 17.7437 21.9981 16.1632 21.9981H8.07875L3.39234 15.0829C2.87107 14.4473 2.86759 13.5379 3.38399 12.8984C4.00466 12.1299 5.14472 12.0237 5.89909 12.6642Z',
  d6: 'M15.0098 4.49999H20.319M18.5046 2.00195L21.001 4.49999L18.5046 6.99803',
  d7: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.72757H16C18.0711 9.72757 19.75 11.4065 19.75 13.4776V19C19.75 21.0711 18.0711 22.75 16 22.75H8C7.74931 22.75 7.5152 22.6247 7.37608 22.4162L2.78334 15.5313C2.06867 14.6238 2.07177 13.3411 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d8: 'M18.543 1.25L21.7502 4.45711L18.543 7.66421L17.1288 6.25L17.9217 5.45711H14.3359V3.45711L17.9217 3.45711L17.1288 2.66421L18.543 1.25Z',
};

export const IconSwipeRight03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-stroke-rounded IconSwipeRight03StrokeRounded"
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

export const IconSwipeRight03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-duotone-rounded IconSwipeRight03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconSwipeRight03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-twotone-rounded IconSwipeRight03TwotoneRounded"
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

export const IconSwipeRight03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-solid-rounded IconSwipeRight03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-bulk-rounded IconSwipeRight03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-stroke-sharp IconSwipeRight03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-03-solid-sharp IconSwipeRight03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeRight03: TheIconSelfPack = {
  name: 'SwipeRight03',
  StrokeRounded: IconSwipeRight03StrokeRounded,
  DuotoneRounded: IconSwipeRight03DuotoneRounded,
  TwotoneRounded: IconSwipeRight03TwotoneRounded,
  SolidRounded: IconSwipeRight03SolidRounded,
  BulkRounded: IconSwipeRight03BulkRounded,
  StrokeSharp: IconSwipeRight03StrokeSharp,
  SolidSharp: IconSwipeRight03SolidSharp,
};