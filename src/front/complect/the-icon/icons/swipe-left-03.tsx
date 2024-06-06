import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z',
  d2: 'M15 4.5L21 4.5M15 4.5C15 3.79977 16.9943 2.49153 17.5 2M15 4.5C15 5.20023 16.9943 6.50847 17.5 7',
  d3: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.36036L14.6078 9.73641L14.6306 9.73982C15.5726 9.88112 16.3158 9.9926 16.9068 10.121C17.5075 10.2515 18.0095 10.4108 18.4506 10.6751C19.7281 11.4404 20.75 12.6633 20.75 14.4736C20.75 15.5606 20.4875 16.3446 19.9726 17.8824C19.6188 18.9448 19.2216 20.1359 18.8418 20.6888C18.218 21.5973 17.2978 22.2605 16.2388 22.565C15.5941 22.7504 14.8759 22.7503 13.7561 22.75L12.4266 22.75H12.4265C10.9341 22.7505 9.97018 22.7507 9.09879 22.3915C8.94285 22.3273 8.79043 22.2547 8.6422 22.1742C7.81393 21.7244 7.20629 20.9761 6.26549 19.8175L2.80732 15.5613C2.06869 14.6522 2.06376 13.3511 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d4: 'M20.75 5.50586C21.3023 5.50586 21.75 5.05814 21.75 4.50586C21.75 3.95357 21.3023 3.50586 20.75 3.50586L18.25 3.50586L18.25 2.9116C18.2501 2.73596 18.2503 2.52031 18.2282 2.34387L18.2278 2.34053C18.212 2.21408 18.1402 1.63804 17.5746 1.36368C17.0077 1.08872 16.5076 1.39065 16.3994 1.45597L15.9309 1.79511C15.5551 2.08975 15.0406 2.49545 14.6496 2.87588C14.4545 3.06571 14.2533 3.28297 14.0944 3.51388C13.9532 3.71914 13.75 4.06933 13.75 4.5C13.75 4.93067 13.9532 5.28086 14.0944 5.48612C14.2533 5.71703 14.4545 5.93429 14.6496 6.12412C15.0406 6.50455 15.5551 6.91025 15.9309 7.20488L16.3994 7.54403C16.5076 7.60935 17.0078 7.91128 17.5746 7.63632C18.1402 7.36196 18.212 6.78592 18.2278 6.65947L18.2282 6.65613C18.2503 6.47969 18.2501 6.26403 18.25 6.0884L18.25 5.50586L20.75 5.50586Z',
  d5: 'M5.90009 12.6642L8.08793 14.5331V4.61282C8.08793 3.68606 8.91986 2.98853 9.86833 2.98853C10.8163 2.98853 11.5111 3.73893 11.5119 4.66512V10.497H16.1589C17.7391 10.497 19.141 12.0277 19.0239 13.6116V19.2025C19.0239 20.7465 17.7428 21.9981 16.1625 21.9981H8.0794L3.39375 15.0829C2.87255 14.4473 2.86907 13.5379 3.38539 12.8984C4.00596 12.1299 5.14583 12.0237 5.90009 12.6642Z',
  d6: 'M20.9995 4.49999H15.6293M17.5052 2.00195L15.0093 4.49999L17.5052 6.99803',
  d7: 'M7.75514 4.75C7.75514 3.36929 8.87442 2.25 10.2551 2.25C11.6358 2.25 12.7551 3.36929 12.7551 4.75V9.72757H16.5C18.5711 9.72757 20.25 11.4065 20.25 13.4776V19C20.25 21.0711 18.5711 22.75 16.5 22.75H8.5C8.24931 22.75 8.0152 22.6247 7.87608 22.4162L3.28334 15.5313C2.56867 14.6238 2.57177 13.3411 3.29549 12.4365C4.17497 11.3371 5.79041 11.1853 6.85934 12.1015L7.75514 12.8693V4.75Z',
  d8: 'M17.6644 5.45711L18.4573 6.25L17.043 7.66421L13.8359 4.45711L17.043 1.25L18.4573 2.66421L17.6644 3.45711L21.2502 3.45711V5.45711H17.6644Z',
};

export const IconSwipeLeft03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-stroke-rounded IconSwipeLeft03StrokeRounded"
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

export const IconSwipeLeft03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-duotone-rounded IconSwipeLeft03DuotoneRounded"
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

export const IconSwipeLeft03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-twotone-rounded IconSwipeLeft03TwotoneRounded"
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

export const IconSwipeLeft03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-solid-rounded IconSwipeLeft03SolidRounded"
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

export const IconSwipeLeft03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-bulk-rounded IconSwipeLeft03BulkRounded"
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

export const IconSwipeLeft03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-stroke-sharp IconSwipeLeft03StrokeSharp"
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

export const IconSwipeLeft03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-03-solid-sharp IconSwipeLeft03SolidSharp"
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

export const iconPackOfSwipeLeft03: TheIconSelfPack = {
  name: 'SwipeLeft03',
  StrokeRounded: IconSwipeLeft03StrokeRounded,
  DuotoneRounded: IconSwipeLeft03DuotoneRounded,
  TwotoneRounded: IconSwipeLeft03TwotoneRounded,
  SolidRounded: IconSwipeLeft03SolidRounded,
  BulkRounded: IconSwipeLeft03BulkRounded,
  StrokeSharp: IconSwipeLeft03StrokeSharp,
  SolidSharp: IconSwipeLeft03SolidSharp,
};