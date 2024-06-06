import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.37124 12.171L8.50514 14V4.25C8.50514 3.2835 9.28864 2.5 10.2551 2.5C11.2216 2.5 12.0051 3.2835 12.0051 4.25V9.5L14.993 9.97757C16.9216 10.2669 17.886 10.4115 18.5652 10.8184C19.6872 11.4906 20.5 12.5 20.5 13.9736C20.5 15 20.2463 15.6886 19.6296 17.5387C19.2383 18.7127 19.0426 19.2996 18.7236 19.7643C18.1983 20.5293 17.4233 21.0878 16.5315 21.3442C15.9898 21.5 15.3711 21.5 14.1336 21.5H13.0847C11.4395 21.5 10.6169 21.5 9.88462 21.1981C9.75329 21.144 9.62494 21.0829 9.50012 21.0151C8.80405 20.6371 8.28533 19.9987 7.24791 18.7219L3.88941 14.5883C3.37331 13.9531 3.36987 13.0441 3.88114 12.405C4.49565 11.6369 5.62437 11.5308 6.37124 12.171Z',
  d2: 'M12.0051 21.5H14.1336C15.3711 21.5 15.9898 21.5 16.5315 21.3442C17.4233 21.0878 18.1983 20.5293 18.7236 19.7643C19.0426 19.2996 19.2383 18.7127 19.6296 17.5387C20.2463 15.6886 20.5 15 20.5 13.9736C20.5 12.5 19.6872 11.4906 18.5652 10.8184C17.886 10.4115 16.9216 10.2669 14.993 9.97757L12.0051 9.5V4.25C12.0051 3.2835 11.2216 2.5 10.2551 2.5C10.1685 2.5 10.0833 2.5063 10 2.51846',
  d3: 'M7.75514 4.25C7.75514 2.86929 8.87442 1.75 10.2551 1.75C11.6358 1.75 12.7551 2.86929 12.7551 4.25V8.86036L15.1306 9.23982C16.0726 9.38112 16.8158 9.4926 17.4068 9.62099C18.0075 9.75147 18.5095 9.91078 18.9506 10.1751C20.2281 10.9404 21.25 12.1633 21.25 13.9736C21.25 15.0606 20.9875 15.8446 20.4726 17.3824C20.1188 18.4448 19.7216 19.6359 19.3418 20.1888C18.718 21.0973 17.7978 21.7605 16.7388 22.065C16.0941 22.2504 14.0463 22.2503 12.9266 22.25H12.9265C11.4341 22.2505 10.4702 22.2507 9.59879 21.8915C9.44285 21.8273 9.29043 21.7547 9.1422 21.6742C8.31393 21.2244 7.60662 20.3534 6.66582 19.1948L3.30732 15.0613C2.56869 14.1522 2.56376 12.8511 3.29549 11.9365C4.17497 10.8371 5.79041 10.6853 6.85934 11.6015L7.75514 12.3693V4.25Z',
  d4: 'M9.03628 14.0113L6.90539 12.2081C6.15122 11.5016 5.01148 11.6188 4.39098 12.4664C3.87472 13.1718 3.86985 13.9063 4.39098 14.6073L8.9738 21.4569C8.99242 21.4847 9.02373 21.5014 9.05722 21.5013L17.136 21.4767C18.7126 21.3353 19.8573 20.3402 19.9977 18.6272V13.2096C19.9977 12.7129 19.943 12.2098 19.7283 11.762C19.2408 10.7448 18.4315 10.0926 17.1558 9.98459H12.5302V4.36155C12.4951 3.39794 11.8183 2.57211 10.8612 2.49854C9.91286 2.49854 9.03628 3.21513 9.03628 4.23735V14.0113Z',
  d5: 'M8.25514 4.25C8.25514 2.86929 9.37442 1.75 10.7551 1.75C12.1358 1.75 13.2551 2.86929 13.2551 4.25V9.22757H17C19.0711 9.22757 20.75 10.9065 20.75 12.9776V18.5C20.75 20.5711 19.0711 22.25 17 22.25H9C8.74931 22.25 8.5152 22.1247 8.37608 21.9162L3.78334 15.0313C3.06867 14.1238 3.07177 12.8411 3.79549 11.9365C4.67497 10.8371 6.29041 10.6853 7.35934 11.6015L8.25514 12.3693V4.25Z',
};

export const IconTouch03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-stroke-rounded IconTouch03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-duotone-rounded IconTouch03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTouch03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-twotone-rounded IconTouch03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTouch03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-solid-rounded IconTouch03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-bulk-rounded IconTouch03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-stroke-sharp IconTouch03StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-03-solid-sharp IconTouch03SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch03: TheIconSelfPack = {
  name: 'Touch03',
  StrokeRounded: IconTouch03StrokeRounded,
  DuotoneRounded: IconTouch03DuotoneRounded,
  TwotoneRounded: IconTouch03TwotoneRounded,
  SolidRounded: IconTouch03SolidRounded,
  BulkRounded: IconTouch03BulkRounded,
  StrokeSharp: IconTouch03StrokeSharp,
  SolidSharp: IconTouch03SolidSharp,
};